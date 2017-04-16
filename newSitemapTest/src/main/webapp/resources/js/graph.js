/**
 * 그래프 만들기
 */
	var uniqueList = [];//중복값 제거 배열
	var dataList = []; //그래프에 그려질 값
	var labelList = [];//라벨이 담긴 배열


function createSelectedChart(item){
	/*if (objlist == "") {
		var item = JSON.parse($("#dongitem").val());
		console.log(item);
		var obj = objlist[index];
		console.log(obj);
		
	}*/
		var list = [];//null이 아닌 값을 추가해서 넘길 배열
		var sKey=""; //
		var kKey="";
		var citycode = "";
			$.each(item, function(key, value) { 
				if (value != 0) {
					if (key == "citycode") {
						citycode = value;
					}
					
					list.push(key);
				}
			});
			console.log(citycode);
			console.log(list);
			createData(list, citycode);//리스트에 나온 동들 그래프 만들기
}




function createData(list, citycode){
	$.each(list, function (i, el){
		if($.inArray(el,uniqueList)=== -1) uniqueList.push(el);
		
	});
	
	$.ajax({
		url : "createData",
		type : "post",
		async: false,
		data : {
			citycode : citycode
		},
		success : function (data){ //table에서 가져 온 값 배열과 배열 내의 key값은 label로 & label(자연, 지역인구, 안전..) 
			if(labelList.length ==0){
			$.each(data, function (key, value){
				for (var i = 0; i < uniqueList.length; i++) {
					if (uniqueList[i] == key) {
						if (key == "welfare_sports") {
							labelList.push("체육시설");
							dataList.push(value);
						}
						if (key == "welfare_culture") {
							labelList.push("문화시설");
							dataList.push(value);
						}	
						if (key == "welfare_salon") {
							labelList.push("미/이용시설");
							dataList.push(value);
						}	
						if (key == "welfare_society") {
							labelList.push("사회복지시설");
							dataList.push(value);
						}	
						if (key == "welfare_medical") {
							labelList.push("의료시설");
							dataList.push(value);
						}	
						if (key == "welfare_childCare") {
							labelList.push("보육시설");
							dataList.push(value);
						}	
						if (key == "education_student") {
							labelList.push("교원1인당 학생수");
							dataList.push(value);
						}	
						if (key == "education_academy") {
							labelList.push("학원수");
							dataList.push(value);
						}	
						if (key == "safety_fire") {
							labelList.push("화재안전사고");
							dataList.push(value);
						}	
						if (key == "safety_traffic") {
							labelList.push("교통안전사고");
							dataList.push(value);
						}	
						if (key == "safety_crime") {
							labelList.push("범죄사고");
							dataList.push(value);
						}	
						if (key == "safety_safety") {
							labelList.push("안전사고");
							dataList.push(value);
						}	
						if (key == "safety_infection") {
							labelList.push("전염병");
							dataList.push(value);
						}	
						if (key == "safety_nature") {
							labelList.push("자연재해");
							dataList.push(value);
						}	
						if (key == "life_convenient") {
							labelList.push("편의시설");
							dataList.push(value);
						}	
						if (key == "life_shopping") {
							labelList.push("쇼핑시설");
							dataList.push(value);
						}	
						if (key == "life_restaurant") {
							labelList.push("외식시설");
							dataList.push(value);
						}	
						if (key == "life_publicTraffic") {
							labelList.push("대중교통이용률");
							dataList.push(value);
						}	
						if (key == "people_foreign") {
							labelList.push("외국인거주비율");
							dataList.push(value);
						}	
						if (key == "people_density") {
							labelList.push("인구밀도");
							dataList.push(value);
						}	
						if (key == "nature_park") {
							labelList.push("주변 공원 수");
							dataList.push(value);
						}	
						if (key == "nature_pollution") {
							labelList.push("미세먼지");
							dataList.push(value);
						}	
					}
				}//for문 끝
			
			});//each문끝
			}

				
		},
		error : function (e){
			console.log(e)
		}
		
});
	standardChart();
	console.log("standard만들기")
}

function standardChart(){
	
	var standardList = [];//기준지역 값 배열
		var si = $("#mp_addcd_sido option:selected").text();
		var gu = $("#mp_addcd_gg option:selected").text();

		console.log("si+gu"+si + gu);
		console.log(uniqueList);
	if (si != '시/도' || gu != '구/군') {
		
		$.ajax({
			url : "standardChart",
			type : "post",
			async: false,
			data : {
				si : si,
				gu : gu
			},
			success : function(data){
				console.log(data);
				$.each(data, function(key, value){
					for (var i = 0; i < uniqueList.length; i++) {
						if (uniqueList[i] == key && value != null && key != 'totalScore' && key != 'citycode') {
								standardList.push(value);
						}
					}
				});
				console.log("1st stlist " + standardList);
				/*return standardList;*/
			},
			error : function (e){
				console.log(e);
				
			} 
		});
		}else{
			for (var j = 0; j < labelList.length; j++) {
				standardList.push(50);
			}
			/*return standardList;*/
			console.log("1st.standardList" + standardList);
		}
	createChart(labelList, dataList, standardList);
	
}

function willThisWork(citycode){
	dataList = [];
	$.ajax({
		url : "createData",
		type : "post",
		async: false,
		data : {
			citycode : citycode
		},
		success : function (data){ //table에서 가져 온 값 배열과 배열 내의 key값은 label로 & label(자연, 지역인구, 안전..) 
			$.each(data, function (key, value){
				for (var i = 0; i < uniqueList.length; i++) {
					if (uniqueList[i] == key) {
						if (key == "welfare_sports") {
							dataList.push(value);
						}
						if (key == "welfare_culture") {
							dataList.push(value);
						}	
						if (key == "welfare_salon") {
							dataList.push(value);
						}	
						if (key == "welfare_society") {
							dataList.push(value);
						}	
						if (key == "welfare_medical") {
							dataList.push(value);
						}	
						if (key == "welfare_childCare") {
							dataList.push(value);
						}	
						if (key == "education_student") {
							dataList.push(value);
						}	
						if (key == "education_academy") {
							dataList.push(value);
						}	
						if (key == "safety_fire") {
							dataList.push(value);
						}	
						if (key == "safety_traffic") {
							dataList.push(value);
						}	
						if (key == "safety_crime") {
							dataList.push(value);
						}	
						if (key == "safety_safety") {
							dataList.push(value);
						}	
						if (key == "safety_infection") {
							dataList.push(value);
						}	
						if (key == "safety_nature") {
							dataList.push(value);
						}	
						if (key == "life_convenient") {
							dataList.push(value);
						}	
						if (key == "life_shopping") {
							dataList.push(value);
						}	
						if (key == "life_restaurant") {
							dataList.push(value);
						}	
						if (key == "life_publicTraffic") {
							dataList.push(value);
						}	
						if (key == "people_foreign") {
							dataList.push(value);
						}	
						if (key == "people_density") {
							dataList.push(value);
						}	
						if (key == "nature_park") {
							dataList.push(value);
						}	
						if (key == "nature_pollution") {
							dataList.push(value);
						}	
					}
				}//for문 끝
			
			});//each문끝

				
		},
		error : function (e){
			console.log(e)
		}
		
});
	console.log("과연" + dataList);
	standardChart();
	console.log("끝?");
}

function createChart(labelList, dataList, list){
		

	var lableL = labelList;
	var dataL = dataList;
	var standardL = list;
	if (standardL == '') {
		standardL = [50,50,50,50,50,50];
	}
	console.log("labellist" + labelList);
	console.log("datalist" + dataList);
	console.log("stanardL" + standardL);
	
	var ctx = $("#myChart");
	
	var customer = {
				label: "내가 선택한 지역",
	            backgroundColor: "rgba(34,149,138,0.3)",
	            borderColor: "rgba(34,149,138,1)",
	            pointBackgroundColor: "rgba(34,149,138,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(34,149,138,1)",
	            data: dataL,
	            maxHeight : "200px"
			
	}
	
	var data = {
		    labels: lableL,
		    datasets: [
		        {
		            label: "기준 지역",
		            backgroundColor: "rgba(179,181,198,0.3)",
		            borderColor: "rgba(179,181,198,1)",
		            pointBackgroundColor: "rgba(179,181,198,1)",
		            pointBorderColor: "#fff",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(179,181,198,1)",
		            data: standardL,
		            maxHeight : "200px"
		        },
		        customer
		    ]
		};
	
	var myRadarChart = 	new Chart(ctx, {
	    type: "radar",
	    data: data,
	    options: {
	            scale: {
	                   ticks: {
	                    beginAtZero: true
	                }
	            }
	    }
	});
	

}
