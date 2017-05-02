function view(){
	$("#filtering2").show();	
}


function filter(){
   removeMarker1();
   console.log(perfect);
   $("#filtering2").hide();
   var price = document.getElementById("price").value;
   var startkaptUsedate = price.substring(0,4);
   var endkaptUsedate = price.substring(7,11);
   var kaptMparea_60 = $("#kaptMparea60").is(":checked");
   var kaptMparea_85 = $("#kaptMparea85").is(":checked");
   var kaptMparea_135 = $("#kaptMparea135").is(":checked");
   var result = new Array(); // 결과 리턴 어레이
   var save = new Array(); // 임시 저장 어레이
   if(kaptMparea_60==false){
      kaptMparea_60=null;
   };
   if(kaptMparea_85==false){
      kaptMparea_85=null;
   };
   if(kaptMparea_135==false){
      kaptMparea_135=null;
   };
//   var kaptMparea60 = document.getElementById("kaptMparea60").value;
//   var kaptMparea85 = document.getElementById("kaptMparea85").value;
//   var kaptMparea135 = document.getElementById("kaptMparea135").value; 
   console.log(startkaptUsedate+","+endkaptUsedate+","+kaptMparea_60+","+kaptMparea_85+","+kaptMparea_135);
//   var startkaptUsedate =null ; // 연도 4자리만 미사용시 null
//   var endkaptUsedate  =1995 ;// ""
//   var kaptMparea_60 = null; // 24평이하 -null, used
//   var kaptMparea_85 = null; // 25평~42평이하-null, used
//   var kaptMparea_135 = 'used'; //42이상-null, used

   var result = new Array(); // 결과 리턴 어레이
   var save = new Array(); // 임시 저장 어레이

   if(startkaptUsedate!=null){ //건축년도 필터를 사용 하겠다
      $.each(perfect,function(index,item){
         if(parseInt(item.kaptUsedate.substring(0,4))>=parseInt(startkaptUsedate)&&parseInt(item.kaptUsedate.substring(0,4))<=parseInt(endkaptUsedate)){
            result.push(item);
         }
      })
       if(kaptMparea_60!=null||kaptMparea_85!=null||kaptMparea_135!=null){
         if(kaptMparea_60!=null&&kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
      } 
   }
   console.log(result);

   if(startkaptUsedate==null){ // 건축년도 필터를 사용하지 않는경우
      result=perfect;
       if(kaptMparea_60!=null||kaptMparea_85!=null||kaptMparea_135!=null){
         if(kaptMparea_60!=null&&kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
      } 
       console.log(result);
   }
   console.log(result);
   console.log("drawlist");
   filterMarker(result);
   var html = "";
   var index =0;
   html += '<ul class = "category" data-width="400" id = "list2" style="padding-top: 0;"><table class="blueone" style="width: 270px;"><tr><td style="width: 80%;">아파트 명</td><td style="width: 20%;">평점</td></tr>';
//   polyMap(items[0].citycode);
//   createSelectedChart(items[0]);
   console.log(result[0]);
      for (var i = 0; i < result.length; i++) {
         html += '<tr><td><a href = "#" id = "" value = "" onclick = "initChart2(); getChartData2('+i+'); getTradeInfo('+result[i].x+'),focuson('+result[i].x+','+result[i].y+'); changeMarker('+i+');">'+result[i].kaptName+'</a></td><td>'+result[i].changepoint+'</td></tr>' ;
      };
   html += '</table></ul>';
   $('#lll').html(html);
}

function delfilter(){
	   removeMarker1();
	   console.log(perfect);
	   $("#kaptMparea60").checked=false;
	   $("#kaptMparea85").checked=false;
	   $("#kaptMparea135").checked=false;
	   $("#filtering2").hide();
	   var result = new Array(); // 결과 리턴 어레이
	   result = perfect;
	   console.log(result);
	   console.log("drawlist");
	   filterMarker(result);
	   var html = "";
	   var index =0;
	   html += '<ul class = "category" data-width="400" id = "list2" style="padding-top: 0;"><table class="blueone" style="width: 270px;"><tr><td style="width: 80%;">아파트 명</td><td style="width: 20%;">평점</td></tr>';
	//   polyMap(items[0].citycode);
	//   createSelectedChart(items[0]);
	   console.log(result[0]);
	      for (var i = 0; i < result.length; i++) {
	         html += '<tr><td><a href = "#" id = "" value = "" onclick = "getTradeInfo('+result[i].x+'),focuson('+result[i].x+','+result[i].y+'); changeMarker('+i+');">'+result[i].kaptName+'</a></td><td>'+result[i].changepoint+'</td></tr>' ;
	      };                                       
	   html += '</table></ul>';
	   $('#lll').html(html);
}
function removeMarker1() {
	markerAddr = [];
    for ( var i = 0; i < marker2.length; i++ ) {
       marker2[i].setMap(null);
    }   
    marker2 = [];
    for(var i = 0; i < marker3.length; i++) {
    	marker3[i].setMap(null);
    }
    marker3 = [];
}
function filterMarker(result){
    // 주소-좌표 변환 객체를 생성합니다
	var markerResult = new Array();
	markerResult = result;
	filterAddr = result;
	console.log(markerResult);
    var geocoder = new daum.maps.services.Geocoder();
    $.each(markerResult,function(index,item) {
         var coords = new daum.maps.LatLng(item.y, item.x);
         console.log(coords);
         var marker = new daum.maps.Marker({
             map: map,
             position: coords
         });
         marker2.push(marker);
         marker3.push(marker);
         markerAddr.push(item.kaptName);
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
    })
    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
   
}
function filtering(){
	$('#filtering').show();
}