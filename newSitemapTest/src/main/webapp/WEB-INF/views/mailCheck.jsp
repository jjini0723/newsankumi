<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="./resources/js/jquery-3.1.1.js"></script>

<script type='text/javascript'>
var emailFlag = false;
var checknumFlag = false;

//메일 인증 하기
$(function()
{
	$("#mailcheck").on("click", function()
	{
		var email = $("#email").val();
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
							
       	if (email == "")
		{
			emailFlag = false;
		}   
       	
       	else if(regex.test(email) == false)
    	{	    
			emailFlag = false;
    	}    
       	
       	else
      	{
       		emailFlag = true;
      	}
      	
		if(emailFlag == true)
		{
			$.ajax
			({
				type : "post",
				url : "emailcheck",		
				data : 
				{
					user : email
				},				
				success : function(data)
				{
					if (emailFlag == true)
					{
						alert("입력하신 메일로 인증번호가 전송되었습니다.");
						console.log("메일로 인증번호가 전송되었습니다.");
					}
				},				
				error : function(e)
				{
					console.log(e);
				}
			})
		}	
		
		else
		{
			alert("올바른 메일형식이 아닙니다..");	
		}				
	})
})

//인증번호 체크하기
$(function()
{
	$("#checkbtn").on("click", function()
	{
		if(emailFlag == true)
		{
			var email = $("#email").val();
			if(email == "")
			{
				alert('인증번호를 입력하세요!');
				return;
			}
			var checknum = $("#checknum").val();
			
			$.ajax
			({
				type : "post",
				url : "checknum",
				
				success : function(data)
				{
					console.log(data);
					if (checknum == data)
					{	
						//checknumFlag = true;					
						opener.document.getElementById("checknumFlag").value = true;
						$("#kakunin").css("color", "blue");
						$("#kakunin").html("인증완료.");
						alert('인증되었습니다.');
						window.close();
					}
					
					else
					{
						alert('인증번호가 일치하지 않습니다..');
						$("#kakunin").css("color", "red");
						$("#kakunin").html("인증번호 불일치..");
						document.getElementById("checknum").value = "";
					}
				},
				
				error : function(e)
				{
					console.log(e);
				}
			})
		}
		else
		{
			alert('메일로 인증번호를 받으세요..');
		}
		
	})
})
</script>
</head>
<body>
	<h1>[ E-mail 인증 ]</h1>
	<br>
	
	<input type="text" id="email">
	<input type="button" id="mailcheck" value="메일 보내기"><br><br>
	
	<input type="text" id="checknum">
	<input type="button" id="checkbtn" value="인증번호 확인"><br>
	<div id="kakunin">
	인증번호를 입력하세요.
	</div>
</body>
</html>