/**
 * 아파트 교통수단 시간 비교
 */

//mychart2
//평균  - line / 아파트의 교통수단 별 

function getChartData2(){
	
	var barData = []; //
	var labelList2 = [];//희망목적지
	var line_data= []; // 전국평균

	var listData2 = JSON.parse($("#transport").val());
	console.log(listData2);
	console.log(listData2[0]);
	
	for (var i = 0; i < listData2.length; i++) {
		$.each(listData2[i], function(key, value){
			var title = listData2[i].title;
				labelList2.push(title);
			if (value != 0 || !isNaN(value)) {
				var time = value/60;
				barData.push(time);
				
			}
			if (key == "car1avg") {
				
			}
			
		});
	}
	
	/*createChart2(labelList2, lineData, barData);*/
}


function createChart2(labelList2, lineData, barData){
	var ctx2 = document.getElementById("myChart2");
	
	var myChart2 = new Chart(ctx2, {
	    type: 'bar',
	    data: {
	        labels: labelList2,
	        datasets: [
	            {
	                type: 'bar',
	                label: '교통수단 별 소요시간',
	                data: barData
	            },
	            {
	                type: 'line',
	                label: '평균 소요시간',
	                data: lineData
	            }
	        ]
	    }
	});
	
}

