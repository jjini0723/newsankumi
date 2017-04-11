/**
 * 그래프 만들기
 */


function cCustomer(){
	
	
	
}

function createChart(){
	var ctx = $("#myChart");
	
	var customer = {
				label: "내가 선택한 지역",
	            backgroundColor: "rgba(34,149,138,0.3)",
	            borderColor: "rgba(34,149,138,1)",
	            pointBackgroundColor: "rgba(34,149,138,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(34,149,138,1)",
	            data: [28, 48, 40, 19, 96, 100]
			
	}
	
	var data = {
		    labels: ["자연", "지역 인구", "안전", "생활 편의 교통", "교육", "복지 문화"],
		    datasets: [
		        {
		            label: "전국",
		            backgroundColor: "rgba(179,181,198,0.3)",
		            borderColor: "rgba(179,181,198,1)",
		            pointBackgroundColor: "rgba(179,181,198,1)",
		            pointBorderColor: "#fff",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(179,181,198,1)",
		            data: [65, 59, 90, 81, 55, 40]
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