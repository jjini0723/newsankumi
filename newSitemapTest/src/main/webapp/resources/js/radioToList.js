/**
 * 라디오버튼에서 선택 된 값 리스트에 넣기
 */
$(document).on("click", ".remove", function() {
	$(this).parent().remove();
});

function getRadios(selected) {
	var html = "";

	// 스포츠
	var welfare_sports = "";
	for (var i = 0; i < selected.rd_welfare_sports.length; i++) {
		if (selected.rd_welfare_sports[i].checked)
			welfare_sports = selected.rd_welfare_sports[i].value;
	}
	console.log(welfare_sports);
	if (welfare_sports != '') {
		html += "<li id = 'welfare_sports' value = "
				+ welfare_sports
				+ ">"
				+ '스포츠시설'
				+ '<a href="#" class = "remove" onclick="removeList1();">   x   </a> '
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
				+ '<a href="#" class = "remove" onclick="removeList2();">   x   </a> '
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
	var welfare_childcare = "";
	for (var i = 0; i < selected.rd_welfare_childcare.length; i++) {
		if (selected.rd_welfare_childcare[i].checked)
			welfare_childcare = selected.rd_welfare_childcare[i].value;
	}

	if (welfare_childcare != '') {
		html += "<li id = 'welfare_childcare' value = "
				+ welfare_childcare
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
				+ '미/이용 시설'
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
				+ '미/이용 시설'
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
				+ '교통안전사고'
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
			safety_safety = selected.rd_safety_infection[i].value;
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
				+ '외식시설'
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
				+ '외국인비율'
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
				+ '<a href="#" class = "remove" onclick="removeList22();">  x   </a> '
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
	$("input:radio[name='rd_welfare_sports']").removeAttr("checked");
}
function removeList2() {
	$("input:radio[name='rd_welfare_culture']").removeAttr("checked");
}
function removeList3() {
	$("input:radio[name='rd_welfare_salon']").removeAttr("checked");
}
function removeList4() {
	$("input:radio[name='rd_welfare_society]").removeAttr("checked");
}
function removeList5() {
	$("input:radio[name='rd_welfare_medical']").removeAttr("checked");
}
function removeList6() {
	$("input:radio[name='rd_welfare_childcare']").removeAttr("checked");
}
function removeList7() {
	$("input:radio[name='rd_education_student']").removeAttr("checked");
}
function removeList8() {
	$("input:radio[name='rd_education_academy']").removeAttr("checked");
}
function removeList9() {
	$("input:radio[name='rd_safety_fire']").removeAttr("checked");
}
function removeList10() {
	$("input:radio[name='rd_safety_traffic']").removeAttr("checked");
}
function removeList11() {
	$("input:radio[name='rd_safety_crime']").removeAttr("checked");
}
function removeList12() {
	$("input:radio[name='rd_safety_safety']").removeAttr("checked");
}
function removeList13() {
	$("input:radio[name='rd_safety_infection']").removeAttr("checked");
}
function removeList14() {
	$("input:radio[name='rd_safety_nature']").removeAttr("checked");
}
function removeList15() {
	$("input:radio[name='rd_life_convenient']").removeAttr("checked");
}
function removeList16() {
	$("input:radio[name='rd_life_shopping']").removeAttr("checked");
}
function removeList17() {
	$("input:radio[name='rd_life_restaurant']").removeAttr("checked");
}
function removeList18() {
	$("input:radio[name='rd_life_publicTraffic']").removeAttr("checked");
}
function removeList19() {
	$("input:radio[name='rd_people_foreign']").removeAttr("checked");
}
function removeList20() {
	$("input:radio[name='rd_people_density']").removeAttr("checked");
}
function removeList21() {
	$("input:radio[name='rd_nature_park']").removeAttr("checked");
}
function removeList22() {
	$("input:radio[name='rd_nature_pollution']").removeAttr("checked");
}
