/**
 * 추천 지역 리스트 가져오기
 */

var items = [];

$(document).ready(function() {
    function deleteItem(){
    $('#btn-remove').click(function(){
        $('#select-to option:selected').each( function() {
            $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
        });
    });
    }
/*
$(".filter_commit").click(function() {
	
	buildList(items);
	
});*/

});

//리스트 뿌리기

function buildList(list) {
	items = list;
	var html = "";
	html += '<ol class = "decimal" data-width="400" id = "resultList">';
	/*$.each(items, function(index, item){
		html += '<li><a href = #> ' + item.si +" "+ item.gu +" "+ item.dong + '</a><a href="#" onclick="removeItem(' + i + ');">   x   </a> '+ '</li>' ;
	});*/
	polyMap(items[0].citycode);
	createSelectedChart(items[0]);
		for (var i = 0; i < items.length; i++) {
			html += '<li><a href = "#" id = "listitem" value = "' +items[i].citycode+'" onclick = "polyMap('+items[i].citycode+'); createSelectedChart();"> ' + items[i].si+ " "+ items[i].gu +" "+ items[i].dong + '<a href="#" onclick="removeItem(' + i + ');">   x   </a> '+ '</li>' ;
			
			
		};
		
	html += '</ol>';
	$('#req_loc1').html(html);
}

function addItem() {
	 var obj1 = document.getElementById("selectThis3"); // 시
	 var obj2 = document.getElementById("selectThis4"); // 구군
	 var obj3 = document.getElementById("selectThis5"); // 읍면동
	 var idx1 = obj1.options.selectedIndex; // obj1의 선택값인덱스 구하기
	 var idx2 = obj2.options.selectedIndex;
	 var idx3 = obj3.options.selectedIndex;
	 
	 var si = obj1.options[idx1].text;
	 var gu = obj2.options[idx2].text;
	 var dong = obj3.options[idx3].text;
	 
	 $.ajax({
		 
		 url : "getAddress",
		 type : "post",
		 data : {
			 dong : dong
		 },
         success : function(data) {
        	 items.push(data);
        	 console.log(data);
        	 buildList(items);
        	 $("#selectThis option:eq(0)").attr("selected", "selected");
        	/* $('selectThis3').find('option:first').attr('selected', 'selected');
        	 $('selectThis4').find('option:first').attr('selected', 'selected');
        	 $('selectThis5').find('option:first').attr('selected', 'selected');
        	 */
         },
         error : function(e){
        	 console.log(e);
        	 
         }
		 
	 });
	

}

function removeItem(index) {
 
	items.splice(index, 1);
	buildList(items);
	
}


function polyMap(citycode){
	var name = citycode;
	console.log("name"+name);
	   // 지도 타입 변경 컨트롤을 생성한다
	    var mapTypeControl = new daum.maps.MapTypeControl();

	    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
	    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);   

	    // 지도에 확대 축소 컨트롤을 생성한다
	    var zoomControl = new daum.maps.ZoomControl();

	    // 지도의 우측에 확대 축소 컨트롤을 추가한다
	    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
	    
	    // 주소-좌표 변환 객체를 생성합니다
	    var geocoder = new daum.maps.services.Geocoder();

	    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
	    daum.maps.event.addListener(map, 'click', function (mouseEvent) {
	    });   
	    // 지도 드래깅 이벤트를 등록한다 (드래그 시작 : dragstart, 드래그 종료 : dragend)
	    daum.maps.event.addListener(map, 'drag', function () {
	       var message = '지도를 드래그 하고 있습니다. ' + 
	                   '지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.';
	    });
	    jQuery.ajaxSettings.traditional = true;
	       $.ajax({
	          url : "http://apis.vworld.kr/2ddata/ademd/data?apiKey=CCA36BB7-0DA8-3EE7-8836-D4814D529510&domain=http://localhost:8888&emdCd="+name+"&srsName=EPSG:4326&output=json",
	          dataType : "jsonp",
	          jsonp : "callback",
	          success : function(rtndata) {
	             var list = rtndata.featureCollection.features[0].geometry.coordinates;
	             
	             var newList = new Array();
	             var polygonPath = [];
	             newList = list[0];
	             for(var i in newList){
	                newList[i].reverse();
	             }
	          /* list =rtndata.featureCollection.features[0].geometry.coordinates; */   
	          
	          
	             // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	             for(var i in newList){
	                polygonPath.push(new daum.maps.LatLng(newList[i][0],newList[i][1]));
	             }
	             // 지도에 표시할 다각형을 생성합니다
	             var polygon = new daum.maps.Polygon({
	                  path:polygonPath, // 그려질 다각형의 좌표 배열입니다
	                  strokeWeight: 3, // 선의 두께입니다
	                  strokeColor: '#black', // 선의 색깔입니다
	                  strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	                  strokeStyle: 'stroke', // 선의 스타일입니다
	                  fillColor: 'gray', // 채우기 색깔입니다
	                  fillOpacity: 0.5 // 채우기 불투명도 입니다
	              });
	              // 지도에 다각형을 표시합니다
	             var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	             mapOption = { 
	            	 center: new daum.maps.LatLng(newList[100][0],newList[50][1]), // 지도의 중심좌표
	            	 level: 6, // 지도의 확대 레벨
	             };
	             var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	             
	              polygon.setMap(map);
	              daum.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
	                  polygon.setOptions({fillColor: 'rgb(34,149,138)'});

	                  customOverlay.setContent('<div class="area">' + area.name + '</div>');
	                  
	                  customOverlay.setPosition(mouseEvent.latLng); 
	                  customOverlay.setMap(map);
	              });

	              // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다 
	              daum.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
	                  
	                  customOverlay.setPosition(mouseEvent.latLng); 
	              });

	              // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
	              // 커스텀 오버레이를 지도에서 제거합니다 
	              daum.maps.event.addListener(polygon, 'mouseout', function() {
	                  polygon.setOptions({fillColor: 'gray'});
	                  customOverlay.setMap(null);
	              }); 

	          },
	          error : function(e){
	             console.log(e);
	          } 
	       });
	    

		    				
		    				
}


function sendData1(){
	var sendList = [];
	for (var i = 0; i < 5; i++) {
		sendList[i] = $("#resultList>li").attr("value");
		
	}
	
	console.log(sendList);
	
}