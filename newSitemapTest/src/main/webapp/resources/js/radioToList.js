/**
 * 라디오버튼에서 선택 된 값 리스트에 넣기
 */
var items = [];
function getRadios(selected) {
	console.log(selected);
	var html = "";
	
	//스포츠
	var welfare_sports = "";
	
	for (var i = 0; i < selected.rd_welfare_sports.length; i++) {
		if(selected.rd_welfare_sports[i].checked) 
		  welfare_sports = selected.rd_welfare_sports[i].value; 
	}
	if (welfare_sports != '') {
		items.push("스포츠시설");
		setList(items);
	}
	
	
	//문화시설
	var welfare_culture = "";
	for (var i = 0; i < selected.rd_welfare_culture.length; i++) {
		if(selected.rd_welfare_culture[i].checked) 
			welfare_culture = selected.rd_welfare_culture[i].value; 
	}
	if (welfare_culture != '') {
		html += "<li id = 'welfare_sports' value = " + welfare_sports + ">" + '문화시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	//미용
	var welfare_salon = "";
	for (var i = 0; i < selected.rd_welfare_salon.length; i++) {
		if(selected.rd_welfare_salon[i].checked) 
			welfare_salon = selected.rd_welfare_salon[i].value; 
	}
	
	if (welfare_salon != '') {
		html += "<li id = 'welfare_salon' value = " + welfare_salon + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	//사회복지시설
	var welfare_society = "";
	for (var i = 0; i < selected.rd_welfare_society.length; i++) {
		if(selected.rd_welfare_society[i].checked) 
			welfare_salon = selected.welfare_society[i].value; 
	}
	
	if (welfare_society != '') {
		html += "<li id = 'welfare_society' value = " + welfare_society + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	//의료시설
	var welfare_medical = "";
	for (var i = 0; i < selected.rd_welfare_medical.length; i++) {
		if(selected.rd_welfare_medical[i].checked) 
			welfare_medical = selected.welfare_medical[i].value; 
	}
	
	if (welfare_medical != '') {
		html += "<li id = 'welfare_medical' value = " + welfare_medical + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	
	//보육시설	
	var welfare_childcare = "";
	for (var i = 0; i < selected.rd_welfare_childcare.length; i++) {
		if(selected.rd_welfare_childcare[i].checked) 
			welfare_childcare = selected.welfare_childcare[i].value; 
	}
	
	if (welfare_childcare != '') {
		html += "<li id = 'welfare_childcare' value = " + welfare_childcare + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	//1인당 교원수
	var education_student = "";
	for (var i = 0; i < selected.rd_education_student.length; i++) {
		if(selected.rd_education_student[i].checked) 
			education_student = selected.education_student[i].value; 
	}
	
	if (education_student != '') {
		html += "<li id = 'education_student' value = " + education_student + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
	}
	
	//학원수
	var education_academy = "";
	for (var i = 0; i < selected.rd_education_academy.length; i++) {
		if(selected.rd_education_academy[i].checked) 
			education_academy = selected.education_academy[i].value; 
	}
	
	if (education_academy != '') {
		html += "<li id = 'education_academy' value = " + education_academy + ">" + '미/이용 시설' 
		+'<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ "</li>";
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

	
	//미세먼지
	var nature_pollution = "";
	for (var i = 0; i < selected.rd_nature_pollution.length; i++) {
		if (selected.rd_nature_pollution[i].checked)
			nature_pollution = selected.rd_nature_pollution[i].value;
	}
	if (nature_pollution != '') {
		html += "<li>" + nature_pollution + "</li>"
	}
	
	$(".seletedList").html(html);
}	
/*

function setList(items) {
	var html = "";
	html += '<ul class = "seletedList" id = "selectedList">';
		for (var i = 0; i < items.length; i++) {
			html += '<li> ' + items[i] + '<a href="#" onclick="removeList(' + i + ');">   x   </a> '+ '</li>' ;
		};
	
	html += '</ul>';
	$('#sList').html(html);
}
*/

function setList(items) {
	var html = "";
	html += '<ul class = "seletedList" id = "selectedList">';
		for (var i = 0; i < items.length; i++) {
			html += '<li> ' + items[i] + '<a href="#" onclick="removeItem(' + i + ');">   x   </a> '+ '</li>' ;
		};
	
	html += '</ul>';
	$('#sList').html(html);
}

function removeList(index) {
		console.log(index);
		var list = 	$("#selectedList").val();
		console.log(list);
		splice(index, 1);
		setList(items);
}


