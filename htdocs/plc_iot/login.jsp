<%@ page language="java" contentType="text/html;charset=EUC-KR" pageEncoding="UTF-8" %>
<%!

%>
<html>
<head> <title> Login </title></head>
<body style="margin:0px;background-image:url('mntback.jpg');background-size:cover;">
	<center>
	<form action="wscl.html" method="post" name="login" onkeydown="JavaScript:EnterKey();">
<!--  START
remove -->
		1.ID: admin<br>
		2.password: d510<br><br>
<!-- remove
END -->
		아이디  : <input type="text" name="ID" id="name"><br>
		패스워드 : <input type="password" name="passwd" maxlength="4"><br><br>
	
		<input type="button" value="로그인" onclick="sendit()">
		<input type="reset" value="취소" onclick="cancel()">
	</form>
	
	<script language="javascript">
	
		var form = document.login;
		
		function EnterKey()
		{
			if(event.keyCode==13)
			{
				sendit();
			}
		}
		
		function sendit()
		{
			if(form.ID.value =="")
			{
				alert("아이디를 입력하십시오");
				form.ID.focus();//포커스를 id박스로 이동.
				return;
			}
			else if(form.ID.value =="admin")
			{
				if(form.passwd.value =="d510")
				{
					//alert("로그인 되었습니다.");
					location.href="wscl.html";
					//여기고//loginTo.jsp
				}			
				else if(form.passwd.value=="")
				{			
					alert("비밀번호를 입력하십시오");
					form.passwd.focus();//포커스를 id박스로 이동.
					return;
				}
				else
				{
					alert("비밀번호를 다시 입력하십시오");
					form.passwd.focus();//포커스를 id박스로 이동.
					return;
				}
			}
			else 
			{
				if(form.passwd.value=="")
				{
					alert("비밀번호를 입력하십시오");
					form.passwd.focus();//포커스를 id박스로 이동.
					return;
				}
				else
				{				
					alert("비밀번호와 아이디를 확인하십시오");
					form.ID.focus();//포커스를 id박스로 이동.
					return;	
				}
			}
		}	

		function cancel()
		{
			//alert("취소 되었습니다.");
		}
	</script>
</body>
</html>