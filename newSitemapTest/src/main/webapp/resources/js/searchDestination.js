/**
 * 희망 목적지를 검색 후 등록한다.
 */


    
// 마커를 담을 배열입니다
var markers = [];

// 장소 검색 객체를 생성합니다
var ps = new daum.maps.services.Places();

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new daum.maps.InfoWindow({zIndex:1});

// 키워드로 장소를 검색합니다
searchPlaces();

// pagination div를 가지고 있는 변수
var paginationEl;

// 페이지 번호 변수
var i;

function deleteList() {
   $("#getItem>li>#deletebtn").on("click", function() {
      // 희망목적지에 등록된 목적지의 개수를 파악하기 위해, 삭제가 되면 배열에서 꺼낸다.
      var title = $(this).attr("title");
      for(var i = 0; i < hopeList.length; i++) {
         if(title == hopeList[i]) {
            removeThisMarker(i);
            hopeList.splice(i,1);
         }
      }
      $(this).parent().remove();
      return false;
   });
}


// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB); 
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(status, data, pagination) {
    if (status === daum.maps.services.Status.OK) {

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다.
        displayPlaces(data.places);
        

        // 페이지 번호를 표출합니다
        displayPagination(pagination);

    } else if (status === daum.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === daum.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
    // itemEl 검색결과 저장 -> itemEl을 fragment의 child로 저장 -> fragment를  id가 placesList의 div태그 listEl의 child로 저장.
    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new daum.maps.LatLngBounds(), 
    listStr = '';
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new daum.maps.LatLng(places[i].latitude, places[i].longitude),
            marker = addMarker(placePosition, i),
            itemEl = getListItem(i, places[i], marker); // 검색 결과 항목 Element를 생성합니다
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            daum.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            daum.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });

            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
        })(marker, places[i].title);

        fragment.appendChild(itemEl);
    }
    // 수정부분
    $("#places").val(JSON.stringify(places));

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {
    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                '<div class="info sidebar-block">' +
                '   <h5>' + places.title + '</h5>';

    if (places.newAddress) {
        itemStr += '    <span>' + places.newAddress + '</span><br>' +
                    '   <span class="jibun gray">' +  places.address  + '</span><br>';
    } else {
        itemStr += '    <span>' +  places.address  + '</span><br>'; 
    }
                 
      itemStr += '  <span class="tel">' + places.phone  + '</span><br>' ;
      
      itemStr += '<select id="transport" name="transport"><option value="0">이동수단</option>' +
                 '<option value="1">자동차</option>' +
                 '<option value="2">도보</option><option value="3">대중교통</option></select>' +

                 '<input type="submit" value="등록" onclick="confirm('+places.latitude+','+places.longitude+','+index+');"></div>';

    
    el.innerHTML = itemStr;
    el.className = 'item';
    return el;
}

function displayPlace(index) {
    // itemEl 검색결과 저장 -> itemEl을 fragment의 child로 저장 -> fragment를  id가 placesList의 div태그 listEl의 child로 저장.
    var listEl = document.getElementById('getItem'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    listStr = '';
    
    var itemEl = getItem(index); // 검색 결과 항목 Element를 생성합니다

    fragment.appendChild(itemEl);

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;
}

function getItem(index) {
   var places = JSON.parse($("#places").val());
   var title = places[index].title;
    $("#title").val(title);
   
   
   var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '" title="'+places[index].title+'"></span>' +
                /*'<div class="info">' +*/
                '   <h5>' + places[index].title + '</h5>';

    if (places.newAddress) {
        itemStr += '    <span>' + places[index].newAddress + '</span><br>' +
                    '   <span class="jibun gray">' +  places[index].address  + '</span><br>';
    } else {
        itemStr += '    <span>' +  places[index].address  + '</span><br>';
    }
                 
      itemStr += '  <span class="tel">' + places[index].phone  + '</span><br>' ;
      
      itemStr += '<a href="#" class="deletebtn" id="deletebtn" title="'+places[index].title+'" onclick="deleteList();">삭제</a><br>';
    
    el.innerHTML = itemStr;
    el.className = 'item2';
    return el;
}

function confirm(lat, lng, index) {
   var places = JSON.parse($("#places").val());
   // 검색결과로 넘어온 리스트의 길이 만큼 반복문 진행
   for(var j = 0; j < places.length; j++) {
      // 희망목적지가 저장된 배열의 길이만큼 반복.
      for(var k = 0; k < hopeList.length; k++) {
         // 검색결과 리스트에 있는 이름과 희망목적지가 저장된 배열이 같은지 비교. 같으면 중복존재, 없으면 중복된 희망목적지 없음.
         if(places[index].title == hopeList[k]) {
            alert('중복존재');
            var listEl = document.getElementById('placesList');
            document.getElementById("keyword").value = "";
            removeAllChildNods(listEl);
            removeAllpaginationChildNods(paginationEl);
            return;
         }
      }
   }
   // 중복된 희망목적지가 아닐 경우 배열에 해당 희망목적지의 이름을 저장한다.
   if(hopeList.length < 6) {
      hopeList.push(places[index].title);
      displayPlace(index);
      hoi(lat, lng, index);
      removeOtherMarker(index); // index는 검색결과의 리스트 배열의 인덱스.
   } else {
      alert('희망목적지는 5개까지만 가능합니다.');
      listReset();
   }
   
}


// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다 
function addMarker(position, idx, title) {
    var imageSrc = './resources/images/markers/user-01.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new daum.maps.Size(41, 40),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new daum.maps.Size(41, 40), // 스프라이트 이미지의 크기
            spriteOrigin : new daum.maps.Point(0, 0), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new daum.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new daum.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    

    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

// 등록한 마커를 제외하고 삭제
function removeOtherMarker(index) {
   for ( var i = 0; i < markers.length; i++) {
      if(index != i) {
         markers[i].setMap(null);
      }
   }
   newMarkers.push(markers[index]); // 희망목적지로 등록된 마커를 새로운 배열에 추가합니다
   removeMarker();
   for ( var j = 0; j < newMarkers.length; j++) {
      newMarkers[j].setMap(map);
   }
}

//삭제한 희망목적지의 마커를  새로운 마커배열에서 삭제
function removeThisMarker(index) {
   newMarkers[index].setMap(null);
   newMarkers.splice(index,1);
}


// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
   paginationEl = document.getElementById('pagination'),
    fragment = document.createDocumentFragment(),
    i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }
    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }
        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
    infowindow.setContent(content);
    infowindow.open(map, marker);
}

 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}


// 검색결과 목록의 페이지 번호 삭제하는 함수입니다.
function removeAllpaginationChildNods(paginationEl) {
   while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild (paginationEl.lastChild);
    }
   // i에 1을 설정해주지 않으면 검색결과 삭제 후 i가 undefined라는 에러 발생.
   i = 1;
}

function hoi(lat, lng, index) {
   alert(lat+", "+lng);
   var places = JSON.parse($("#places").val()); 
   var obj1 = document.getElementsByName("transport");
   var idx1 = obj1[index].options.selectedIndex; // 해당 selectbox index 구하기

   var transport = obj1[index].options[idx1].value; // 선택된 selectbox의 value값 가져오기
   if(transport == 0) {
      alert('이동수단을 선택해주세요.');
   }
   if(transport == 1) {
      var car = { x : lat, y: lng, title: places[index].title};
      carArray.push(car);
   }
   if(transport == 2) {
      var walk = { x : lat, y : lng, title: places[index].title};
      walkArray.push(walk);
   }
   if(transport == 3) {
      var tradi = { x : lat, y :  lng, title: places[index].title};
      tradiArray.push(tradi);
   }
   if(transport != 0) {
      listReset(index);
   }
}


function searchBestLoc() {
   dfa(carArray, walkArray, tradiArray); // dfa()에  carArray, walkArray, tradiArray를 보내서 dfa에서 각 Array의 length를 체크해보는 건 어떨까?
}

function listReset(index) {
   var listEl = document.getElementById('placesList');
   document.getElementById("keyword").value = "";
   removeAllChildNods(listEl);
   removeAllpaginationChildNods(paginationEl);
}