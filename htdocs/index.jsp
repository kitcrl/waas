<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*" %>


<%
  Class.forName("com.mysql.jdbc.Driver");

  Connection conn = null;
  Statement  stmt = null;
  ResultSet  rs   = null;

  String url = "jdbc:mysql://127.0.0.1:3306/litedb?useUnicode=true&serverTimezone=UTC";
  String id  = "crl";
  String pw  = "00000000";

  String qry = "insert liteboard (id, title, contents, hit, uid) VALUE ( 0, \"sample1\", \"sample contents\", 1, 0)";

  conn = DriverManager.getConnection(url, id, pw);
  if ( conn != null )
  {
    out.println("Connected");
  }
  else
  {
    out.println("Not Connected");
  }

  try
  {
    stmt = conn.createStatement();

    out.println(qry);

    if ( stmt.executeUpdate(qry) > 0 )
    {
      out.println("Update Sucess");
    }


    // rs = stmt.executeQuery(qry);

    // while ( rs.next() )
    // {
      // //out.println(rs.getString());
    // }
  }
  catch( SQLException ex)
  {
  }
  finally
  {
    if ( rs != null )
    {
      rs.close();
    }
    if ( stmt != null )
    {
      stmt.close();
      out.println(" Query Success ");
    }
    if ( conn != null )
    {
      conn.close();
    }
  }


  

%>