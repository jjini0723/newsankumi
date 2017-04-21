/**
 * 그래프 만들기
 */
	/*var uniqueList = [];//중복값 제거 배열
	var dataList = []; //그래프에 그려질 값
	var labelList = [];//라벨이 담긴 배열
*/	
	
function createChart1(index){
	rawKeyList.length = 0;
	valueList.length = 0;
	labelList.length = 0;
	console.log(index);
	var listData = JSON.parse($("#dongitem").val());
	
	console.log(listData);
	//buildlist에 있는 내용들이 나옴
	var rawKeyList = [];
	var valueList = [];
	var labelList = [];//한글 라벨
	
	var obj = listData[index];
	
	$.each(obj, function(key, value){
		if (value != 0 && key != "si" && key != "gu" && key != "dong" &&key != "citycode" && key != "totalScore") {
			rawKeyList.push(key);
			valueList.push(value);
		}
	});
for (var i = 0; i < rawKeyList.length; i++) {
	
	if (rawKeyList.length != 0) {
		if (rawKeyList[i] == "welfare_sports") {
			labelList.push("체육시설");
		}
		if (rawKeyList[i] == "welfare_culture") {
			labelList.push("문화시설");
		}	
		if (rawKeyList[i] == "welfare_salon") {
			labelList.push("미/이용시설");
		}	
		if (rawKeyList[i] == "welfare_society") {
			labelList.push("사회복지시설");
		}	
		if (rawKeyList[i] == "welfare_medical") {
			labelList.push("의료시설");
		}	
		if (rawKeyList[i] == "welfare_childCare") {
			labelList.push("보육시설");
		}	
		if (rawKeyList[i] == "education_student") {
			labelList.push("교원1인당 학생수");
		}	
		if (rawKeyList[i] == "education_academy") {
			labelList.push("학원수");
		}	
		if (rawKeyList[i] == "safety_fire") {
			labelList.push("화재안전사고");
		}	
		if (rawKeyList[i] == "safety_traffic") {
			labelList.push("교통안전사고");
		}	
		if (rawKeyList[i] == "safety_crime") {
			labelList.push("범죄사고");
		}	
		if (rawKeyList[i] == "safety_safety") {
			labelList.push("안전사고");
		}	
		if (rawKeyList[i] == "safety_infection") {
			labelList.push("전염병");
		}	
		if (rawKeyList[i] == "safety_nature") {
			labelList.push("자연재해");
		}	
		if (rawKeyList[i] == "life_convenient") {
			labelList.push("편의시설");
		}	
		if (rawKeyList[i] == "life_shopping") {
			labelList.push("쇼핑시설");
		}	
		if (rawKeyList[i] == "life_restaurant") {
			labelList.push("외식시설");
		}	
		if (rawKeyList[i] == "life_publicTraffic") {
			labelList.push("대중교통이용률");
		}	
		if (rawKeyList[i] == "people_foreign") {
			labelList.push("외국인거주비율");
		}	
		if (rawKeyList[i] == "people_density") {
			labelList.push("인구밀도");
		}	
		if (rawKeyList[i] == "nature_park") {
			labelList.push("주변 공원 수");
		}	
		if (rawKeyList[i]== "nature_pollution") {
			labelList.push("미세먼지");
		}	
	}
}
	console.log(valueList);
	console.log(labelList);
	
		//기준지역 만들기 시작.
	var standardList = [];//기준지역 값 배열
	var si = $("#mp_addcd_sido option:selected").text();
	var gu = $("#mp_addcd_gg option:selected").text();
	console.log("si+gu"+si + gu);
	
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
					console.log(value);
					for (var i = 0; i < labelList.length; i++) {
						if (rawKeyList[i] == key && value != 0 && key != 'totalScore' && key != 'citycode') {
								standardList.push(value);
								console.log("기준이 있는 경우");
						}
					}
				});
			},
			error : function (e){
				console.log(e);
				
			} 
		});
		}else{
			for (var j = 0; j < labelList.length; j++) {
				standardList.push(50);
				console.log("기준이 없는 경우");
			}
			
		}
	console.log("standardList" + standardList);
	createChart(labelList, valueList, standardList);

		
}//function종료

function createChart(labelList, dataList, standardList){
	
	var lableL = labelList;
	var dataL = dataList;
	var standardL = standardList;
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

function makeChart(){
Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Budget vs spending',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                'Information Technology', 'Administration'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: 'on'
    }, {
        name: 'Actual Spending',
        data: [50000, 39000, 42000, 31000, 26000, 14000],
        pointPlacement: 'on'
    }]

});
}