/**
 * 라디오버튼에서 선택 된 값 리스트에 넣기
 */

function getRadios(selected) {
	
	console.log(selected);
	//스포츠
	var welfare_sports = "";
	
	for (var i = 0; i < selected.rd_welfare_sports.length; i++) {
		if(selected.rd_welfare_sports[i].checked) 
		  welfare_sports = selected.rd_welfare_sports[i].value; 
	}
	if (welfare_sports != '') {
		html += "<li value = " + welfare_sports + ">" + 스포츠시설 + "</li>";
	}
	
	//문화시설
	var welfare_culture = "";
	for (var i = 0; i < selected.rd_welfare_culture.length; i++) {
		if(selected.rd_welfare_culture[i].checked) 
			welfare_culture = selected.rd_welfare_culture[i].value; 
	}
	
	if (welfare_culture != '') {
		html += "<li>" + welfare_culture + "</li>";
	}
	
	//미용
	var welfare_salon = "";
	for (var i = 0; i < selected.rd_welfare_salon.length; i++) {
		if(selected.rd_welfare_salon[i].checked) 
			welfare_salon = selected.rd_welfare_salon[i].value; 
	}
	
	if (welfare_salon != '') {
		html += "<li>" + welfare_salon + "</li>";
	}
	
	//사회복지시설
	var welfare_society = "";
	for (var i = 0; i < selected.rd_welfare_society.length; i++) {
		if(selected.rd_welfare_society[i].checked) 
			welfare_salon = selected.welfare_society[i].value; 
	}
	
	if (welfare_society != '') {
		html += "<li>" + welfare_society + "</li>";
	}
	
	//의료시설
	var welfare_medical = "";
	for (var i = 0; i < selected.rd_welfare_medical.length; i++) {
		if(selected.rd_welfare_medical[i].checked) 
			welfare_medical = selected.welfare_medical[i].value; 
	}
	
	if (welfare_medical != '') {
		html += "<li>" + welfare_medical + "</li>";
	}
	
	
	//보육시설	
	var welfare_childcare = "";
	for (var i = 0; i < selected.rd_welfare_childcare.length; i++) {
		if(selected.rd_welfare_childcare[i].checked) 
			welfare_childcare = selected.welfare_childcare[i].value; 
	}
	
	if (welfare_childcare != '') {
		html += "<li>" + welfare_childcare + "</li>";
	}
	
	//1인당 교원수
	var education_student = "";
	for (var i = 0; i < selected.rd_education_student.length; i++) {
		if(selected.rd_education_student[i].checked) 
			education_student = selected.education_student[i].value; 
	}
	
	if (education_student != '') {
		html += "<li>" + education_student + "</li>";
	}
	
	//학원수
	var education_academy = "";
	for (var i = 0; i < selected.rd_education_academy.length; i++) {
		if(selected.rd_education_academy[i].checked) 
			education_academy = selected.education_academy[i].value; 
	}
	
	if (education_academy != '') {
		html += "<li>" + education_academy + "</li>";
	}
	
	//안전_화재
	var safety_fire = "";
	for (var i = 0; i < selected.rd_safety_fire.length; i++) {
		if(selected.rd_safety_fire[i].checked) 
			safety_fire = selected.safety_fire[i].value; 
	}
	
	if (safety_fire != '') {
		html += "<li>" + safety_fire + "</li>";
	}
	
	
	//교통사고
	var safety_traffic = "";
	for (var i = 0; i < selected.rd_safety_traffic.length; i++) {
		if(selected.rd_safety_traffic[i].checked) 
			safety_traffic = selected.safety_traffic[i].value; 
	}
	
	if (safety_traffic != '') {
		html += "<li>" + safety_traffic + "</li>";
	}
	
	//범죄
	var safety_crime = "";
	for (var i = 0; i < selected.rd_safety_crime.length; i++) {
		if(selected.rd_safety_crime[i].checked) 
			safety_crime = selected.safety_crime[i].value; 
	}
	
	if (safety_crime != '') {
		html += "<li>" + safety_crime + "</li>";
	}
	
	//안전사고
	var safety_safety = "";
	
	
	var safety_infection = "";
	var safety_nature = "";
	var life_convenient = "";
	var life_shopping = "";
	var life_restaurant = "";
	var life_publicTraffic = "";
	var people_foreign = "";
	var people_density = "";
	var nature_park = "";
	var nature_pollution = "";

	var html = "";
	//
	for (var i = 0; i < selected.rd_welfare_sports.length; i++) {
		if(selected.rd_welfare_sports[i].checked) 
		  welfare_sports = selected.rd_welfare_sports[i].value; 
	}
	
	if (welfare_sports != '') {
		html += "<li>" + welfare_sports + "</li>"
	}
	 
	
	for (var i = 0; i < selected.rd_nature_pollution.length; i++) {
		if (selected.rd_nature_pollution[i].checked)
			nature_pollution = selected.rd_nature_pollution[i].value;
		console.log(nature_pollution);
	}
	
	if (nature_pollution != '') {
		html += "<li>" + nature_pollution + "</li>"
	}
	
	
	$(".seletedList").html(html);
}
