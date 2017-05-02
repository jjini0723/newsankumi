/**
 * 
 */

function call(sigunguName, ghName, finalAddList2){
    finalAddList = finalAddList2;
    console.log(sigunguName);
    console.log(ghName);
    console.log(finalAddList2);
   
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
        data : {
        	sigunguName : sigunguName,
            ghName : ghName,
            dongScore : dongScore
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
	                        circleList.push(circle);
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
	                        circleList.push(circle);
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
            var kaptDongCnt = new Array();
            var kaptdaCnt = new Array();
            var kaptBcompany = new Array();
            var kaptTel = new Array();
            var kaptMparea_60 = new Array();
            var kaptMparea_85 = new Array();
            var kaptMparea_135 = new Array();
            // 주소랑 이름 함께
            var windowSet = new Array();
            var coordsList = [];
            var dongScore = new Array();
            for(var i in data) {
                kaptUsedate.push(data[i].kaptUsedate);
                kaptAddr.push(data[i].kaptAddr);
                kaptName.push(data[i].kaptName);
                codeHeatNm.push(data[i].codeHeatNm);
                kaptDongCnt.push(data[i].kaptDongCnt);
                kaptdaCnt.push(data[i].kaptdaCnt);
                kaptBcompany.push(data[i].kaptBcompany);
                kaptTel.push(data[i].kaptTel);
                kaptMparea_60.push(data[i].kaptMparea_60);
                kaptMparea_85.push(data[i].kaptMparea_85);
                kaptMparea_135.push(data[i].kaptMparea_135);
                var windowSet1 = {kaptAddr : data[i].kaptAddr,kaptName : data[i].kaptName};
                windowSet.push(windowSet1);
                dongScore.push(data[i].dongScore);
                //alert('주소 : '+kaptAddr[i]+' 아파트이름 : '+kaptName[i]);
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
                        markerAddr.push(item.kaptName); // 20170428 12:45 추가부분. 마커이미지 변경관련.
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
                            dongScore : dongScore[index],
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
            });
            //alert(coordsList.sample.kaptName);
        },  
        error : function(e) {
            console.log(e)
        }
    }); 
}