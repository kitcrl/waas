echo [PHP]                                                               > %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;                                               >> %PHP_HOME%\php.ini
echo ; Language Options ;                                               >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;                                               >> %PHP_HOME%\php.ini
echo engine = On                                                        >> %PHP_HOME%\php.ini
echo short_open_tag = Off                                               >> %PHP_HOME%\php.ini
echo precision = 14                                                     >> %PHP_HOME%\php.ini
echo output_buffering = 4096                                            >> %PHP_HOME%\php.ini
echo ;url_rewriter.tags                                                 >> %PHP_HOME%\php.ini
echo ;url_rewriter.hosts                                                >> %PHP_HOME%\php.ini
echo zlib.output_compression = Off                                      >> %PHP_HOME%\php.ini
echo ;zlib.output_compression_level = -1                                >> %PHP_HOME%\php.ini
echo ;zlib.output_handler =                                             >> %PHP_HOME%\php.ini
echo implicit_flush = Off                                               >> %PHP_HOME%\php.ini
echo unserialize_callback_func =                                        >> %PHP_HOME%\php.ini
echo ;unserialize_max_depth = 4096                                      >> %PHP_HOME%\php.ini
echo serialize_precision = -1                                           >> %PHP_HOME%\php.ini
echo ;open_basedir =                                                    >> %PHP_HOME%\php.ini
echo disable_functions =                                                >> %PHP_HOME%\php.ini
echo disable_classes =                                                  >> %PHP_HOME%\php.ini
echo ;highlight.string  = #DD0000                                       >> %PHP_HOME%\php.ini
echo ;highlight.comment = #FF9900                                       >> %PHP_HOME%\php.ini
echo ;highlight.keyword = #007700                                       >> %PHP_HOME%\php.ini
echo ;highlight.default = #0000BB                                       >> %PHP_HOME%\php.ini
echo ;highlight.html    = #000000                                       >> %PHP_HOME%\php.ini
echo ;ignore_user_abort = On                                            >> %PHP_HOME%\php.ini
echo ;realpath_cache_size = 4096k                                       >> %PHP_HOME%\php.ini
echo ;realpath_cache_ttl = 120                                          >> %PHP_HOME%\php.ini
echo zend.enable_gc = On                                                >> %PHP_HOME%\php.ini
echo ;zend.multibyte = Off                                              >> %PHP_HOME%\php.ini
echo ;zend.script_encoding =                                            >> %PHP_HOME%\php.ini
echo zend.exception_ignore_args = On                                    >> %PHP_HOME%\php.ini
echo zend.exception_string_param_max_len = 0                            >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;                                                  >> %PHP_HOME%\php.ini
echo ; Miscellaneous ;                                                  >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;                                                  >> %PHP_HOME%\php.ini
echo expose_php = On                                                    >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                >> %PHP_HOME%\php.ini
echo ; Resource Limits ;                                                >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                >> %PHP_HOME%\php.ini
echo max_execution_time = 30                                            >> %PHP_HOME%\php.ini
echo max_input_time = 60                                                >> %PHP_HOME%\php.ini
echo ;max_input_nesting_level = 64                                      >> %PHP_HOME%\php.ini
echo ;max_input_vars = 1000                                             >> %PHP_HOME%\php.ini
echo ;max_multipart_body_parts = 1500                                   >> %PHP_HOME%\php.ini
echo memory_limit = 128M                                                >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                     >> %PHP_HOME%\php.ini
echo ; Error handling and logging ;                                     >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                     >> %PHP_HOME%\php.ini
echo error_reporting = E_ALL ^& ~E_DEPRECATED ^& ~E_STRICT              >> %PHP_HOME%\php.ini
echo display_errors = Off                                               >> %PHP_HOME%\php.ini
echo display_startup_errors = Off                                       >> %PHP_HOME%\php.ini
echo log_errors = On                                                    >> %PHP_HOME%\php.ini
echo ignore_repeated_errors = Off                                       >> %PHP_HOME%\php.ini
echo ignore_repeated_source = Off                                       >> %PHP_HOME%\php.ini
echo report_memleaks = On                                               >> %PHP_HOME%\php.ini
echo ;xmlrpc_errors = 0                                                 >> %PHP_HOME%\php.ini
echo ;xmlrpc_error_number = 0                                           >> %PHP_HOME%\php.ini
echo ;html_errors = On                                                  >> %PHP_HOME%\php.ini
echo ;docref_root = "/phpmanual/"                                       >> %PHP_HOME%\php.ini
echo ;docref_ext = .html                                                >> %PHP_HOME%\php.ini
echo ;error_prepend_string = "<span style='color: #ff0000'>"            >> %PHP_HOME%\php.ini
echo ;error_append_string = "</span>"                                   >> %PHP_HOME%\php.ini
echo ;error_log = php_errors.log                                        >> %PHP_HOME%\php.ini
echo ;error_log = syslog                                                >> %PHP_HOME%\php.ini
echo ;syslog.ident = php                                                >> %PHP_HOME%\php.ini
echo ;syslog.facility = user                                            >> %PHP_HOME%\php.ini
echo ;syslog.filter = ascii                                             >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;                                                  >> %PHP_HOME%\php.ini
echo ; Data Handling ;                                                  >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;                                                  >> %PHP_HOME%\php.ini
echo ;arg_separator.output = "&amp;"                                    >> %PHP_HOME%\php.ini
echo ;arg_separator.input = ";&"                                        >> %PHP_HOME%\php.ini
echo variables_order = "GPCS"                                           >> %PHP_HOME%\php.ini
echo request_order = "GP"                                               >> %PHP_HOME%\php.ini
echo register_argc_argv = Off                                           >> %PHP_HOME%\php.ini
echo auto_globals_jit = On                                              >> %PHP_HOME%\php.ini
echo ;enable_post_data_reading = Off                                    >> %PHP_HOME%\php.ini
echo post_max_size = 8M                                                 >> %PHP_HOME%\php.ini
echo auto_prepend_file =                                                >> %PHP_HOME%\php.ini
echo auto_append_file =                                                 >> %PHP_HOME%\php.ini
echo default_mimetype = "text/html"                                     >> %PHP_HOME%\php.ini
echo default_charset = "UTF-8"                                          >> %PHP_HOME%\php.ini
echo ;internal_encoding =                                               >> %PHP_HOME%\php.ini
echo ;input_encoding =                                                  >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;                                          >> %PHP_HOME%\php.ini
echo ; Paths and Directories ;                                          >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;                                          >> %PHP_HOME%\php.ini
echo ;include_path = ".:/php/includes"                                  >> %PHP_HOME%\php.ini
echo ;include_path = ".;c:\php\includes"                                >> %PHP_HOME%\php.ini
echo doc_root =                                                         >> %PHP_HOME%\php.ini
echo user_dir =                                                         >> %PHP_HOME%\php.ini
echo ;extension_dir = "./"                                              >> %PHP_HOME%\php.ini
echo extension_dir = "%PHP_HOME%\ext"                                   >> %PHP_HOME%\php.ini
echo ;sys_temp_dir = "/tmp"                                             >> %PHP_HOME%\php.ini
echo enable_dl = Off                                                    >> %PHP_HOME%\php.ini
echo ;cgi.force_redirect = 1                                            >> %PHP_HOME%\php.ini
echo ;cgi.nph = 1                                                       >> %PHP_HOME%\php.ini
echo ;cgi.redirect_status_env =                                         >> %PHP_HOME%\php.ini
echo ;cgi.fix_pathinfo=1                                                >> %PHP_HOME%\php.ini
echo ;cgi.discard_path=1                                                >> %PHP_HOME%\php.ini
echo ;fastcgi.impersonate = 1                                           >> %PHP_HOME%\php.ini
echo ;fastcgi.logging = 0                                               >> %PHP_HOME%\php.ini
echo ;cgi.rfc2616_headers = 0                                           >> %PHP_HOME%\php.ini
echo ;cgi.check_shebang_line=1                                          >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;                                                   >> %PHP_HOME%\php.ini
echo ; File Uploads ;                                                   >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;                                                   >> %PHP_HOME%\php.ini
echo file_uploads = On                                                  >> %PHP_HOME%\php.ini
echo ;upload_tmp_dir =                                                  >> %PHP_HOME%\php.ini
echo upload_max_filesize = 2M                                           >> %PHP_HOME%\php.ini
echo max_file_uploads = 20                                              >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;                                                 >> %PHP_HOME%\php.ini
echo ; Fopen wrappers ;                                                 >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;                                                 >> %PHP_HOME%\php.ini
echo allow_url_fopen = On                                               >> %PHP_HOME%\php.ini
echo allow_url_include = Off                                            >> %PHP_HOME%\php.ini
echo ;from="john@doe.com"                                               >> %PHP_HOME%\php.ini
echo ;user_agent="PHP"                                                  >> %PHP_HOME%\php.ini
echo default_socket_timeout = 60                                        >> %PHP_HOME%\php.ini
echo ;auto_detect_line_endings = Off                                    >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;                                             >> %PHP_HOME%\php.ini
echo ; Dynamic Extensions ;                                             >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;                                             >> %PHP_HOME%\php.ini
echo ;extension=bz2                                                     >> %PHP_HOME%\php.ini
echo ;extension=ldap                                                    >> %PHP_HOME%\php.ini
echo ;extension=curl                                                    >> %PHP_HOME%\php.ini
echo ;extension=ffi                                                     >> %PHP_HOME%\php.ini
echo ;extension=ftp                                                     >> %PHP_HOME%\php.ini
echo ;extension=fileinfo                                                >> %PHP_HOME%\php.ini
echo ;extension=gd                                                      >> %PHP_HOME%\php.ini
echo ;extension=gettext                                                 >> %PHP_HOME%\php.ini
echo ;extension=gmp                                                     >> %PHP_HOME%\php.ini
echo ;extension=intl                                                    >> %PHP_HOME%\php.ini
echo ;extension=imap                                                    >> %PHP_HOME%\php.ini
echo ;extension=mbstring                                                >> %PHP_HOME%\php.ini
echo ;extension=exif      ; Must be after mbstring as it depends on it  >> %PHP_HOME%\php.ini
echo extension=mysqli                                                   >> %PHP_HOME%\php.ini
echo ;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client >> %PHP_HOME%\php.ini
echo ;extension=oci8_19  ; Use with Oracle Database 19 Instant Client   >> %PHP_HOME%\php.ini
echo ;extension=odbc                                                    >> %PHP_HOME%\php.ini
echo extension=openssl                                                  >> %PHP_HOME%\php.ini
echo ;extension=pdo_firebird                                            >> %PHP_HOME%\php.ini
echo ;extension=pdo_mysql                                               >> %PHP_HOME%\php.ini
echo ;extension=pdo_oci                                                 >> %PHP_HOME%\php.ini
echo ;extension=pdo_odbc                                                >> %PHP_HOME%\php.ini
echo ;extension=pdo_pgsql                                               >> %PHP_HOME%\php.ini
echo ;extension=pdo_sqlite                                              >> %PHP_HOME%\php.ini
echo ;extension=pgsql                                                   >> %PHP_HOME%\php.ini
echo ;extension=shmop                                                   >> %PHP_HOME%\php.ini
echo ;extension=snmp                                                    >> %PHP_HOME%\php.ini
echo ;extension=soap                                                    >> %PHP_HOME%\php.ini
echo ;extension=sockets                                                 >> %PHP_HOME%\php.ini
echo ;extension=sodium                                                  >> %PHP_HOME%\php.ini
echo ;extension=sqlite3                                                 >> %PHP_HOME%\php.ini
echo ;extension=tidy                                                    >> %PHP_HOME%\php.ini
echo ;extension=xsl                                                     >> %PHP_HOME%\php.ini
echo ;extension=zip                                                     >> %PHP_HOME%\php.ini
echo ;zend_extension=opcache                                            >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                >> %PHP_HOME%\php.ini
echo ; Module Settings ;                                                >> %PHP_HOME%\php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                >> %PHP_HOME%\php.ini
echo [CLI Server]                                                       >> %PHP_HOME%\php.ini
echo cli_server.color = On                                              >> %PHP_HOME%\php.ini
echo [Date]                                                             >> %PHP_HOME%\php.ini
echo ;date.timezone =                                                   >> %PHP_HOME%\php.ini
echo ;date.default_latitude = 31.7667                                   >> %PHP_HOME%\php.ini
echo ;date.default_longitude = 35.2333                                  >> %PHP_HOME%\php.ini
echo ;date.sunrise_zenith = 90.833333                                   >> %PHP_HOME%\php.ini
echo ;date.sunset_zenith = 90.833333                                    >> %PHP_HOME%\php.ini
echo [filter]                                                           >> %PHP_HOME%\php.ini
echo ;filter.default = unsafe_raw                                       >> %PHP_HOME%\php.ini
echo ;filter.default_flags =                                            >> %PHP_HOME%\php.ini
echo [iconv]                                                            >> %PHP_HOME%\php.ini
echo ;iconv.input_encoding =                                            >> %PHP_HOME%\php.ini
echo ;iconv.internal_encoding =                                         >> %PHP_HOME%\php.ini
echo ;iconv.output_encoding =                                           >> %PHP_HOME%\php.ini
echo [imap]                                                             >> %PHP_HOME%\php.ini
echo ;imap.enable_insecure_rsh=0                                        >> %PHP_HOME%\php.ini
echo [intl]                                                             >> %PHP_HOME%\php.ini
echo ;intl.default_locale =                                             >> %PHP_HOME%\php.ini
echo ;intl.error_level = E_WARNING                                      >> %PHP_HOME%\php.ini
echo ;intl.use_exceptions = 0                                           >> %PHP_HOME%\php.ini
echo [sqlite3]                                                          >> %PHP_HOME%\php.ini
echo ;sqlite3.extension_dir =                                           >> %PHP_HOME%\php.ini
echo ;sqlite3.defensive = 1                                             >> %PHP_HOME%\php.ini
echo [Pcre]                                                             >> %PHP_HOME%\php.ini
echo ;pcre.backtrack_limit=100000                                       >> %PHP_HOME%\php.ini
echo ;pcre.recursion_limit=100000                                       >> %PHP_HOME%\php.ini
echo ;pcre.jit=1                                                        >> %PHP_HOME%\php.ini
echo [Pdo]                                                              >> %PHP_HOME%\php.ini
echo ;pdo_odbc.connection_pooling=strict                                >> %PHP_HOME%\php.ini
echo [Pdo_mysql]                                                        >> %PHP_HOME%\php.ini
echo pdo_mysql.default_socket=                                          >> %PHP_HOME%\php.ini
echo [Phar]                                                             >> %PHP_HOME%\php.ini
echo ;phar.readonly = On                                                >> %PHP_HOME%\php.ini
echo ;phar.require_hash = On                                            >> %PHP_HOME%\php.ini
echo ;phar.cache_list =                                                 >> %PHP_HOME%\php.ini
echo [mail function]                                                    >> %PHP_HOME%\php.ini
echo SMTP = localhost                                                   >> %PHP_HOME%\php.ini
echo smtp_port = 25                                                     >> %PHP_HOME%\php.ini
echo ;sendmail_from = me@example.com                                    >> %PHP_HOME%\php.ini
echo ;sendmail_path =                                                   >> %PHP_HOME%\php.ini
echo ;mail.force_extra_parameters =                                     >> %PHP_HOME%\php.ini
echo mail.add_x_header = Off                                            >> %PHP_HOME%\php.ini
echo mail.mixed_lf_and_crlf = Off                                       >> %PHP_HOME%\php.ini
echo ;mail.log =                                                        >> %PHP_HOME%\php.ini
echo ;mail.log = syslog                                                 >> %PHP_HOME%\php.ini
echo [ODBC]                                                             >> %PHP_HOME%\php.ini
echo odbc.allow_persistent = On                                         >> %PHP_HOME%\php.ini
echo odbc.check_persistent = On                                         >> %PHP_HOME%\php.ini
echo odbc.max_persistent = -1                                           >> %PHP_HOME%\php.ini
echo odbc.max_links = -1                                                >> %PHP_HOME%\php.ini
echo odbc.defaultlrl = 4096                                             >> %PHP_HOME%\php.ini
echo odbc.defaultbinmode = 1                                            >> %PHP_HOME%\php.ini
echo [MySQLi]                                                           >> %PHP_HOME%\php.ini
echo mysqli.max_persistent = -1                                         >> %PHP_HOME%\php.ini
echo ;mysqli.allow_local_infile = On                                    >> %PHP_HOME%\php.ini
echo ;mysqli.local_infile_directory =                                   >> %PHP_HOME%\php.ini
echo mysqli.allow_persistent = On                                       >> %PHP_HOME%\php.ini
echo mysqli.max_links = -1                                              >> %PHP_HOME%\php.ini
echo mysqli.default_port = 3306                                         >> %PHP_HOME%\php.ini
echo mysqli.default_socket =                                            >> %PHP_HOME%\php.ini
echo mysqli.default_host =                                              >> %PHP_HOME%\php.ini
echo mysqli.default_user =                                              >> %PHP_HOME%\php.ini
echo mysqli.default_pw =                                                >> %PHP_HOME%\php.ini
echo ;mysqli.rollback_on_cached_plink = Off                             >> %PHP_HOME%\php.ini
echo [mysqlnd]                                                          >> %PHP_HOME%\php.ini
echo mysqlnd.collect_statistics = On                                    >> %PHP_HOME%\php.ini
echo mysqlnd.collect_memory_statistics = Off                            >> %PHP_HOME%\php.ini
echo ;mysqlnd.debug =                                                   >> %PHP_HOME%\php.ini
echo ;mysqlnd.log_mask = 0                                              >> %PHP_HOME%\php.ini
echo ;mysqlnd.mempool_default_size = 16000                              >> %PHP_HOME%\php.ini
echo ;mysqlnd.net_cmd_buffer_size = 2048                                >> %PHP_HOME%\php.ini
echo ;mysqlnd.net_read_buffer_size = 32768                              >> %PHP_HOME%\php.ini
echo ;mysqlnd.net_read_timeout = 31536000                               >> %PHP_HOME%\php.ini
echo ;mysqlnd.sha256_server_public_key =                                >> %PHP_HOME%\php.ini
echo [OCI8]                                                             >> %PHP_HOME%\php.ini
echo ;oci8.privileged_connect = Off                                     >> %PHP_HOME%\php.ini
echo ;oci8.max_persistent = -1                                          >> %PHP_HOME%\php.ini
echo ;oci8.persistent_timeout = -1                                      >> %PHP_HOME%\php.ini
echo ;oci8.ping_interval = 60                                           >> %PHP_HOME%\php.ini
echo ;oci8.connection_class =                                           >> %PHP_HOME%\php.ini
echo ;oci8.events = Off                                                 >> %PHP_HOME%\php.ini
echo ;oci8.statement_cache_size = 20                                    >> %PHP_HOME%\php.ini
echo ;oci8.default_prefetch = 100                                       >> %PHP_HOME%\php.ini
echo ; oci8.prefetch_lob_size = 0                                       >> %PHP_HOME%\php.ini
echo ;oci8.old_oci_close_semantics = Off                                >> %PHP_HOME%\php.ini
echo [PostgreSQL]                                                       >> %PHP_HOME%\php.ini
echo pgsql.allow_persistent = On                                        >> %PHP_HOME%\php.ini
echo pgsql.auto_reset_persistent = Off                                  >> %PHP_HOME%\php.ini
echo pgsql.max_persistent = -1                                          >> %PHP_HOME%\php.ini
echo pgsql.max_links = -1                                               >> %PHP_HOME%\php.ini
echo pgsql.ignore_notice = 0                                            >> %PHP_HOME%\php.ini
echo pgsql.log_notice = 0                                               >> %PHP_HOME%\php.ini
echo [bcmath]                                                           >> %PHP_HOME%\php.ini
echo bcmath.scale = 0                                                   >> %PHP_HOME%\php.ini
echo [browscap]                                                         >> %PHP_HOME%\php.ini
echo ;browscap = extra/browscap.ini                                     >> %PHP_HOME%\php.ini
echo [Session]                                                          >> %PHP_HOME%\php.ini
echo session.save_handler = files                                       >> %PHP_HOME%\php.ini
echo ;session.save_path = "/tmp"                                        >> %PHP_HOME%\php.ini
echo session.use_strict_mode = 0                                        >> %PHP_HOME%\php.ini
echo session.use_cookies = 1                                            >> %PHP_HOME%\php.ini
echo session.use_only_cookies = 1                                       >> %PHP_HOME%\php.ini
echo session.name = PHPSESSID                                           >> %PHP_HOME%\php.ini
echo session.auto_start = 0                                             >> %PHP_HOME%\php.ini
echo session.cookie_lifetime = 0                                        >> %PHP_HOME%\php.ini
echo session.cookie_path = /                                            >> %PHP_HOME%\php.ini
echo session.cookie_domain =                                            >> %PHP_HOME%\php.ini
echo session.cookie_httponly =                                          >> %PHP_HOME%\php.ini
echo session.cookie_samesite =                                          >> %PHP_HOME%\php.ini
echo session.serialize_handler = php                                    >> %PHP_HOME%\php.ini
echo session.gc_probability = 1                                         >> %PHP_HOME%\php.ini
echo session.gc_divisor = 1000                                          >> %PHP_HOME%\php.ini
echo session.gc_maxlifetime = 1440                                      >> %PHP_HOME%\php.ini
echo session.referer_check =                                            >> %PHP_HOME%\php.ini
echo session.cache_limiter = nocache                                    >> %PHP_HOME%\php.ini
echo session.cache_expire = 180                                         >> %PHP_HOME%\php.ini
echo session.use_trans_sid = 0                                          >> %PHP_HOME%\php.ini
echo session.sid_length = 26                                            >> %PHP_HOME%\php.ini
echo session.trans_sid_tags = "a=href,area=href,frame=src,form="        >> %PHP_HOME%\php.ini
echo ;session.trans_sid_hosts=""                                        >> %PHP_HOME%\php.ini
echo session.sid_bits_per_character = 5                                 >> %PHP_HOME%\php.ini
echo ;session.upload_progress.enabled = On                              >> %PHP_HOME%\php.ini
echo ;session.upload_progress.cleanup = On                              >> %PHP_HOME%\php.ini
echo ;session.upload_progress.prefix = "upload_progress_"               >> %PHP_HOME%\php.ini
echo ;session.upload_progress.name = "PHP_SESSION_UPLOAD_PROGRESS"      >> %PHP_HOME%\php.ini
echo ;session.upload_progress.freq =  "1%%"                             >> %PHP_HOME%\php.ini
echo ;session.upload_progress.min_freq = "1"                            >> %PHP_HOME%\php.ini
echo ;session.lazy_write = On                                           >> %PHP_HOME%\php.ini
echo [Assertion]                                                        >> %PHP_HOME%\php.ini
echo zend.assertions = -1                                               >> %PHP_HOME%\php.ini
echo [COM]                                                              >> %PHP_HOME%\php.ini
echo ;com.typelib_file =                                                >> %PHP_HOME%\php.ini
echo ;com.allow_dcom = true                                             >> %PHP_HOME%\php.ini
echo ;com.autoregister_typelib = true                                   >> %PHP_HOME%\php.ini
echo ;com.autoregister_casesensitive = false                            >> %PHP_HOME%\php.ini
echo ;com.autoregister_verbose = true                                   >> %PHP_HOME%\php.ini
echo ;com.code_page=                                                    >> %PHP_HOME%\php.ini
echo ;com.dotnet_version=                                               >> %PHP_HOME%\php.ini
echo [mbstring]                                                         >> %PHP_HOME%\php.ini
echo ;mbstring.language = Japanese                                      >> %PHP_HOME%\php.ini
echo ;mbstring.internal_encoding =                                      >> %PHP_HOME%\php.ini
echo ;mbstring.http_input =                                             >> %PHP_HOME%\php.ini
echo ;mbstring.http_output =                                            >> %PHP_HOME%\php.ini
echo ;mbstring.encoding_translation = Off                               >> %PHP_HOME%\php.ini
echo ;mbstring.detect_order = auto                                      >> %PHP_HOME%\php.ini
echo ;mbstring.substitute_character = none                              >> %PHP_HOME%\php.ini
echo ;mbstring.strict_detection = Off                                   >> %PHP_HOME%\php.ini
echo ;mbstring.http_output_conv_mimetypes=                              >> %PHP_HOME%\php.ini
echo ;mbstring.regex_stack_limit=100000                                 >> %PHP_HOME%\php.ini
echo ;mbstring.regex_retry_limit=1000000                                >> %PHP_HOME%\php.ini
echo [gd]                                                               >> %PHP_HOME%\php.ini
echo ;gd.jpeg_ignore_warning = 1                                        >> %PHP_HOME%\php.ini
echo [exif]                                                             >> %PHP_HOME%\php.ini
echo ;exif.encode_unicode = ISO-8859-15                                 >> %PHP_HOME%\php.ini
echo ;exif.decode_unicode_motorola = UCS-2BE                            >> %PHP_HOME%\php.ini
echo ;exif.decode_unicode_intel    = UCS-2LE                            >> %PHP_HOME%\php.ini
echo ;exif.encode_jis =                                                 >> %PHP_HOME%\php.ini
echo ;exif.decode_jis_motorola = JIS                                    >> %PHP_HOME%\php.ini
echo ;exif.decode_jis_intel    = JIS                                    >> %PHP_HOME%\php.ini
echo [Tidy]                                                             >> %PHP_HOME%\php.ini
echo ;tidy.default_config = /usr/local/lib/php/default.tcfg             >> %PHP_HOME%\php.ini
echo tidy.clean_output = Off                                            >> %PHP_HOME%\php.ini
echo [soap]                                                             >> %PHP_HOME%\php.ini
echo soap.wsdl_cache_enabled=1                                          >> %PHP_HOME%\php.ini
echo soap.wsdl_cache_dir="/tmp"                                         >> %PHP_HOME%\php.ini
echo soap.wsdl_cache_ttl=86400                                          >> %PHP_HOME%\php.ini
echo soap.wsdl_cache_limit = 5                                          >> %PHP_HOME%\php.ini
echo [sysvshm]                                                          >> %PHP_HOME%\php.ini
echo ;sysvshm.init_mem = 10000                                          >> %PHP_HOME%\php.ini
echo [ldap]                                                             >> %PHP_HOME%\php.ini
echo ldap.max_links = -1                                                >> %PHP_HOME%\php.ini
echo [dba]                                                              >> %PHP_HOME%\php.ini
echo ;dba.default_handler=                                              >> %PHP_HOME%\php.ini
echo [opcache]                                                          >> %PHP_HOME%\php.ini
echo ;opcache.enable=1                                                  >> %PHP_HOME%\php.ini
echo ;opcache.enable_cli=0                                              >> %PHP_HOME%\php.ini
echo ;opcache.memory_consumption=128                                    >> %PHP_HOME%\php.ini
echo ;opcache.interned_strings_buffer=8                                 >> %PHP_HOME%\php.ini
echo ;opcache.max_accelerated_files=10000                               >> %PHP_HOME%\php.ini
echo ;opcache.max_wasted_percentage=5                                   >> %PHP_HOME%\php.ini
echo ;opcache.use_cwd=1                                                 >> %PHP_HOME%\php.ini
echo ;opcache.validate_timestamps=1                                     >> %PHP_HOME%\php.ini
echo ;opcache.revalidate_freq=2                                         >> %PHP_HOME%\php.ini
echo ;opcache.revalidate_path=0                                         >> %PHP_HOME%\php.ini
echo ;opcache.save_comments=1                                           >> %PHP_HOME%\php.ini
echo ;opcache.record_warnings=0                                         >> %PHP_HOME%\php.ini
echo ;opcache.enable_file_override=0                                    >> %PHP_HOME%\php.ini
echo ;opcache.optimization_level=0x7FFFBFFF                             >> %PHP_HOME%\php.ini
echo ;opcache.dups_fix=0                                                >> %PHP_HOME%\php.ini
echo ;opcache.blacklist_filename=                                       >> %PHP_HOME%\php.ini
echo ;opcache.max_file_size=0                                           >> %PHP_HOME%\php.ini
echo ;opcache.force_restart_timeout=180                                 >> %PHP_HOME%\php.ini
echo ;opcache.error_log=                                                >> %PHP_HOME%\php.ini
echo ;opcache.log_verbosity_level=1                                     >> %PHP_HOME%\php.ini
echo ;opcache.preferred_memory_model=                                   >> %PHP_HOME%\php.ini
echo ;opcache.protect_memory=0                                          >> %PHP_HOME%\php.ini
echo ;opcache.restrict_api=                                             >> %PHP_HOME%\php.ini
echo ;opcache.mmap_base=                                                >> %PHP_HOME%\php.ini
echo ;opcache.cache_id=                                                 >> %PHP_HOME%\php.ini
echo ;opcache.file_cache=                                               >> %PHP_HOME%\php.ini
echo ;opcache.file_cache_only=0                                         >> %PHP_HOME%\php.ini
echo ;opcache.file_cache_consistency_checks=1                           >> %PHP_HOME%\php.ini
echo ;opcache.file_cache_fallback=1                                     >> %PHP_HOME%\php.ini
echo ;opcache.huge_code_pages=0                                         >> %PHP_HOME%\php.ini
echo ;opcache.validate_permission=0                                     >> %PHP_HOME%\php.ini
echo ;opcache.validate_root=0                                           >> %PHP_HOME%\php.ini
echo ;opcache.opt_debug_level=0                                         >> %PHP_HOME%\php.ini
echo ;opcache.preload=                                                  >> %PHP_HOME%\php.ini
echo ;opcache.preload_user=                                             >> %PHP_HOME%\php.ini
echo ;opcache.file_update_protection=2                                  >> %PHP_HOME%\php.ini
echo ;opcache.lockfile_path=/tmp                                        >> %PHP_HOME%\php.ini
echo [curl]                                                             >> %PHP_HOME%\php.ini
echo ;curl.cainfo =                                                     >> %PHP_HOME%\php.ini
echo [openssl]                                                          >> %PHP_HOME%\php.ini
echo ;openssl.cafile=                                                   >> %PHP_HOME%\php.ini
echo ;openssl.capath=                                                   >> %PHP_HOME%\php.ini
echo [ffi]                                                              >> %PHP_HOME%\php.ini
echo ;ffi.enable=preload                                                >> %PHP_HOME%\php.ini
echo ;ffi.preload=                                                      >> %PHP_HOME%\php.ini