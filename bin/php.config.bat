echo [PHP]                                                                                                > %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;                                                                                >> %PHP_HOME%/php.ini
echo ; Language Options ;                                                                                >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;                                                                                >> %PHP_HOME%/php.ini
echo engine = On                                                                                         >> %PHP_HOME%/php.ini
echo short_open_tag = Off                                                                                >> %PHP_HOME%/php.ini
echo precision = 14                                                                                      >> %PHP_HOME%/php.ini
echo output_buffering = 4096                                                                             >> %PHP_HOME%/php.ini
echo ;output_handler =                                                                                   >> %PHP_HOME%/php.ini
echo zlib.output_compression = Off                                                                       >> %PHP_HOME%/php.ini
echo ;zlib.output_compression_level = -1                                                                 >> %PHP_HOME%/php.ini
echo ;zlib.output_handler =                                                                              >> %PHP_HOME%/php.ini
echo implicit_flush = Off                                                                                >> %PHP_HOME%/php.ini
echo unserialize_callback_func =                                                                         >> %PHP_HOME%/php.ini
echo serialize_precision = -1                                                                            >> %PHP_HOME%/php.ini
echo ;open_basedir =                                                                                     >> %PHP_HOME%/php.ini
echo disable_functions =                                                                                 >> %PHP_HOME%/php.ini
echo disable_classes =                                                                                   >> %PHP_HOME%/php.ini
echo zend.enable_gc = On                                                                                 >> %PHP_HOME%/php.ini
echo ;zend.multibyte = Off                                                                               >> %PHP_HOME%/php.ini
echo ;zend.script_encoding =                                                                             >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;                                                                                   >> %PHP_HOME%/php.ini
echo ; Miscellaneous ;                                                                                   >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;                                                                                   >> %PHP_HOME%/php.ini
echo expose_php = On                                                                                     >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                                                 >> %PHP_HOME%/php.ini
echo ; Resource Limits ;                                                                                 >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                                                 >> %PHP_HOME%/php.ini
echo max_execution_time = 30                                                                             >> %PHP_HOME%/php.ini
echo max_input_time = 60                                                                                 >> %PHP_HOME%/php.ini
echo ;max_input_nesting_level = 64                                                                       >> %PHP_HOME%/php.ini
echo ; max_input_vars = 1000                                                                             >> %PHP_HOME%/php.ini
echo memory_limit = 128M                                                                                 >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                                                      >> %PHP_HOME%/php.ini
echo ; Error handling and logging ;                                                                      >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                                                      >> %PHP_HOME%/php.ini
echo error_reporting = E_ALL ^& ~E_DEPRECATED ^& ~E_STRICT                                                 >> %PHP_HOME%/php.ini
echo display_errors = Off                                                                                >> %PHP_HOME%/php.ini
echo display_startup_errors = Off                                                                        >> %PHP_HOME%/php.ini
echo log_errors = On                                                                                     >> %PHP_HOME%/php.ini
echo log_errors_max_len = 1024                                                                           >> %PHP_HOME%/php.ini
echo ignore_repeated_errors = Off                                                                        >> %PHP_HOME%/php.ini
echo ignore_repeated_source = Off                                                                        >> %PHP_HOME%/php.ini
echo report_memleaks = On                                                                                >> %PHP_HOME%/php.ini
echo track_errors = Off                                                                                  >> %PHP_HOME%/php.ini
echo ;xmlrpc_errors = 0                                                                                  >> %PHP_HOME%/php.ini
echo ;xmlrpc_error_number = 0                                                                            >> %PHP_HOME%/php.ini
echo html_errors = On                                                                                    >> %PHP_HOME%/php.ini
echo ;docref_root = "/phpmanual/"                                                                        >> %PHP_HOME%/php.ini
echo ;docref_ext = .html                                                                                 >> %PHP_HOME%/php.ini
echo ;error_prepend_string = "<span style='color: #ff0000'>"                                             >> %PHP_HOME%/php.ini
echo ;error_append_string = "</span>"                                                                    >> %PHP_HOME%/php.ini
echo ;error_log = php_errors.log                                                                         >> %PHP_HOME%/php.ini
echo ;error_log = syslog                                                                                 >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;                                                                                   >> %PHP_HOME%/php.ini
echo ; Data Handling ;                                                                                   >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;                                                                                   >> %PHP_HOME%/php.ini
echo ;arg_separator.output = "&amp;"                                                                     >> %PHP_HOME%/php.ini
echo ;arg_separator.input = ";&"                                                                         >> %PHP_HOME%/php.ini
echo variables_order = "GPCS"                                                                            >> %PHP_HOME%/php.ini
echo request_order = "GP"                                                                                >> %PHP_HOME%/php.ini
echo register_argc_argv = Off                                                                            >> %PHP_HOME%/php.ini
echo auto_globals_jit = On                                                                               >> %PHP_HOME%/php.ini
echo ;enable_post_data_reading = Off                                                                     >> %PHP_HOME%/php.ini
echo post_max_size = 8M                                                                                  >> %PHP_HOME%/php.ini
echo auto_prepend_file =                                                                                 >> %PHP_HOME%/php.ini
echo auto_append_file =                                                                                  >> %PHP_HOME%/php.ini
echo default_mimetype = "text/html"                                                                      >> %PHP_HOME%/php.ini
echo default_charset = "UTF-8"                                                                           >> %PHP_HOME%/php.ini
echo ;internal_encoding =                                                                                >> %PHP_HOME%/php.ini
echo ;input_encoding =                                                                                   >> %PHP_HOME%/php.ini
echo ;output_encoding =                                                                                  >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;                                                                           >> %PHP_HOME%/php.ini
echo ; Paths and Directories ;                                                                           >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;;;;                                                                           >> %PHP_HOME%/php.ini
echo ; UNIX: "/path1:/path2"                                                                             >> %PHP_HOME%/php.ini
echo ;include_path = ".:/php/includes"                                                                   >> %PHP_HOME%/php.ini
echo ;                                                                                                   >> %PHP_HOME%/php.ini
echo ; Windows: "\path1;\path2"                                                                          >> %PHP_HOME%/php.ini
echo ;include_path = ".;c:\php\includes"                                                                 >> %PHP_HOME%/php.ini
echo doc_root =                                                                                          >> %PHP_HOME%/php.ini
echo user_dir =                                                                                          >> %PHP_HOME%/php.ini
echo extension_dir = "%PHP_HOME%\ext"                                                                    >> %PHP_HOME%/php.ini
echo enable_dl = Off                                                                                     >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;                                                                                    >> %PHP_HOME%/php.ini
echo ; File Uploads ;                                                                                    >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;                                                                                    >> %PHP_HOME%/php.ini
echo file_uploads = On                                                                                   >> %PHP_HOME%/php.ini
echo ;upload_tmp_dir =                                                                                   >> %PHP_HOME%/php.ini
echo upload_max_filesize = 2M                                                                            >> %PHP_HOME%/php.ini
echo max_file_uploads = 20                                                                               >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;                                                                                  >> %PHP_HOME%/php.ini
echo ; Fopen wrappers ;                                                                                  >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;                                                                                  >> %PHP_HOME%/php.ini
echo allow_url_fopen = On                                                                                >> %PHP_HOME%/php.ini
echo allow_url_include = Off                                                                             >> %PHP_HOME%/php.ini
echo default_socket_timeout = 60                                                                         >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;                                                                              >> %PHP_HOME%/php.ini
echo ; Dynamic Extensions ;                                                                              >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;;;;                                                                              >> %PHP_HOME%/php.ini
echo ;extension=php_bz2.dll                                                                              >> %PHP_HOME%/php.ini
echo ;extension=php_curl.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_fileinfo.dll                                                                         >> %PHP_HOME%/php.ini
echo ;extension=php_ftp.dll                                                                              >> %PHP_HOME%/php.ini
echo ;extension=php_gd2.dll                                                                              >> %PHP_HOME%/php.ini
echo ;extension=php_gettext.dll                                                                          >> %PHP_HOME%/php.ini
echo ;extension=php_gmp.dll                                                                              >> %PHP_HOME%/php.ini
echo ;extension=php_intl.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_imap.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_interbase.dll                                                                        >> %PHP_HOME%/php.ini
echo ;extension=php_ldap.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_mbstring.dll                                                                         >> %PHP_HOME%/php.ini
echo ;extension=php_exif.dll      ; Must be after mbstring as it depends on it                           >> %PHP_HOME%/php.ini
echo extension=php_mysqli.dll                                                                            >> %PHP_HOME%/php.ini
echo ;extension=php_oci8_12c.dll  ; Use with Oracle Database 12c Instant Client                          >> %PHP_HOME%/php.ini
echo ;extension=php_odbc.dll                                                                             >> %PHP_HOME%/php.ini
echo extension=php_openssl.dll                                                                           >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_firebird.dll                                                                     >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_mysql.dll                                                                        >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_oci.dll                                                                          >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_odbc.dll                                                                         >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_pgsql.dll                                                                        >> %PHP_HOME%/php.ini
echo ;extension=php_pdo_sqlite.dll                                                                       >> %PHP_HOME%/php.ini
echo ;extension=php_pgsql.dll                                                                            >> %PHP_HOME%/php.ini
echo ;extension=php_shmop.dll                                                                            >> %PHP_HOME%/php.ini
echo ;extension=php_snmp.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_soap.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_sockets.dll                                                                          >> %PHP_HOME%/php.ini
echo ;extension=php_sqlite3.dll                                                                          >> %PHP_HOME%/php.ini
echo ;extension=php_tidy.dll                                                                             >> %PHP_HOME%/php.ini
echo ;extension=php_xmlrpc.dll                                                                           >> %PHP_HOME%/php.ini
echo ;extension=php_xsl.dll                                                                              >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                                                 >> %PHP_HOME%/php.ini
echo ; Module Settings ;                                                                                 >> %PHP_HOME%/php.ini
echo ;;;;;;;;;;;;;;;;;;;                                                                                 >> %PHP_HOME%/php.ini
echo [CLI Server]                                                                                        >> %PHP_HOME%/php.ini
echo cli_server.color = On                                                                               >> %PHP_HOME%/php.ini
echo [Date]                                                                                              >> %PHP_HOME%/php.ini
echo [filter]                                                                                            >> %PHP_HOME%/php.ini
echo [iconv]                                                                                             >> %PHP_HOME%/php.ini
echo [intl]                                                                                              >> %PHP_HOME%/php.ini
echo [sqlite3]                                                                                           >> %PHP_HOME%/php.ini
echo [Pcre]                                                                                              >> %PHP_HOME%/php.ini
echo [Pdo]                                                                                               >> %PHP_HOME%/php.ini
echo [Pdo_mysql]                                                                                         >> %PHP_HOME%/php.ini
echo pdo_mysql.cache_size = 2000                                                                         >> %PHP_HOME%/php.ini
echo pdo_mysql.default_socket=                                                                           >> %PHP_HOME%/php.ini
echo [Phar]                                                                                              >> %PHP_HOME%/php.ini
echo [mail function]                                                                                     >> %PHP_HOME%/php.ini
echo SMTP = localhost                                                                                    >> %PHP_HOME%/php.ini
echo smtp_port = 25                                                                                      >> %PHP_HOME%/php.ini
echo mail.add_x_header = Off                                                                             >> %PHP_HOME%/php.ini
echo [SQL]                                                                                               >> %PHP_HOME%/php.ini
echo sql.safe_mode = Off                                                                                 >> %PHP_HOME%/php.ini
echo [ODBC]                                                                                              >> %PHP_HOME%/php.ini
echo ;odbc.default_db    =  Not yet implemented                                                          >> %PHP_HOME%/php.ini
echo ;odbc.default_user  =  Not yet implemented                                                          >> %PHP_HOME%/php.ini
echo ;odbc.default_pw    =  Not yet implemented                                                          >> %PHP_HOME%/php.ini
echo ;odbc.default_cursortype                                                                            >> %PHP_HOME%/php.ini
echo odbc.allow_persistent = On                                                                          >> %PHP_HOME%/php.ini
echo odbc.check_persistent = On                                                                          >> %PHP_HOME%/php.ini
echo odbc.max_persistent = -1                                                                            >> %PHP_HOME%/php.ini
echo odbc.max_links = -1                                                                                 >> %PHP_HOME%/php.ini
echo odbc.defaultlrl = 4096                                                                              >> %PHP_HOME%/php.ini
echo odbc.defaultbinmode = 1                                                                             >> %PHP_HOME%/php.ini
echo [Interbase]                                                                                         >> %PHP_HOME%/php.ini
echo ibase.allow_persistent = 1                                                                          >> %PHP_HOME%/php.ini
echo ibase.max_persistent = -1                                                                           >> %PHP_HOME%/php.ini
echo ibase.max_links = -1                                                                                >> %PHP_HOME%/php.ini
echo ;ibase.default_db =                                                                                 >> %PHP_HOME%/php.ini
echo ;ibase.default_user =                                                                               >> %PHP_HOME%/php.ini
echo ;ibase.default_password =                                                                           >> %PHP_HOME%/php.ini
echo ; Default charset for ibase_connect().                                                              >> %PHP_HOME%/php.ini
echo ;ibase.default_charset =                                                                            >> %PHP_HOME%/php.ini
echo ibase.timestampformat = "%%Y-%%m-%%d %%H:%%M:%%S"                                                         >> %PHP_HOME%/php.ini
echo ibase.dateformat = "%%Y-%%m-%%d"                                                                       >> %PHP_HOME%/php.ini
echo ibase.timeformat = "%%H:%%M:%%S"                                                                       >> %PHP_HOME%/php.ini
echo [MySQLi]                                                                                            >> %PHP_HOME%/php.ini
echo mysqli.max_persistent = -1                                                                          >> %PHP_HOME%/php.ini
echo ;mysqli.allow_local_infile = On                                                                     >> %PHP_HOME%/php.ini
echo mysqli.allow_persistent = On                                                                        >> %PHP_HOME%/php.ini
echo mysqli.max_links = -1                                                                               >> %PHP_HOME%/php.ini
echo mysqli.cache_size = 2000                                                                            >> %PHP_HOME%/php.ini
echo mysqli.default_port = 3306                                                                          >> %PHP_HOME%/php.ini
echo mysqli.default_socket =                                                                             >> %PHP_HOME%/php.ini
echo mysqli.default_host =                                                                               >> %PHP_HOME%/php.ini
echo mysqli.default_user =                                                                               >> %PHP_HOME%/php.ini
echo mysqli.default_pw =                                                                                 >> %PHP_HOME%/php.ini
echo mysqli.reconnect = Off                                                                              >> %PHP_HOME%/php.ini
echo [mysqlnd]                                                                                           >> %PHP_HOME%/php.ini
echo mysqlnd.collect_statistics = On                                                                     >> %PHP_HOME%/php.ini
echo mysqlnd.collect_memory_statistics = Off                                                             >> %PHP_HOME%/php.ini
echo [OCI8]                                                                                              >> %PHP_HOME%/php.ini
echo [PostgreSQL]                                                                                        >> %PHP_HOME%/php.ini
echo pgsql.allow_persistent = On                                                                         >> %PHP_HOME%/php.ini
echo pgsql.auto_reset_persistent = Off                                                                   >> %PHP_HOME%/php.ini
echo pgsql.max_persistent = -1                                                                           >> %PHP_HOME%/php.ini
echo pgsql.max_links = -1                                                                                >> %PHP_HOME%/php.ini
echo pgsql.ignore_notice = 0                                                                             >> %PHP_HOME%/php.ini
echo pgsql.log_notice = 0                                                                                >> %PHP_HOME%/php.ini
echo [bcmath]                                                                                            >> %PHP_HOME%/php.ini
echo bcmath.scale = 0                                                                                    >> %PHP_HOME%/php.ini
echo [browscap]                                                                                          >> %PHP_HOME%/php.ini
echo [Session]                                                                                           >> %PHP_HOME%/php.ini
echo session.save_handler = files                                                                        >> %PHP_HOME%/php.ini
echo ;session.save_path = "/tmp"                                                                         >> %PHP_HOME%/php.ini
echo session.use_strict_mode = 0                                                                         >> %PHP_HOME%/php.ini
echo session.use_cookies = 1                                                                             >> %PHP_HOME%/php.ini
echo session.use_only_cookies = 1                                                                        >> %PHP_HOME%/php.ini
echo session.name = PHPSESSID                                                                            >> %PHP_HOME%/php.ini
echo session.auto_start = 0                                                                              >> %PHP_HOME%/php.ini
echo session.cookie_lifetime = 0                                                                         >> %PHP_HOME%/php.ini
echo session.cookie_path = /                                                                             >> %PHP_HOME%/php.ini
echo session.cookie_domain =                                                                             >> %PHP_HOME%/php.ini
echo session.cookie_httponly =                                                                           >> %PHP_HOME%/php.ini
echo session.serialize_handler = php                                                                     >> %PHP_HOME%/php.ini
echo session.gc_probability = 1                                                                          >> %PHP_HOME%/php.ini
echo session.gc_divisor = 1000                                                                           >> %PHP_HOME%/php.ini
echo session.gc_maxlifetime = 1440                                                                       >> %PHP_HOME%/php.ini
echo session.referer_check =                                                                             >> %PHP_HOME%/php.ini
echo session.cache_limiter = nocache                                                                     >> %PHP_HOME%/php.ini
echo session.cache_expire = 180                                                                          >> %PHP_HOME%/php.ini
echo session.use_trans_sid = 0                                                                           >> %PHP_HOME%/php.ini
echo session.sid_length = 26                                                                             >> %PHP_HOME%/php.ini
echo session.trans_sid_tags = "a=href,area=href,frame=src,form="                                         >> %PHP_HOME%/php.ini
echo session.sid_bits_per_character = 5                                                                  >> %PHP_HOME%/php.ini
echo [Assertion]                                                                                         >> %PHP_HOME%/php.ini
echo zend.assertions = -1                                                                                >> %PHP_HOME%/php.ini
echo [COM]                                                                                               >> %PHP_HOME%/php.ini
echo [mbstring]                                                                                          >> %PHP_HOME%/php.ini
echo [gd]                                                                                                >> %PHP_HOME%/php.ini
echo [exif]                                                                                              >> %PHP_HOME%/php.ini
echo [Tidy]                                                                                              >> %PHP_HOME%/php.ini
echo tidy.clean_output = Off                                                                             >> %PHP_HOME%/php.ini
echo [soap]                                                                                              >> %PHP_HOME%/php.ini
echo soap.wsdl_cache_enabled=1                                                                           >> %PHP_HOME%/php.ini
echo soap.wsdl_cache_dir="/tmp"                                                                          >> %PHP_HOME%/php.ini
echo soap.wsdl_cache_ttl=86400                                                                           >> %PHP_HOME%/php.ini
echo soap.wsdl_cache_limit = 5                                                                           >> %PHP_HOME%/php.ini
echo [sysvshm]                                                                                           >> %PHP_HOME%/php.ini
echo [ldap]                                                                                              >> %PHP_HOME%/php.ini
echo ldap.max_links = -1                                                                                 >> %PHP_HOME%/php.ini
echo [mcrypt]                                                                                            >> %PHP_HOME%/php.ini
echo [dba]                                                                                               >> %PHP_HOME%/php.ini
echo [opcache]                                                                                           >> %PHP_HOME%/php.ini
echo [curl]                                                                                              >> %PHP_HOME%/php.ini
echo [openssl]                                                                                           >> %PHP_HOME%/php.ini
