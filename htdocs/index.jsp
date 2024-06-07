<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*" %>


<%
  out.println("JDBC");
  Connection conn = null;

  String url = "jdbc:mysql://127.0.0.1:3306/litedb?useUnicode=true&serverTimezone=UTC";
  String id  = "crl";
  String pw  = "00000000";


  Class.forName("com.mysql.jdbc.Driver");

  conn = DriverManager.getConnection(url, id, pw);

  if ( conn != null )
  {
    out.println("Connected");
  }
  else
  {
    out.println("Not Connected");
  }
%>