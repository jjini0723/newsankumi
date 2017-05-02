/**
 * 아파트 교통수단 시간 비교
 */

//mychart2
//평균  - line / 아파트의 교통수단 별 
var myChart2 = {};

function getChartData2(index){
   var titlelist = JSON.parse($("#titleList").val());
   var barData = []; //
   var line_data= []; // 전국평균

   var listData2 = JSON.parse($("#graphData").val());
   console.log(listData2);
   console.log(listData2[0]);
   
   var item = listData2[index];
   var itemkey = [];
   var itemvalue = [];
   var itemvalueavg = [];
   
   $.each(item, function(key, value){
      if (!isNaN(value) && value != 0) {
         if (key == "car1" || key =="car2" || key == "car3" || key == "car4" || key == "car5" ||
               key == "tradi1"|| key == "tradi2" ||key == "tradi3" ||key == "tradi4" ||key == "tradi5" ||
               key == "walk1" || key == "walk2" ||key == "walk3" ||key == "walk4" || key == "walk5") {
                  //itemkey.push(key);
                  itemvalue.push(Math.round(value/60,2));
         }else if (key == "car1avg" || key =="car2avg" || key == "car3avg" || key == "car4avg" || key == "car5avg" ||
               key == "tradi1avg"|| key == "tradi2avg" ||key == "tradi3avg" ||key == "tradi4avg" ||key == "tradi5avg" ||
               key == "walk1avg" || key == "walk2avg" ||key == "walk3avg" ||key == "walk4avg" || key == "walk5avg"){
               itemvalueavg.push(Math.round(value/60,2));
         }
      }
      
   });
   //console.log(itemkey + "," + itemvalue + "," + itemvalueavg);
   console.log('titlelist'+titlelist);
   createChart2(titlelist, itemvalueavg, itemvalue);
}


function createChart2(titlelist, lineData, barData){
   var ctx2 = document.getElementById("myChart2");
   
   myChart2 = new Chart(ctx2, {
       type: 'bar',
       data: {
           labels: titlelist,
           datasets: [
               {
                   type: 'bar',
                   label: '교통수단 별 소요시간 (분)',
                   data: barData,
                   backgroundColor:[
                   'rgba(255, 99, 132, 0.3)',
                   'rgba(54, 162, 235, 0.3)',
                   'rgba(255, 206, 86, 0.3)',
                   'rgba(75, 192, 192, 0.3)',
                   'rgba(153, 102, 255, 0.3)',
                   'rgba(255, 159, 64, 0.3)'],
                   
                   borderColor: [
                       'rgba(255,99,132,1)',
                       'rgba(54, 162, 235, 1)',
                       'rgba(255, 206, 86, 1)',
                       'rgba(75, 192, 192, 1)',
                       'rgba(153, 102, 255, 1)',
                       'rgba(255, 159, 64, 1)'
                   ],
               },
               {
                   type: 'line',
                   label: '평균 소요시간 (분)',
                   data: lineData,
                   pointBackgroundColor : "gray",
                   backgroundColor : "rgba(255,255,255,0)",
                   opacity : "0"
               }
           ]
       },
       options : { 
          height : "300px",
          width : "300px",
          responsive: false,
               scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero:true
                       }
                   }]
               }
           }
   });
   
}

function initChart2(){
   if (myChart2 != null) {
	   myChart2.destroy();
	
   }
}