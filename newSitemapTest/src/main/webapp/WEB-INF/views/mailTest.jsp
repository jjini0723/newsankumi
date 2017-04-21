<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="./resources/js/jquery-3.1.1.js"></script>
<script>

var checknumFlag = false;//인증번호 플래그

function flagCheck(){
	checknumFlag = document.getElementById("checknumFlag").value;
	alert(checknumFlag);	
}


function mailCheck(){
	window.open("mailCheck", "Email인증", "left=450, top=150, width=500, height=300");
}
</script>
</head>
<body>
	
	<input type="button" value="이메일 팝업창 ㄱ" onclick="mailCheck()">
	<input type="hidden" id="checknumFlag" value="false">
	<input type="button" value="인증번호flag 카쿠닌" onclick="flagCheck()"> 
 
</body>
</html>