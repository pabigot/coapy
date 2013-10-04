# -*- coding: utf-8 -*-
# Copyright 2013, Peter A. Bigot
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain a
# copy of the License at:
#
#            http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
"""
:copyright: Copyright 2013, Peter A. Bigot
:license: Apache-2.0
"""

from __future__ import unicode_literals
from __future__ import print_function
from __future__ import absolute_import
from __future__ import division

import logging
_log = logging.getLogger(__name__)

import socket
import urlparse
import urllib
import random
import itertools
import coapy
import coapy.message


class URIError (coapy.CoAPyException):
    pass


# Gross Hack: Update urlparse so it knows about the coap and coaps
# schemes, specifically that it should support joining relative URIs
# and process netloc and query.
urlparse.uses_relative.extend(['coap', 'coaps'])
urlparse.uses_netloc.extend(['coap', 'coaps'])
urlparse.uses_query.extend(['coap', 'coaps'])


class Endpoint (object):
    """A CoAP endpoint.

    Per :coapsect:`1.2` this is an entity participating in the CoAP
    protocol.  In CoAPy it is used to aggregate all material related
    to such an endpoint, which is uniquely identified by an IP
    address, port, and security information.  Various constraints in
    CoAP such as :coapsect:`congestion control<4.7>`,
    :coapsect:`default values for options<5.10.1>`, and re-usability
    of message IDs, are associated with specific endpoints.

    *sockaddr*, if not ``None``, must be a tuple the first two
    elements of which are ``host, port`` which override the
    user-provided *host* and *port*.

    *host* specifies the host of the endpoint as a Unicode string,
    representing a host name, an IP address literal, or other unique
    key.

    *family* is by default :data:`python:socket.AF_UNSPEC` supporting
    resolution of *host* to any address family.  A non-``None`` value
    is passed to :func:`python:socket.getaddrinfo` when attempting to
    resolve *host* as an address; the actual *family* value will be
    the one selected by the resolution process (normally
    :data:`python:socket.AF_INET` or :data:`python:socket.AF_INET6`)
    Failure to successfully resolve *host* will raise
    :exc:`python:socket.gaierror`.  If you want a dummy endpoint
    associated with *host* but that does not have an IP host
    associated with it, make sure that *family* is ``None`` so that
    *host* is left unresolved and instead serves as an *name* as
    described in :attr:`sockaddr`.

    *port* is the integer transport-layer port of the endpoint.  This
    would normally be either :const:`coapy.COAP_PORT` or
    :const:`coapy.COAPS_PORT`.

    *security_mode* is used to determine the DTLS protocol used for
    secure CoAP, and at this time had probably better be left as
    ``None``.

    To ensure consistency, :class:`Endpoint` instances are unique for
    a given key comprising :attr:`family`, :attr:`ip_addr`,
    :attr:`port`, and :attr:`security_mode`.  Attempts to instantiate
    a new endpoint with parameters that match a previously-created one
    will return a reference to the original instance.
    """

    @property
    def sockaddr(self):
        """The Python :mod:`python:socket` address of the endpoint.

        When :attr:`family` is :data:`python:socket.AF_INET` this is
        the tuple ``(host, port)``.

        When :attr:`family` is :data:`python:socket.AF_INET6` this is
        the tuple ``(host, port, flowinfo, scopeid)``.

        When :attr:`family` is ``None`` this is the tuple ``(name,
        port)``.  *name* functions like *host* but is not a resolvable
        host name.

        *host* will be the text representation of :attr:`in_addr`; it
        will not be a host name.  *port* will be a numeric port
        *number*.
        """
        return self.__sockaddr

    @property
    def family(self):
        """The address family used for :attr:`sockaddr`.

        This is normally :data:`python:socket.AF_INET` or
        :data:`python:socket.AF_INET6`.  It may be ``None`` for
        testing situations where the actual endpoint does not
        correspond to an network node.
        """
        return self.__family

    @property
    def in_addr(self):
        """The address of the endpoint.

        The representation is binary data encoding part of
        :attr:`sockaddr`.  Decoding it depends on :attr:`family`:

        When :attr:`family` is :data:`python:socket.AF_INET` this is
        the IPv4 address in network byte order.

        When :attr:`family` is :data:`python:socket.AF_INET6` this is
        the IPv6 address in network byte order.

        When :attr:`family` is ``None`` this is the *name* in
        Net-Unicode format.
        """
        return self.__in_addr

    @property
    def port(self):
        """The transport-level port of the endpoint."""
        return self.__port

    @property
    def security_mode(self):
        """The security mode of the endpoint.  Generally ``None``
        though if :coapsect:`DTLS<9>` CoAP is used it would be some
        other value.
        """
        return self.__security_mode

    @property
    def uri_host(self):
        """The text value for the ``host`` subcomponent of the
        authority part of a URI involving this endpoint.

        This is almost always either an ``IPv4address`` or
        ``IP-literal`` as defined by `section 3.2.2 of RFC3986`_.  If
        an :class:`Endpoint` is created by an application using a host
        name, the resolved address of the host is used for
        :attr:`sockaddr` and for this property.

        .. _section 3.2.2 of RFC3986: http://tools.ietf.org/html/rfc3986#section-3.2.2
        """
        return self.__uri_host

    @property
    def base_uri(self):
        """The base CoAP URI for resources on this endpoint.

        This is used by :meth:`uri_to_options` to avoid the need to
        specify the protocol and netloc when creating option lists.
        """
        return self.__base_uri

    @staticmethod
    def _get_addr_info(host, port):
        try:
            gai = socket.getaddrinfo(host, port, 0, socket.SOCK_DGRAM)
            return gai.pop(0)
        except socket.gaierror as e:
            return (None, None, None, host, (host, port))

    __EndpointRegistry = {}
    __nonInetIndex = 0

    @staticmethod
    def _key_for_sockaddr(sockaddr, family, security_mode=None):
        """Create the key used to look up endpoints.

        *sockaddr* must be a tuple the first two elements of which are
        ``(host, port)``.  Unless *family* is ``None``, *host* must be
        a text representation of an IP address that can be converted
        with :func:`python:socket.inet_pton`, not a hostname.  *port*
        must be a numeric port number.
        """
        if not isinstance(sockaddr, tuple):
            raise TypeError(sockaddr)
        ip_literal = sockaddr[0]
        if family is None:
            in_addr = coapy.util.to_net_unicode(ip_literal)
        else:
            # Use the network-byte-order binary representation of the
            # IP address, to having to deal with non-canonical IPv6
            # text representations.  See RFC5952 for why this is
            # necessary.
            in_addr = socket.inet_pton(family, ip_literal)
        return (family, in_addr, sockaddr[1], security_mode)

    @staticmethod
    def _canonical_sockinfo(sockaddr=None, family=socket.AF_UNSPEC,
                            security_mode=None,
                            host=None, port=coapy.COAP_PORT):
        """Get canonical socket information for an endpoint.

        Returns a tuple ``(family, sockaddr)`` where *sockaddr* is a
        an :attr:`address<sockaddr>` as constrained by *family*.

        Failure to resolve the socket *host* to a numeric IP literal
        within *family* (if required) will raise
        :exc:`python:socket.gaierror`.
        """
        if sockaddr is not None:
            key = Endpoint._key_for_sockaddr(sockaddr, family, security_mode)
            ep = Endpoint.__EndpointRegistry.get(key)
            if ep is not None:
                return (ep.family, ep.sockaddr)
            if not isinstance(sockaddr, tuple):
                raise TypeError(sockaddr)
            (host, port) = sockaddr[:2]
        if host is None:
            raise ValueError(host)
        if family is None:
            gai = (family, None, None, host, (host, port))
        else:
            gais = socket.getaddrinfo(host, port, family, socket.SOCK_DGRAM, 0,
                                      (socket.AI_ADDRCONFIG | socket.AI_V4MAPPED
                                       | socket.AI_NUMERICHOST | socket.AI_NUMERICSERV))
            gai = gais.pop(0)
        return (gai[0], gai[4])

    @classmethod
    def lookup_endpoint(cls, sockaddr=None, family=socket.AF_UNSPEC,
                        security_mode=None,
                        host=None, port=coapy.COAP_PORT):
        """Look up an endpoint using the same algorithm as endpoint
        creation.

        Returns ``None`` if passing these parameters to
        class:`Endpoint` would result in creation of a new endpoint.
        """
        instance = None
        if sockaddr is not None:
            key = Endpoint._key_for_sockaddr(sockaddr, family, security_mode)
            instance = Endpoint.__EndpointRegistry.get(key)
        if instance is None:
            (family, sockaddr) = Endpoint._canonical_sockinfo(sockaddr, family,
                                                              security_mode, host, port)
            key = Endpoint._key_for_sockaddr(sockaddr, family, security_mode)
            instance = Endpoint.__EndpointRegistry.get(key)
        return instance

    def __new__(cls, sockaddr=None, family=socket.AF_UNSPEC,
                security_mode=None,
                host=None, port=coapy.COAP_PORT):
        instance = None
        if sockaddr is not None:
            key = Endpoint._key_for_sockaddr(sockaddr, family, security_mode)
            instance = Endpoint.__EndpointRegistry.get(key)
        if instance is None:
            (family, sockaddr) = Endpoint._canonical_sockinfo(sockaddr, family,
                                                              security_mode, host, port)
            key = Endpoint._key_for_sockaddr(sockaddr, family, security_mode)
            instance = Endpoint.__EndpointRegistry.get(key)
        if instance is None:
            instance = super(Endpoint, cls).__new__(cls)
            host = sockaddr[0]
            port = sockaddr[1]
            cls.__EndpointRegistry[key] = instance
            instance.__family = family
            instance.__in_addr = key[1]
            instance.__port = port
            instance.__security_mode = security_mode
            instance.__sockaddr = sockaddr
            if socket.AF_INET == family:
                instance.__uri_host = '{0}'.format(socket.inet_ntop(instance.family,
                                                                    instance.in_addr))
            elif socket.AF_INET6 == family:
                instance.__uri_host = '[{0}]'.format(socket.inet_ntop(instance.family,
                                                                      instance.in_addr))
            else:
                instance.__uri_host = host
        return instance

    def next_messageID(self):
        """Return a new messageID suitable for a message to this endpoint.

        This is sequentially generated starting from an initial value
        that was randomly generated when the endpoint was created.
        """
        return next(self.__messageID_iter)

    def _reset_next_messageID(self, start):
        # Back-door for unit testing.
        self.__messageID_iter = itertools.imap(lambda _v: _v % 65536, itertools.count(start))

    def __init__(self, sockaddr=None, family=socket.AF_UNSPEC,
                 security_mode=None,
                 host=None, port=coapy.COAP_PORT):
        # None of these arguments are used here; they apply in
        # __new__.
        super(Endpoint, self).__init__()
        self.__base_uri = self.uri_from_options([])
        self._reset_next_messageID(random.randint(0, 65535))

    def get_peer_endpoint(self, sockaddr=None, host=None, port=coapy.COAP_PORT):
        """Find the endpoint at *sockaddr* that this endpoint can talk to.

        This invokes :class:`Endpoint` with *family* and
        *security_mode* set to the parameters used by this endpoint.
        It is used to identify the source endpoint of a message
        received by :meth:`python:socket.socket.recvfrom`.  *sockaddr*
        will be constructed from *host* and *port* if not provided
        explicitly; at least one of *sockaddr* and *host* must be
        given.
        """
        if sockaddr is None:
            if host is None:
                raise ValueError
            sockaddr = (host, port)
        return type(self)(sockaddr=sockaddr, family=self.family, security_mode=self.security_mode)

    def is_same_host(self, host):
        """Determine whether *host* resolves to the same address as
        this endpoint.  Used to determine that a
        :class:`UriHost<coapy.option.UriHost>` option may be elided in
        favor of the default derived from an endpoint.  Note that this
        only verifies that :attr:`in_addr` and :attr:`family` would be
        the same for an endpoint involving *host*; differences in
        security mode or port are not relevant.
        """
        try:
            (family, sockaddr) = self._canonical_sockinfo(family=self.family, host=host)
        except socket.gaierror as e:
            # If we can't look up the host using the same family,
            # it's not the same host.  Other errors are real errors.
            if socket.EAI_NONAME != e.args[0]:
                raise
            return False
        (family, addr, port, security_mode) = self._key_for_sockaddr(sockaddr, family)
        return (self.family == family) and (self.in_addr == addr)

    @staticmethod
    def _port_for_scheme(scheme):
        return {'coap': coapy.COAP_PORT,
                'coaps': coapy.COAPS_PORT}[scheme]

    def uri_to_options(self, uri, base_uri=None):
        """Convert a URI to a list of CoAP options relative to this endpoint.

        *uri* should be an :rfc:`3986` conformant absolute URI.  For
        convenience, if *base_uri* is not None the value of *uri* will
        be recalculated assuming it is relative to *base_uri*.
        *base_uri* itself will default to :attr:`base_uri` if no
        non-``None`` value is provided.

        The scheme part of *uri* must be either "coap" or "coaps".

        Options will be returned in a list in the following order.

        * :class:`coapy.option.UriHost`, absent if the URI host
          matches the endpoint :attr:`family` and :attr:`in_addr`;
        * :class:`coapy.option.UriPort`, absent if the URI port
          matches the endpoint :attr:`port`;
        * :class:`coapy.option.UriPath`, absent if the path is empty,
          otherwise occurs once per path segment;
        * :class:`coapy.option.UriQuery`, absent if there is no query
          part, otherwise occurs once per ``&``-separated query
          element.
        """

        if base_uri is None:
            base_uri = self.base_uri
        if base_uri is not None:
            uri = urlparse.urljoin(base_uri, uri)
        res = urlparse.urlsplit(uri)
        opts = []
        # 6.4.1. absolute-URI = scheme ":" hier-part [ "?" query ]
        if (not res.scheme) \
           or ((res.netloc is None) and (res.path is None)) \
           or res.fragment:
            raise URIError('not absolute', uri)
        # 6.4.2. Make this user's job or done by urljoin
        # 6.4.3. Check scheme
        scheme = res.scheme.lower()
        if not (scheme in ('coap', 'coaps')):
            raise URIError('invalid scheme', res.scheme)
        # 6.4.4. Unnecessary: fragments aren't allowed in absolute-URIs,
        # or in the restrictions for coap-URI and coaps-URI.

        # 6.4.5. authority = [ userinfo "@" ] host [ ":" port] CoAP
        # doesn't provide a way to pass userinfo, so defer to the
        # ParseResult hostname and port values rather than try to re-parse
        # netloc locally.
        if res.hostname:
            host = urllib.unquote(res.hostname)
            if not self.is_same_host(host):
                opts.append(coapy.option.UriHost(host))

        # 6.4.6.  Set port from URI or default from scheme
        port = res.port
        if port is None:
            port = self._port_for_scheme(scheme)

        # 6.4.7.
        if port != self.port:
            opts.append(coapy.option.UriPort(port))

        # 6.4.8
        path = res.path
        if path and not ('/' == path):
            if path.startswith('/'):
                path = path[1:]
            for segment in path.split('/'):
                segment = bytes(segment)
                segment = urllib.unquote(segment)
                segment = segment.decode('utf-8')
                opts.append(coapy.option.UriPath(segment))

        # 6.4.9
        query = res.query
        if query:
            for qseg in query.split('&'):
                qseg = bytes(qseg)
                qseg = urllib.unquote(qseg)
                qseg = qseg.decode('utf-8')
                opts.append(coapy.option.UriQuery(qseg))
        return opts

    def uri_from_options(self, opts):
        """Create a URI from endpoint data and the options.

        The resulting URI scheme is "coap" unless
        :attr:`security_mode` is set (in which case it is "coaps").

        The authority is derived from
        :class:`UriHost<coapy.option.UriHost>` and
        :class:`UriPort<coapy.option.UriPort>` options in *opts*,
        defaulting to :attr:`uri_host` and :attr:`port` if the
        respective options are not provided.

        The remainder of the URI is built up from
        :class:`UriPath<coapy.option.UriPath>` and
        :class:`UriQuery<coapy.option.UriQuery>` options in *opts*.
        """
        scheme = 'coap'
        if self.security_mode is not None:
            scheme = 'coaps'
        host = None
        for opt in filter(lambda _o: isinstance(_o, coapy.option.UriHost), opts):
            host = opt.value
            if host is None:
                raise URIError('empty Uri-Host')
            if host and ('[' != host[0]):
                host = urllib.quote(host.encode('utf-8'))
            break
        if host is None:
            host = self.uri_host
        port = self.port
        for opt in filter(lambda _o: isinstance(_o, coapy.option.UriPort), opts):
            port = opt.value
            if port is None:
                raise URIError('empty Uri-Port')
        if port == self._port_for_scheme(scheme):
            netloc = host
        else:
            netloc = '{0}:{1}'.format(host, port)
        # Paths are always absolute, so start with an empty segment so the
        # encoded version begins with a slash.
        elts = ['']
        for segment_opt in filter(lambda _o: isinstance(_o, coapy.option.UriPath), opts):
            segment = segment_opt.value
            segment = coapy.util.to_net_unicode(segment)
            segment = urllib.quote(segment, str(''))
            elts.append(segment)
        path = '/'.join(elts)
        if not path:
            # Make sure we still have the leading slash
            path = '/'
        elts = []
        for qseg_opt in filter(lambda _o: isinstance(_o, coapy.option.UriQuery), opts):
            qseg = qseg_opt.value
            qseg = coapy.util.to_net_unicode(qseg)
            qseg = urllib.quote(qseg, str('?'))
            elts.append(qseg)
        query = '&'.join(elts)
        return urlparse.urlunsplit((scheme, netloc, path, query, None))

    def create_request(self, uri,
                       confirmable=False,
                       code=coapy.message.Request.GET,
                       messageID=None,
                       token=None,
                       options=None,
                       payload=None):
        """Create and return a :class:`Request<coapy.message.Request>`
        instance to retrieve *uri* from this endpoint.

        *uri* should generally be a relative URI hosted on the
        endpoint.

        By default this creates a non-confirmable
        :attr:`GET<coapy.message.Request.GET>` message.  These
        features can be overridden with *confirmable* and *code*.
        *messageID* will default to :meth:`next_messageID`.  The
        caller may specify a token; if none is provided, an empty
        token will be used.  Any *options* are appended to the options
        derived from *uri*, and *payload* is as in the
        :class:`coapy.message.Message` constructor.
        """
        uri_options = []
        if uri is not None:
            uri_options = self.uri_to_options(uri)
        if messageID is None:
            messageID = self.next_messageID()
        if token is None:
            token = b''
        if options is not None:
            uri_options.extend(options)
        return coapy.message.Request(confirmable=confirmable,
                                     code=code, messageID=messageID,
                                     token=token, options=uri_options,
                                     payload=payload)