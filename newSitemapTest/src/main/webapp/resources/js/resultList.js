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
//createChart1(list,index)
function buildList(list) {
	$("#dongitem").val(JSON.stringify(list));
	items = list; //전역변수에 담기
	var html = "";
	html += '<ol class = "decimal" data-width="400" id = "resultList">';

	moveMap(0);
	createChart1(0);
	//makeChart();
	
	for (var i = 0; i < items.length; i++) {
		html += '<li><a href = "#" id = "'+items[i].citycode+'" value = "' 
		+items[i].citycode+'" class = "'+items[i].gu +','+ items[i].dong+'" onclick = "createChart1('+ i +'); moveMap('+i+');"'+
		'style="color:#333333";> ' 
		+ items[i].si+ " "+ items[i].gu +" "+ items[i].dong + '<a href="#" onclick="removeItem(' + i + ');" style = "color:red";>   x   </a> '+ '</li>' ;
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
        	var keylist = JSON.parse($("#keylist").val());
        	console.log("keylist" + keylist);
        	
        	for (var i = 0; i < 27; i++) {
				$.each(data, function(key, value){
					if (keylist[i] == key) {
					}else{
						data[keylist[i]] = 0;
					}
					
				});
			}
        	console.log(data);
        	
       	/* items.push(data);
       	 buildList(items);*/
       	 
       	$("#selectThis3").empty().data('options');
       	$("#selectThis3").append('<option value="">시/도</option><option value="서울특별시">서울특별시</option>'
       			+'<option value="인천광역시">인천광역시</option><option value="경기도">경기도</option>');
       	$("#selectThis4").empty().data('options');
       	$("#selectThis4").append("<option>군/구</option>");
       	$("#selectThis5").empty().data('options');
       	$("#selectThis5").append("<option>읍/면/동</option>");
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
	
	for (var i = 0; i < 10; i++) {
		firstlist[i] = $(".decimal").find("a").eq(i).attr('class');
	}
		if (typeof firstlist[6] == undefined ||firstlist[6] == null ) {
			var split1 = firstlist[0].split(',');
			var split2 = firstlist[2].split(',');
			var split3 = firstlist[4].split(',');
			var gustr = split1[0]+','+split2[0]+','+split3[0];
			var dongstr = split1[1]+','+ split2[1]+','+split3[1];
		}else if (typeof firstlist[8] == undefined ||firstlist[8] == null ) {
			var split1 = firstlist[0].split(',');
			var split2 = firstlist[2].split(',');
			var split3 = firstlist[4].split(',');
			var split4 = firstlist[6].split(',');
			var gustr = split1[0]+','+split2[0]+','+split3[0]+','+split4[0];
			var dongstr = split1[1]+','+ split2[1]+','+split3[1]+','+split4[1];
		}
		else{
			var split1 = firstlist[0].split(',');
			var split2 = firstlist[2].split(',');
			var split3 = firstlist[4].split(',');
			var split4 = firstlist[6].split(',');
			var split5 = firstlist[8].split(',');
			var gustr = split1[0]+','+split2[0]+','+split3[0]+','+split4[0]+','+split5[0];
			var dongstr = split1[1]+','+ split2[1]+','+split3[1]+','+split4[1]+','+split5[1];
		}
		
		var result = [gustr, dongstr];
		console.log(result);
		return result;
	
}

