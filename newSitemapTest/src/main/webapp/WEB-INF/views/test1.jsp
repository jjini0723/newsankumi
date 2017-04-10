<%@page import="com.newsite.maptest01.vo.SelectConditions"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="./resources/content-filter/js/jquery-3.1.1.js"></script>
<script type="text/javascript">

 	$(function(){		
		
		//라디오버튼 값 보내기
		var arr = new Array();
		$("#selectConditions").on("click", function(){
			var conditions = $(".condition");
		
			$.each(conditions, function(index,item){	
				if($(this).children("input[type=radio]:checked").val() != null){//여기 조건 찾기..
					console.log($(this).children("input[type=radio]:checked").val());
					var flagValue = $(this).children("span").attr("flagValue");
					var radioValue = $(this).children("input[type=radio]:checked").val();
											
					var obj = {
						condition : flagValue,
						level : radioValue
					};					
					arr.push(obj);	
				}
			})	
			
			
			$.ajax({
				type : "post",
				url : "selectConditions",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify({
					list : arr
				}),
				success : function(data){
					console.log(data);
// 					var html = "";
// 					$.each(data, function(index,item){
// 						html += item;
// 					})
// 					$("#resultDiv").html(html);
				},
				error : function(e){
					console.log(e);
				}
			})
		})
	})
	
	
</script>
</head>
<body>
	
	<input type="button" id="selectConditions" value="검색조건 실험용">
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.safety_fire %>">안전</span>
	<input type="radio" id="a_radios1" name="a_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="a_radios2" name="a_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="a_radios3" name="a_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.life_publicTraffic %>">교통</span>
	<input type="radio" id="b_radios1" name="b_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="b_radios2" name="b_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="b_radios3" name="b_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_medical %>">복지</span>
	<input type="radio" id="c_radio1" name="c_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="c_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="c_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.life_convenient %>">편의</span>
	<input type="radio" id="c_radio1" name="d_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="d_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="d_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.life_shopping %>">쇼핑</span>
	<input type="radio" id="c_radio1" name="e_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="e_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="e_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.education_academy %>">학원 수</span>
	<input type="radio" id="c_radio1" name="f_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="f_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="f_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.education_student %>">학생 수</span>
	<input type="radio" id="c_radio1" name="g_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="g_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="g_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.nature_pollution %>">미세먼지</span>
	<input type="radio" id="c_radio1" name="h_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="h_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="h_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.nature_park %>">공원</span>
	<input type="radio" id="c_radio1" name="i_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="i_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="i_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.people_density %>">인구밀도</span>
	<input type="radio" id="c_radio1" name="j_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="j_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="j_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.people_foreign %>">외국인</span>
	<input type="radio" id="c_radio1" name="k_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="k_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="k_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_childCare %>">유아교육</span>
	<input type="radio" id="c_radio1" name="l_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="l_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="l_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_culture %>">문화시설</span>
	<input type="radio" id="c_radio1" name="m_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="m_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="m_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_sports %>">스포츠</span>
	<input type="radio" id="c_radio1" name="n_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="n_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="n_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_society %>">사회복지</span>
	<input type="radio" id="c_radio1" name="o_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="o_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="o_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.welfare_salon %>">미용실</span>
	<input type="radio" id="c_radio1" name="p_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="p_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="p_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	<div class="condition">
	<br><span flagValue="<%=SelectConditions.life_restaurant %>">음식점</span>
	<input type="radio" id="c_radio1" name="q_radios" value="<%=SelectConditions.high %>">
	<label for="h_radio1">상</label>
	<input type="radio" id="c_radio2" name="q_radios"value="<%=SelectConditions.mid %>">
	<label for="h_radio2">중</label>
	<input type="radio" id="c_radio3" name="q_radios" value="<%=SelectConditions.low %>">
	<label for="h_radio3">하</label> 
	</div>
	
	
	
	<div id="resultDiv">
	</div>
</body>
</html>