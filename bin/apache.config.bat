echo Define SRVROOT "%APACHE_HOME%"                                                                                  > %APACHE_HOME%/conf/httpd.conf
echo Define DOCROOT "%DOC_ROOT%"                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo Define EXTROOT "%EXT_ROOT%"                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo ServerRoot "${SRVROOT}"                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo Listen 80                                                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule access_compat_module modules/mod_access_compat.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule actions_module modules/mod_actions.so                                                               >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule alias_module modules/mod_alias.so                                                                   >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule allowmethods_module modules/mod_allowmethods.so                                                     >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule asis_module modules/mod_asis.so                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule auth_basic_module modules/mod_auth_basic.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule auth_digest_module modules/mod_auth_digest.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule auth_form_module modules/mod_auth_form.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authn_anon_module modules/mod_authn_anon.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authn_core_module modules/mod_authn_core.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authn_dbd_module modules/mod_authn_dbd.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authn_dbm_module modules/mod_authn_dbm.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authn_file_module modules/mod_authn_file.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authn_socache_module modules/mod_authn_socache.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authnz_fcgi_module modules/mod_authnz_fcgi.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authnz_ldap_module modules/mod_authnz_ldap.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authz_core_module modules/mod_authz_core.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authz_dbd_module modules/mod_authz_dbd.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authz_dbm_module modules/mod_authz_dbm.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authz_groupfile_module modules/mod_authz_groupfile.so                                               >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authz_host_module modules/mod_authz_host.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule authz_owner_module modules/mod_authz_owner.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule authz_user_module modules/mod_authz_user.so                                                         >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule autoindex_module modules/mod_autoindex.so                                                           >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule buffer_module modules/mod_buffer.so                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule cache_module modules/mod_cache.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule cache_disk_module modules/mod_cache_disk.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule cache_socache_module modules/mod_cache_socache.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule cern_meta_module modules/mod_cern_meta.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule cgi_module modules/mod_cgi.so                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule charset_lite_module modules/mod_charset_lite.so                                                    >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule data_module modules/mod_data.so                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule dav_module modules/mod_dav.so                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule dav_fs_module modules/mod_dav_fs.so                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule dav_lock_module modules/mod_dav_lock.so                                                            >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule dbd_module modules/mod_dbd.so                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule deflate_module modules/mod_deflate.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule dir_module modules/mod_dir.so                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule dumpio_module modules/mod_dumpio.so                                                                >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule env_module modules/mod_env.so                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule expires_module modules/mod_expires.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule ext_filter_module modules/mod_ext_filter.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule file_cache_module modules/mod_file_cache.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule filter_module modules/mod_filter.so                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule headers_module modules/mod_headers.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule heartbeat_module modules/mod_heartbeat.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule heartmonitor_module modules/mod_heartmonitor.so                                                    >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule http2_module modules/mod_http2.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule ident_module modules/mod_ident.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule imagemap_module modules/mod_imagemap.so                                                            >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule include_module modules/mod_include.so                                                               >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule info_module modules/mod_info.so                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule isapi_module modules/mod_isapi.so                                                                   >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule lbmethod_bybusyness_module modules/mod_lbmethod_bybusyness.so                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule lbmethod_byrequests_module modules/mod_lbmethod_byrequests.so                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule lbmethod_bytraffic_module modules/mod_lbmethod_bytraffic.so                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule lbmethod_heartbeat_module modules/mod_lbmethod_heartbeat.so                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule ldap_module modules/mod_ldap.so                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule logio_module modules/mod_logio.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule log_config_module modules/mod_log_config.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule log_debug_module modules/mod_log_debug.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule log_forensic_module modules/mod_log_forensic.so                                                    >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule lua_module modules/mod_lua.so                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule macro_module modules/mod_macro.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule md_module modules/mod_md.so                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule mime_module modules/mod_mime.so                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule mime_magic_module modules/mod_mime_magic.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule negotiation_module modules/mod_negotiation.so                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_module modules/mod_proxy.so                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_ajp_module modules/mod_proxy_ajp.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_balancer_module modules/mod_proxy_balancer.so                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_connect_module modules/mod_proxy_connect.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_express_module modules/mod_proxy_express.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_ftp_module modules/mod_proxy_ftp.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_html_module modules/mod_proxy_html.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_http_module modules/mod_proxy_http.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_http2_module modules/mod_proxy_http2.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_scgi_module modules/mod_proxy_scgi.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_uwsgi_module modules/mod_proxy_uwsgi.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule ratelimit_module modules/mod_ratelimit.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule reflector_module modules/mod_reflector.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule remoteip_module modules/mod_remoteip.so                                                            >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule request_module modules/mod_request.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule reqtimeout_module modules/mod_reqtimeout.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule rewrite_module modules/mod_rewrite.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule sed_module modules/mod_sed.so                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule session_module modules/mod_session.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule session_cookie_module modules/mod_session_cookie.so                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule session_crypto_module modules/mod_session_crypto.so                                                >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule session_dbd_module modules/mod_session_dbd.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule setenvif_module modules/mod_setenvif.so                                                             >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule slotmem_plain_module modules/mod_slotmem_plain.so                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule slotmem_shm_module modules/mod_slotmem_shm.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule socache_dbm_module modules/mod_socache_dbm.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule socache_memcache_module modules/mod_socache_memcache.so                                            >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule socache_shmcb_module modules/mod_socache_shmcb.so                                                   >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule speling_module modules/mod_speling.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule ssl_module modules/mod_ssl.so                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule status_module modules/mod_status.so                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule substitute_module modules/mod_substitute.so                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule unique_id_module modules/mod_unique_id.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule userdir_module modules/mod_userdir.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule usertrack_module modules/mod_usertrack.so                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule version_module modules/mod_version.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule vhost_alias_module modules/mod_vhost_alias.so                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule watchdog_module modules/mod_watchdog.so                                                            >> %APACHE_HOME%/conf/httpd.conf
echo #LoadModule xml2enc_module modules/mod_xml2enc.so                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule unixd_module^>                                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo User daemon                                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo Group daemon                                                                                                   >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ServerAdmin shinbaad@gmail.com                                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo ServerName localhost:80                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #^<Directory /^>                                                                                               >> %APACHE_HOME%/conf/httpd.conf
echo #    AllowOverride none                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #    Require all denied                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #^</Directory^>                                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo DocumentRoot  "${DOCROOT}"                                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo ^<Directory "${DOCROOT}"^>                                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo     Options Indexes FollowSymLinks ExecCGI                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo     AllowOverride None                                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo     Require all granted                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo ^</Directory^>                                                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule dir_module^>                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo     DirectoryIndex index.html                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<Files ".ht*"^>                                                                                               >> %APACHE_HOME%/conf/httpd.conf
echo     Require all denied                                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo ^</Files^>                                                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo # ErrorLog "logs/error.log"                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo # LogLevel warn                                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #^<IfModule log_config_module^>                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #     LogFormat "%%h %%l %%u %%t \"%%r\" %%^>s %%b \"%%{Referer}i\" \"%%{User-Agent}i\"" combined              >> %APACHE_HOME%/conf/httpd.conf
echo #     LogFormat "%%h %%l %%u %%t \"%%r\" %%^>s %%b" common                                                     >> %APACHE_HOME%/conf/httpd.conf
echo #     ^<IfModule logio_module^>                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #       # You need to enable mod_logio.c to use %I and %O                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #       LogFormat "%%h %%l %%u %%t \"%%r\" %%^>s %%b \"%%{Referer}i\" \"%%{User-Agent}i\" %%I %%O" combinedio  >> %APACHE_HOME%/conf/httpd.conf
echo #     ^</IfModule^>                                                                                            >> %APACHE_HOME%/conf/httpd.conf
echo #     CustomLog "logs/access.log" common                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo # ^</IfModule^>                                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #^<IfModule alias_module^>                                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo #    ScriptAlias /cgi-bin/ "${DOCROOT}/cgi-bin/"                                                               >> %APACHE_HOME%/conf/httpd.conf
echo #^</IfModule^>                                                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule cgid_module^>                                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo     #Scriptsock logs/cgisock                                                                                   >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #^<Directory "${DOCROOT}/cgi-bin"^>                                                                            >> %APACHE_HOME%/conf/httpd.conf
echo #    AllowOverride None                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #    Options None                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #    Require all granted                                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #^</Directory^>                                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule mime_module^>                                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo     TypesConfig conf/mime.types                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo     #AddType application/x-gzip .tgz                                                                           >> %APACHE_HOME%/conf/httpd.conf
echo     #AddEncoding x-compress .Z                                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo     #AddEncoding x-gzip .gz .tgz                                                                               >> %APACHE_HOME%/conf/httpd.conf
echo     AddType application/x-compress .Z                                                                          >> %APACHE_HOME%/conf/httpd.conf
echo     AddType application/x-gzip .gz .tgz                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo     AddHandler cgi-script .cgi .pl .py                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo     #AddHandler type-map var                                                                                   >> %APACHE_HOME%/conf/httpd.conf
echo     #AddType text/html .shtml                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo     #AddOutputFilter INCLUDES .shtml                                                                           >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #MIMEMagicFile conf/magic                                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo #ErrorDocument 500 "The server made a boo boo."                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #ErrorDocument 404 /missing.html                                                                               >> %APACHE_HOME%/conf/httpd.conf
echo #ErrorDocument 404 "/cgi-bin/missing_handler.pl"                                                               >> %APACHE_HOME%/conf/httpd.conf
echo #ErrorDocument 402 http://www.example.com/subscription_info.html                                               >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo #MaxRanges unlimited                                                                                           >> %APACHE_HOME%/conf/httpd.conf
echo #EnableMMAP off                                                                                                >> %APACHE_HOME%/conf/httpd.conf
echo #EnableSendfile on                                                                                             >> %APACHE_HOME%/conf/httpd.conf
echo #AcceptFilter http none                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #AcceptFilter https none                                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-mpm.conf                                                                             >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-multilang-errordoc.conf                                                              >> %APACHE_HOME%/conf/httpd.conf
echo Include conf/extra/httpd-autoindex.conf                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-languages.conf                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-userdir.conf                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo Include conf/extra/httpd-info.conf                                                                             >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-vhosts.conf                                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-manual.conf                                                                          >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-dav.conf                                                                             >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-default.conf                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule proxy_html_module^>                                                                                 >> %APACHE_HOME%/conf/httpd.conf
echo Include conf/extra/httpd-proxy-html.conf                                                                       >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule ssl_module^>                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo #Include conf/extra/httpd-ssl.conf                                                                             >> %APACHE_HOME%/conf/httpd.conf
echo Include conf/extra/httpd-ahssl.conf                                                                            >> %APACHE_HOME%/conf/httpd.conf
echo SSLRandomSeed startup builtin                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo SSLRandomSeed connect builtin                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule http2_module^>                                                                                      >> %APACHE_HOME%/conf/httpd.conf
echo     ProtocolsHonorOrder On                                                                                     >> %APACHE_HOME%/conf/httpd.conf
echo     Protocols h2 h2c http/1.1                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo # php 7                                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo PHPIniDir "%PHP_HOME%"                                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo LoadFile "%PHP_HOME%/php7ts.dll"                                                                               >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule php7_module "%PHP_HOME%/php7apache2_4.dll"                                                          >> %APACHE_HOME%/conf/httpd.conf
echo AddType application/x-httpd-php .php                                                                           >> %APACHE_HOME%/conf/httpd.conf
echo #                                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo LoadModule jk_module modules/mod_jk.so                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo ^<IfModule jk_module^>                                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo 	JkWorkersFile conf/workers.properties                                                                         >> %APACHE_HOME%/conf/httpd.conf
echo 	#JkLogFile logs/mod_jk.log                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo 	#JkLogLevel info                                                                                              >> %APACHE_HOME%/conf/httpd.conf
echo 	#JkMount /* worker1                                                                                           >> %APACHE_HOME%/conf/httpd.conf
echo 	JkMount /*.jsp worker1                                                                                        >> %APACHE_HOME%/conf/httpd.conf
echo 	#JkShmFile logs/mod_jk.shm                                                                                    >> %APACHE_HOME%/conf/httpd.conf
echo 	#JkLogStampformat "[%%a %%b %%d %%H:%%M:%%S %%Y]"                                                             >> %APACHE_HOME%/conf/httpd.conf
echo ^</IfModule^>                                                                                                  >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##############################               ###################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##############################               ###################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##############################               ###################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##########################                       ###############################                               >> %APACHE_HOME%/conf/httpd.conf
echo ############################                   #################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##############################               ###################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################           #####################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ##################################       #######################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ####################################   #########################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
echo ################################################################################                               >> %APACHE_HOME%/conf/httpd.conf
