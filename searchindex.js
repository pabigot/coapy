Search.setIndex({objects:{"":{coapy:[8,0,1,""]},"tests.support.FIFOEndpoint":{"_rawsendto":[1,4,1,""],fifo:[1,2,1,""],"_rawrecvfrom":[1,4,1,""]},"coapy.message.ServerErrorResponse":{BadGateway:[10,2,1,""],CodeClass:[10,2,1,""],ServiceUnavailable:[10,2,1,""],InternalServerError:[10,2,1,""],ProxyingNotSupported:[10,2,1,""],GatewayTimeout:[10,2,1,""],NotImplemented:[10,2,1,""]},"coapy.endpoint.RcvdMessageCacheEntry":{reception_count:[2,2,1,""],reply:[2,4,1,""],reply_message:[2,2,1,""]},"coapy.option.UnrecognizedOption":{"_get_number":[4,4,1,""],format:[4,2,1,""],number:[4,2,1,""],from_option:[4,5,1,""]},"coapy.message.ClientErrorResponse":{UnsupportedContentFormat:[10,2,1,""],BadOption:[10,2,1,""],Unauthorized:[10,2,1,""],NotFound:[10,2,1,""],CodeClass:[10,2,1,""],Forbidden:[10,2,1,""],PreconditionFailed:[10,2,1,""],RequestEntityTooLarge:[10,2,1,""],MethodNotAllowed:[10,2,1,""],NotAcceptable:[10,2,1,""],BadRequest:[10,2,1,""]},coapy:{"_Clock":[8,1,1,""],endpoint:[2,0,1,""],resource:[9,0,1,""],option:[4,0,1,""],transmissionParameters:[8,8,1,""],clock:[8,8,1,""],COAPS_PORT:[8,8,1,""],util:[7,0,1,""],COAP_PORT:[8,8,1,""],message:[10,0,1,""],httputil:[5,0,1,""],RealTimeClock:[8,1,1,""],ManagedClock:[8,1,1,""]},"coapy.endpoint.RemoteEndpointState":{endpoint:[2,2,1,""],last_heard_clk:[2,2,1,""],tx_octets:[2,2,1,""],rx_octets:[2,2,1,""],tx_octets_since_heard:[2,2,1,""],rx_messages:[2,2,1,""],tx_messages:[2,2,1,""],rcvd_cache:[2,2,1,""]},"coapy.endpoint.MessageCacheEntry":{created_clk:[2,2,1,""],process_timeout:[2,4,1,""],time_due:[2,2,1,""],cache:[2,2,1,""],"_get_time_due":[2,4,1,""],expires_clk:[2,2,1,""],activated_clk:[2,2,1,""],message:[2,2,1,""],message_id:[2,2,1,""],"_dissociate":[2,4,1,""]},"tests.support.ManagedClock_mixin":{tearDown:[1,4,1,""],setUp:[1,4,1,""]},"coapy.ManagedClock":{adjust:[8,4,1,""]},"coapy.util.TimeDueOrdinal":{time_due:[7,2,1,""],queue_reposition:[7,4,1,""],queue_insert:[7,4,1,""],queue_remove:[7,4,1,""],queue_ready_prefix:[7,7,1,""]},"coapy.message.MessageFormatError":{ZERO_LENGTH_PAYLOAD:[10,2,1,""],TOKEN_TOO_LONG:[10,2,1,""],EMPTY_MESSAGE_NOT_EMPTY:[10,2,1,""],INVALID_OPTION:[10,2,1,""],UNRECOGNIZED_CODE_CLASS:[10,2,1,""]},"coapy._Clock":{epoch:[8,2,1,""]},"coapy.endpoint.SentMessageCacheEntry":{destination_endpoint:[2,2,1,""],stale_at:[2,2,1,""],transmissions:[2,2,1,""],reply_message:[2,2,1,""]},"coapy.message.SuccessResponse":{Created:[10,2,1,""],Deleted:[10,2,1,""],Changed:[10,2,1,""],CodeClass:[10,2,1,""],Content:[10,2,1,""],Valid:[10,2,1,""]},"coapy.option":{UnrecognizedOption:[4,1,1,""],Size1:[4,1,1,""],encode_options:[4,3,1,""],ContentFormat:[4,1,1,""],UriHost:[4,1,1,""],IfNoneMatch:[4,1,1,""],decode_options:[4,3,1,""],OptionLengthError:[4,6,1,""],LocationPath:[4,1,1,""],is_critical_option:[4,3,1,""],OptionRegistryConflictError:[4,6,1,""],UriPath:[4,1,1,""],InvalidMultipleOptionError:[4,6,1,""],InvalidOptionTypeError:[4,6,1,""],is_no_cache_key_option:[4,3,1,""],UriQuery:[4,1,1,""],find_option:[4,3,1,""],MaxAge:[4,1,1,""],format_uint:[4,1,1,""],UnrecognizedCriticalOptionError:[4,6,1,""],is_unsafe_option:[4,3,1,""],sorted_options:[4,3,1,""],format_empty:[4,1,1,""],OptionDecodeError:[4,6,1,""],replace_unacceptable_options:[4,3,1,""],InvalidOptionError:[4,6,1,""],all_options:[4,3,1,""],ProxyUri:[4,1,1,""],IfMatch:[4,1,1,""],"_format_base":[4,1,1,""],UrOption:[4,1,1,""],UriPort:[4,1,1,""],OptionError:[4,6,1,""],ProxyScheme:[4,1,1,""],Accept:[4,1,1,""],LocationQuery:[4,1,1,""],ETag:[4,1,1,""],format_opaque:[4,1,1,""],format_string:[4,1,1,""]},"coapy.resource":{LinkValue:[9,1,1,""]},"coapy.message.Message":{Empty:[10,2,1,""],code:[10,2,1,""],Ver:[10,2,1,""],create_reply:[10,4,1,""],from_packed:[10,5,1,""],messageTypeName:[10,2,1,""],RegisterCode:[10,5,1,""],maxAge:[10,4,1,""],messageType:[10,2,1,""],code_as_tuple:[10,7,1,""],"_get_type":[10,4,1,""],messageID:[10,2,1,""],"_get_source_endpoint":[10,4,1,""],destination_endpoint:[10,2,1,""],Type_NON:[10,2,1,""],source_defines_messageID:[10,4,1,""],Type_RST:[10,2,1,""],is_acknowledgement:[10,4,1,""],is_confirmable:[10,4,1,""],source_originates_type:[10,7,1,""],Type_ACK:[10,2,1,""],payload:[10,2,1,""],"_get_messageID":[10,4,1,""],"_get_destination_endpoint":[10,4,1,""],packed_code:[10,2,1,""],is_reset:[10,4,1,""],"_get_code":[10,4,1,""],is_non_confirmable:[10,4,1,""],"_get_packed_code":[10,4,1,""],CodeClass:[10,2,1,""],Type_CON:[10,2,1,""],"_get_options":[10,4,1,""],to_packed:[10,4,1,""],validate:[10,4,1,""],"_get_token":[10,4,1,""],RegisterClassCode:[10,5,1,""],source_endpoint:[10,2,1,""],"_get_type_name":[10,4,1,""],token:[10,2,1,""],"_get_payload":[10,4,1,""],"_sort_options":[10,4,1,""],code_as_integer:[10,7,1,""],options:[10,2,1,""]},"coapy.endpoint.ReplyMessageError":{TOKEN_MISMATCH:[2,2,1,""],NOT_RESPONSE:[2,2,1,""],ALREADY_GIVEN:[2,2,1,""],RESPONSE_NOT_ACK:[2,2,1,""],ID_MISMATCH:[2,2,1,""]},"coapy.endpoint.MessageCache":{"_activate":[2,4,1,""],"_reposition":[2,4,1,""],is_sent_cache:[2,2,1,""],clear:[2,4,1,""],"_add":[2,4,1,""],queue:[2,4,1,""],endpoint:[2,2,1,""],pending:[2,4,1,""],"_remove":[2,4,1,""]},"coapy.option.format_opaque":{"_UnpackedType":[4,2,1,""]},"coapy.option.UrOption":{"_get_value":[4,4,1,""],packed_value:[4,2,1,""],valid_multiple_in_response:[4,4,1,""],is_unsafe:[4,4,1,""],name:[4,2,1,""],format:[4,2,1,""],first_match:[4,5,1,""],number:[4,2,1,""],value:[4,2,1,""],is_critical:[4,4,1,""],valid_multiple_in_request:[4,4,1,""],all_match:[4,5,1,""],valid_in_response:[4,4,1,""],valid_in_request:[4,4,1,""],is_no_cache_key:[4,4,1,""]},"tests.support.LogHandler_mixin":{log_handler:[1,2,1,""],tearDown:[1,4,1,""],setUp:[1,4,1,""],LOG_CAPACITY:[1,2,1,""]},"coapy.message.RetransmissionState":{"_get_remaining":[10,4,1,""],retransmissions_remaining:[10,2,1,""]},"coapy.option.format_uint":{"_UnpackedType":[4,2,1,""]},tests:{support:[1,0,1,""]},"coapy.option._format_base":{"_max_length":[4,4,1,""],"_unpacked_type":[4,4,1,""],to_text:[4,4,1,""],unpacked_type:[4,2,1,""],"_from_packed":[4,4,1,""],min_length:[4,2,1,""],from_packed:[4,4,1,""],"_min_length":[4,4,1,""],max_length:[4,2,1,""],"_to_text":[4,4,1,""],to_packed:[4,4,1,""],"_to_packed":[4,4,1,""]},"coapy.option.ContentFormat":{APPLICATION_JSON:[4,2,1,""],APPLICATION_XML:[4,2,1,""],APPLICATION_EXI:[4,2,1,""],media_type_for_content:[4,2,1,""],TEXT_PLAIN:[4,2,1,""],APPLICATION_OCTET_STREAM:[4,2,1,""],APPLICATION_LINK_FORMAT:[4,2,1,""]},"coapy.message":{MessageFormatError:[10,6,1,""],MessageError:[10,6,1,""],ServerErrorResponse:[10,1,1,""],TransmissionParameters:[10,1,1,""],MessageReplyError:[10,6,1,""],ClientErrorResponse:[10,1,1,""],Request:[10,1,1,""],RetransmissionState:[10,1,1,""],Message:[10,1,1,""],MessageValidationError:[10,6,1,""],Response:[10,1,1,""],SuccessResponse:[10,1,1,""]},"coapy.option.format_empty":{"_UnpackedType":[4,2,1,""]},"coapy.endpoint.SocketEndpoint":{"_rawsendto":[2,4,1,""],bound_socket:[2,2,1,""],"_rawrecvfrom":[2,4,1,""],create_bound_endpoint:[2,5,1,""],set_bound_socket:[2,4,1,""]},"tests.support.DeterministicBEBO_mixin":{tearDown:[1,4,1,""],setUp:[1,4,1,""]},"coapy.util":{TimeDueOrdinal:[7,1,1,""],to_display_text:[7,3,1,""],url_quote:[7,3,1,""],format_time:[7,3,1,""],to_net_unicode:[7,3,1,""],url_unquote:[7,3,1,""],ReadOnlyMeta:[7,1,1,""],ClassReadOnly:[7,1,1,""]},"coapy.message.Request":{GET:[10,2,1,""],CodeClass:[10,2,1,""],create_response:[10,4,1,""],PUT:[10,2,1,""],POST:[10,2,1,""],DELETE:[10,2,1,""]},"coapy.httputil":{HTTPResource:[5,1,1,""],HTTPServer:[5,1,1,""],HTTPRequestHandler:[5,1,1,""]},"coapy.resource.LinkValue":{params:[9,2,1,""],target_uri:[9,2,1,""],to_link_format:[9,4,1,""]},"coapy.httputil.HTTPRequestHandler":{remove_resource:[5,5,1,""],lookup_resource:[5,5,1,""],add_resource:[5,5,1,""],split_uri:[5,2,1,""],handle_one_request:[5,4,1,""]},"coapy.endpoint.LocalEndpoint":{rawrecvfrom:[2,4,1,""],remote_state:[2,4,1,""],send:[2,4,1,""],receive:[2,4,1,""],next_messageID:[2,4,1,""],rawsendto:[2,4,1,""],"_rawsendto":[2,4,1,""],"_reset":[2,4,1,""],"_rawrecvfrom":[2,4,1,""]},"coapy.message.TransmissionParameters":{DEFAULT_LEISURE:[10,2,1,""],NSTART:[10,2,1,""],MAX_LATENCY:[10,2,1,""],ACK_TIMEOUT:[10,2,1,""],MAX_RTT:[10,2,1,""],PROCESSING_DELAY:[10,2,1,""],PROBING_RATE:[10,2,1,""],MAX_TRANSMIT_SPAN:[10,2,1,""],MAX_TRANSMIT_WAIT:[10,2,1,""],NON_LIFETIME:[10,2,1,""],ACK_RANDOM_FACTOR:[10,2,1,""],recalculate_derived:[10,4,1,""],EXCHANGE_LIFETIME:[10,2,1,""],MAX_RETRANSMIT:[10,2,1,""],make_bebo:[10,4,1,""]},"coapy.message.MessageReplyError":{INVALID_TYPE:[10,2,1,""],ACK_FOR_NON:[10,2,1,""]},"coapy.httputil.HTTPResource":{handler_class:[5,2,1,""],handle_request:[5,4,1,""],do_HEAD:[5,4,1,""],do_GET:[5,4,1,""],path:[5,2,1,""]},"coapy.httputil.HTTPServer":{make_uri:[5,4,1,""]},"coapy.endpoint.Endpoint":{in_addr:[2,2,1,""],security_mode:[2,2,1,""],is_same_host:[2,4,1,""],family:[2,2,1,""],uri_to_options:[2,4,1,""],base_uri:[2,2,1,""],finalize_message:[2,4,1,""],uri_from_options:[2,4,1,""],"_canonical_sockinfo":[2,7,1,""],"_key_for_sockaddr":[2,7,1,""],get_peer_endpoint:[2,4,1,""],sockaddr:[2,2,1,""],uri_host:[2,2,1,""],create_request:[2,4,1,""],port:[2,2,1,""],"_reset":[2,4,1,""],lookup_endpoint:[2,5,1,""]},"coapy.option.format_string":{"_UnpackedType":[4,2,1,""]},"coapy.message.MessageValidationError":{CODE_UNDEFINED:[10,2,1,""],EMPTY_MESSAGE_NOT_EMPTY:[10,2,1,""],UNRECOGNIZED_CRITICAL_OPTION:[10,2,1,""],CODE_TYPE_CONFLICT:[10,2,1,""],CODE_INSTANCE_CONFLICT:[10,2,1,""],PROXY_URI_CONFLICT:[10,2,1,""]},"coapy.endpoint":{Endpoint:[2,1,1,""],MessageCacheEntry:[2,1,1,""],RemoteEndpointState:[2,1,1,""],LocalEndpoint:[2,1,1,""],RcvdMessageCacheEntry:[2,1,1,""],MessageCache:[2,1,1,""],ReplyMessageError:[2,1,1,""],SentMessageCacheEntry:[2,1,1,""],SocketEndpoint:[2,1,1,""]},"tests.support":{DeterministicBEBO_mixin:[1,1,1,""],ManagedClock_mixin:[1,1,1,""],LogHandler_mixin:[1,1,1,""],FIFOEndpoint:[1,1,1,""]}},terms:{groupcomm:6,orthogon:6,interchang:4,four:[6,10],prefix:5,oldest:[],whose:5,typeerror:4,under:[8,6,5,3],"_unpackedtyp":4,affect:[2,4],response_not_ack:2,add_resourc:5,verif:[1,2],charter:0,direct:4,preconditionfail:10,consequ:[6,2],second:[6,8,4,10,7],aggreg:2,even:[6,4,7],"new":[10,2,11],net:[2,4,7],ever:2,elimin:[1,6],behavior:[1,8,6,11,10],in_addr:2,never:6,gaierror:2,create_bound_endpoint:2,path:[5,2,4],uri_host:2,interpret:[4,7],precis:6,datetim:7,piggy_back:10,permit:[6,10],aka:6,"_dissoci":2,is_request:4,type_con:10,messagevalidationerror:10,"byte":[1,2,6,7,10,4],unit:[1,10,2,11],highli:11,describ:[6,2,11],would:[6,2],overhead:10,recommend:0,type:[0,6,2,7,10,4],until:[6,2,4],default_leisur:10,relax:6,notif:6,infrastructureerror:4,warn:[6,2],exce:6,hold:[1,2,4],unpack:4,"_from_pack":4,setup:1,work:[0,6,3,7],source_endpoint:[1,10,2],conceptu:[],undeliv:1,root:1,overrid:[1,2,4],give:10,indic:[0,10,4,7],unavail:2,want:[5,2],coapi:[0,1,2,3,4,5,6,7,8,9,10,11],unsign:[6,10,4],quot:[9,7],how:[6,2],remove_resourc:5,verifi:[6,2,4],perspect:[6,10,2],updat:[10,2],recogn:[10,4],after:[6,10,2,4,7],befor:[10,2,4],averag:10,attempt:[9,2,4,10],classmethod:[5,2,4,10],opaqu:[6,4],invalidoptiontyp:4,perform:[1,2,6,7,10,4],environ:[0,11],exclus:5,order:[2,4,7],oper:[1,2,5,6,7,8,4,10,11],ip_addr:2,becaus:[4,7],fifo:[1,2],imo:[],unicode_liter:7,better:[2,7],"_clock":8,them:[0,6,9,2,4],thei:[6,2,4,11],proce:[2,4],similar:6,safe:[10,4,7],optionerror:4,"_repeat":4,timeout:[6,10,2],each:[1,6,4],side:2,mean:[0,6,10],extract:[10,4],is_confirm:10,network:[0,1,2],content:[0,1,10,2,4],reader:[],format_str:[4,7],situat:[6,2,4],standard:[5,4,10,7],time_du:[2,7],ifmatch:4,is_same_host:2,angl:9,filter:2,iso:7,isn:7,uropt:[10,4],timeresourc:[],confus:[],rang:[6,4,11],first_match:4,independ:6,thereof:[],restrict:4,hook:1,unlik:6,alreadi:[2,7],wrapper:[],handler_class:5,payload:[6,10,2,4,7],badrequest:10,ack_timeout:[6,10],"0x3ddc350":[],sometim:7,too:[6,10],ipv4address:2,consol:1,unpacked_valu:4,technic:[6,10],messagecach:2,target:[6,9,11,10],keyword:[10,7],provid:[0,6,2,5,7,10,4],bebo:[6,10],rate:[6,10],minut:7,ram:0,unicast:6,raw:[10,7],dedupl:6,increment:8,httputil:[8,0,5],getsocknam:2,unresolv:[6,2],latter:2,client:[6,5,4,10],transmit:[6,10,2],simplifi:5,shall:6,cache_entri:2,object:[1,2,5,7,8,10,4],sentmessagecacheentri:2,deleg:[5,2],"0x2e3cb50":[],do_:5,letter:10,prematur:2,doi:7,doe:[6,10,2,4,7],dummi:2,bracket:[9,7],empty_message_not_empti:10,wildcard:5,unchang:[6,7],dow:7,dot:6,random:10,syntax:[0,9],messageid:[10,2],protocol:[0,6,2,11,10,4],involv:[1,2,6],absolut:[5,2],invalidmultipleoptionerror:4,configur:[11,7],apach:[1,2,5,7,8,9,10,4],"_key_for_sockaddr":2,create_request:2,oct:[],basehttp:[],recalcul:2,piggi:2,ietf:[0,4],method:[8,5,2,4,10],respond:[6,10],blockwis:0,nul:4,reply_messag:2,result:[6,2,5,7,9,10,4],respons:[0,6,2,5,4,10,11],fail:[6,10],usefulli:[],best:[5,10],subject:4,awar:6,uripath:[10,2,4],urllib:7,outstand:[6,10],awai:6,approach:[],attribut:[1,10,2,4,7],extend:2,extens:[1,2,6,11,10,4],here:[],toler:7,unsupportedcontentformat:10,howev:4,log_handl:1,against:[10,4],seri:6,con:[6,10,2],character:0,id_mismatch:2,assum:[1,2,6,7,8,4],source_defines_messageid:10,duplic:[6,2,4],three:[6,10],been:[6,10,2,4],set_bound_socket:2,"_max_length":4,life:2,ani:[0,1,2,5,6,7,10,11],lift:[],format_empti:4,type_rst:10,inhibit:6,ident:4,servic:2,properti:[5,2,4],sourceforg:3,calcul:[10,2,4],application_octet_stream:4,opt:[2,4],printabl:7,applic:[0,6,2,4],tabl:[0,10,4],elicit:10,nocachekei:4,sever:[0,4],incorrectli:4,receiv:[1,10,2,6],suggest:[],make:[1,2,4],complex:0,complet:[6,10,2,11],from_link_format:9,hand:4,processing_delai:10,rais:[1,10,2,4,7],refin:[6,10,2],squar:7,redefin:6,thu:[6,9,4,10],is_acknowledg:10,contact:2,thi:[0,1,2,3,4,5,6,7,8,9,10,11],left:[1,2,6,4],identifi:[0,5,2,4,10],just:4,ordin:[8,2,7],mid:6,human:[10,4,7],to_text:4,source_originates_typ:10,yet:2,previous:[2,4],expos:2,application_xml:4,had:[6,2],ifnonematch:4,"_min_length":4,primit:[6,10],remaining_data:4,"_get_type_nam":10,media_type_for_cont:4,disposit:6,"_rawrecvfrom":[1,2],specif:[6,2,3,5,9,4,10,11],"0x3278940":[],"_get_payload":10,unnecessari:6,underli:[0,1,2,6,11],www:[],successfulli:[10,2],transmiss:[1,10,2,6],requesthandlerclass:5,cooper:[1,2],find_opt:4,subclass:[2,5,7,8,10,4],condit:[6,4],localhost:[],core:0,plu:2,post:10,"super":[1,2],chapter:11,simul:[8,2],canonic:4,produc:[10,4],"float":8,encod:[6,10,2,4,7],bound:[5,2,4],bufsiz:[1,2],wrap:[9,7],wai:[10,2,4],support:[0,1,2,5,6,7,8,4,10,11],clazz:10,avail:[0,2,3,8,4,10,11],call:[1,2,6,3],head:[1,5],medium:10,form:[6,10,4,7],forc:[0,6],methodnotallow:10,"true":[5,2,4,10],reset:[1,10,2,6],absent:2,non_lifetim:[6,10,2],max_retransmit:[6,10],maximum:[6,10,2,4],absenc:[10,4],emit:[1,10,2],featur:[1,2,6,11,7],semicolon:9,"abstract":[6,8,2,4,11],diagnosi:10,diagnost:[1,10,2,4,7],exist:[10,4],check:[6,5,2,4],when:[1,2,8,6,7,9,10,4],max_transmit_wait:[6,10],role:[6,4],to_link_format:9,test:[0,1,2,8,11,4],unrecognizedcriticaloptionerror:4,"_get_numb":4,pop_oldest:[],node:[0,10,2],relat:[0,6,2,7,8,10,4],intend:[0,6,7],af_unspec:2,intent:7,consid:[6,10],activated_clk:2,outdat:[2,4],longer:[10,2,4],bottom:6,unrecognized_code_class:10,ignor:[6,10,2],remote_st:2,time:[0,6,2,7,8,10,4],realtimeclock:8,timn:6,roi:0,concept:[0,6,11],global:8,osi:6,from_opt:4,llc:[],uri_from_opt:2,subcompon:2,ver:10,zone:7,decim:[6,10],intermedi:10,x03:7,x02:7,x01:7,must:[0,1,2,6,7,10,4],x04:7,sourc:[1,2,5,6,7,8,9,10,4],string:[1,2,7,9,10,4],congest:[0,6,2,8,10,11],endpoint:[0,1,2,6,8,10,4],"_get_remain":10,level:[1,10,2,7],did:3,max_transmit_span:10,iter:[10,4],item:[2,7],retransmissionst:10,unsupport:5,not_respons:2,round:10,prevent:7,cost:[],port:[1,8,2,6,4],appear:[6,10,2,4],"_resourc":5,repli:[6,10,2],format_uint:4,current:[1,2,8,6,7,9,10],"_get_valu":4,proxy_uri_conflict:10,deriv:[6,2,3,7,10,4],proxyingnotsupport:10,gener:[0,1,2,5,6,9,10],unauthor:10,satisfi:6,modif:[5,2],"_unpacked_typ":4,address:[0,6,5,2],along:[1,2,4],wait:10,queue:[2,7],multicast:10,throughput:0,probing_r:[6,10,2],semant:[9,4,10],iana:[0,8,4,10],modul:[0,1,4],visibl:6,marker:[10,7],instal:1,univers:7,live:[6,2],handler:[1,5,10],criteria:[],msg:[10,2],unsaf:[4,7],url_unquot:7,peopl:3,refrain:2,effort:[0,3],uniqu:[1,10,2,4],can:[0,10,2],purpos:[8,2,9],encapsul:7,stream:4,fragment:5,backslash:9,critic:[6,10,4],abort:3,basehttprequesthandl:5,loghandler_mixin:1,occur:[6,2,4,7],alwai:[6,2,4],bigot:[1,2,5,7,8,9,10,4],multipl:[6,5,4],charset:4,write:6,rawsendto:[1,2],map:[5,9,4],max:[8,4,10],usabl:[5,2],mai:[0,1,2,5,6,7,8,4,10,11],data:[1,2,5,6,7,10,4],"_get_token":10,fifoendpoint:[1,2],inform:[6,10,2,4,7],preced:[],combin:[9,10,7],callabl:[8,10],talk:2,type_non:10,notaccept:10,still:[6,2,4,3],entiti:2,conjunct:[],code_as_tupl:10,polici:4,defin:[0,6,2,5,7,4,10,11],is_non_confirm:10,mail:[],non:[1,2,6,7,8,10,4],evok:6,tjd:7,reception_count:2,supersed:[],initi:[6,2,7,8,10,4],valid_multiple_in_respons:4,"0x278f7a0":[],is_sent_cach:2,now:7,discuss:0,nor:[6,10],introduct:6,term:6,name:[1,2,6,9,10,4],serviceunavail:10,separ:[6,5,2,9],from_pack:[10,4],sendto:2,domain:[0,6,2],replac:[1,5,4,10],individu:[0,6,4],"0x3ee5710":[],"0x37ee710":[],year:7,urlpars:5,accomplish:7,space:[4,7],internet:[0,4],correct:2,"0x328ca90":[],org:[],ord:7,care:6,synchron:10,thing:[8,6,5],place:[1,8,2,6],principl:[6,5],imposs:2,first:[6,2,3,7,8,10,4],origin:[4,2,3,11],expiry_du:[],directli:[1,6,7],carri:[6,4],onc:[6,10,2,4],"long":[10,11],size:[0,2,4],given:[6,2,4],silent:10,peek_oldest:[],teardown:1,max_length:4,draft:[0,6,3],conveni:[10,2],"_remov":2,log_capac:1,provinc:9,copi:10,specifi:[6,2,5,11,10,4],enclos:[9,10],than:[6,5,2,4,10],serv:[10,2],posix:7,were:11,posit:7,browser:0,pre:[0,10,3],argument:[10,4],"_canonical_sockinfo":2,deliv:1,transmission_paramet:10,sat:[],engin:0,techniqu:[],destroi:2,note:[1,2,5,6,8,10,4],take:[6,10,2],is_crit:4,sure:[1,2],trace:11,normal:[6,5,2,7],buffer:1,pair:6,get_peer_endpoint:2,adopt:2,max_retransmiss:10,code_as_integ:10,exchange_lifetim:[6,10,2],show:[10,4],tkl:10,delta:[10,4],unrecognizedopt:[10,4],"0x26d69d0":[],replymessageerror:2,xml:4,onli:[1,2,5,6,7,8,9,10,4],explicitli:[6,10,2],transact:[0,6,10],activ:[2,7],"0x3efe9d0":[],dict:2,is_reset:10,coaps_port:[8,2],variou:[6,2,4],get:[5,2,10],cannot:[6,10,2,4],requir:[6,2,5,9,4,10,11],reveal:6,where:[1,2,6,9,10,4],vision:[0,11],created_clk:2,deadlin:6,testcas:1,detect:[10,2,4],review:4,enough:[],listinfo:[],between:[6,5,2,4,10],message_id:2,messagetypenam:10,cycl:2,gregorian:7,dkw:10,registercod:10,inconsist:10,readonlymeta:7,"_reset":2,unrecogn:[10,4],among:10,overview:[0,6],unittest:1,period:0,cancel:6,vsec:7,coupl:6,"_activ":2,invert:5,capabli:6,mark:6,valueerror:[10,2,4],resolut:[6,2],wake:0,those:[6,10],"case":[1,2,5,6,10,4],invok:[8,1,5,2,10],recalculate_deriv:10,canon:[2,4,7],destin:[6,10],ascii:[4,7],httpserver:5,develop:[5,3],author:[6,2],media:4,intermediari:[10,7],same:[6,10,2,4],trip:10,binari:[6,10,2],epoch:[8,7],timestamp:[11,7],document:[6,10,3],week:7,finish:2,driven:[0,2],capabl:6,extern:[6,2],locationpath:4,retransmiss:[1,8,2,6,10],appropri:[5,2,10],rawrecvfrom:[1,2],without:[1,3],disassoci:2,model:[6,5],execut:[5,2],unflush:1,handle_one_request:5,rest:[0,6,5],refactor:6,"0x39c6bb0":[],messageerror:10,hint:2,"01t00":7,except:[6,2,7,8,10,4],littl:2,all_opt:4,uriqueri:[10,2,4],earli:2,around:[],read:[1,2,5,7,10,4],bufferinghandl:1,envis:6,mon:7,"_rawsendto":[1,2],world:8,mod:7,make_uri:5,integ:[6,8,2,4,10],server:[6,5,10],either:[6,10,2],manag:[0,1,6],valid_multiple_in_request:4,destination_endpoint:[1,10,2],uri_to_opt:2,confirm:[6,10,2],definit:[6,4],token:[6,9,2,10,7],managedclock_mixin:1,exit:1,"_sort_opt":10,refer:[0,1,2,3,6,9,10,11],af_inet6:2,power:[0,3],inspect:[1,4],fulli:2,immut:[10,2],unicod:[2,4,7],comparison:5,ack:[6,10,2],degre:0,act:[6,2],"0x26e3790":[],effici:4,application_json:4,terminolog:6,log:[1,11],hex:7,start:[8,2,10],interfac:[0,5],low:0,ipv6:[0,2],strictli:[],code_undefin:10,handle_request:5,tupl:[1,10,2],possibl:[8,10],"default":[1,2,5,7,8,10],connect:2,creat:[6,2,5,8,10,4],certain:7,urihost:[10,2,4],inet_pton:2,decreas:8,decode_opt:4,rearrang:10,denot:6,collid:4,unassign:2,orient:0,field:[0,6,10],valid:[10,2,4,7],you:[8,2],architectur:[0,5,11],registri:[0,5,10],sequenc:[6,9,4],contentformat:[10,4],codeclass:10,reduc:[],descript:[6,10,7],lookup_endpoint:2,potenti:[6,2],escap:[9,7],represent:[0,2,7,9,10,4],all:[1,2,5,7,9,4,10,11],forbidden:10,lack:[6,3],improperli:[10,2],correl:10,abil:[6,5],follow:[5,2,4,10,7],incap:10,af_inet:2,valid_in_respons:4,program:8,present:[5,2,11,10],queri:[1,5,2,6,4],packed_cod:10,introduc:6,liter:2,fals:[5,2,10],"0x324d4c8":[],util:[0,8,2,10,7],mechan:2,failur:[6,10,2,4],list:[10,2,4,7],recvfrom:2,adjust:8,zero:[6,8,4,10,7],design:[0,4],pass:[6,10,2,4,7],further:6,what:[0,6],sub:4,clock:[1,8,2,7],sun:7,section:[6,10,2,4,7],abl:[1,6],brief:[0,6],delet:10,version:[5,10],deepli:[],"public":3,themselv:4,variat:6,excess:10,depend:[6,10,2,4],modifi:[2,7],valu:[0,6,2,3,7,8,9,10,4],min_length:4,search:0,sender:[6,10],prior:[1,2,6],action:[6,10],via:6,shorthand:[],readabl:[10,4,7],famili:[1,2],select:[5,2,10,7],distinct:[6,10],regist:[1,5,4,10],two:[6,9,2],bizarr:[],piggyback:10,coap_port:[8,2],"_get_typ":10,taken:6,finalize_messag:2,more:[6,10],messageformaterror:[10,2],flaw:6,door:2,henc:[],particular:[6,10,2,7],known:[0,2,4],compani:3,"_get_packed_cod":10,cach:[8,2,4,10],replace_unacceptable_opt:4,none:[1,2,5,7,8,9,10,4],jdn:7,stale_at:2,histori:[0,3],remain:[10,2,4,7],ack_for_non:10,substanti:0,share:6,accept:[6,10,4],minimum:4,sorted_opt:4,newlin:7,secur:[6,8,2],rather:[6,5],anoth:[1,2,6],reject:[6,2],simpl:6,resourc:[0,6,2,5,8,9,10,4],reflect:2,code_type_conflict:10,associ:[1,5,2,4,10],circumst:6,"short":[2,4],coap:[0,6,2,3,5,7,8,10,4],ambigu:6,caus:[10,2,4],tval:7,gatewaytimeout:10,ito:6,hypertext:0,soon:3,held:[2,7],through:[6,8,2,4,10],hierarchi:5,taxonomi:6,paramet:[1,2,6,7,9,10],style:[0,6,7],late:2,pend:2,might:2,good:[],"return":[1,2,5,7,8,9,10,4],sentenc:6,framework:[0,3],iff:4,compris:[6,2],max_lat:10,found:10,valid_in_request:4,truncat:7,text_plain:4,expect:[6,10,2,7],stabl:[10,4],operation:6,beyond:6,event:[6,2],queue_remov:7,etag:4,occurr:4,proxi:[10,4],advanc:[],base:[0,1,2,5,6,7,8,10,4],put:10,rcvdmessagecacheentri:2,do_foo:5,nomenclatur:[],perhap:3,assign:[1,2,5,7,8,10,4],copper:0,upper:[],exchang:[0,6,2],number:[0,1,2,6,7,8,10,4],done:[9,2],construct:[2,4],indistinguish:6,miss:10,differ:5,exponenti:[6,10],interact:6,least:[6,10,2,4],dfn:[],scheme:[8,2],store:2,schema:4,option:[0,6,2,7,8,4,10,11],head_onli:5,part:[8,6,5,2,4],pars:[9,7],consult:10,time_due_offset:2,already_given:2,notfound:10,dtl:[6,2],remot:2,remov:[1,5,2,4,7],str:4,randomli:2,expir:[6,2],built:2,equival:[6,10,2,4,7],commentari:6,self:[1,10,2,4,7],violat:4,optiondecodeerror:4,also:[0,1,2,3,5,6,7,10],append:[5,2],previou:[2,3],reach:[6,2],most:[6,10,2],clear:2,exi:4,particularli:0,uniform:0,find:[5,2],impact:6,process_timeout:2,urlsplit:5,copyright:[1,2,5,7,8,9,10,4],type_ack:10,factor:10,unus:2,max_rtt:10,express:[6,9,10],is_unsaf:4,nativ:4,longest:5,whenev:2,rfc:[0,2,7,9,11,4],common:10,rcvd_cach:2,set:[1,2,5,6,8,10,4],decompos:6,mutabl:[2,11],see:[0,6,2,7,10,4],arg:[10,2,7],reserv:[10,4],unqualifi:6,expert:4,someth:[5,2,10],particip:2,experi:4,altern:[6,2],numer:[10,2],sole:[6,9],disallow:6,succeed:6,distinguish:[10,2,7],socketendpoint:2,size1:4,both:[10,4,7],last:[6,10,2,3],"_get_messageid":10,context:6,whole:10,load:8,simpli:7,point:[0,6,8,2],instanti:2,schedul:2,to_pack:[10,4],header:5,"_get_source_endpoint":10,devic:0,due:[2,3,7],empti:[1,10,2,6,4],sinc:[6,2,7],understand:6,look:[2,4],erron:2,durat:[1,10,7],formatt:[8,4],"while":[1,2,7],abov:[6,2],error:[1,5,2,9,10],pack:[10,2,4],real:[1,8],readi:2,herein:6,itself:2,obsolet:2,belong:2,decod:[10,2,4,7],conflict:[6,10],higher:[6,11],user:[2,4],wherev:10,chang:[6,2,3,7,8,10],recent:10,lower:6,task:0,entri:[10,2,7],parenthes:6,is_no_cache_kei:4,propos:[0,2],cut:2,unsecur:8,application_exi:4,to_net_unicod:7,cue:10,deterministicbebo_mixin:1,is_unsafe_opt:4,bound_socket:2,subsequ:[2,4],format:[0,6,2,7,10,4],big:4,is_critical_opt:4,insert:[2,7],bit:[10,4],resolv:[6,10,2],collect:2,acknowledg:[6,10,2],creation:2,some:[0,6,10,2],back:[6,10,2],understood:[10,4],proxyuri:[10,4],though:2,per:[0,6,10,2,4],substitut:2,internalservererror:10,larg:6,slash:5,tx_octet:2,requestentitytoolarg:10,netloc:2,run:[0,1],registerclasscod:10,transmissionparamet:[1,8,2,10],step:8,convent:6,from:[0,1,2,3,5,6,7,9,10,4],constraint:[6,2,4],materi:2,block:[6,2,11],within:[0,6,2,5,7,9,4,10,11],is_no_cache_key_opt:4,ensur:[8,2,7],inclus:[10,4],span:6,struct_tim:7,"_get_opt":10,question:[],invalidoptionerror:4,submit:6,httprequesthandl:5,includ:[0,6,2,5,9,4,10,11],suit:10,forward:4,messagereplyerror:10,link:[0,9,4,10],translat:[6,4],atom:[],utf:[4,7],consist:[6,10,2],caller:[9,2,10],malformat:10,format_tim:7,coapsect:[],constant:11,repres:[6,10,2,4,7],incomplet:6,curl:[],sequenti:2,invalid:10,"_to_text":4,propag:[6,10],param:9,algorithm:2,localendpoint:[1,2],invalid_typ:10,do_get:5,notion:6,avoid:[6,9,2,10],getaddrinfo:2,code:[0,6,10,2],scratch:3,base_uri:2,send:[6,10,2],flowinfo:2,initial_timeout:10,sent:[6,10,2],unpacked_typ:4,implicitli:8,remoteendpointst:2,relev:[6,2,7],unquot:7,"_to_pack":4,"_get_time_du":2,impli:6,smaller:6,"__metaclass__":7,supersedur:[],client_address:5,maxag:[10,2,4],compat:10,index:0,prolept:7,access:[1,2],next_messageid:2,successrespons:10,bodi:[5,7],iesg:4,becom:[6,7],implicit:[6,4],nstart:[6,10],convert:[9,2,4,7],convers:[9,4,7],code_instance_conflict:10,implement:[0,1,2,3,5,6,7,9,4,11],badopt:10,firefox:0,target_uri:9,appli:[6,2,4,3],timedueordin:[2,7],api:[0,8],rclass:10,commun:[0,6,5,2,10],doubl:9,next:[10,7],implic:6,few:6,"_get_destination_endpoint":10,format_opaqu:4,remaind:[2,4],sort:[8,2,4,10,7],create_respons:10,messagetyp:10,linkvalu:9,account:7,retriev:[6,10,2],alia:4,endian:4,plug:0,"0x29957a0":[],control:[0,1,2,5,8,10,11],malform:4,process:[6,2,5,9,10,4],lock:8,high:0,paraphras:6,slip:1,delai:[1,10],queue_ready_prefix:7,scopeid:2,instead:[6,2],overridden:[8,2],physic:10,mjd:7,"22nd":3,bind:2,counter:6,correspond:[2,7,8,9,10,4],element:[1,2,7,9,10,4],packed_valu:4,unaccept:4,allow:[6,5,2,11,10],fallback:10,elid:[5,2],move:2,disambigu:6,infrastructur:[1,10,2,4,11],recept:[6,10,2],greater:[6,10],python:[0,2,3,5,7,4,10,11],overal:[],dai:7,servererrorrespons:10,nfc:7,mode:2,rx_octet:2,token_too_long:10,clienterrorrespons:10,consum:4,"static":[10,2,7],special:[0,1],variabl:4,"0x40b6c18":5,influenc:6,rep:7,"0x3d72650":4,stub:5,suitabl:[2,4,11],rel:[6,5,2,10],metaclass:7,clarifi:6,manipul:1,proxyschem:4,dictionari:[10,2],releas:[0,3],"_get_cod":10,could:10,length:[6,10,4],enforc:4,retain:[1,5],softwar:0,pgd:7,suffix:4,date:7,prioriti:[2,7],unknown:4,licens:[1,2,5,7,8,9,10,4],system:[8,2],messag:[0,1,2,6,7,8,4,10,11],termin:[6,7],"final":2,ipv4:2,udp:6,"0x39819d0":[],juli:3,coapyexcept:[10,2],invalid_opt:10,rst:[6,10,2],exactli:[6,11],structur:4,charact:[9,7],reposit:[2,7],exhibit:0,"function":[5,2,4,10,7],httpresourc:5,julian:7,clearli:[],corrupt:2,have:[0,6,5,2,4],close:2,need:[1,5,2,10],turn:[6,5],min:4,rout:10,"0x01":4,"0x02":4,mix:[1,10],which:[0,1,2,3,5,6,7,8,10,4],token_mismatch:2,make_bebo:10,uninterpret:4,singl:[6,5,9],unless:[6,8,2],rfc3986:2,eight:6,segment:[5,2,4],"class":[1,2,5,6,7,8,9,10,4],url:7,request:[6,2,5,11,10,4],uri:[0,6,2,5,8,9,10,4],determin:[1,2,6,4],constrain:[0,6,2],text:[0,6,2,7,9,10,4],locat:[5,2],queue_insert:7,should:[1,2,6,7,8,10,11],last_heard_clk:2,local:[2,4],meant:[],contribut:[2,4],approv:4,autom:8,notimpl:10,increas:7,"_format_bas":4,tbd:[],enabl:1,bisect:7,expires_clk:2,contain:[4,7],view:2,conform:[2,3],packet:0,correctli:4,pattern:6,tx_octets_since_heard:2,favor:2,state:[0,6,8,2],progress:6,neither:[6,10],kei:[9,2,4,11,10],unnot:1,group:0,rx_messag:2,addit:[6,4,11],uriport:[10,2,4],emptiabl:6,etc:6,instanc:[1,2,5,7,8,10,4],committe:3,unclear:6,badgatewai:10,arriv:10,"_add":2,create_repli:10,respect:[6,10,2],optionregistryconflicterror:4,mailman:[],url_quot:7,addition:11,compon:[6,5,10],json:4,treat:[10,4],immedi:2,upcom:7,assert:[3,7],togeth:6,application_link_format:4,determinist:[1,8],plain:4,classreadonli:7,zero_length_payload:10,observ:[0,6,11],layer:[0,6,10,2,4],bind_and_activ:5,almost:2,motiv:11,dual:2,retransmissions_remain:10,incom:2,tx_messag:2,locationqueri:4,cross:[0,6],handl:[10,5,11,7],all_match:4,managedclock:[1,8],http:5,hostnam:2,upon:[],effect:[6,2,7],"0x2f467a0":[],ack_random_factor:[1,10,6],lookup_resourc:5,decoupl:11,off:[0,6,10],well:[0,11,7],exampl:[10,7],command:5,undefin:6,usual:4,lossi:0,obtain:[8,2,10],split_uri:5,"0x23f9ed0":[],simultan:6,"11t10":7,web:[0,5],to_display_text:7,encode_opt:4,"0x43d6050":[],add:[8,5,2,10],cleanup:[1,2],logger:1,adj:8,match:[6,5,2,4,10],gmt:[],know:2,recurs:6,loss:0,like:[5,2,7],success:[6,10],basehttpserv:5,necessari:[6,9,2,4,7],page:0,exceed:2,retransmit:[10,2],convei:[6,10],captur:1,phenomena:8,"0x3d596d0":[],mtype:10,superclass:7,flush:1,peter:[1,2,5,7,8,9,10,4],transport:[6,10,2,4],lead:4,server_address:5,octet:[6,10,2,4],unrepli:10,leav:6,queue_reposit:7,speak:6,slight:6,usag:[],security_mod:[1,2],host:[1,5,2,6,4],dissert:0,although:[6,2],stage:2,about:10,actual:2,socket:[1,5,2],justif:10,datagram:10,lifecycl:2,constructor:[5,2,10],"_reposit":2,own:[6,10,7],automat:[5,2],"0x3bfca90":8,optionlengtherror:4,leverag:6,invalidoptiontypeerror:4,transfer:[0,6,2],mediatyperegistr:[],deliveri:1,receipt:6,unexpect:1,basic:6,succe:[6,2],made:[6,8,9,7],whether:[6,2],wish:2,record:[1,8,2],limit:[0,2,7],otherwis:[6,10,2,4,7],display:7,sponsor:3,sockaddr:[1,2],"int":[8,4],dure:4,packed_messag:10,probabl:[8,2],percent:7,detail:[6,10,11],virtual:4,other:[6,8,2,4,10],lookup:[5,2],varieti:4,repeat:4,messagecacheentri:2,unrecognized_critical_opt:10,reliabl:10,rule:6,do_head:5},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:classmethod","6":"py:exception","7":"py:staticmethod","8":"py:data"},titles:["CoAPy: Python Implementation of Constrained Application Protocol","tests.support","coapy.endpoint","Release History","coapy.option","coapy.httputil","Domain Concepts","coapy.util","API","coapy.resource","coapy.message","Architectural Vision"],objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","classmethod","Python class method"],"6":["py","exception","Python exception"],"7":["py","staticmethod","Python static method"],"8":["py","data","Python data"]},filenames:["index","tests_support","coapy_endpoint","releases","coapy_option","coapy_httputil","domain","coapy_util","api","coapy_resource","coapy_message","vision"]})