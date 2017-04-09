<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="./resources/css/avgrund.css"> <!-- 첫번째 팝업 style -->

<!-- jquery-3.1.1.js -->
<script src="./resources/js/jquery-3.1.1.js"></script>
<script src="./resources/js/test123.js"></script>
<script src="./resources/js/radioToList.js"></script>
<script src="./resources/js/jquery.avgrund.min.js"></script>
<script src="./resources/js/selectThis.js"></script> <!-- 기준 지역 선택 -->
<script src="./resources/js/Chart.js"></script><!-- 차트 라이브러리 -->
<script src="./resources/js/graph.js"></script><!-- 차트 라이브러리 -->
<script src="./resources/js/addAddress.js"></script><!-- 추천지역 리스트에 주소추가 -->
<script src="./resources/js/resultList.js"></script><!-- 추천지역 리스트 출력 -->

<script type='text/javascript'>
$(document).avgrund({
	    openOnEvent: false
	}); 
	
//check box 클릭시 radio box 활성화
$(function() {
	/* 
	$('#show').avgrund({
		height: 350,
		width: 640,
		holderClass: 'custom',
		showClose: true,
		showCloseText: 'X',
		enableStackAnimation: true,
		closeByDocument: true, 
	    openOnEvent: false,
		onBlurContainer: '.container',
		template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
		'<div>' +
		'<a href="http://github.com/voronianski/jquery.avgrund.js" target="_blank" class="github">ㅇㅅㅇ</a>' +
		'<a href="http://twitter.com/voronianski" target="_blank" class="twitter">Twitter</a>' +
		'<a href="http://dribbble.com/voronianski" target="_blank" class="dribble">Dribbble</a>' +
		'</div>'
	});
 */
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

function checkSelected(){
	var click = document.getElementByID("selectedList").value;
	console.log(click);
}
//체크박스 선택 개수 제한 (6개)
function checkboxSelect(obj,cnt) {
	var i, sum=1;
	var chk = document.getElementsByName(obj);
	var tot = chk.length;
	for (i = 0; i < tot; i++) if(chk[i].checked == true) sum++;
	if(sum > cnt) {
	    for (i = 0; i < tot; i++) if(chk[i].checked == false) chk[i].disabled = true;
	} else {
	    for (i = 0; i < tot; i++) chk[i].disabled = false;
	}
}

</script>


<title>두번째 도전하는 테스트닷 호랏!</title>
	
 <!-- Vendor CSS BUNDLE
    Includes styling for all of the 3rd party libraries used with this module, such as Bootstrap, Font Awesome and others.
    TIP: Using bundles will improve performance by reducing the number of network requests the client needs to make when loading the page. -->
	<link href="./resources/css/vendor/all.css" rel="stylesheet">

  <!-- Vendor CSS Standalone Libraries
        NOTE: Some of these may have been customized (for example, Bootstrap).
        See: src/less/themes/{theme_name}/vendor/ directory -->
	<link href="./resources/css/vendor/bootstrap.css" rel="stylesheet">
	<link href="./resources/css/vendor/font-awesome.css" rel="stylesheet">
	<link href="./resources/css/vendor/picto.css" rel="stylesheet">
	<link href="./resources/css/vendor/material-design-iconic-font.css" rel="stylesheet">
	<link href="./resources/css/vendor/datepicker3.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery.minicolors.css" rel="stylesheet">
	<link href="./resources/css/vendor/bootstrap-slider.css" rel="stylesheet">
	<link href="./resources/css/vendor/railscasts.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery-jvectormap.css" rel="stylesheet">
	<link href="./resources/css/vendor/owl.carousel.css" rel="stylesheet">
	<link href="./resources/css/vendor/slick.css" rel="stylesheet">
	<link href="./resources/css/vendor/morris.css" rel="stylesheet">
	<link href="./resources/css/vendor/ui.fancytree.css" rel="stylesheet">
	<link href="./resources/css/vendor/daterangepicker-bs3.css" rel="stylesheet">
	<link href="./resources/css/vendor/jquery.bootstrap-touchspin.css" rel="stylesheet">
	<link href="./resources/css/vendor/select2.css" rel="stylesheet">
  
  <!-- APP CSS BUNDLE [css/app/app.css]
INCLUDES:
    - The APP CSS CORE styling required by the "html" module, also available with main.css - see below;
    - The APP CSS STANDALONE modules required by the "html" module;
NOTE:
    - This bundle may NOT include ALL of the available APP CSS STANDALONE modules;
      It was optimised to load only what is actually used by the "html" module;
      Other APP CSS STANDALONE modules may be available in addition to what's included with this bundle.
      See src/less/themes/html/app.less
TIP:
    - Using bundles will improve performance by greatly reducing the number of network requests the client needs to make when loading the page. -->
	<link href="./resources/css/app/app.css" rel="stylesheet">

  <!-- App CSS CORE
This variant is to be used when loading the separate styling modules -->
	<link href="./resources/css/app/main.css" rel="stylesheet">

  <!-- App CSS Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL modules are 100% compatible -->

	<link href="./resources/css/app/essentials.css" rel="stylesheet" />
	<link href="./resources/css/app/layout.css" rel="stylesheet" />
	<link href="./resources/css/app/sidebar.css" rel="stylesheet" />
	<link href="./resources/css/app/sidebar-skins.css" rel="stylesheet" />
	<link href="./resources/css/app/navbar.css" rel="stylesheet" />
	<link href="./resources/css/app/media.css" rel="stylesheet" />
	<link href="./resources/css/app/maps.css" rel="stylesheet" />
	<link href="./resources/css/app/colors-buttons.css" rel="stylesheet" />
	<link href="./resources/css/app/colors-text.css" rel="stylesheet" />

	<link href="./resources/css/app/hml_radio.css" rel="stylesheet" />
	
	
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!-- If you don't need support for Internet Explorer <= 8 you can safely remove these -->
  <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

</head>



<body>
<script type="text/javascript">

$(function() {

$('#show').avgrund({
	height: 350,
	width: 640,
	holderClass: 'custom',
	showClose: true,
	showCloseText: 'X',
	enableStackAnimation: true,
	closeByDocument: true, 
    openOnEvent: false,
	onBlurContainer: '.container',
	template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
	'<div>' +
	'<a href="http://github.com/voronianski/jquery.avgrund.js" target="_blank" class="github">ㅇㅅㅇ</a>' +
	'<a href="http://twitter.com/voronianski" target="_blank" class="twitter">Twitter</a>' +
	'<a href="http://dribbble.com/voronianski" target="_blank" class="dribble">Dribbble</a>' +
	'</div>'
});

});
</script>
<!--  팝업1-->
<a href="#" id="show" class="button left"></a>
  <!-- Wrapper required for sidebar transitions -->
  <div class="st-container">

    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#sidebar-menu" data-toggle="sidebar-menu" class="toggle pull-left visible-xs"><i class="fa fa-bars"></i></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a href="#sidebar-map1" data-toggle="sidebar-menu" class="toggle pull-right visible-xs"><i class="fa fa-map-marker"></i></a>

          <a class="navbar-brand"
          style="width: 400px; position: absolute; left: 50%; margin-left: -200px; border: 0; outline: 0;">
				エッ！スマップ？ S(SMART)・MAP</a>
        </div>
		
		
		
	<!-- 오른쪽 상단 네비게이션 -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="main-nav">

		<!-- dropdown 해결 필요 -->
          <ul class="nav navbar-nav navbar-right ">
            <!-- 코드불러오기 -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="결과 저장시 이메일로 부여받았던 코드를 입력해주세요">
                <i class="fa fa-fw fa-lock"></i> 코드불러오기
              </a>
              <div class="dropdown-menu dropdown-size-280">
                <form>
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-user"></i></span>
                      <input type="text" class="form-control" placeholder="Username">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-shield"></i></span>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary">Login <i class="fa fa-sign-in"></i></button>
                  </div>
                </form>
              </div>
            </li>
            <!-- // END login -->
            
          </ul>
        </div>
        <!-- /.navbar-collapse -->

      </div>
    </nav>


<!-- 왼쪽 사이드바 시작 -->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <form name = "myselection" onchange="getRadios(document.myselection)">
    <aside class="sidebar left sidebar-size-1 sidebar-mini-reveal sidebar-offset-0 sidebar-skin-dark sidebar-visible-desktop" id=sidebar-menu data-type=collapse>
      <div data-scrollable >
      <!-- onclick ='getRadios(document.myselection)' -->
        <ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right">
          
	<!-- 1차선택 -->
		<li class="hasSubmenu open active">
			<a><i class="fa fa-home"></i><span>1차 선택</span></a>
				<ul id="#" class="in">
				<!-- 구 셀렉트 삽입 우선 위에 스타일로 구 스타일 적용해줌 -->
					<h4 class="category">기준지역선택</h4>
	            	<li>
	            	
						<div class="cd-select" style="margin: 14px">
							<select class="select1" name="selectThis1" id="mp_addcd_sido" onchange="searchThis(this)">
								<option value="">시/도</option>
								<option value="서울특별시">서울특별시</option>
								<option value="인천광역시">인천광역시</option>
								<option value="경기도">경기도</option>
							</select>
							<select class="select2" name="selectThis2" id="mp_addcd_gg">
								<option value="">구/군</option>
							</select>
						</div> <!-- cd-select -->
					</li>
				<!-- 구 셀렉트 친구 여기서 끝 -->
            </ul>
          </li>
    <!-- 1차선택 끝 -->
       
          
<!-- 복지문화 -->
	<li class="hasSubmenu">
	<a href="#welfare"><i class="fa fa-list"></i><span>복지문화</span></a>
		<ul id="welfare" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 스포츠 -->
		<div class="condition">
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_sports" name="ck" onclick="checkboxSelect('ck',6)">
					<!-- 수정필요 -->
					<label for="welfare_sports"><span>스포츠</span></label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_sports">
					<input type="radio" id="rd_welfare_sports1" name="rd_welfare_sports" value="1.2" >
					<label for="rd_welfare_sports1">상</label>
					<input type="radio" id="rd_welfare_sports2" name="rd_welfare_sports" value="1.1" >
					<label for="rd_welfare_sports2">중</label>
					<input type="radio" id="rd_welfare_sports3" name="rd_welfare_sports" value="1.0">
					<label for="rd_welfare_sports3">하</label>
				</span>	
				</a>
			</li>
		</div>	
			<!-- 문화시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_culture" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_culture">문화시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_culture">
					<input type="radio" id="rd_welfare_culture1" name="rd_welfare_culture" value="high">
					<label for="rd_welfare_culture1">상</label>
					<input type="radio" id="rd_welfare_culture2" name="rd_welfare_culture" value="mid">
					<label for="rd_welfare_culture2">중</label>
					<input type="radio" id="rd_welfare_culture3" name="rd_welfare_culture" value="low">
					<label for="rd_welfare_culture3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 미용실 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_salon" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_salon">미용실</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_salon">
					<input type="radio" id="rd_welfare_salon1" name="rd_welfare_salon" value="high">
					<label for="rd_welfare_salon1">상</label>
					<input type="radio" id="rd_welfare_salon2" name="rd_welfare_salon" value="mid">
					<label for="rd_welfare_salon2">중</label>
					<input type="radio" id="rd_welfare_salon3" name="rd_welfare_salon" value="low">
					<label for="rd_welfare_salon3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 사회복지 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_society" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_society">사회복지</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_society">
					<input type="radio" id="rd_welfare_society1" name="rd_welfare_society" value="high">
					<label for="rd_welfare_society1">상</label>
					<input type="radio" id="rd_welfare_society2" name="rd_welfare_society" value="mid">
					<label for="rd_welfare_society2">중</label>
					<input type="radio" id="rd_welfare_society3" name="rd_welfare_society" value="low">
					<label for="rd_welfare_society3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 병원 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_medical" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_medical">병원</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_medical">
					<input type="radio" id="rd_welfare_medical1" name="rd_welfare_medical" value="high">
					<label for="rd_welfare_medical1">상</label>
					<input type="radio" id="rd_welfare_medical2" name="rd_welfare_medical" value="mid">
					<label for="rd_welfare_medical2">중</label>
					<input type="radio" id="rd_welfare_medical3" name="rd_welfare_medical" value="low">
					<label for="rd_welfare_medical3">하</label>
				</span>	
				</a>
			</li>
			
			
			<!-- 유치원 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="welfare_childcare" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="welfare_childcare">유치원</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="welfare_childcare">
					<input type="radio" id="rd_welfare_childcare1" name="rd_welfare_childcare" value="high">
					<label for="rd_welfare_childcare1">상</label>
					<input type="radio" id="rd_welfare_childcare2" name="rd_welfare_childcare"value="mid">
					<label for="rd_welfare_childcare2">중</label>
					<input type="radio" id="rd_welfare_childcare3" name="rd_welfare_childcare" value="low">
					<label for="rd_welfare_childcare3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>



<!-- 교육 -->
	<li class="hasSubmenu">
	<a href="#education"><i class="fa fa-list"></i><span>교육</span></a>
		<ul id="education" class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
		
		<!-- 교원1인당학생수 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="education_student" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="education_student">교원1인당 학생수</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="education_student">
					<input type="radio" id="rd_education_student1" name="rd_education_student" value="high">
					<label for="rd_education_student1">상</label>
					<input type="radio" id="rd_education_student2" name="rd_education_student"value="mid">
					<label for="rd_education_student2">중</label>
					<input type="radio" id="rd_education_student3" name="rd_education_student" value="low">
					<label for="rd_education_student3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 학원수 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="education_academy" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="education_academy">학원수</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="education_academy">
					<input type="radio" id="rd_education_academy1" name="rd_education_academy" value="high">
					<label for="rd_education_academy1">상</label>
					<input type="radio" id="rd_education_academy2" name="rd_education_academy"value="mid">
					<label for="rd_education_academy2">중</label>
					<input type="radio" id="rd_education_academy3" name="rd_education_academy" value="low">
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
		
		<!-- 화재 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_fire" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_fire">화재</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_fire">
					<input type="radio" id="rd_safety_fire1" name="rd_safety_fire" value="high">
					<label for="rd_safety_fire1">상</label>
					<input type="radio" id="rd_safety_fire2" name="rd_safety_fire"value="mid">
					<label for="rd_safety_fire2">중</label>
					<input type="radio" id="rd_safety_fire3" name="rd_safety_fire" value="low">
					<label for="rd_safety_fire3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 교통 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_traffic" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_traffic">교통</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_traffic">
					<input type="radio" id="rd_safety_traffic1" name="rd_safety_traffic" value="high">
					<label for="rd_safety_traffic1">상</label>
					<input type="radio" id="rd_safety_traffic2" name="rd_safety_traffic"value="mid">
					<label for="rd_safety_traffic2">중</label>
					<input type="radio" id="rd_safety_traffic3" name="rd_safety_traffic" value="low">
					<label for="rd_safety_traffic3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 범죄 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_crime" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_crime">범죄</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_crime">
					<input type="radio" id="rd_safety_crime1" name="rd_safety_crime" value="high">
					<label for="rd_safety_crime1">상</label>
					<input type="radio" id="rd_safety_crime2" name="rd_safety_crime"value="mid">
					<label for="rd_safety_crime2">중</label>
					<input type="radio" id="rd_safety_crime3" name="rd_safety_crime" value="low">
					<label for="rd_safety_crime3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 안전사고 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_safety" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_safety">안전사고</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_safety">
					<input type="radio" id="rd_safety_safety1" name="rd_safety_safety" value="high">
					<label for="rd_safety_safety1">상</label>
					<input type="radio" id="rd_safety_safety2" name="rd_safety_safety"value="mid">
					<label for="rd_safety_safety2">중</label>
					<input type="radio" id="rd_safety_safety3" name="rd_safety_safety" value="low">
					<label for="rd_safety_safety3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 전염병 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_infection" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_infection">전염병</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_infection">
					<input type="radio" id="rd_safety_infection1" name="rd_safety_infection" value="high">
					<label for="rd_safety_infection1">상</label>
					<input type="radio" id="rd_safety_infection2" name="rd_safety_infection"value="mid">
					<label for="rd_safety_infection2">중</label>
					<input type="radio" id="rd_safety_infection3" name="rd_safety_infection" value="low">
					<label for="rd_safety_infection3">하</label>
				</span>	
				</a>
			</li>
			
			
			<!-- 자연재해 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="safety_nature" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="safety_nature">자연재해</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="safety_nature">
					<input type="radio" id="rd_safety_nature1" name="rd_safety_nature" value="high">
					<label for="rd_safety_nature1">상</label>
					<input type="radio" id="rd_safety_nature2" name="rd_safety_nature"value="mid">
					<label for="rd_safety_nature2">중</label>
					<input type="radio" id="rd_safety_nature3" name="rd_safety_nature" value="low">
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
					<label for="life_convenient">편의시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_convenient">
					<input type="radio" id="rd_life_convenient1" name="rd_life_convenient" value="high">
					<label for="rd_life_convenient1">상</label>
					<input type="radio" id="rd_life_convenient2" name="rd_life_convenient"value="mid">
					<label for="rd_life_convenient2">중</label>
					<input type="radio" id="rd_life_convenient3" name="rd_life_convenient" value="low">
					<label for="rd_life_convenient3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 쇼핑시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_shopping" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_shopping">쇼핑시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_shopping" >
					<input type="radio" id="rd_life_shopping1" name="rd_life_shopping" value="high">
					<label for="rd_life_shopping1">상</label>
					<input type="radio" id="rd_life_shopping2" name="rd_life_shopping"value="mid">
					<label for="rd_life_shopping2">중</label>
					<input type="radio" id="rd_life_shopping3" name="rd_life_shopping" value="low">
					<label for="rd_life_shopping3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 외식시설 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_restaurant" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_restaurant">외식시설</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_restaurant">
					<input type="radio" id="rd_life_restaurant1" name="rd_life_restaurant" value="high">
					<label for="rd_life_restaurant1">상</label>
					<input type="radio" id="rd_life_restaurant2" name="rd_life_restaurant"value="mid">
					<label for="rd_life_restaurant2">중</label>
					<input type="radio" id="rd_life_restaurant3" name="rd_life_restaurant" value="low">
					<label for="rd_life_restaurant3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 대중교통이용률 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="life_publicTraffic" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="life_publicTraffic">대중교통이용률</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="life_publicTraffic">
					<input type="radio" id="rd_life_publicTraffic1" name="rd_life_publicTraffic" value="high">
					<label for="rd_life_publicTraffic1">상</label>
					<input type="radio" id="rd_life_publicTraffic2" name="rd_life_publicTraffic"value="mid">
					<label for="rd_life_publicTraffic2">중</label>
					<input type="radio" id="rd_life_publicTraffic3" name="rd_life_publicTraffic" value="low">
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
					<label for="people_foreign">외국인거주비율</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="people_foreign" class = "hml_list">
					<input type="radio" id="rd_people_foreign1" name="rd_people_foreign" value="high">
					<label for="rd_people_foreign1">상</label>
					<input type="radio" id="rd_people_foreign2" name="rd_people_foreign"value="mid">
					<label for="rd_people_foreign2">중</label>
					<input type="radio" id="rd_people_foreign3" name="rd_people_foreign" value="low">
					<label for="rd_people_foreign3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 인구밀도 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="people_density" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="people_density">인구밀도</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="people_density"class = "hml_list">
					<input type="radio" id="rd_people_density1" name="rd_people_density"  value="high" class ="rd_people_density"  >
					<label for="rd_people_density1">상</label>
					<input type="radio" id="rd_people_density2" name="rd_people_density"value="mid" class ="rd_people_density">
					<label for="rd_people_density2">중</label>
					<input type="radio" id="rd_people_density3" name="rd_people_density" value="low" class ="rd_people_density">
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
		
		<!-- 공원 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="nature_park" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="nature_park">공원</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="nature_park" class = "hml_list">
					<input type="radio" id="rd_nature_park1" name="rd_nature_park" value="high">
					<label for="rd_nature_park1">상</label>
					<input type="radio" id="rd_nature_park2" name="rd_nature_park"value="mid">
					<label for="rd_nature_park2">중</label>
					<input type="radio" id="rd_nature_park3" name="rd_nature_park" value="low">
					<label for="rd_nature_park3">하</label>
				</span>	
				</a>
			</li>
			
			<!-- 미세먼지 -->
			<li>
				<a href="#">
					<input class="ck" type="checkbox" id="nature_pollution" name="ck" onclick="checkboxSelect('ck',6)">
					<label for="nature_pollution">미세먼지</label>
				<!-- 상중하 라디오 -->
				<span class="hml" id="nature_pollution" >
					<input type="radio" id="rd_nature_pollution1" name="rd_nature_pollution" value="rd_nature_pollution high">
					<label for="rd_nature_pollution1">상</label>
					<input type="radio" id="rd_nature_pollution2" name="rd_nature_pollution" value="rd_nature_pollution mid">
					<label for="rd_nature_pollution2">중</label>
					<input type="radio" id="rd_nature_pollution3" name="rd_nature_pollution" value="rd_nature_pollution low">
					<label for="rd_nature_pollution3">하</label>
				</span>	
				</a>
			</li>
		</ul>
	</li>

</ul>
        
<!--         
        <h4 class="category">Map features</h4>
        <ul class="sidebar-menu sm-icons-block sm-active-item-bg sm-icons-right">
          <li><a href="map-filters.html"><i class="fa fa-search"></i><span>Map Filters</span></a></li>
          <li><a href="map-themes.html"><i class="fa fa-eyedropper"></i><span>Map Themes</span></a></li>
          <li><a href="map-markers.html"><i class="fa fa-map-marker"></i><span>Map Markers</span></a></li>
        </ul>
 -->        
        
        <h4 class="category">선택한 조건</h4>
        <div class="sidebar-block" id = "sList" >
				<ul class = "selectedList" id = "selectedList">
				</ul>  
        </div>
        
     </form>   
        <h4 class="category">결과보기</h4>
		<div class="sidebar-block text-center" onclick = "checkSelected();">
			<a data-toggle="sidebar-menu" href="#sidebar-map" class="btn btn-primary btn-block toggle ">          
				<strong>NEXT PAGE</strong>
			</a>
        </div>
      </div>
    </aside>


<!-- 오른쪽 사이드바 시작-->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <aside class="sidebar right sidebar-size-xs-2 sidebar-size-lg-30pc sidebar-size-25pc sidebar-offset-0 sidebar-skin-white" 
    	id="sidebar-map" data-toggle-layout=sidebar-r-30pc-lg,sidebar-r-25pc data-toggle-bar=true data-overlay=false>
      <input type = "button" onclick = "boardList();"value = "test">
      <div id = "test123"></div>
      <!-- <div data-scrollable id="sidebar-map1">
		<h4 class="category">검색결과</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>
		<h4 class="category">지역추가</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>		
		<h4 class="category">지역 종합 현황</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>	
		<div class="sidebar-block equal-padding">
			<ul class="pagination margin-none">
			<li><a href="#sidebar-map2">다음페이지</a></li>
			<li><a href="#">&raquo;</a></li>
          </ul>
        </div>			 
      </div>-->
    </aside>













<!-- 오른쪽 사이드바2 시작-->
    <aside class="sidebar right sidebar-size-xs-2 sidebar-size-lg-30pc sidebar-size-25pc sidebar-offset-0 sidebar-skin-white" 
    	id="sidebar-map2" data-toggle-layout=sidebar-r-30pc-lg,sidebar-r-25pc data-toggle-bar=true data-overlay=false
    	style="visibility: hidden;">
     <div data-scrollable id="sidebar-map2">
		<h4 class="category">검색결과2222222</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>
		<h4 class="category">지역추가</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>		
		<h4 class="category">지역 종합 현황</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>	
		<div class="sidebar-block equal-padding">
			<ul class="pagination margin-none">
			<li><a href="#sidebar-map1">이전페이지</a></li>
			<li><a href="#sidebar-map3">다음페이지</a></li>
          </ul>
        </div>			
      </div>
    </aside>














<!-- 오른쪽 사이드바3 시작-->
    <aside class="sidebar right sidebar-size-xs-2 sidebar-size-lg-30pc sidebar-size-25pc sidebar-offset-0 sidebar-skin-white" 
    	id="sidebar-map3" data-toggle-layout=sidebar-r-30pc-lg,sidebar-r-25pc data-toggle-bar=true data-overlay=false
    	style="visibility: hidden;">
     <div data-scrollable id="sidebar-map3">
		<h4 class="category">검색결과33333333</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>
		<h4 class="category">지역추가</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>		
		<h4 class="category">지역 종합 현황</h4>
			<div class="sidebar-block padding-none">
				<div data-toggle="gridalicious" data-width="400">
          		</div>
			</div>	
		<div class="sidebar-block equal-padding">
		
			<ul class="pagination margin-none">
			<li class="disabled"><a href="#">&laquo;</a></li>
			<li><a href="#sidebar-map1">이전페이지</a></li>
          </ul>
        </div>			
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
		<div class="st-content-inner padding-top-none" id="content">

		<!-- 지도삽입 -->
			<div id="map" style="width:100%;height:800px; "></div>
			<script src="//apis.daum.net/maps/maps3.js?apikey=e5f9cd760a5dedf9f84cc76d41a6decd"></script>
			<script>
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
			    mapOption = { 
							center: new daum.maps.LatLng(37.5128827,127.0561418), // 지도의 중심좌표
					        level: 8, // 지도의 확대 레벨
			    };
			var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
			
			// 지도를 표시하는 div 크기를 변경하는 함수입니다
			function resizeMap() {
			    var mapContainer = document.getElementById('map');
			    mapContainer.style.width = '650px';
			    mapContainer.style.height = '650px'; 
			}
			function relayout() {    
			    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
			    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
			    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
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

	<script src="./resources/js/vendor/core/all.js"></script>
	<!-- <script src="./resources/js/vendor/core/jquery.js"></script> -->
	<script src="./resources/js/vendor/core/bootstrap.js"></script>
	<script src="./resources/js/vendor/core/breakpoints.js"></script>
	<script src="./resources/js/vendor/core/jquery.nicescroll.js"></script>
	<script src="./resources/js/vendor/core/isotope.pkgd.js"></script>
	<script src="./resources/js/vendor/core/packery-mode.pkgd.js"></script>
	<script src="./resources/js/vendor/core/jquery.grid-a-licious.js"></script>
	<script src="./resources/js/vendor/core/jquery.cookie.js"></script>
	<script src="./resources/js/vendor/core/jquery-ui.custom.js"></script>
	<script src="./resources/js/vendor/core/jquery.hotkeys.js"></script>
	<script src="./resources/js/vendor/core/handlebars.js"></script>
	<script src="./resources/js/vendor/core/jquery.hotkeys.js"></script>
	<script src="./resources/js/vendor/core/load_image.js"></script>
	<script src="./resources/js/vendor/core/jquery.debouncedresize.js"></script>
<!-- 	<script src="./resources/js/vendor/forms/all.js"></script> -->
	<script src="./resources/js/vendor/media/all.js"></script>

  <!-- App Scripts Bundle
    Includes Custom Application JavaScript used for the current theme/module;
    Do not use it simultaneously with the standalone modules below. -->
<!--    <script src="./resources/js/app/app.js"></script>
 -->
  <!-- App Scripts Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL the modules are 100% compatible -->

 	<!-- <script src="./resources/js/app/essentials.js"></script> -->
	<script src="./resources/js/app/layout.js"></script>
	<script src="./resources/js/app/sidebar.js"></script>
	<script src="./resources/js/app/media.js"></script>

  <!-- App Scripts CORE [html]:
        Includes the custom JavaScript for this theme/module;
        The file has to be loaded in addition to the UI modules above;
        app.js already includes main.js so this should be loaded
        ONLY when using the standalone modules; -->
<!-- 	<script src="./resources/js/app/main.js"></script>
 -->	



</body>
</html>