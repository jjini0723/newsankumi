/**
 * 라디오버튼에서 선택 된 값 리스트에 넣기
 */
$(document).on("click", ".remove", function(e) {
	$(this).parent().remove();
	
	
});

function getRadios(selected) {
	var radioCount = radioCheck();
	var hml = document.getElementsByClassName('hml');
	var hmlTotal = hml.length;
	var chk = document.getElementsByName('ck');
	
	//라디오 막는용
	if(radioCount > 6){
		//라디오체크한거 삭제하는거
		var lastCheck = document.getElementsByName(radio7th);
		for(var i=0; i < lastCheck.length; i++){
			if(lastCheck[i].checked){
				lastCheck[i].checked = false;
			}
		}
			
		for(var i=0; i < hmlTotal; i++){				
			if(chk[i].checked == true){	
				var rdCount = 0;
				$.each(hml, function(index,item){
					if(index == i){							
						if($(this).children("input[type=radio]").is(":checked")){
							rdCount++;	
							return;
						}
					}	
				});	
				if(rdCount == 0){
					chk[i].click();
					chk[i].disabled = true;
				}
			}
			else{
				chk[i].disabled = true;
			}
		}		
		return;		
	}
	else{
		if(radioCount < 6){
			for(var i=0; i < hmlTotal; i++){
				chk[i].disabled = false;
			}
		}		
	}
	
	var html = "";
	// 스포츠
	var welfare_sports = "";
	for (var i = 0; i < selected.rd_welfare_sports.length; i++) {
		if (selected.rd_welfare_sports[i].checked)
			welfare_sports = selected.rd_welfare_sports[i].value;
	}
	
	if (welfare_sports != '') {
		html += "<li value = "
				+ welfare_sports
				+ ">"
				+ '스포츠시설'
				+ '<a href="#" class = "remove" onclick="removeList1();" name = "welfare_sports">   x   </a> '
				+ "</li>";
	}

	// 문화시설
	var welfare_culture = "";
	for (var i = 0; i < selected.rd_welfare_culture.length; i++) {
		if (selected.rd_welfare_culture[i].checked)
			welfare_culture = selected.rd_welfare_culture[i].value;
	}
	if (welfare_culture != '') {
		html += "<li id = 'welfare_culture' value = "
				+ welfare_culture
				+ ">"
				+ '문화시설'
				+ '<a href="#" class = "remove" onclick="removeList2();" value ="welfare_culture" >   x   </a> '
				+ "</li>";
	}

	// 미용
	var welfare_salon = "";
	for (var i = 0; i < selected.rd_welfare_salon.length; i++) {
		if (selected.rd_welfare_salon[i].checked)
			welfare_salon = selected.rd_welfare_salon[i].value;
	}
	if (welfare_salon != '') {
		html += "<li id = 'welfare_salon' value = "
				+ welfare_salon
				+ ">"
				+ '미/이용 시설'
				+ '<a href="#" class = "remove" onclick="removeList3();">   x   </a> '
				+ "</li>";
	}

	// 사회복지시설
	var welfare_society = "";
	for (var i = 0; i < selected.rd_welfare_society.length; i++) {
		if (selected.rd_welfare_society[i].checked)
			welfare_society = selected.rd_welfare_society[i].value;

	}

	if (welfare_society != '') {
		html += "<li id = 'welfare_society' value = "
				+ welfare_society
				+ ">"
				+ '사회복지시설'
				+ '<a href="#" class = "remove" onclick="removeList4();">   x   </a> '
				+ "</li>";

	}

	// 의료시설
	var welfare_medical = "";
	for (var i = 0; i < selected.rd_welfare_medical.length; i++) {
		if (selected.rd_welfare_medical[i].checked)
			welfare_medical = selected.rd_welfare_medical[i].value;
	}

	if (welfare_medical != '') {
		html += "<li id = 'welfare_medical' value = "
				+ welfare_medical
				+ ">"
				+ '의료시설'
				+ '<a href="#" class = "remove" onclick="removeList5();">   x   </a> '
				+ "</li>";
	}

	// 보육시설
	var welfare_childCare = "";
	for (var i = 0; i < selected.rd_welfare_childCare.length; i++) {
		if (selected.rd_welfare_childCare[i].checked)
			welfare_childCare = selected.rd_welfare_childCare[i].value;
	}

	if (welfare_childCare != '') {
		html += "<li id = 'welfare_childCare' value = "
				+ welfare_childCare
				+ ">"
				+ '보육시설'
				+ '<a href="#" class = "remove" onclick="removeList6();">   x   </a> '
				+ "</li>";
	}

	// 1인당 교원수
	var education_student = "";
	for (var i = 0; i < selected.rd_education_student.length; i++) {
		if (selected.rd_education_student[i].checked)
			education_student = selected.rd_education_student[i].value;
	}

	if (education_student != '') {
		html += "<li id = 'education_student' value = "
				+ education_student
				+ ">"
				+ '교원 당 학생수'
				+ '<a href="#" class = "remove" onclick="removeList7();">   x   </a> '
				+ "</li>";
	}

	// 학원수
	var education_academy = "";
	for (var i = 0; i < selected.rd_education_academy.length; i++) {
		if (selected.rd_education_academy[i].checked)
			education_academy = selected.rd_education_academy[i].value;
	}

	if (education_academy != '') {
		html += "<li id = 'education_academy' value = "
				+ education_academy
				+ ">"
				+ '학원수'
				+ '<a href="#" class = "remove" onclick="removeList8();">   x   </a> '
				+ "</li>";
	}

	// 안전_화재
	var safety_fire = "";
	for (var i = 0; i < selected.rd_safety_fire.length; i++) {
		if (selected.rd_safety_fire[i].checked)
			safety_fire = selected.rd_safety_fire[i].value;
	}

	if (safety_fire != '') {
		html += "<li id = 'safety_fire' value = "
				+ safety_fire
				+ ">"
				+ '화재안전사고'
				+ '<a href="#" class = "remove" onclick="removeList9();">   x   </a> '
				+ "</li>";
	}

	// 교통사고
	var safety_traffic = "";
	for (var i = 0; i < selected.rd_safety_traffic.length; i++) {
		if (selected.rd_safety_traffic[i].checked)
			safety_traffic = selected.rd_safety_traffic[i].value;
	}

	if (safety_traffic != '') {
		html += "<li id = 'safety_traffic' value = "
				+ safety_traffic
				+ ">"
				+ '교통안전사고'
				+ '<a href="#" class = "remove" onclick="removeList10();">   x   </a> '
				+ "</li>";
	}

	// 범죄
	var safety_crime = "";
	for (var i = 0; i < selected.rd_safety_crime.length; i++) {
		if (selected.rd_safety_crime[i].checked)
			safety_crime = selected.rd_safety_crime[i].value;
	}

	if (safety_crime != '') {
		html += "<li id = 'safety_crime' value = "
				+ safety_crime
				+ ">"
				+ '범죄사고'
				+ '<a href="#" class = "remove" onclick="removeList11();">   x   </a> '
				+ "</li>";
	}

	// 안전사고
	var safety_safety = "";
	for (var i = 0; i < selected.rd_safety_safety.length; i++) {
		if (selected.rd_safety_safety[i].checked)
			safety_safety = selected.rd_safety_safety[i].value;
	}

	if (safety_safety != '') {
		html += "<li id = 'safety_safety' value = "
				+ safety_safety
				+ ">"
				+ '안전사고'
				+ '<a href="#" class = "remove" onclick="removeList12();">   x   </a> '
				+ "</li>";
	}

	// 전염병
	var safety_infection = "";
	for (var i = 0; i < selected.rd_safety_infection.length; i++) {
		if (selected.rd_safety_infection[i].checked)
			safety_infection = selected.rd_safety_infection[i].value;
	}

	if (safety_infection != '') {
		html += "<li id = 'safety_infection' value = "
				+ safety_infection
				+ ">"
				+ '전염병'
				+ '<a href="#" class = "remove" onclick="removeList13();">   x   </a> '
				+ "</li>";
	}

	// 자연재해
	var safety_nature = "";
	for (var i = 0; i < selected.rd_safety_nature.length; i++) {
		if (selected.rd_safety_nature[i].checked)
			safety_nature = selected.rd_safety_nature[i].value;
	}

	if (safety_nature != '') {
		html += "<li id = 'safety_nature' value = "
				+ safety_nature
				+ ">"
				+ '자연재해'
				+ '<a href="#" class = "remove" click="onremoveList14();">   x   </a> '
				+ "</li>";
	}

	// 편의시설
	var life_convenient = "";
	for (var i = 0; i < selected.rd_life_convenient.length; i++) {
		if (selected.rd_life_convenient[i].checked)
			life_convenient = selected.rd_life_convenient[i].value;
	}

	if (life_convenient != '') {
		html += "<li id = 'life_convenient' value = "
				+ life_convenient
				+ ">"
				+ '편의시설'
				+ '<a href="#" class = "remove" onclick="removeList15();">   x   </a> '
				+ "</li>";
	}

	// 쇼핑
	var life_shopping = "";
	for (var i = 0; i < selected.rd_life_shopping.length; i++) {
		if (selected.rd_life_shopping[i].checked)
			life_shopping = selected.rd_life_shopping[i].value;
	}

	if (life_shopping != '') {
		html += "<li id = 'life_shopping' value = "
				+ life_shopping
				+ ">"
				+ '쇼핑시설'
				+ '<a href="#" class = "remove" onclick="removeList16();">   x   </a> '
				+ "</li>";
	}

	// 외식시설
	var life_restaurant = "";
	for (var i = 0; i < selected.rd_life_restaurant.length; i++) {
		if (selected.rd_life_restaurant[i].checked)
			life_restaurant = selected.rd_life_restaurant[i].value;
	}

	if (life_restaurant != '') {
		html += "<li id = 'life_restaurant' value = "
				+ life_restaurant
				+ ">"
				+ '외식시설'
				+ '<a href="#" class = "remove" onclick="removeList17();">   x   </a> '
				+ "</li>";
	}

	// 대중교통 이용률
	var life_publicTraffic = "";
	for (var i = 0; i < selected.rd_life_publicTraffic.length; i++) {
		if (selected.rd_life_publicTraffic[i].checked)
			life_publicTraffic = selected.rd_life_publicTraffic[i].value;
	}

	if (life_publicTraffic != '') {
		html += "<li id = 'life_publicTraffic' value = "
				+ life_publicTraffic
				+ ">"
				+ '대중교통 이용률'
				+ '<a href="#" class = "remove" onclick="removeList18();">   x   </a> '
				+ "</li>";
	}

	// 외국인비율
	var people_foreign = "";
	for (var i = 0; i < selected.rd_people_foreign.length; i++) {
		if (selected.rd_people_foreign[i].checked)
			people_foreign = selected.rd_people_foreign[i].value;
	}

	if (people_foreign != '') {
		html += "<li id = 'people_foreign' value = "
				+ people_foreign
				+ ">"
				+ '외국인거주비율'
				+ '<a href="#" class = "remove" onclick="removeList19();">   x   </a> '
				+ "</li>";
	}

	// 인구밀도
	var people_density = "";
	for (var i = 0; i < selected.rd_people_density.length; i++) {
		if (selected.rd_people_density[i].checked)
			people_density = selected.rd_people_density[i].value;
	}

	if (people_density != '') {
		html += "<li id = 'people_density' value = "
				+ people_density
				+ ">"
				+ '인구밀도'
				+ '<a href="#" class = "remove" onclick="removeList20();">   x   </a> '
				+ "</li>";
	}

	// 공원수
	var nature_park = "";
	for (var i = 0; i < selected.rd_nature_park.length; i++) {
		if (selected.rd_nature_park[i].checked)
			nature_park = selected.rd_nature_park[i].value;
	}

	if (nature_park != '') {
		html += "<li id = 'nature_park' value = "
				+ nature_park
				+ ">"
				+ '주변 공원 수'
				+ '<a href="#" class = "remove" onclick="removeList21();">   x   </a> '
				+ "</li>";
	}

	// 미세먼지
	var nature_pollution = "";
	var np = "rd_nature_pollution";
	for (var i = 0; i < selected.rd_nature_pollution.length; i++) {
		if (selected.rd_nature_pollution[i].checked)
			nature_pollution = selected.rd_nature_pollution[i].value;
	}
	if (nature_pollution != '') {
		html += "<li id = 'nature_pollution' value = "
				+ nature_pollution
				+ ">"
				+ '미세먼지'
				+ '<a href="#" class = "remove" onclick="removeList22();" id = "x22">  x   </a> '
				+ "</li>";
		/*
		 * +'<a href="#" class = "remove" onchange="removeList('+ selected +
		 * ","+ "rd_nature_pollution");"> x </a> '+ "</li>";
		 */
		// onclick = "removeList(' + selected.rd_nature_pollution.checked =
		// false +')
	}

	$(".selectedList").html(html);
}

function removeList1() {
	
	var park = document.getElementsByName("rd_welfare_sports");
    for(var i=0;park.length-1;i++){
         if(park[i].checked){
             park[i].checked = false;
             document.myselection.welfare_sports.click();
         }
    }
}
function removeList2() {
	var park = document.getElementsByName("rd_welfare_culture");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.welfare_culture.click();
	         }
	    }
}
function removeList3() {
	var park = document.getElementsByName("rd_welfare_salon");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.welfare_salon.click();
	         }
	    }

}
function removeList4() {
	var park = document.getElementsByName("rd_welfare_society");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.welfare_society.click();
	         }
	    }


}
function removeList5() {
	var park = document.getElementsByName("rd_welfare_medical");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.welfare_medical.click();
	         }
	    }

}
function removeList6() {
	var park = document.getElementsByName("rd_welfare_childCare");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.welfare_childCare.click();
	         }
	    }

}
function removeList7() {
	var park = document.getElementsByName("rd_education_student");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.education_student.click();
	         }
	    }
}
function removeList8() {
	var park = document.getElementsByName("rd_education_academy");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.education_academy.click();
	         }
	    }
}
function removeList9() {
	var park = document.getElementsByName("rd_safety_fire");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_fire.click();
	         }
	    }
    
    
}
function removeList10() {
	var park = document.getElementsByName("rd_safety_traffic");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_traffic.click();
	         }
	    }
}
function removeList11() {
	var park = document.getElementsByName("rd_safety_crime");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_crime.click();
	         }
	    }

}
function removeList12() {
	var park = document.getElementsByName("rd_safety_safety");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_safety.click();
	         }
	    }
    
}
function removeList13() {
	var park = document.getElementsByName("rd_safety_infection");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_infection.click();
	         }
	    }
   
}
function removeList14() {
	var park = document.getElementsByName("rd_safety_nature");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.safety_nature.click();
	         }
	    }

    
}
function removeList15() {
	var park = document.getElementsByName("rd_life_convenient");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.life_convenient.click();
	         }
	    }
}
function removeList16() {
	var park = document.getElementsByName("rd_life_shopping");
	  
    for(var i=0;park.length-1;i++){
         if(park[i].checked){
             park[i].checked = false;
             document.myselection.life_shopping.click();
         }
    }
	
}
function removeList17() {
	var park = document.getElementsByName("rd_life_restaurant");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.life_restaurant.click();
	         }
	    }
	
}
function removeList18() {
	var park = document.getElementsByName("rd_life_publicTraffic");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.life_publicTraffic.click();
	         }
	    }
  
}
function removeList19() {
	var park = document.getElementsByName("rd_people_foreign");
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.people_foreign.click();
	         }
	    }
}
function removeList20() {
	var park = document.getElementsByName("rd_people_density");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.people_density.click();
	         }
	    }
    
}
function removeList21() {
	//  $('#nature_park').trigger("click");
	  var park = document.getElementsByName("rd_nature_park");
	  
	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.nature_park.click();
	         }
	    }
    
}
function removeList22() {
	var park = document.getElementsByName("rd_nature_pollution");

	  for(var i=0;park.length-1;i++){
	         if(park[i].checked){
	             park[i].checked = false;
	             document.myselection.nature_pollution.click();
	         }
	    }
	 
}
