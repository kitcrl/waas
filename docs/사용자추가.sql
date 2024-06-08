create user 'crl'@'%' identified by '00000000';
alter user 'crl'@'%' identified with caching_sha2_password by '00000000';
update `user` set Select_priv = 'y', Insert_priv = 'y',Update_priv = 'y',Delete_priv = 'y',Create_priv = 'y',Drop_priv = 'y',Reload_priv = 'y',Shutdown_priv = 'y',Process_priv = 'y',File_priv = 'y',Grant_priv = 'y',References_priv = 'y',Index_priv = 'y',Alter_priv = 'y',Show_db_priv = 'y',Super_priv = 'y',Create_tmp_table_priv = 'y',Lock_tables_priv = 'y',Execute_priv = 'y',Repl_slave_priv = 'y',Repl_client_priv = 'y',Create_view_priv = 'y',Show_view_priv = 'y',Create_routine_priv = 'y',Alter_routine_priv = 'y',Create_user_priv = 'y',Event_priv = 'y',Trigger_priv = 'y',Create_tablespace_priv = 'y' where user = 'crl';
flush privileges;



alter user 'root'@'%' identified with mysql_native_password by 'root';
update `user` set Select_priv = 'y', Insert_priv = 'y',Update_priv = 'y',Delete_priv = 'y',Create_priv = 'y',Drop_priv = 'y',Reload_priv = 'y',Shutdown_priv = 'y',Process_priv = 'y',File_priv = 'y',Grant_priv = 'y',References_priv = 'y',Index_priv = 'y',Alter_priv = 'y',Show_db_priv = 'y',Super_priv = 'y',Create_tmp_table_priv = 'y',Lock_tables_priv = 'y',Execute_priv = 'y',Repl_slave_priv = 'y',Repl_client_priv = 'y',Create_view_priv = 'y',Show_view_priv = 'y',Create_routine_priv = 'y',Alter_routine_priv = 'y',Create_user_priv = 'y',Event_priv = 'y',Trigger_priv = 'y',Create_tablespace_priv = 'y' where user = 'root';
flush privileges;




CREATE TABLE litedb.litedbliteboard(
	id INT,
	tmstmp TIMESTAMP DEFAULT NOW(),
	title TEXT,
	contents TEXT,
	hit INT,
	files TEXT,
	uid VARCHAR(50)
);
COMMIT;
