<%@ page import="com.newsite.maptest01.vo.SelectConditions"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="./resources/css/avgrund.css?ver=1"> <!-- 첫번째 팝업 style -->
<link rel="stylesheet" href="./resources/css/sweetalert.css"> <!-- sweetalert/email 보내기 팝업 관련 style -->

<script src="//apis.daum.net/maps/maps3.js?apikey=e5f9cd760a5dedf9f84cc76d41a6decd&libraries=services"></script> <!-- daum api -->
<script src="./resources/js/jquery-3.1.1.js"></script> <!-- jquery-3.1.1.js -->
<script src="./resources/js/1stBoardList.js?ver=1"></script>
<script src="./resources/js/2ndBoardList.js?ver=1"></script>
<script src="./resources/js/radioToList.js"></script>
<script src="./resources/js/js_plugin/jquery.avgrund.min.js"></script>
<script src="./resources/js/selectThis.js"></script> <!-- 기준 지역 선택 -->
<script src="./resources/js/js_plugin/Chart.js"></script><!-- 차트 라이브러리 -->
<script src="./resources/js/graph.js"></script><!-- 그래프1 -->
<script src="./resources/js/graph2.js"></script><!-- 그래프2 -->
<script src="./resources/js/addAddress.js"></script><!-- 추천지역 리스트에 주소추가 -->
<script src="./resources/js/resultList.js"></script><!-- 추천지역 리스트 출력 -->
<script src="./resources/js/mapShowResult.js?ver=1"></script><!-- 추천지역 리스트 출력 -->
<script src="./resources/js/la.js"></script><!-- 영석이 시간계산 로직 -->
<script src="./resources/js/filter.js"></script><!-- 영석이 필터 로직 -->
<script src="./resources/js/getTradeInfo.js"></script><!-- 영석이 가격정보 로직 -->
<script src="./resources/js/save.js"></script><!-- 영석이 저장 로직 -->
<script src="./resources/js/loadData.js"></script><!-- 영석이 불러오기 로직 -->
<script src="./resources/js/init.js"></script><!-- 영석이 홈으로 돌아가는 초기화 로직 -->
<script src="./resources/js/saveKeyCount.js"></script><!-- 영석이 키 자동 변경 로직 -->
<script src="./resources/js/searchDestination.js"></script><!-- 희망목적지 관련 js -->
<script src="./resources/js/sweetalert.min.js"></script><!-- sweetalert/email 보내기 팝업 관련 js -->
<script src="./resources/js/js_plugin/jquery.blockUI.js"></script><!-- 데이터 로딩 표시 -->
<script src="./resources/js/js_plugin/intro.js"></script><!-- 가이드 라이브러리 -->
<script src="./resources/js/easyWizard.js"></script><!-- modal plugin2 -->

<!-- 필터링 관련 -->
<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
<script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

<!-- 부트스트랩 tooltip용 -->
<script src="./resources/js/tether-1.3.3/tether.js?ver=1"></script>
<script src="./resources/js/tether-1.3.3/tether.css?ver=1"></script>


<script type='text/javascript'>
var coords2 = new Array();
var perfect = new Array();
var yebi ='';
var carArray = new Array(); // 희망목적지 이동수단 자동차인 경우의 좌표를 저장하는 배열
var walkArray = new Array(); // 희망목적지 이동수단 도보인 경우의 좌표를 저장하는 배열
var tradiArray = new Array(); // 희망목적지 이동수단 대중교통인 경우의 좌표를 저장하는 배열
var emdName = null;
var hopeList = new Array(); //희망목적지 리스트 담을 배열
var newMarkers = []; //희망목적지에 등록된 장소를 표현할 마커를 저장할 배열.
var marker2 = [];
var recLocationArray = new Array();
var hopeDestinationArray = new Array();
var circleArray = new Array();
var priceArray = new Array();
var finalAddList = new Array();
var finalHopeList = new Array();
var result300 = []; // 저장 할꺼 1번
var dongScore = [];
var infoList = new Array(); // 인포윈도우를 저장할 배열
var overlayList = new Array(); // 오버레이를 저장할 배열
var markerAddr = new Array(); // 마커의 주소를 저장할 배열
var marker3 = new Array();
var radio7th='';//라디오버튼체크용
var filterAddr = new Array();

//자동 키값 변환기
var tmapCarKey1='2bb28cd1-f268-3af6-8329-e6b49122331b';
var tmapCarKey2='5466b076-3f62-3faf-ac9d-c3002f0fec2d';
var tmapCarKey3='250b188d-21df-3751-a05f-225464a8462f';
var tmapWalkKey3='360a72a6-2781-35ea-b877-98cd58c69b91';
var tmapWalkKey2='f7e2ff7f-9451-3d04-8492-bbed4ab4e206';
var tmapWalkKey1='a2b681cd-140a-3af2-bea9-5d90bef42f84';
var googleKey1='AIzaSyD1SXZMCJFk4dRd7MZCDWHk0jINUtI9v2Y';
var googleKey2='AIzaSyBi_ry4zkLWVMMzETciWyu0JnCGbm7WQiQ';
var googleKey3='AIzaSyBKWZBV932x9UcDs4ey8TVQ-oV8fiXxPpI';
var googleKey4='AIzaSyD1SXZMCJFk4dRd7MZCDWHk0jINUtI9v2Y';
var googleKey5='AIzaSyDcQztLBVLCFxG_SSYxR_BJAldkQMMe5PQ';
var tmapCarKeyCount = 0;
var tmapWalkKeyCount = 0;
var googleKeyCount = 0;
var tmapLine = 850;
var googleLine = 2350;
var carusekey = '';
var walkusekey = '';
var tradiusekey = '';
var carNum = '';
var walkNum = '';
var tradiNum = '';


loadKeyCount();
$(document).avgrund({
	    openOnEvent: false
	}); 
	
//check box 클릭시 radio box 활성화
$(function() {
	
	
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	
	$('input:checkbox').click(function(e){
		var id = e.target.getAttribute('id');
		if ( ( id != '') && (id != null)) {
			if ( $(this).prop('checked') ) {
				$('span#'+id).addClass("ck_radio");
			} else {
				$('span#'+id).removeClass("ck_radio");
			}
		}
		
	});
	 
});

function hoit() {
	console.log(finalAddList[0]);
	if(typeof(finalAddList[0]) != 'undefined') {
		var strRec = '<a href="#" class="dropdown-toggle" data-toggle="dropdown">';
		strRec += '<i class="fa fa-fw fa-filter"></i> 추천지역</a>';
		strRec += '<div class="dropdown-menu dropdown-size-280 recLocation">';
		strRec += '<div class="form-group">';
		strRec += '<div id="recLocation" class="input-group">';
		strRec += '<ol>';
		$.each(finalAddList, function(finalAddListIndex, finalAddListItem) {
			strRec += '<li><a href="#" onclick="moveMap2(0,'+finalAddListIndex+');">'+finalAddListItem+'</a></li>';
		});
		strRec += '</ol>';			
		strRec += '</div>';
		strRec += '</div>';
		strRec += '</div>';
		$(".dropdown1").html(strRec);
	}
}

function hoit2() {
	if(typeof(hopeList[0]) != 'undefined') {
		var strRec2 = '<a href="#" class="dropdown-toggle" data-toggle="dropdown">';
		strRec2 += '<i class="fa fa-fw fa-filter"></i> 희망목적지</a>';
		strRec2 += '<div class="dropdown-menu dropdown-size-280 hopeDestination">';
		strRec2 += '<div class="form-group">';
		strRec2 += '<div id="hopeDestination" class="input-group">';
		strRec2 += '<ol>';
		$.each(hopeList, function(hopeListIndex, hopeItem) {
			strRec2 += '<li><a href="#" onclick="moveMap2(1,'+hopeListIndex+');">'+hopeItem+'</a></li>';
		});
		strRec2 += '</ol>';
		strRec2 += '</div>';
		strRec2 += '</div>';
		strRec2 += '</div>';
		$(".dropdown2").html(strRec2);
	}
}

function resultFinalAddList() {
	return finalAddList;
}

function resultHopeList() {
	return finalHopeList;
}

//라디오버튼 값 보내기
function conditionSelect(){
		
	var arr = new Array();	
	var hml = $(".hml");
	
	$.each(hml, function(index,item){
		if($(this).children("input[type=radio]:checked").val() !=null){//여기 조건 찾기..
			console.log($(this).children("input[type=radio]:checked").val());
			var flagValue = $(this).attr("id");
			var radioValue = $(this).children("input[type=radio]:checked").val();
			//alert(flagValue);
			//alert(radioValue);
			var obj = {
				condition : flagValue,
				level : radioValue
			};					
			arr.push(obj);
			
		}
		/* else{
			sweetAlert({
				title: "이런!", 
			    text: "최소 2개 이상 선택 해 주세요!", 
			    type: "error"
			});
			return false;
			
		} */ //2개 이상 선택할 수 있는 조건. 마지막에 푸르기!
	})				
	
	$.ajax({
		type : "post",
		url : "selectConditions",
		contentType : "application/json; charset=utf-8",
		data : JSON.stringify({
			list : arr
		}),
		success : function(data){
			buildList(data);
		},
		error : function(e){
			console.log(e);
		}
	})
}


 //팝업
$(function() {
	$('#show').avgrund({
		height : 350,
		width : 640,
	    holderClass : 'custom',
		showClose : true,
		showCloseText : 'X',
		enableStackAnimation : true,
	 	closeByDocument : true,
	 	openOnEvent : false,
	 	onBlurContainer : '.container',
	 	template : '<img src="./resources/images/main_popup_high.jpg" height="330" width="620">',
	 	onUnload: function () {
	 		$("#infobtn").trigger('click');
	 	 } 
	});
	
	$("#myModal").wizard();

});
 
function moveMap2(checkIndex, index) {
	var resultList = new Array();
	if(checkIndex == 0) {
		resultList = resultFinalAddList();
	} else {
		resultList = resultHopeList();
	}
	var geocoder = new daum.maps.services.Geocoder();
	var callback = function(status, result) {
	    if (status === daum.maps.services.Status.OK) {
	        var obj = result.addr[0];
	        console.log(result.addr[0].lat, result.addr[0].lng);
	        map.setLevel(8);
	        setCenter(result.addr[0].lat, result.addr[0].lng);
	    }
	};
	geocoder.addr2coord(resultList[index], callback);
}
 
	
//체크박스 선택 개수 제한 (6개)
function checkboxSelect(obj, cnt) {
	var i, sum = 1;
	var chk = document.getElementsByName(obj);
	var tot = chk.length;
// 	for (i = 0; i < tot; i++)
// 		if (chk[i].checked == true)
// 			sum++;
	
	var radioCount = radioCheck();
	if (radioCount > cnt) {
		for (i = 0; i < tot; i++)
			if (chk[i].checked == false)
				chk[i].disabled = true;
		return false;
		
		sweetAlert({
			title: "이런!", 
		    text: "최대 6개만 선택 해 주세요!", 
		    type: "error"
		});
		
	} else {
		for (i = 0; i < tot; i++)
			chk[i].disabled = false;
	}
}


//현재 라디오 몇개 클릭됫는지
function radioCheck(){
	var radioCountCur = 0;
	var hml = $(".hml");	
	
	$.each(hml, function(index,item){
		if($(this).children("input[type=radio]:checked").val() != null){
			radioCountCur++;
		}
	});	
	
	return radioCountCur;
}


function radio7thCheck(name){
	radio7th = name;
}
	
    //필터링용
    $(function() {
    	$( "#slider-3" ).slider({
    		range:true,
            min: 1980,
            max: 2017,
            values: [ 1991, 2010 ],
            slide: function( event, ui ) {
            	$( "#price" ).val(  ui.values[ 0 ]+"년 -" + ui.values[ 1 ] +"년");
            }
        });
        $( "#price" ).val( $( "#slider-3" ).slider( "values", 0 ) +
        		"년 - " + $( "#slider-3" ).slider( "values", 1 ) +  "년");
    });

	
	//title 툴팁용
	$(document).ready(function() {
    	$('.tip').tipr();
	});
	

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
		

</script>


<title> S・MAP</title>
	
 <!-- Vendor CSS BUNDLE
    Includes styling for all of the 3rd party libraries used with this module, such as Bootstrap, Font Awesome and others.
    TIP: Using bundles will improve performance by reducing the number of network requests the client needs to make when loading the page. -->
	<link href="./resources/css/vendor/all.css" rel="stylesheet">

  <!-- Vendor CSS Standalone Libraries
        NOTE: Some of these may have been customized (for example, Bootstrap).
        See: src/less/themes/{theme_name}/vendor/ directory -->
    <link href="./resources/css/vendor/all.css" rel="stylesheet">
	<link href="./resources/css/vendor/bootstrap.css" rel="stylesheet">
	<link href="./resources/css/vendor/bootstrap-slider.css" rel="stylesheet">
	
	
	<link href="./resources/css/vendor/font-awesome.css" rel="stylesheet">
	<link href="./resources/css/vendor/picto.css" rel="stylesheet">
	<link href="./resources/css/vendor/material-design-iconic-font.css" rel="stylesheet">
	<link href="./resources/css/vendor/datepicker3.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery.minicolors.css" rel="stylesheet">
	<link href="./resources/css/vendor/railscasts.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery-jvectormap.css" rel="stylesheet">
	<link href="./resources/css/vendor/owl.carousel.css" rel="stylesheet">
	<link href="./resources/css/vendor/slick.css" rel="stylesheet">
	<link href="./resources/css/vendor/morris.css" rel="stylesheet">
	<link href="./resources/css/vendor/ui.fancytree.css" rel="stylesheet">
	<link href="./resources/css/vendor/daterangepicker-bs3.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery.bootstrap-touchspin.css" rel="stylesheet">
	<link href="./resources/css/vendor/select2.css" rel="stylesheet">
	
	<!-- 아파트목록 table css 관련 -->
	<link href="./resources/css/tablecss.css?ver=2" rel="stylesheet">
  

  <!-- App CSS CORE
This variant is to be used when loading the separate styling modules -->
	<link href="./resources/css/app/main.css" rel="stylesheet">

  <!-- App CSS Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL modules are 100% compatible -->

	<link href="./resources/css/app/app.css?ver=2" rel="stylesheet" />
	<link href="./resources/css/app/sidebar-skins.css?ver=3" rel="stylesheet" />
	<link href="./resources/css/app/sidebar.css?ver=3" rel="stylesheet" />

	<link href="./resources/css/app/essentials.css?ver=1" rel="stylesheet" />
	<link href="./resources/css/app/layout.css" rel="stylesheet" />
	<link href="./resources/css/app/navbar.css" rel="stylesheet" />
	<link href="./resources/css/app/media.css" rel="stylesheet" />
	<link href="./resources/css/app/maps.css" rel="stylesheet" />
	<link href="./resources/css/app/colors-buttons.css" rel="stylesheet" />
	<link href="./resources/css/app/colors-text.css" rel="stylesheet" />
	<link href="./resources/css/app/hml_radio.css?ver=2" rel="stylesheet" />
	<link href="./resources/css/introjs.css" rel="stylesheet">
	<link href="./resources/css/easyWizard.css" rel="stylesheet">
</head>



<body>
	<!--  팝업1-->
	<a href="#" id="show" class="button left"></a>

		<!-- Wrapper required for sidebar transitions -->
		<div class="st-container">

		    <!-- Fixed navbar -->
		    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="box-shadow: 0 5px 4px -5px #333;">
		    	<div class="container-fluid" >
		        	<div class="navbar-header">
		       		<!-- 모바일 부분 -->
		            	<!-- <a href="#sidebar-menu" data-toggle="sidebar-menu" class="toggle pull-left visible-xs"><i class="fa fa-bars"></i></a>
		          			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
		            			<span class="sr-only">Toggle navigation</span>
					            <span class="icon-bar"></span>
					            <span class="icon-bar"></span>
					            <span class="icon-bar"></span>
		          			</button> -->
		    
		          		<a href="#sidebar-map1" data-toggle="sidebar-menu" class="toggle pull-right visible-xs" style = "opacity:0.5;"><i class="fa fa-map-marker"></i></a>
		     			<a href = "/maptest01/" onclick = "init();" class="navbar-brand"
			          		style="width: 400px; position: absolute; left: 50%; margin-left: -200px; border: 0; outline: 0;
			          		-ms-user-select: none; -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; user-select: none; color : #141414;">
							<img src="./resources/images/test111.png" style="width:auto; height: inherit; ">
							<!-- エッ！スマップ？ S(SMART)・MAP -->
							</a>
							<button class = "btn btn-primary" type="button" data-toggle="modal" data-target="#myModal" style = "margin-top:15px;" id="infobtn">
	           				 도움말 보기</button>	
		        	</div>
				
					<!-- 오른쪽 상단 네비게이션 -->
			        <div class="collapse navbar-collapse" id="main-nav">
			        	<ul class="nav navbar-nav navbar-right ">
			        		
			        		<!-- 추천지역 드롭다운 -->
			        		<li class="dropdown dropdown1">
				            	
				            </li>
				            <!-- // END 드롭다운 left 테스트 -->
			        		
			        		
			        		<!-- 희망목적지역 드롭다운 -->
			        		<li class="dropdown dropdown2">
				            	
				            </li>
				            <!-- // END 드롭다운 left 테스트 -->
			        		
			        		
			        		<!-- 코드불러오기 -->
			            	<li class="dropdown" id="code">
			              		<a href="#" class="dropdown-toggle" data-toggle="dropdown">
			                		<i class="fa fa-fw fa-lock" data-toggle="tooltip" data-placement="bottom" title="이전에 저장해두었던 결과를 다시 볼수 있습니다" style = "color:#8a8a8a;"></i>코드불러오기
			              		</a>
								<div class="dropdown-menu dropdown-size-280">
									<form>
										<div class="form-group">
											<div class="input-group" style="text-align: center;">
				                   				<i class="fa fa-floppy-o fa-x" aria-hidden="true"></i>&nbsp&nbsp결과 저장시 입력했던 email과<br>
				                   					email로 부여받았던 코드를 입력해주세요
											</div>
										</div>
				                
										<div class="form-group">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
													<input type="email" class="form-control" id="email" name="email" placeholder="email주소를 입력해 주세요">
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-key"></i></span>
												<input type="password" class="form-control" id="number" name="number" placeholder="code를 입력해 주세요">
											</div>
										</div>
				                
										<div class="text-center">
											<button type="button" class="btn btn-primary" data-toggle="sidebar-menu" href="#sidebar-map" onclick = "boardList3(); loadData();filtering();hideload();">코드불러오기 <i class="fa fa-sign-in"></i></button>
										</div>
					                </form>
				                </div>
				            </li>
				            <!-- // END login -->
				            <!-- 드롭다운 left 테스트 -->
				            <li class="dropdown" id="filtering" style="display:none">
				            	<a href="#" class="dropdown-toggle" data-toggle="dropdown" style = "color:#8a8a8a;">
				                	<i class="fa fa-fw fa-filter"></i> 필터링
				                </a>
				                <div class="dropdown-menu dropdown-size-280">
				                	<form>
				                  		<div class="form-group">
				                    		<div class="input-group">
				                    			<!-- 준공년도 -->
												<div id="buildyear">
											    	<p>
											        	<label for = "price">준공년도:</label>
											        	<input type = "text" id = "price" style = "border:0; color:#b9cd6d; font-weight:bold;">
											        </p>
											        <div id = "slider-3"></div>
												</div>
												<!-- // END 준공년도 -->
				                    	    </div>
				                  		</div>
				                
				                  		<div class="form-group">
				                    		<div class="input-group">
				                    			<!-- 평수 -->
												<div id="squareFeet">
													<p>
														<label for="feet">평수:</label>
														<input type="checkbox" id="kaptMparea60" name="kaptMparea60" 
															style = "border:0; color:#b9cd6d; font-weight:bold;"> 24평이하
														<input type="checkbox" id="kaptMparea85" name="kaptMparea85" 
															style = "border:0; color:#b9cd6d; font-weight:bold;"> 25평~42평
														<input type="checkbox" id="kaptMparea135" name="kaptMparea135" 
															style = "border:0; color:#b9cd6d; font-weight:bold;"> 42평이상
													</p>
												</div>
												<!-- // END 평수 -->
				                    		</div>
				                  		</div>
				                  		<div class="text-center">
				                    		<button type="button" class="btn btn-primary" onclick="filter();">적용하기 <i class="fa fa-sign-in"></i></button>
				                  		</div>
				                	</form>
				              	</div>
				            </li>
				            <!-- // END 드롭다운 left 테스트 -->
			            </ul>
			        </div>
		        <!-- /.navbar-collapse -->
			    </div>
			</nav>



	<!-- 왼쪽 사이드바 시작 -->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <aside class="sidebar left 
		sidebar-size-1 sidebar-mini-reveal smr-size-3 sidebar-offset-0
		sidebar-skin-white sidebar-visible-desktop" id=sidebar-menu data-type=collapse
		style="box-shadow:0px 0px 15px 0px #333; cursor:pointer;">
	<div data-scrollable id = "firstbar">
	
	<!-- 폼시작 -->
	<form name = "myselection" onchange="getRadios(document.myselection)" >
	
	<!-- 1차선택 -->
	<ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right">
		<li class="hasSubmenu open active">
			<a><i class="fa fa-info" id = "infoicon" onclick=""></i><span>1차 선택</span></a>
			<ul class="in">
				<h4 class="category" id = "select11" data-step="1" data-intro="현재 거주하고 있는 지역이나, 기준이 되는 지역을 선택합니다.(서울,경기,인천 한정)" data-position = "auto">기준지역선택
				<i class="fa fa-question-circle" 
				data-toggle="tooltip" data-placement="right"
				title="현재 거주하고 있는 지역이나, 기준이 되는 지역을 선택합니다(서울,경기,인천 한정). 기준지역 미 선택시 전체 평균으로 선택됨"></i>
				</h4>
				<li>
					<div class="bootstrap-select cd-select" style="margin: 14px">
						<select class="select1" name="selectThis1" id="mp_addcd_sido" onchange="searchThis(this)" data-step="2" data-intro="22개의 조건 중 당신이 고려하는 조건을 선택합니다. 최대 6개까지 선택이 가능합니다." data-position = "top">
							<option value="">시/도</option>
							<option value="서울특별시">서울특별시</option>
							<option value="인천광역시">인천광역시</option>
							<option value="경기도">경기도</option>
						</select>
						<select class="select2" name="selectThis2" id="mp_addcd_gg" >
							<option value="">구/군</option>
						</select>
					</div>
				</li> 
			</ul>
		</li>
	</ul>

<!-- 조건 카테고리 시작 -->
	<ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right" text-align="center" >
<!-- 복지문화 -->
	<li class="hasSubmenu">
	<a href="#welfare"><i class="fa fa-list"></i><span>복지문화</span></a>
		<ul id="welfare" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right" >
		
		<!-- 체육시설 -->
		<div class="condition">
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_sports" name="ck" onclick="checkboxSelect('ck',6)">
					<!-- 수정필요 -->
					<label for="welfare_sports" data-toggle="tooltip" data-placement="top" title="체육공원, 스포츠 서비스업 등의 스포츠시설 수를 행정구역 별로 나타냅니다."><span>스포츠시설</span></label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_sports">
					<input type="radio" id="rd_welfare_sports1" name="rd_welfare_sports" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_sports')">
					<label for="rd_welfare_sports1">상</label>
					<input type="radio" id="rd_welfare_sports2" name="rd_welfare_sports" value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_sports')">
					<label for="rd_welfare_sports2">중</label>
					<input type="radio" id="rd_welfare_sports3" name="rd_welfare_sports" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_sports')">
					<label for="rd_welfare_sports3">하</label>
				</span>	
				</a>
			</li>
		</div>	
			<!-- 문화시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_culture" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_culture"  data-toggle="tooltip" data-placement="top" title="극장 영화관 등의 문화시설 수를 행정구역 별로 나타냅니다.">문화시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_culture">
					<input type="radio" id="rd_welfare_culture1" name="rd_welfare_culture" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_culture')">
					<label for="rd_welfare_culture1">상</label>
					<input type="radio" id="rd_welfare_culture2" name="rd_welfare_culture" value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_culture')">
					<label for="rd_welfare_culture2">중</label>
					<input type="radio" id="rd_welfare_culture3" name="rd_welfare_culture" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_culture')">
					<label for="rd_welfare_culture3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 미/이용 시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_salon" name="ck" onclick="checkboxSelect('ck',6)">

					<label for="welfare_salon" data-toggle="tooltip" data-placement="top" title="미용, 욕탕 및 유사시설을 행정구역 별로 나타냅니다.">미/이용 시설</label>

				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_salon">
					<input type="radio" id="rd_welfare_salon1" name="rd_welfare_salon" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_salon')">
					<label for="rd_welfare_salon1">상</label>
					<input type="radio" id="rd_welfare_salon2" name="rd_welfare_salon" value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_salon')">
					<label for="rd_welfare_salon2">중</label>
					<input type="radio" id="rd_welfare_salon3" name="rd_welfare_salon" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_salon')">
					<label for="rd_welfare_salon3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 사회복지시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_society" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_society" data-toggle="tooltip" data-placement="top" title="지역별 사회복지 수준을 확인할 수 있는 지표입니다. 인구 대비 사회복지시설의 비율을 행정구역 별로 나타냅니다.">사회복지시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_society">
					<input type="radio" id="rd_welfare_society1" name="rd_welfare_society" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_society')">
					<label for="rd_welfare_society1">상</label>
					<input type="radio" id="rd_welfare_society2" name="rd_welfare_society" value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_society')">
					<label for="rd_welfare_society2">중</label>
					<input type="radio" id="rd_welfare_society3" name="rd_welfare_society" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_society')">
					<label for="rd_welfare_society3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 의료시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_medical" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_medical" data-toggle="tooltip" data-placement="top" title="병의원 및 약국은 의료수준이 좋은 지역을 확인할 수 있는 지표입니다. 인구 대비 병의원, 약국의 비율을 행정구역 별로 나타냅니다.">의료시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_medical">
					<input type="radio" id="rd_welfare_medical1" name="rd_welfare_medical" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_medical')">
					<label for="rd_welfare_medical1">상</label>
					<input type="radio" id="rd_welfare_medical2" name="rd_welfare_medical" value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_medical')">
					<label for="rd_welfare_medical2">중</label>
					<input type="radio" id="rd_welfare_medical3" name="rd_welfare_medical" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_medical')">
					<label for="rd_welfare_medical3">하</label>
				</span>	
				</a>
			</li>
			
			
			<!-- 보육시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_childCare" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_childCare" data-toggle="tooltip" data-placement="top" title="5세 미만의 유아를 위한 교육시설을 의미하며, 5세 미만 인구 대비 유치원 및 보육시설의 비율을 행정구역 별로 나타냅니다.">보육시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_childCare">
					<input type="radio" id="rd_welfare_childCare1" name="rd_welfare_childCare" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_welfare_childCare')">
					<label for="rd_welfare_childCare1">상</label>
					<input type="radio" id="rd_welfare_childCare2" name="rd_welfare_childCare"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_welfare_childCare')">
					<label for="rd_welfare_childCare2">중</label>
					<input type="radio" id="rd_welfare_childCare3" name="rd_welfare_childCare" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_welfare_childCare')">
					<label for="rd_welfare_childCare3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>



<!-- 교육 -->
	<li class="hasSubmenu">
	<a href="#education"><i class="fa fa-list"></i><span>교육</span></a>
		<ul id="education" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 1인당 교원수 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="education_student" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="education_student" data-toggle="tooltip" data-placement="top" title="초중고 교원 1인이 담당하는 학생 수를 행정구역 별로 나타냅니다.">교원 1인당 학생수</label>

				<!-- 상중하 라디오 -->
				<span class="hml" id="education_student">
					<input type="radio" id="rd_education_student1" name="rd_education_student" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_education_student')">
					<label for="rd_education_student1">상</label>
					<input type="radio" id="rd_education_student2" name="rd_education_student"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_education_student')">
					<label for="rd_education_student2">중</label>
					<input type="radio" id="rd_education_student3" name="rd_education_student" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_education_student')">
					<label for="rd_education_student3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 학원수 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="education_academy" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="education_academy" data-toggle="tooltip" data-placement="top" title="지역내 교육과 관련된 학원 현황을 확인할 수 있는 지표입니다. 행정구역 별 학원 수를 나타냅니다.">학원 수</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="education_academy">
					<input type="radio" id="rd_education_academy1" name="rd_education_academy" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_education_academy')">
					<label for="rd_education_academy1">상</label>
					<input type="radio" id="rd_education_academy2" name="rd_education_academy"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_education_academy')">
					<label for="rd_education_academy2">중</label>
					<input type="radio" id="rd_education_academy3" name="rd_education_academy" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_education_academy')">
					<label for="rd_education_academy3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>



<!-- 안전 -->
	<li class="hasSubmenu">
	<a href="#safety"><i class="fa fa-list"></i><span>안전</span></a>
		<ul id="safety" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 화재안전사고 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_fire" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_fire" data-toggle="tooltip" data-placement="top" title="행정구역 별 화재사고 수준을 나타내는 화재사고지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">화재안전사고</label>

				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_fire">
					<input type="radio" id="rd_safety_fire1" name="rd_safety_fire" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_fire')">
					<label for="rd_safety_fire1">상</label>
					<input type="radio" id="rd_safety_fire2" name="rd_safety_fire"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_fire')">
					<label for="rd_safety_fire2">중</label>
					<input type="radio" id="rd_safety_fire3" name="rd_safety_fire" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_fire')">
					<label for="rd_safety_fire3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 교통안전사고 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_traffic" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_traffic" data-toggle="tooltip" data-placement="top" title="행정구역 별 교통안전사고 수준을 나타내는 교통안전사고지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">교통안전사고</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_traffic">
					<input type="radio" id="rd_safety_traffic1" name="rd_safety_traffic" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_traffic')">
					<label for="rd_safety_traffic1">상</label>
					<input type="radio" id="rd_safety_traffic2" name="rd_safety_traffic"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_traffic')">
					<label for="rd_safety_traffic2">중</label>
					<input type="radio" id="rd_safety_traffic3" name="rd_safety_traffic" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_traffic')">
					<label for="rd_safety_traffic3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 범죄사고 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_crime" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_crime" data-toggle="tooltip" data-placement="top" title="행정구역 별 범죄사고 수준을 나타내는 범죄사고지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">범죄사고</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_crime">
					<input type="radio" id="rd_safety_crime1" name="rd_safety_crime" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_crime')">
					<label for="rd_safety_crime1">상</label>
					<input type="radio" id="rd_safety_crime2" name="rd_safety_crime"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_crime')">
					<label for="rd_safety_crime2">중</label>
					<input type="radio" id="rd_safety_crime3" name="rd_safety_crime" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_crime')">
					<label for="rd_safety_crime3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 안전사고 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_safety" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_safety" data-toggle="tooltip" data-placement="top" title="행정구역 별 종합안전사고 수준을 나타내는 종합안전사고지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">안전사고</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_safety">
					<input type="radio" id="rd_safety_safety1" name="rd_safety_safety" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_safety')">
					<label for="rd_safety_safety1">상</label>
					<input type="radio" id="rd_safety_safety2" name="rd_safety_safety"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_safety')">
					<label for="rd_safety_safety2">중</label>
					<input type="radio" id="rd_safety_safety3" name="rd_safety_safety" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_safety')">
					<label for="rd_safety_safety3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 전염병 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_infection" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_infection" data-toggle="tooltip" data-placement="top" title="행정구역 별 전염병안전 수준을 나타내는 전염병안전지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">전염병</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_infection">
					<input type="radio" id="rd_safety_infection1" name="rd_safety_infection" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_infection')">
					<label for="rd_safety_infection1">상</label>
					<input type="radio" id="rd_safety_infection2" name="rd_safety_infection"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_infection')">
					<label for="rd_safety_infection2">중</label>
					<input type="radio" id="rd_safety_infection3" name="rd_safety_infection" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_infection')">
					<label for="rd_safety_infection3">하</label>
				</span>	
				</a>
			</li>
			
			
			<!-- 자연재해 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_nature" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_nature" data-toggle="tooltip" data-placement="top" title="행정구역 별 자연재해안전 수준을 나타내는 자연재해안전지수(등급)를 나타냅니다. 수치가 높을수록 안전합니다.">자연재해</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_nature">
					<input type="radio" id="rd_safety_nature1" name="rd_safety_nature" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_safety_nature')">
					<label for="rd_safety_nature1">상</label>
					<input type="radio" id="rd_safety_nature2" name="rd_safety_nature"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_safety_nature')">
					<label for="rd_safety_nature2">중</label>
					<input type="radio" id="rd_safety_nature3" name="rd_safety_nature" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_safety_nature')">
					<label for="rd_safety_nature3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>

<!-- 생활편의·교통 -->
	<li class="hasSubmenu">
	<a href="#lifecycle"><i class="fa fa-list"></i><span>생활편의·교통</span></a>
		<ul id="lifecycle" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 편의시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_convenient" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_convenient" data-toggle="tooltip" data-placement="top" title="생활편의시설이 많은 지역을 확인할 수 있는 지표입니다. 생활 편의에 관련된 사업체 수를 행정구역 별로 나타냅니다.">편의시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_convenient">
					<input type="radio" id="rd_life_convenient1" name="rd_life_convenient" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_life_convenient')">
					<label for="rd_life_convenient1">상</label>
					<input type="radio" id="rd_life_convenient2" name="rd_life_convenient"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_life_convenient')">
					<label for="rd_life_convenient2">중</label>
					<input type="radio" id="rd_life_convenient3" name="rd_life_convenient" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_life_convenient')">
					<label for="rd_life_convenient3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 쇼핑시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_shopping" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_shopping" data-toggle="tooltip" data-placement="top" title="쇼핑시설이 많은 지역을 확인할 수 있는 지표입니다. 쇼핑에 관련된 사업체 수를 행정구역 별로 나타냅니다.">쇼핑시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_shopping" >
					<input type="radio" id="rd_life_shopping1" name="rd_life_shopping" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_life_shopping')">
					<label for="rd_life_shopping1">상</label>
					<input type="radio" id="rd_life_shopping2" name="rd_life_shopping"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_life_shopping')">
					<label for="rd_life_shopping2">중</label>
					<input type="radio" id="rd_life_shopping3" name="rd_life_shopping" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_life_shopping')">
					<label for="rd_life_shopping3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 외식시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_restaurant" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_restaurant" data-toggle="tooltip" data-placement="top" title="외식시설이 많은 지역을 확인할 수 있는 지표입니다. 외식과 관련된 음식점 사업체 수를 행정구역 별로 보실 수 있습니다. ">외식시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_restaurant">
					<input type="radio" id="rd_life_restaurant1" name="rd_life_restaurant" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_life_restaurant')">
					<label for="rd_life_restaurant1">상</label>
					<input type="radio" id="rd_life_restaurant2" name="rd_life_restaurant"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_life_restaurant')">
					<label for="rd_life_restaurant2">중</label>
					<input type="radio" id="rd_life_restaurant3" name="rd_life_restaurant" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_life_restaurant')">
					<label for="rd_life_restaurant3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 대중교통이용률 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_publicTraffic" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_publicTraffic" data-toggle="tooltip" data-placement="top" title="생활편의와 관련된 대중교통이 잘되어 있는 지역을 확인할 수 있는 지표로써 행정구역 내의 버스 정류장 수, 지하철 역 수에 따른 이용률을 나타냅니다.">대중교통이용률</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_publicTraffic">
					<input type="radio" id="rd_life_publicTraffic1" name="rd_life_publicTraffic" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_life_publicTraffic')">
					<label for="rd_life_publicTraffic1">상</label>
					<input type="radio" id="rd_life_publicTraffic2" name="rd_life_publicTraffic"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_life_publicTraffic')">
					<label for="rd_life_publicTraffic2">중</label>
					<input type="radio" id="rd_life_publicTraffic3" name="rd_life_publicTraffic" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_life_publicTraffic')">
					<label for="rd_life_publicTraffic3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>


<!-- 교육 -->
	<li class="hasSubmenu">
	<a href="#people"><i class="fa fa-list"></i><span>지역인구</span></a>
		<ul id="people" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 외국인거주비율 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="people_foreign" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="people_foreign" data-toggle="tooltip" data-placement="top" title="지역인구 대비 외국인 거주자의 비율을 행정구역 별로 나타냅니다.">외국인거주비율</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="people_foreign" class = "hml_list">
					<input type="radio" id="rd_people_foreign1" name="rd_people_foreign" value="<%=SelectConditions.high %>" onclick="radio7thCheck('rd_people_foreign')">
					<label for="rd_people_foreign1">상</label>
					<input type="radio" id="rd_people_foreign2" name="rd_people_foreign"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_people_foreign')">
					<label for="rd_people_foreign2">중</label>
					<input type="radio" id="rd_people_foreign3" name="rd_people_foreign" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_people_foreign')">
					<label for="rd_people_foreign3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 인구밀도 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="people_density" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="people_density" data-toggle="tooltip" data-placement="top" title="지역의 인구분포의 조밀도를 행정지역 별로 나타냅니다.">인구밀도</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="people_density"class = "hml_list">
					<input type="radio" id="rd_people_density1" name="rd_people_density"  value="<%=SelectConditions.high %>"  onclick="radio7thCheck('rd_people_density')" class ="rd_people_density"  >
					<label for="rd_people_density1">상</label>
					<input type="radio" id="rd_people_density2" name="rd_people_density"value="<%=SelectConditions.mid %>" onclick="radio7thCheck('rd_people_density')"  class ="rd_people_density">
					<label for="rd_people_density2">중</label>
					<input type="radio" id="rd_people_density3" name="rd_people_density" value="<%=SelectConditions.low %>" onclick="radio7thCheck('rd_people_density')" class ="rd_people_density">
					<label for="rd_people_density3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>


<!-- 자연 -->
	<li class="hasSubmenu">
	<a href="#nature"><i class="fa fa-list"></i><span>자연</span></a>
		<ul id="nature" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 주변 공원 수 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="nature_park" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="nature_park" data-toggle="tooltip" data-placement="top" title="공원의 수를 행정구역 별로 나타냅니다.">주변 공원 수</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="nature_park" class = "hml_list">
					<input type="radio" id="rd_nature_park1" name="rd_nature_park" value="<%=SelectConditions.high %>">
					<label for="rd_nature_park1">상</label>
					<input type="radio" id="rd_nature_park2" name="rd_nature_park"value="<%=SelectConditions.mid %>">
					<label for="rd_nature_park2">중</label>
					<input type="radio" id="rd_nature_park3" name="rd_nature_park" value="<%=SelectConditions.low %>">
					<label for="rd_nature_park3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 미세먼지 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="nature_pollution" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="nature_pollution" data-toggle="tooltip" data-placement="top" title="미세먼지에 의한 평균 오염정도를 행정구역 별로 나타냅니다. 수치가 높을수록 오염도가 낮습니다.">미세먼지</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="nature_pollution" >
					<input type="radio" id="rd_nature_pollution1" name="rd_nature_pollution" value="<%=SelectConditions.high %>">
					<label for="rd_nature_pollution1">상</label>
					<input type="radio" id="rd_nature_pollution2" name="rd_nature_pollution" value="<%=SelectConditions.mid %>">
					<label for="rd_nature_pollution2">중</label>
					<input type="radio" id="rd_nature_pollution3" name="rd_nature_pollution" value="<%=SelectConditions.low %>">
					<label for="rd_nature_pollution3">하</label>
				</span>
				</a>
			</li>
		</ul>
	</li>

</ul>
<!-- //조건 카테고리 끝 -->
	
	<!-- 선택한 조건 -->
	<h4 class="category">선택한 조건</h4><a href = "#" onclick=""></a>
        <div class="sidebar-block" id = "sList" >
				<ul class = "selectedList" id = "selectedList">
				</ul>
        </div>
	</form>
<!-- 폼 끝 (조건 카테고리, 선택한 조건 포함) -->
	
	<h4 class="category" data-step="3" data-intro="조건을 선택하여 클릭 시, 당신만의 맞춤형 동네를 찾아드립니다." data-position = "auto">결과보기</h4>
		<div class="sidebar-block text-center filter_commit" onclick = "conditionSelect();" >
			<a data-toggle="sidebar-menu" href="#sidebar-map" onclick = "boardList(); deleteArray1();" class="btn btn-primary btn-block toggle ">
				<strong style="color: white;" >추천지역찾기</strong> <!-- test123.js 연결 -->
			</a>
		</div>
		
		</div><!-- <div data-scrollable> -->
	</aside>
<!-- 왼쪽 사이드바 끝 -->



<!-- 오른쪽 사이드바 시작-->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <!-- 필요한 경우 aside 클래스에 더해서 사용 
    	sidebar-size-xs-30pc sidebar-size-sm-30pc sidebar-size-md-25pc sidebar-size-lg-25pc -->
    <aside class="sidebar right sidebar-size-5 sidebar-offset-0 sidebar-skin-white st-effect-1"
    	id="sidebar-map" data-toggle-layout=sidebar-r-20pc-lg,sidebar-r-15pc data-toggle-bar=false data-overlay=false
    	style="box-shadow: 0px 0px 20px #333;">
      <div id = "test123">
      	<!-- test123.js 삽입 -->
      </div>
    </aside>

    <!-- sidebar effects OUTSIDE of st-pusher: -->
    <!-- st-effect-1, st-effect-2, st-effect-4, st-effect-5, st-effect-9, st-effect-10, st-effect-11, st-effect-12, st-effect-13 -->

    <!-- content push wrapper -->
    <div class="st-pusher">

      <!-- sidebar effects INSIDE of st-pusher: -->
      <!-- st-effect-3, st-effect-6, st-effect-7, st-effect-8, st-effect-14 -->

      <!-- this is the wrapper for the content -->
      <div class="st-content">

	<!-- 중간쪽 코드 잠시 빼냄 -->
	<!-- 중간쪽 코드 부분에 임시로 지도 삽입 -->
		<div class="margin-none" id="content">

		<!-- 지도삽입 -->
			<div id="map" style="width:100%;height:800px; "></div>
			<script src="//apis.daum.net/maps/maps3.js?apikey=e5f9cd760a5dedf9f84cc76d41a6decd"></script>
			<script>
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div
			    mapOption = { 
							center: new daum.maps.LatLng(37.5128827,127.0561418), // 지도의 중심좌표
					        level: 7, // 지도의 확대 레벨
			    };
			var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
			
			// 지도를 표시하는 div 크기를 변경하는 함수입니다
			function resizeMap() {
			    var mapContainer = document.getElementById('map');
			    mapContainer.style.width = '650px';
			    mapContainer.style.height = '650px';
			}
			function relayout() {
			    
			    map.relayout();
			}
			</script>
		<!-- 지도끝 -->
			
	<!-- 우선 상단바 아래로 낑겨넣음 -->
<!-- 		<nav class="navbar navbar-default navbar-size-large navbar-static-top navbar-map-overlay">
			<a data-toggle="sidebar-menu" href="#sidebar-map" class="toggle pull-right hidden-xs margin-none"><i class="fa fa-list"></i></a>
  <div class="navbar-header">
           <div class="container-fluid">
				<div class="navbar-text pull-left"><i class="fa fa-fw fa-info"></i> Discover thousands of locations</div>
					<a class="toggle pull-right margin-none visible-xs" data-toggle="collapse" data-target="#map-nav"><i class="fa fa-sliders fa-rotate-90"></i></a>
				</div>
			</div>-->
		<!-- Collect the nav links, forms, and other content for toggling -->
			<!-- <div class="collapse navbar-collapse" id="map-nav">
				<form class="navbar-form  navbar-left">
					<div class="search-2">
						<div class="input-group">
						<input type="text" class="form-control form-control-w-150" placeholder="Search ..">
							<span class="input-group-btn">
								<button class="btn btn-inverse" type="button"><i class="fa fa-search"></i></button>
							</span>
						</div>
					</div>
				</form>
            </div>
		</nav>
		-->
	<!-- 상단바 끝 -->
		
		
		
		</div>
      </div>
      <!-- /st-content -->

    </div>
    <!-- /st-pusher -->
    
    <!--modal div  -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width:800px; margin:20px;">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                    <h4 class="modal-title" id="myModalLabel">SMAP 사용방법</h4>
                </div>
                
                <div class="modal-body wizard-content">
                    <div class="wizard-step">
                    <span class = "popupimg"><img style = "width:90%;" src="./resources/images/bar1.png"></span>
                   <span class="popuptext" style = "margin-left:15px; margin-top:-5px;"> 
                        <h5 style="font-weight:bold;">기준 지역 선택</h5>
							&nbsp&nbsp비교하고 싶은 지역을 선택하세요. 
						<br><br>
					<h5 style="font-weight:bold;">메뉴</h5>
						22가지의 조건들 중 최대 6개의 조건을 선택해보세요.
						당신만의 맞춤형동네를 찾아드립니다.
						<br><br>
					<h5 style="font-weight:bold;">선택한 조건</h5>
						당신이 선택한 조건을 한 눈에 볼 수 있습니다. 
                        	</span>
                  </div>
                    <div class="wizard-step">
                     <span class = "popupimg"><img style = "width:90%;" src="./resources/images/bar2.png"></span>
                   <span class="popuptext" style = "margin-left:15px; margin-top:-5px;"> 
                       <h5 style="font-weight:bold;">추천지역리스트</h5>
							&nbsp&nbsp앞서 선택한 조건들에 가중치를 더하여 당신만의 맞춤형 동네를 1위부터 10위까지 추천해 드립니다. 최대 5개의 동을 선택하여 다음 단계로 넘어갈 수 있습니다. 
						<br><br>
						<h5 style="font-weight:bold;">지역추가</h5>
							&nbsp&nbsp마음에 담고 있는 지역의 정보를 알고 싶은 경우, 직접 추가해서 볼 수 있습니다.
						<br><br>
						<h5 style="font-weight:bold;">지역현황비교</h5>
						&nbsp&nbsp앞서 선택한 기준 지역과 현재 목록에서 선택된 지역의 정보를 시각화해서 보여드립니다. 
						</span>
					 </div>
					 
                    <div class="wizard-step">
                      <span class = "popupimg"><img style = "width:90%;" src="./resources/images/bar3.png"></span>
                   <span class="popuptext" style = "margin-left:15px; margin-top:-5px;"> 
				       	<h5 style="font-weight:bold;"> 생활권역 추가</h5>
						&nbsp&nbsp최대 5개 선택 된 동들을 가지고 당신의 생활의 목적지를 추가합니다. 
						<h5 style="font-weight:bold;">생활권역구성</h5>
						&nbsp&nbsp당신의 생활권을 만들어 봅시다. 자주 다니는 곳들과 이동수단을 최대 5개 까지 선택할 수 있습니다. 
						<h5 style="font-weight:bold;">최적의 주거공간 찾기</h5>
						&nbsp&nbsp당신의 생활권 내에서 최적의 주거공간을 찾습니다. 
						</span>
				 </div>
				 
                    <div class="wizard-step">
                 <!--      <span class = "popupimg"><img style = "width:90%;" src="./resources/images/bar1.png"></span>
 -->                   <span class="popuptext" style = "margin-left:15px; margin-top:-5px;"> 
	                    <h5 style="font-weight:bold;">추천 아파트 리스트</h5> 
							&nbsp&nbsp앞서 선택된 지역들의 점수와 생활 권역에 따른 아파트 별 합산 점수 순으로 보여줍니다.
						<h5 style="font-weight:bold;">아파트 세부정보</h5>
							&nbsp&nbsp아파트의 상세정보 및 아파트 명, 건축년도를 확인 할 수 있습니다.
						<h5 style="font-weight:bold;">아파트 거래정보</h5>
							&nbsp&nbsp아파트 별 거래 정보가 있을 경우 확인이 가능합니다.
						<h5 style="font-weight:bold;">소요시간 비교</h5>
							&nbsp&nbsp아파트 별 당신이 선택한 목적지까지의 소요시간과 지역 내 아파트의 평균 소요시간을 비교해 볼 수 있습니다.
						<h5 style="font-weight:bold;">검색결과저장</h5>
							&nbsp&nbsp이메일을 통해 고유코드를 발급받아서, 현재 결과 화면을 저장하여 다시 볼 수 있습니다.
						<h5 style="font-weight:bold;">희망목적지</h5>
							&nbsp&nbsp앞서 선택한 목적지들을 확인 할 수 있습니다.
						<h5 style="font-weight:bold;">필터링</h5>
							&nbsp&nbsp준공년도와 평수의 조건을 선택 할 경우, 선택한 범위 내의 아파트만 볼 수 있습니다.
							</span>
				</div>
                    
                </div>
                <div class="modal-footer wizard-buttons">
                    <!-- The wizard button will be inserted here. -->
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="footer">
      <strong>sankumi*sankumi</strong> v1.0.0 &copy; Copyright 2017
    </footer>
    <!-- // Footer -->

  </div>

    <!-- Inline Script for colors and config objects; used by various external scripts; -->
  <script>
    var colors = {
      "danger-color": "#e74c3c",
      "success-color": "#81b53e",
      "warning-color": "#f0ad4e",
      "inverse-color": "#2c3e50",
      "info-color": "#2d7cb5",
      "default-color": "#6e7882",
      "default-light-color": "#cfd9db",
      "purple-color": "#9D8AC7",
      "mustard-color": "#d4d171",
      "lightred-color": "#e15258",
      "body-bg": "#f6f6f6"
    };
    var config = {
      theme: "html",
      skins: {
        "default": {
          "primary-color": "#16ae9f"
        }
      }
    };
  </script>


<!-- Vendor Scripts Standalone Libraries-->
	
	<script src="./resources/js/all.js"></script>

	<script src="./resources/js/app/all.js"></script>
	<script src="./resources/js/app/app.js"></script>
	<script src="./resources/js/app/essentials.js"></script>
	
	<script src="./resources/js/vender/core/all.js"></script>
	<script src="./resources/js/vendor/core/bootstrap.js?ver=1"></script>
	
	<script src="./resources/js/vendor/forms/all.js"></script>
	<script src="./resources/js/vendor/forms/bootstrap-datepicker.js"></script>
	<script src="./resources/js/vendor/forms/bootstrap-slider.js"></script>
	
	<script src="./resources/js/vendor/core/breakpoints.js"></script>
	<script src="./resources/js/vendor/core/jquery.nicescroll.js"></script>
	<!-- <script src="./resources/js/vendor/core/isotope.pkgd.js"></script> -->
	<script src="./resources/js/vendor/core/packery-mode.pkgd.js"></script>
	<script src="./resources/js/vendor/core/jquery.grid-a-licious.js"></script>
	<script src="./resources/js/vendor/core/jquery.cookie.js"></script>
	<script src="./resources/js/vendor/core/jquery-ui.custom.js"></script>
	<script src="./resources/js/vendor/core/jquery.hotkeys.js"></script>
	<script src="./resources/js/vendor/core/handlebars.js"></script>
	<script src="./resources/js/vendor/core/jquery.hotkeys.js"></script>
	<script src="./resources/js/vendor/core/load_image.js"></script>
	<script src="./resources/js/vendor/core/jquery.debouncedresize.js"></script>
	<script src="./resources/js/vendor/media/all.js"></script>


 	<!-- <script src="./resources/js/app/essentials.js"></script> -->
	<script src="./resources/js/app/layout.js"></script>
	<script src="./resources/js/app/sidebar.js"></script>
	<script src="./resources/js/app/media.js"></script>


	<!-- 검색목록의 hidden form으로 전송 -->
	<input type="hidden" id="places">
	<input type="hidden" id="title">
	<input type = "hidden" id = "dongitem">
	<input type = "hidden" id = "graphData">
	<input type = "hidden" id = "keylist">
	<input type = "hidden" id = "titleList">
	
	
</body>
</html>