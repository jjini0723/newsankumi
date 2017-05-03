/**
 * 추천 지역 리스트 가져오기, 삭제, 동 추가, 다음 단으로 동정보 넘기기
 */

var items = [];

$(document).ready(function() {
    function deleteItem(){
    $('#btn-remove').click(function(){
        $('#select-to option:selected').each( function() {
            $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
            //click누르기
        });
    });
    }
});

//리스트 뿌리기
function buildList(list) {
   $("#dongitem").val(JSON.stringify(list));
 /*  for (var j = 0; j < 10; j++) {
	items.push(list[j]); //전역변수에 담기
}*/
   items = list; //전역변수에 담기
   
   var html = "";
   html += '<ol class = "decimal" data-width="400" id = "resultList">';

   moveMap(0);
   createChart1(0);
  /* var top = parseFloat(list[0].totalScore).toFixed(2);
   console.log(parseFloat(items[0].totalScore/top).toFixed(2));
   console.log("top"+top);*/
   for (var i = 0; i < items.length; i++) {
	   
      html += '<li ><a href = "#" id = "'+items[i].citycode+'" value = "'
      +items[i].citycode+'" class = "'+items[i].gu +','+ items[i].dong+'" onclick = '+
      '"initChart(); createChart1('+ i +'); setCircle('+items[i].leasingPrice+','+items[i].salePrice+','+i+'); moveMap('+i+');"'+
      'style="color:#333333";> ' 
      + items[i].si+ " "+ items[i].gu +" "+ items[i].dong + " "+ '<a href="#" onclick="initChart(); removeItem(' + i + ');" style = "color:red";>   x   </a><a style = "float:right;">'+parseFloat(items[i].totalScore/top123*5).toFixed(2)+'</a></li>' ;
      var score1 = parseFloat(items[i].totalScore/top123*5).toFixed(2);
      
   }
   for (var j = 0; j < items.length; j++) {
	  dongScore.push(parseFloat(items[j].totalScore/top123*5).toFixed(2));
   }
   console.log("dongscore"+dongScore);
   
   html += '</ol>';
   $('#req_loc1').html(html);
}


function addItem() {
	var re = {};
    var obj1 = document.getElementById("selectThis3"); // 시
    var obj2 = document.getElementById("selectThis4"); // 구군
    var obj3 = document.getElementById("selectThis5"); // 읍면동
    var idx1 = obj1.options.selectedIndex; // obj1의 선택값인덱스 구하기
    var idx2 = obj2.options.selectedIndex;
    var idx3 = obj3.options.selectedIndex;
    
    var si = obj1.options[idx1].text;
    var gu = obj2.options[idx2].text;
    var dong = obj3.options[idx3].text;
    console.log(dong);
    var keylist = JSON.parse($("#keylist").val());
    console.log(conditionResultList[10].dong);
    if (si != "시/도" || gu != "군/구" || dong != "읍/면/동") {
    	
    	$.each(conditionResultList,function(index, value){
    		console.log(conditionResultList[5].dong);
    		
    		if (dong == conditionResultList[index].dong && gu == conditionResultList[index].gu) {
    			$.each(conditionResultList[index], function(key, value){
					 if (key == keylist[0] || key == keylist[1] ||key == keylist[2] ||key == keylist[3] ||key == keylist[4] 
	                 ||key == keylist[5] || key == "si" || key =="gu" || key =="dong" || key == "leasingPrice" || key == "salePrice" || key == "totalScore"|| key == "citycode" ) {
	                  console.log("들어옴");
	               }else{
	                  delete conditionResultList[index][key];
	                  console.log("delete");
	               }
					 re = conditionResultList[index];
				});
			}
    		
    	});
    	items.push(re);
			
			 initChart();
	         console.log(items);
	         buildList(items);
	         
	          $("#selectThis3").empty().data('options');
	          $("#selectThis3").append('<option value="">시/도</option><option value="서울특별시">서울특별시</option>'
	                +'<option value="인천광역시">인천광역시</option><option value="경기도">경기도</option>');
	          $("#selectThis4").empty().data('options');
	          $("#selectThis4").append("<option>군/구</option>");
	          $("#selectThis5").empty().data('options');
	          $("#selectThis5").append("<option>읍/면/동</option>");
    }
    
}

function removeItem(index) {
    items.splice(index, 1);
    deleteArray1();
    buildList(items);
}

function setCircle(lease, buy, index) {
    console.log(buy,lease);
    var geocoder = new daum.maps.services.Geocoder();
    var circle = new daum.maps.Circle({});

    var listData = JSON.parse($("#dongitem").val());
    ///////태훈 추가 수정부분
    
    var item = listData[index];
    var ghNameStr = item.dong;
    var lastChar = ghNameStr.charAt(ghNameStr.length - 1);
    
    if(circleArray.length != 0 || priceArray.length != 0) {
        circleArray[0].setMap(null);
        circleArray.splice(0,1);
        priceArray[0].setMap(null);
        priceArray.splice(0,1);
    }
    
    geocoder.addr2coord(item.gu+" "+item.dong, function(status, result) {
        // 정상적으로 검색이 완료됐으면 
        if (status === daum.maps.services.Status.OK) {
            if(lastChar == '읍' || lastChar == '면') {
                circle = new daum.maps.Circle({
                    center : new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng),  // 원의 중심좌표 입니다 
                    radius: 8000, // 미터 단위의 원의 반지름입니다 
                    strokeWeight: 1, // 선의 두께입니다 
                    strokeColor: '#333', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'stroke', // 선의 스타일 입니다
                    fillColor: '#b7b7b7', // 채우기 색깔입니다
                    fillOpacity: 0.4  // 채우기 불투명도 입니다   
                });

                var content = '<div style="padding:10px; font-size:2rem; opacity:1; color:white; margin-left:-120px; text-shadow: 0 0 57px black;'
                          +'margin-top: 70px; font-weight: bold;">'+'평당 매매가 '+buy+' (3.3㎡)<br><br>'+'평당 전세가 '+lease+' (3.3㎡)</div>';  
                // 커스텀 오버레이가 표시될 위치입니다 
                var position = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);  

                // 커스텀 오버레이를 생성합니다
                var customOverlay = new daum.maps.CustomOverlay({
                    position: position,
                    content: content,
                    xAnchor: 0.3,
                    yAnchor: 0.91
                });
                console.log(customOverlay);
                // 커스텀 오버레이를 지도에 표시합니다
                customOverlay.setMap(map);
                circle.setMap(map);
             
            } else {
                circle = new daum.maps.Circle({
                center : new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng),  // 원의 중심좌표 입니다 
                radius: 4000, // 미터 단위의 원의 반지름입니다 
                    strokeWeight: 1, // 선의 두께입니다 
                    strokeColor: '#333', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'stroke', // 선의 스타일 입니다
                    fillColor: '#b7b7b7', // 채우기 색깔입니다
                    fillOpacity: 0.4  // 채우기 불투명도 입니다   
                });
                var content = '<div style="padding:10px; font-size:2rem; opacity:1; color:white; margin-left:-120px; text-shadow: 0 0 57px black;'
                           +'margin-top: 70px; font-weight: bold;">'+'평당 매매가 '+buy+' (3.3㎡)<br><br>'+'평당 전세가 '+lease+'(3.3㎡)</div>'; 
                // 커스텀 오버레이가 표시될 위치입니다 
                var position = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);  
                // 커스텀 오버레이를 생성합니다
                var customOverlay = new daum.maps.CustomOverlay({
                    position: position,
                    content: content,
                    xAnchor: 0.3,
                    yAnchor: 0.91
                });
                console.log(customOverlay);
                // 커스텀 오버레이를 지도에 표시합니다
                customOverlay.setMap(map);
                circle.setMap(map);
            }
            //console.log(infowindow);
            circleArray.push(circle);
            priceArray.push(customOverlay);
        }
    });
}

function moveMap(index){
   
   var listData = JSON.parse($("#dongitem").val());
   
   var item = listData[index];
   var geocoder = new daum.maps.services.Geocoder();
   var callback = function(status, result) {
       if (status === daum.maps.services.Status.OK) {
           console.log(result);
           console.log(result.addr[0]);
           var obj = result.addr[0];
           console.log(obj.lat, obj.lng);
           setCenter(obj.lat, obj.lng);
       }
   };
   geocoder.addr2coord(item.gu + " " + item.dong, callback);
   

}

function setCenter(lat, lng) {  
   console.log(lat);
   console.log(lng);
   
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new daum.maps.LatLng(lat, lng);
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
}     


function sendData1(){ //코드 및 동 리스트 가져오기
   var firstlist = [];
   var resultList = [];
   var addList1 = [];
   var finalAddList=[];
   
   for (var i = 0; i < 13; i++) {
      firstlist[i] = $(".decimal").find("a").eq(i).attr('class');
      addList1[i] = $(".decimal").find("a").eq(i).text();
   }
   console.log(firstlist);
   console.log(addList1);
      if (firstlist.length<12 && typeof firstlist[6] == undefined ||firstlist[6] == null||typeof firstlist[3] == undefined ||firstlist[3] == null ){
         sweetAlert({
            title: "이런!", 
             text: "최소 3개 이상 선택 해 주세요!", 
             type: "error"
         });
         console.log(firstlist);
         return false;
      }
      else{
    	  
      if (typeof firstlist[9] == undefined ||firstlist[9] == null ) {//3개
         var split1 = firstlist[0].split(',');
         var split2 = firstlist[3].split(',');
         var split3 = firstlist[6].split(',');
         var gustr = split1[0]+','+split2[0]+','+split3[0];
         var dongstr = split1[1]+','+ split2[1]+','+split3[1];
         finalAddList.push(addList1[0]);
         finalAddList.push(addList1[3]);
         finalAddList.push(addList1[6]);
         console.log(firstlist);
      	}else if (typeof firstlist[12] == undefined ||firstlist[12] == null ) { //4개
         var split1 = firstlist[0].split(',');
         var split2 = firstlist[3].split(',');
         var split3 = firstlist[6].split(',');
         var split4 = firstlist[9].split(',');
         var gustr = split1[0]+','+split2[0]+','+split3[0]+','+split4[0];
         var dongstr = split1[1]+','+ split2[1]+','+split3[1]+','+split4[1];
         finalAddList.push(addList1[0]);
         finalAddList.push(addList1[3]);
         finalAddList.push(addList1[6]);
         finalAddList.push(addList1[9]);
         console.log(firstlist);
      }
      else{
         var split1 = firstlist[0].split(',');
         var split2 = firstlist[3].split(',');
         var split3 = firstlist[6].split(',');
         var split4 = firstlist[9].split(',');
         var split5 = firstlist[12].split(',');
         var gustr = split1[0]+','+split2[0]+','+split3[0]+','+split4[0]+','+split5[0];
         var dongstr = split1[1]+','+ split2[1]+','+split3[1]+','+split4[1]+','+split5[1];
         finalAddList.push(addList1[0]);
         finalAddList.push(addList1[3]);
         finalAddList.push(addList1[6]);
         finalAddList.push(addList1[9]);
         finalAddList.push(addList1[12]);

      	}
      result300 = [gustr, dongstr, finalAddList];
      console.log(result300);
      
      boardList2(result300); 
      hoit();
      }
      
}

function deleteArray1(){
   if (dongScore.length != 0) {
      dongScore.length = 0;
   }
}

function deletePrice(){
	if (priceArray.length != 0) {
		 priceArray[0].setMap(null);
	       priceArray.splice(0,1);
	}
	
	if (circleArray.length != 0) {
		circleArray[0].setMap(null);
		circleArray.splice(0,1);
	}
}