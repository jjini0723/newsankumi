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
});

//리스트 뿌리기

function buildList(list) {
	//$("#dongitem").val(JSON.stringify(list));
	items = list;
	var html = "";
	html += '<ol class = "decimal" data-width="400" id = "resultList">';

	
	moveMap(items[0].citycode);
	createSelectedChart(items[0]);
	
	for (var i = 0; i < items.length; i++) {
		html += '<li><a href = "#" id = "'+items[i].citycode+'" value = "' 
		+items[i].citycode+'" class = "'+items[i].gu +','+ items[i].dong+'" onclick = "willThisWork('
		+items[i].citycode+'); moveMap('+items[i].citycode+');"> ' 
		+ items[i].si+ " "+ items[i].gu +" "+ items[i].dong + '<a href="#" onclick="removeItem(' + i + ');">   x   </a> '+ '</li>' ;
	}
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
       	 buildList(items);
       	 $("#selectThis option:eq(0)").attr("selected", "selected");
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


function moveMap(dong){
    	$.ajax({
    		url : "http://apis.vworld.kr/2ddata/ademd/data?apiKey=CCA36BB7-0DA8-3EE7-8836-D4814D529510&domain=http://localhost:8888&emdCd="+dong+"&srsName=EPSG:4326&output=json",
    		dataType : "jsonp",
    		jsonp : "callback",
    		success : function(rtndata) {
    			var newList = [];
    			var list = rtndata.featureCollection.features[0].geometry.coordinates;
    			newList = list[0];
    			var polygonPath = [];
    			for(var i in newList){
    				newList[i].reverse();
    			}
    			for(var i in newList){
    				polygonPath.push(new daum.maps.LatLng(newList[i][0],newList[i][1]));
    			}
    			 polygon = new daum.maps.Polygon({
    		        path:polygonPath, // 그려질 다각형의 좌표 배열입니다
    		        strokeWeight: 3, // 선의 두께입니다
    		        strokeColor: 'gray', // 선의 색깔입니다
    		        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    		        strokeStyle: 'solid', // 선의 스타일입니다
    		        fillColor: 'gray', // 채우기 색깔입니다
    		        fillOpacity: 0.4 // 채우기 불투명도 입니다
    		    });
    			var result = newList[0];
    			var coords = new daum.maps.LatLng(result[0], result[1]);
    			console.log(coords);
    			 map.setCenter(coords);
    			 polygon.setMap(map);
    		},
    		error : function(e){
    			console.log(e);
    		}
    	});
}

function sendData1(){ //코드 및 동 리스트 가져오기
	var firstlist = [];
	var codelist = []; //코드리스트
	var secondlist = [];
	
	for (var j = 0; j < 10; j++) {
		secondlist[j] = $(".decimal").find("a").eq(j).attr('class');
	}
	
	if (typeof secondlist[6] == undefined ||secondlist[6] == null ) {
		var dong = secondlist[0] + ',' + secondlist[2]+ ',' +secondlist[4]
	}else if (typeof secondlist[8] == undefined ||secondlist[8] == null ) {
		var dong = secondlist[0] + ',' + secondlist[2]+ ',' +secondlist[4]+ ',' +secondlist[6]
	}
	else{
		var dong = secondlist[0] + ',' + secondlist[2]+ ',' +secondlist[4]+ ',' +secondlist[6]+ ',' +secondlist[8];
	}
	console.log("code" + codelist);
	console.log("dong" + dong);
	
	var result = [codelist, dong];
	return result;
	
}

