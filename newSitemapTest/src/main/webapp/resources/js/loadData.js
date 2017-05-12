/**
 * 
 */
loadFlag = true;
function loadData(){
	var email = document.getElementById("email").value;
	var number = document.getElementById("number").value;
	top123 = 0;
	$.ajax({
		url: "loadData",
		type: "post",
		data : {
			email : email,
			number : number
		},
		//dataType: "JSON",
		success:function(data){
			if(data.length==0){ 	
			   	sweetAlert({
					title: "삐비빗!", 
				    text: "잘못된 정보입니다. 확인 후 입력해주세요", 
				    type: "error"
				});
			} else {
				boardList3();filtering();hideload();
				loadaction(data);
				
			}
		},
		error:function(e){
			console.log(e)
		}
	});
}

function loadaction(data){
	var gu = data[0].gu;
	var dong = data[0].dong;
	var dongscore = data[0].dongscore;
	var car1info = [];
	var car2info = [];
	var car3info = [];
	var car4info = [];
	var car5info = [];
	var walk1info = [];
	var walk2info = [];
	var walk3info = [];
	var walk4info = [];
	var walk5info = [];
	var tradi1info = [];
	var tradi2info = [];
	var tradi3info = [];
	var tradi4info = [];
	var tradi5info = [];
	var count =data[0].count;
	
	if(data[0].car1!='no,no,no') {
		car1info = data[0].car1.split(",");
		var car1={title:car1info[0],x:car1info[1],y:car1info[2]};
		carArray.push(car1);
	}
	if(data[0].car2!='no,no,no') {
		car2info = data[0].car2.split(",");
		var car2={title:car2info[0],x:car2info[1],y:car2info[2]};
		carArray.push(car2);
	}
	if(data[0].car3!='no,no,no') {
		car3info = data[0].car3.split(",");
		var car3={title:car3info[0],x:car3info[1],y:car3info[2]};
		carArray.push(car3);
	}
	if(data[0].car4!='no,no,no') {
		car4info = data[0].car4.split(",");
		var car4={title:car4info[0],x:car4info[1],y:car4info[2]};
		carArray.push(car4);
	}
	if(data[0].car5!='no,no,no') {
		car5info = data[0].car5.split(",");
		var car5={title:car5info[0],x:car5info[1],y:car5info[2]};
		carArray.push(car5);
	}
	if(data[0].walk1!='no,no,no') {
		walk1info = data[0].walk1.split(",");
		var walk1={title:walk1info[0],x:walk1info[1],y:walk1info[2]};
		walkArray.push(walk1);
	}
	if(data[0].walk2!='no,no,no') {
		walk2info = data[0].walk2.split(",");
		var walk2={title:walk2info[0],x:walk2info[1],y:walk2info[2]};
		walkArray.push(walk2);
	}
	if(data[0].walk3!='no,no,no') {
		walk3info = data[0].walk3.split(",");
		var walk3={title:walk3info[0],x:walk3info[1],y:walk3info[2]};
		walkArray.push(walk3);
	}
	if(data[0].walk4!='no,no,no') {
		walk4info = data[0].walk4.split(",");
		var walk4={title:walk4info[0],x:walk4info[1],y:walk4info[2]};
		walkArray.push(walk4);
	}
	if(data[0].walk5!='no,no,no') {
		walk5info = data[0].walk5.split(",");
		var walk5={title:walk5info[0],x:walk5info[1],y:walk5info[2]};
		walkArray.push(walk5);
	}
	if(data[0].tradi1!='no,no,no') {
		tradi1info = data[0].tradi1.split(",");
		var tradi1={title:tradi1info[0],x:tradi1info[1],y:tradi1info[2]};
		tradiArray.push(tradi1);
	}
	if(data[0].tradi2!='no,no,no') {
		tradi2info = data[0].tradi2.split(",");
		var tradi2={title:tradi2info[0],x:tradi2info[1],y:tradi2info[2]};
		tradiArray.push(tradi2);
	}
	if(data[0].tradi3!='no,no,no') {
		tradi3info = data[0].tradi3.split(",");
		var tradi3={title:tradi3info[0],x:tradi3info[1],y:tradi3info[2]};
		tradiArray.push(tradi3);
	}
	if(data[0].tradi4!='no,no,no') {
		tradi4info = data[0].tradi4.split(",");
		var tradi4={title:tradi4info[0],x:tradi4info[1],y:tradi4info[2]};
		tradiArray.push(tradi4);
	}
	if(data[0].tradi5!='no,no,no') {
		tradi5info = data[0].tradi5.split(",");
		var tradi5={title:tradi5info[0],x:tradi5info[1],y:tradi5info[2]};
		tradiArray.push(tradi5);
	}
	loadcall(gu,dong,dongscore,count);
}



function loadcall(sigunguName, ghName,dongscore,count){
	var countFlag=0;
	var count=count;
   
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
       console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');
    });   
    // 지도 드래깅 이벤트를 등록한다 (드래그 시작 : dragstart, 드래그 종료 : dragend)
    daum.maps.event.addListener(map, 'drag', function () {
    	var message = '지도를 드래그 하고 있습니다. ' + '지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.';
    });
    var emdNameArray = new Array();
    
    jQuery.ajaxSettings.traditional = true;
    $.ajax({
    	type : "POST",
        url : "getDoroCD",
   //   contentType : "application/json; charset=utf-8",
        data : {
        	sigunguName : sigunguName,
            ghName : ghName,
            dongScore : dongscore
        },
        success : function(data) {
        	var ghNameArray = ghName.split(',');
        	var sigunguNameArray = sigunguName.split(',');
        	var ghNameStr = '';
        	var lastChar = '';
        	
        	$.each(ghNameArray, function(index, item) {
        		geocoder.addr2coord(sigunguNameArray[index]+" "+item, function(status, result) {
        			// 정상적으로 검색이 완료됐으면 
        			if (status === daum.maps.services.Status.OK) {
        				ghNameStr = item;
        				lastChar = ghNameStr.charAt(ghNameStr.length - 1);
        				if(lastChar == '읍' || lastChar == '면') {
        					// 지도에 표시할 원을 생성합니다
        					var circle = new daum.maps.Circle({
        						center : new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng),  // 원의 중심좌표 입니다 
        						radius: 8000, // 미터 단위의 원의 반지름입니다 
        						strokeWeight: 1, // 선의 두께입니다 
                                strokeColor: '#333', // 선의 색깔입니다
                                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                                strokeStyle: 'stroke', // 선의 스타일 입니다
                                fillColor: '#b7b7b7', // 채우기 색깔입니다
                                fillOpacity: 0.4  // 채우기 불투명도 입니다  
        					}); 
        				} else {
        					// 지도에 표시할 원을 생성합니다
        					var circle = new daum.maps.Circle({
        						center : new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng),  // 원의 중심좌표 입니다 
        						radius: 4000, // 미터 단위의 원의 반지름입니다 
        						strokeWeight: 1, // 선의 두께입니다 
                                strokeColor: '#333', // 선의 색깔입니다
                                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                                strokeStyle: 'stroke', // 선의 스타일 입니다
                                fillColor: '#b7b7b7', // 채우기 색깔입니다
                                fillOpacity: 0.4  // 채우기 불투명도 입니다   
        					}); 
        				}
        				// 지도에 원을 표시합니다 
        				circle.setMap(map); 
        			} 
        		});    
        		
        	}); 
        	//주소로 좌표를 검색합니다
            var kaptAddr = new Array();
            var kaptName = new Array();
            var kaptUsedate = new Array();
            var codeHeatNm = new Array();
            var loadDongScore = new Array();
            var kaptDongCnt = new Array();
            var kaptdaCnt = new Array();
            var kaptBcompany = new Array();
            var kaptTel = new Array();
            var kaptMparea_60 = new Array();
            var kaptMparea_85 = new Array();
            var kaptMparea_135 = new Array();
            var windowSet = new Array();
            var coordsList = [];
            for(var i in data) {
	            kaptUsedate.push(data[i].kaptUsedate);
	            kaptAddr.push(data[i].kaptAddr);
	            kaptName.push(data[i].kaptName);
	            codeHeatNm.push(data[i].codeHeatNm);
	            loadDongScore.push(data[i].dongScore);
	            kaptDongCnt.push(data[i].kaptDongCnt);
	            kaptdaCnt.push(data[i].kaptdaCnt);
	            kaptBcompany.push(data[i].kaptBcompany);
	            kaptTel.push(data[i].kaptTel);
	            kaptMparea_60.push(data[i].kaptMparea_60);
	            kaptMparea_85.push(data[i].kaptMparea_85);
	            kaptMparea_135.push(data[i].kaptMparea_135);
	            var windowSet1 = {kaptAddr : data[i].kaptAddr,kaptName : data[i].kaptName};
                windowSet.push(windowSet1);
            }
            $.each(windowSet,function(index,item) {
	            geocoder.addr2coord(item.kaptAddr, function(status, result) {
	                if (status === daum.maps.services.Status.OK) {
	                    var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
	                    var marker = new daum.maps.Marker({
	                        map: map,
	                        position: coords
	                    });
	                    marker3.push(marker);
	                    marker2.push(marker);
	                    markerAddr.push(item.kaptName);
	                    var perfect2 = {
                    		y : result.addr[0].lat,//y좌표
                            x : result.addr[0].lng,//x좌표
                            kaptAddr : kaptAddr[index],//아파트주소
                            kaptName : kaptName[index],//아파트이름
                            changepoint : '',
                            sortpoint : '',
                            codeHeatNm : codeHeatNm[index],
                            kaptUsedate : kaptUsedate[index],
                            kaptDongCnt : kaptDongCnt[index],
                            kaptdaCnt : kaptdaCnt[index],
                            kaptBcompany : kaptBcompany[index],
                            kaptTel : kaptTel[index],
                            kaptMparea_60 : kaptMparea_60[index],
                            kaptMparea_85 : kaptMparea_85[index],
                            kaptMparea_135 : kaptMparea_135[index],
                            dongScore : loadDongScore[index],
                            car1 : '',//자동차로 3곳을 설정할 경우를 대비해서 아예 1,2,3번만듬
                            car2 : '',
                            car3 : '',
                            car4 : '',
                            car5 : '',
                            car1avg : '',
                            car2avg : '',
                            car3avg : '',
                            car4avg : '',
                            car5avg : '',
                            car1point : 0,
                            car2point : 0,
                            car3point : 0,
                            car4point : 0,
                            car5point : 0,
                            walk1 : '',//도보 동일
                            walk2 : '',
                            walk3 : '',
                            walk4 : '',
                            walk5 : '',
                            walk1avg :'',
                            walk2avg :'',
                            walk3avg :'',
                            walk4avg :'',
                            walk5avg :'',
                            walk1point : 0,
                            walk2point : 0,
                            walk3point : 0,
                            walk4point : 0,
                            walk5point : 0,
                            tradi1 : '',//대중교통 동일
                            tradi2 : '',
                            tradi3 : '',
                            tradi4 : '',
                            tradi5 : '',
                            tradi1avg :'',
                            tradi2avg :'',
                            tradi3avg :'',
                            tradi4avg :'',
                            tradi5avg :'',
                            tradi1point : 0,
                            tradi2point : 0,
                            tradi3point : 0,
                            tradi4point : 0,
                            tradi5point : 0,
                            totalpoint : ''
                        };
	                    perfect.push(perfect2);
	                }
	                // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	                var iwContent = '<div style="padding:20px; color:black;">'+item.kaptAddr+'   <br></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	                // 인포윈도우를 생성합니다
	                var infowindow = new daum.maps.InfoWindow({
	                    content : iwContent
	                });
	                // 마커에 마우스오버 이벤트를 등록합니다
	                daum.maps.event.addListener(marker, 'mouseover', function() {
	                  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
	                   infowindow.open(map, marker);
	                });
	                // 마커에 마우스아웃 이벤트를 등록합니다
	                daum.maps.event.addListener(marker, 'mouseout', function() {
	                   // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
	                    infowindow.close();
	                });
	            });
	            countFlag++;
            });
            var setInt1 = setInterval(function() {
                if(count==countFlag){
                dfa(carArray,walkArray,tradiArray);
                clearInterval(setInt1);
                }
            }, 2000);
        }, 
        error : function(e) {
        	console.log(e)
        }
    });
}

function hideload(){
	$('#code').hide();
}