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
Utility classes and functions used within CoAPy.

:copyright: Copyright 2013, Peter A. Bigot
:license: Apache-2.0
"""

from __future__ import unicode_literals
from __future__ import print_function
from __future__ import absolute_import
from __future__ import division

import logging
_log = logging.getLogger(__name__)

import sys
import coapy
import unicodedata
import functools
import bisect
import time
import datetime
import calendar
import urllib


class ClassReadOnly (object):
    """A marker to indicate an attribute of a class should be
    read-only within the class as well as instances of the class.

    Effective only if the metaclass is (or is derived from)
    :class:`ReadOnlyMeta`.

    Example::

      class C(Object):
          __metaclass__ = ReadOnlyMeta

          Zero = ClassReadOnly(0)

      instance = C()
      assert 0 == C.Zero
      assert 0 == instance.Zero

      # This will raise an exception:
      C.Zero = 4
      # As will this:
      instance.Zero = 4
    """

    def __init__(self, value):
        self.value = value


class ReadOnlyMeta (type):
    """Metaclass for supporting read-only values in classes.

    When used as a metaclass, this inserts an intermediary type that
    prevents assignment to certain attributes at both the instance and
    class levels.  Any attribute in the class that is initialized in
    the class body with a value of type :class:`ClassReadOnly` is made
    read-only.

    See example at :class:`ClassReadOnly`.

    """
    def __new__(cls, name, bases, namespace):
        # Provide a unique type that can hold the read-only class
        # values.
        class ReadOnly (cls):
            pass
        nsdup = namespace.copy()
        for (n, v) in namespace.iteritems():
            if isinstance(v, ClassReadOnly):
                mp = property(lambda self_or_cls, _v=v.value: _v)
                nsdup[n] = mp
                setattr(ReadOnly, n, mp)
        return super(ReadOnlyMeta, cls).__new__(ReadOnly, name, bases, nsdup)


@functools.total_ordering
class TimeDueOrdinal(object):
    """Base class for elements that are sorted by time.

    The intent is that information related to an activity that should
    occur at or after a particular time be held in a subclass of
    :class:`TimeDueOrdinal`.  The priority queue of upcoming activity
    is implemented using a sorted list, as instances of (subclasses
    of) :class:`TimeDueOrdinal` are ordered by increasing value of
    :attr:`time_due` using the features of :mod:`python:bisect`.
    Insertion, removal, and repositioning of elements in the priority
    queue may be accomplished using :meth:`queue_insert`,
    :meth:`queue_remove`, and :meth:`queue_reposition`.

    *time_due* as a keyword parameter initializes :attr:`time_due` and
    is removed from *kw*.  Any positional parameters and remaining
    keyword parameters are passed to the next superclass.
    """

    time_due = None
    """The time at which the subclass instance becomes relevant.

    This is a value in the ordinal space defined by
    :func:`coapy.clock`.
    """

    def __init__(self, *args, **kw):
        self.time_due = kw.pop('time_due', None)
        super(TimeDueOrdinal, self).__init__(*args, **kw)

    def __eq__(self, other):
        return (self.time_due is not None) and (self.time_due == other.time_due)

    # total_ordering doesn't handle eq/ne inference, so need both
    def __ne__(self, other):
        return self.time_due != other.time_due

    def __lt__(self, other):
        return self.time_due < other.time_due

    def queue_reposition(self, queue):
        """Reposition this entry within *queue*.

        *self* must already be in the queue; only its position changes
        (if necessary).
        """
        bisect.insort(queue, queue.pop(queue.index(self)))

    def queue_insert(self, queue):
        """Insert this entry into *queue*."""
        bisect.insort(queue, self)

    def queue_remove(self, queue):
        """Remove this entry from *queue*."""
        queue.remove(self)

    @staticmethod
    def queue_ready_prefix(queue, now=None):
        """Return the elements of *queue* that are due.

        *queue* is a sorted list of :class:`TimeDueOrdinal` instances.
        *now* is the timestamp, and defaults to :func:`coapy.clock`.
        Elements are due when :attr:`time_due` <= *now*.
        """

        if now is None:
            now = coapy.clock()
        ub = 0
        while ub < len(queue) and (queue[ub].time_due <= now):
            ub += 1
        return list(queue[:ub])


def to_net_unicode(text):
    """Convert text to Net-Unicode (:rfc:`5198`) data.

    This normalizes *text* to ensure all characters are their own
    canonical equivalent in the NFC form (section 3 of :rfc:`5198`).
    The result is encoded in UTF-8 and returned as data.

    The operation currently does not handle newline normalization
    (section 2 item 2), since its use in CoAP is currently limited to
    values of options with format :class:`coapy.option.format_string`
    and diagnostic payloads.
    """
    # At first blush, this is Net-Unicode.
    return unicodedata.normalize('NFC', text).encode('utf-8')


def to_display_text(data):
    """Return *data* as human-readable text.

    This is intended for diagnostic messages for values like tokens
    and payloads that are sometimes text, and sometimes raw data.  If
    *data* is :class:`bytes` but all its characters are
    :data:`printable<python:string.printable>` return it as text,
    otherwise return it as hex-encoded data (wrapped in square
    brackets to distinguish the encoding, e.g.: ``[01020304]`` for
    ``b'\\x01\\x02\\x03\\x04'``).

    Non-bytes data is simply converted to Unicode and returned in that
    format.  (If *data* is already text, even if it's Unicode, we
    assume it's displayable.  If it isn't, select a better terminal
    configuration.)
    """
    if isinstance(data, bytes):
        import string
        need_binascii = True
        if sys.version_info < (3, 0):
            need_binascii = not all(_c in string.printable for _c in data)
        else:
            need_binascii = not all(chr(_c) in string.printable for _c in data)
        if need_binascii:
            import binascii
            return '[{0}]'.format(binascii.hexlify(data).decode('utf-8'))
        data = data.decode('utf-8')
    return unicode(data)


def url_quote(text, safe='/'):
    """Perform URL percent encoding on *text*.

    If *text* is Unicode, it is first converted to
    :func:`Net-Unicode<to_net_unicode>`.  *text* may also be data.

    Unsafe characters are percent-escaped, and the result is returned
    as text containing only ASCII characters.

    *safe* is as in :func:`python:urllib.parse`.

    Encapsulated because in Python 3 :func:`python:urllib.parse.quote`
    works directly on Unicode strings, while in Python 2 the
    corresponding :func:`python:urllib.quote` does not tolerate
    Unicode characters and does not like *safe* to be a Unicode
    string as it is since we use unicode_literals).
    """

    if isinstance(text, unicode):
        text = to_net_unicode(text)
    if sys.version_info < (3, 0):
        # Python 2 quote does not like having a Unicode safe string
        safe = str(safe)
    quoted = urllib.quote(text, safe)
    return quoted


def url_unquote(quoted):
    """Perform URL percent decoding on *quoted*.

    Encapsulated because in Python 3
    :func:`python:urllib.parse.unquote` works directly on Unicode
    strings, while in Python 2 the corresponding
    :func:`python:urllib.unquote` does not tolerate Unicode
    characters.
    """
    if sys.version_info < (3, 0):
        data = bytes(quoted)
        encoded = urllib.unquote(data)
        text = encoded.decode('utf-8')
    else:
        text = urllib.unquote(quoted)
    return text


def format_time(tval=None, format='iso'):
    """Convert a date/time value to a standard representation and
    validity duration.

    The return value ``(rep, vsec)`` provides the representation of
    *tval* using style *format*.  Representation *rep* is expected to
    be unchanged for *vsec* seconds after the represented time.

    *tval* is a :class:`python:datetime.datetime`,
    :class:`python:time.struct_time`, or POSIX ordinal as from
    :func:`python:time.time`.  It is interpreted as being a universal
    time (i.e., conversions do not account for time zone).

    *format* is one of the following:

    ======  ===================  =====  =========================================
    Format  rep                  vsec   Description
    ======  ===================  =====  =========================================
    iso     2013-10-11T10:46:23      0  ISO 8601 combined date and time
    ord     2013-284             47617  ISO 8601 ordinal date
    pgd     735152               47617  Proleptic Gregorian Ordinal Day
    jd      2456576.94888            0  Julian Date
    mjd     56576.4488773            0  Modified Julian Date
    tjd     16576.4488773            0  Truncated Julian Date
    jdn     2456576               4417  Julian Day Number
    doy     284                  47617  Day-of-year
    dow     5                    47617  Day-of-week (ISO: Mon=1 Sun=7)
    mod     646                     37  Minute-of-day
    posix   1381488383               0  Seconds since POSIX epoch 1970-01-01T00:00:00
    ======  ===================  =====  =========================================
    """
    if tval is None:
        tval = datetime.datetime.utcnow()
    if isinstance(tval, datetime.datetime):
        dt = tval
    elif isinstance(tval, (time.struct_time, tuple)):
        dt = datetime.datetime(*tval[:7])
    elif isinstance(tval, (float, int, long)):
        dt = datetime.datetime.utcfromtimestamp(tval)
    else:
        raise ValueError(tval)
    tt = dt.timetuple()
    pt = calendar.timegm(tt)
    jd = 2440587.5 + (pt / 86400.0)
    exp = 0
    sod = dt.second + 60 * (dt.minute + 60 * dt.hour)
    # 86400 seconds per day, 43200 seconds per half-day
    if 'iso' == format:         # ISO8601 combined date and time
        rep = dt.isoformat()
    elif 'ord' == format:       # ISO 8601 ordinal date
        rep = '{0:d}-{1:03d}'.format(dt.year, dt.timetuple().tm_yday)
        exp = 86400 - sod
    elif 'pgd' == format:       # Proleptic Gregorian Day
        rep = dt.toordinal()
        exp = 86400 - sod
    elif 'jd' == format:        # Julian Date
        rep = jd
    elif 'mjd' == format:       # Modified Julian Date
        rep = jd - 2400000.5
    elif 'tjd' == format:       # Truncated Julian Date
        rep = jd - 2440000.5
    elif 'jdn' == format:       # Julian Day Number
        rep = int(jd)
        exp = 43200 - sod
        if 0 > exp:
            exp += 86400
    elif 'doy' == format:       # Day of Year
        rep = dt.timetuple().tm_yday
        exp = 86400 - sod
    elif 'dow' == format:       # Day of Week (ISO M=1 Su=7)
        rep = dt.isoweekday()
        exp = 86400 - sod
    elif 'mod' == format:       # Minute of day
        rep = dt.minute + 60 * (dt.hour)
        exp = 60 - dt.second
    elif 'posix' == format:     # Seconds since POSIX epoch 1970-01-01T00:00:00
        rep = calendar.timegm(tt)
    else:
        raise ValueError(format)
    # Don't add CJD, which is local civil time not UT
    return (rep, exp)

if '__main__' == __name__:
    styles = (
        ('iso', 'ISO 8601 combined date and time'),
        ('ord', 'ISO 8601 ordinal date'),
        ('pgd', 'Proleptic Gregorian Ordinal Day'),
        ('jd', 'Julian Date'),
        ('mjd', 'Modified Julian Date'),
        ('tjd', 'Truncated Julian Date'),
        ('jdn', 'Julian Day Number'),
        ('doy', 'Day-of-year'),
        ('dow', 'Day-of-week (ISO: Mon=1 Sun=7)'),
        ('mod', 'Minute-of-day'),
        ('posix', 'Seconds since POSIX epoch 1970-01-01T00:00:00'),
        )
    tt = time.gmtime()
    ts = calendar.timegm(tt)
    dt = datetime.datetime.utcfromtimestamp(ts)
    print('tt: {tt}\nts: {ts}\ndt: {dt}'.format(tt=tt, ts=ts, dt=dt))
    for (s, d) in styles:
        (rep, exp) = format_time(dt, s)
        print('    {0:6s}  {1!s:20s} {2:5d}  {3}'.format(s, rep, exp, d))
