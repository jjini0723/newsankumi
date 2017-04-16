/**
 * 아파트 교통수단 시간 비교
 */
var bar_data = [];
var labels = [];
var line_data= [];

//mychart2

function createData2(){
	console.log("들어오니?");
	var ctx2 = document.getElementById("myChart2");
	var myChart2 = new Chart(ctx2, {
	    type: 'bar',
	    data: {
	        labels: ['1', '2', '3','4','5','6','7','8'],
	        datasets: [
	            {
	                type: 'bar',
	                label: 'Bar Component',
	                data: [10, 20, 30,40,50,60,70,80]
	            },
	            {
	                type: 'line',
	                label: 'Line Component',
	                data: [40, 40, 40,40,40,40,30,40]
	            }
	        ]
	    }
	});
}

