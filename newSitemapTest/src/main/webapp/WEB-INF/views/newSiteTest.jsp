<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html class="st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  
  
  <title>Real Estate</title>

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
	
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!-- If you don't need support for Internet Explorer <= 8 you can safely remove these -->
  <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<style type="text/css">
/*
  Hide radio button (the round disc)
  we will use just the label to create pushbutton effect
*/
input[type=radio] {
    display:none; 
    margin:10px;
}

/*
  Change the look'n'feel of labels (which are adjacent to radiobuttons).
  Add some margin, padding to label
*/
input[type=radio] + label {
    display:inline-block;
    margin:-2px;
    padding: 4px 12px;
    background-color: #e7e7e7;
    border-color: #ddd;
}
/*
 Change background color for label next to checked radio button
 to make it look like highlighted button
*/
input[type=radio]:checked + label { 
   background-image: none;
    background-color:#d0d0d0;
}
</style>
<!-- div 전환용 script -->
<script language=javascript type='text/javascript'>
function showDiv(pass) { 
	var divs = document.getElementsByTagName('aside'); 
	for(i=0;i<divs.length;i++){ 
		if(divs[i].id.match(pass)){//if they are 'see' divs 
			if (document.getElementById) // DOM3 = IE5, NS6 
				divs[i].style.visibility="visible";// show/hide 
			else if (document.layers) // Netscape 4 
				document.layers[divs[i]].display = 'visible'; 
			else // IE 4 
			document.all.divs[i].visibility = 'visible'; 
		} else { 
			if (document.getElementById) 
				divs[i].style.visibility="hidden"; 
			else if (document.layers) // Netscape 4 
				document.divs[i].visibility = 'hidden'; 	
			else // IE 4 
				document.all.divs[i].visibility = 'hidden'; 
			} 
		} 
	}
	
</script>

</head>
<body>

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

          <a href="#sidebar-map" data-toggle="sidebar-menu" class="toggle pull-right visible-xs"><i class="fa fa-map-marker"></i></a>

         <a class="navbar-brand">エッ！スマップ？ S(SMART)・MAP <i class="fa fa-search"></i></a>
      </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="main-nav">
<!--           <form class="navbar-form navbar-left margin-none ">
            <div class="search-1">
              <div class="input-group">
                <span class="input-group-addon"><i class="icon-search"></i></span>
                <input type="text" class="form-control form-control-w-150" placeholder="Search ..">
              </div>
            </div>
          </form> -->
          
          <ul class="nav navbar-nav navbar-right ">
            <!-- Login -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-fw fa-lock"></i> Login
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
            <!-- Sign up -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-fw fa-plus"></i> Sign Up
              </a>
              <div class="dropdown-menu dropdown-size-280">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group form-control-default">
                        <label for="exampleInputFirstName">First name</label>
                        <input type="email" class="form-control" id="exampleInputFirstName" placeholder="Your first name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-control-default">
                        <label for="exampleInputLastName">Last name</label>
                        <input type="email" class="form-control" id="exampleInputLastName" placeholder="Your last name">
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-control-default required">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                  <div class="form-group form-control-default required">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </li>
            <!-- // END sign up -->
            <!-- user -->
            <li class="dropdown user">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="./resources/images/people/110/guy-6.jpg" alt="" class="img-circle" /> Bill<span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#"><i class="fa fa-user"></i>Profile</a></li>
                <li><a href="#"><i class="fa fa-wrench"></i>Settings</a></li>
                <li><a href="#"><i class="fa fa-sign-out"></i>Logout</a></li>
              </ul>
            </li>
            <!-- // END user -->
          </ul>
        </div>
        <!-- /.navbar-collapse -->

      </div>
    </nav>





    <!-- 왼쪽사이드바 구역 -->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <aside class="sidebar left sidebar-size-1 sidebar-mini-reveal sidebar-offset-0 sidebar-skin-dark sidebar-visible-desktop" id=sidebar-menu data-type=collapse>
      <div data-scrollable>
   
   
       <ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right">
          <li class="hasSubmenu open active">
            <a href="#discover"><i class="fa fa-star"></i><span>Discover</span></a>
            <ul id="discover" class="in">
              <li class="active"><a href="index.html"><i class="fa fa-map-marker"></i><span>Full screen Map</span></a></li>
              <li><a href="map-listing-list.html"><i class="fa fa-list"></i><span>Map Listing - List</span></a></li>
              <li><a href="map-listing-grid.html"><i class="fa fa-th"></i><span>Map Listing - Grid</span></a></li>
              <li><a href="listing.html"><i class="fa fa-list"></i><span>Listing - List</span></a></li>
              <li><a href="listing-grid.html"><i class="fa fa-th"></i><span>Listing - Grid</span></a></li>
              <li><a href="listing-map.html"><i class="fa fa-map-marker"></i><span>Listing - Map</span></a></li>
            </ul>
          </li>
          <li class="hasSubmenu">
            <a href="#property"><i class="fa fa-home"></i><span>Property</span></a>
            <ul id="property">
              <li><a href="map-property.html"><i class="fa fa-map-marker"></i><span>Map + Property</span></a></li>
              <li><a href="property.html"><i class="fa fa-list"></i><span>Property details</span></a></li>
            </ul>
          </li>
          <li><a href="map-edit.html"><i class="fa fa-pencil"></i><span>Add property</span></a></li>
        </ul>
      
      
      
      
      
      
      
      
      
      
      
      
      
        <ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right">
			<h4 class="category">기준지역선택<i class="fa fa-search"></i></h4>
        	
        		<li>
					<!-- 셀렉트용 -->
					<div class="select">
						<select class="filter1" name="selectThis1" id="mp_addcd_sido" onchange="searchThis(this)">
							<option value="">시/도</option>
							<option value="서울특별시">서울특별시</option>
							<option value="인천광역시">인천광역시</option>
							<option value="경기도">경기도</option>
						</select>
						<select class="filter2" name="selectThis2" id="mp_addcd_gg">
							<option value="">구/군</option>
						</select>
					</div>         
        		</li>
        	
          
            <li class="hasSubmenu">
            <a href="#property"><i class="fa fa-home"></i><span>Property</span></a>
            <ul id="property">
              <li><a href="map-property.html"><i class="fa fa-map-marker"></i><span>Map + Property</span></a></li>
              <li><a href="property.html"><i class="fa fa-list"></i><span>Property details</span></a></li>
            </ul>
          </li>
          
          
          
          
     	<li class="hasSubmenu">
     	
     	<!-- 자연 -->
            <a href="#nature"><span>자연</span></a>
            <ul id="nature">
		
		<!-- 공원 수 -->
			<li>
            <input class="filter" data-filter=".ck_park" type="checkbox" id="ck_park" name="ck" onclick="checkboxSelect('ck',6)">
			<label class="checkbox-label" for="ck_park" title="공원수가 얼마나 있을까나 ㅎㅎㅎ 공원이 많은데가 좋으세여 아님 적은데가 좋으세여..? 저는 적당한거...그니까 중 할래...ㅎㅎㅎ" style="color: white;">공원 수</label>	
			
			<!-- 상중하 라디오 -->
			<span class="hml park_hml" id="ck_park">
				<input type="radio" id="park_radio1" name="park_radios" value="high">
				<label for="park_radio1">상</label>
				<input type="radio" id="park_radio2" name="park_radios" value="mid">
				<label for="park_radio2">중</label>
				<input type="radio" id="park_radio3" name="park_radios"value="low">
				<label for="park_radio3">하</label>
			</span>
              
              
              </li>
              <!-- 대기오염도 -->
						<li>
								<input class="filter" data-filter=".ck_co2" type="checkbox" id="ck_co2" name="ck" onclick="checkboxSelect('ck',6)">
								<label class="checkbox-label" for="ck_co2" style="color: white;">대기오염도</label>
						<!-- 상중하 라디오 -->
							<span class="hml co2_hml" id="ck_co2">
								<input type="radio" id="co2_radio1" name="co2_radios" value="high">
								<label for="co2_radio1">상</label>
								<input type="radio" id="co2_radio2" name="co2_radios" value="mid">
								<label for="co2_radio2">중</label>
								<input type="radio"id="co2_radio3" name="co2_radios" value="low">
								<label for="co2_radio3">하</label>
							</span>
						</li>
            </ul>
            
            <a href="#property2"><span>Property2</span></a>
            <ul id="property2">
              <li><a href="#"><i class="fa fa-map-marker"></i><span>Map + Property</span></a></li>
              <li><a href="#"><i class="fa fa-list"></i><span>Property details</span></a></li>
            </ul>
            
            <a href="#property3"><span>Property3</span></a>
            <ul id="property3">
              <li><a href="#"><i class="fa fa-map-marker"></i><span>Map + Property</span></a></li>
              <li><a href="#"><i class="fa fa-list"></i><span>Property details</span></a></li>
            </ul>
            
            <a href="#property4"><span>Property4</span></a>
            <ul id="property4">
              <li><a href="#"><i class="fa fa-map-marker"></i><span>Map + Property</span></a></li>
              <li><a href="#"><i class="fa fa-list"></i><span>Property details</span></a></li>
            </ul>
          </li>
       
       
        </ul>
    
        
        
        <h4 class="category">선택완료</h4>
        
        <!-- 버튼구역 -->
        <div class="sidebar-block text-center">
        <!-- 다음단계로(버튼) -->
          <a class="btn btn-primary btn-block" href="javascript:showDiv('R_DIV')"><!-- 다음 화면으로 연결 필요 / 오른쪽 단으로 연결 -->
            <!-- <a href="javascript:showDiv('R_DIV')">
            <a href="javascript:showDiv('cd-filter-right1')"><input type="button" value="1차 선택 완료"></a> -->
            <strong>다음단계로</strong>
          </a>

        </div>
        <!-- 버튼구역 끝 -->
        
        
      </div>
    </aside>
    <!-- 왼쪽사이드바 구역 끝 -->









	<!-- 오른쪽사이드바 구역 시작 -->
    <!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
    <aside class="sidebar right sidebar-size-xs-1 sidebar-size-lg-48pc sidebar-size-40pc sidebar-offset-0 sidebar-skin-white" id=sidebar-map data-toggle-layout=sidebar-r-48pc-lg,sidebar-r-40pc data-toggle-bar=true data-overlay=false>
	 <!-- 임시로 달아놓은 div class R_DIV -->
      <div data-scrollable class="R_DIV">
	
        <div class="sidebar-block sidebar-block-full padding-none">
          <div class="cover overlay hover cover-image-full height-220">
            <img src="./resources/images/photodune-3979102-superb-backyard-xs.jpg" alt="people" />
            <div class="overlay overlay-bg-black overlay-full">
              <div class="v-center">
                <h3 class="text-overlay text-headline">Featured Property</h3>
                <p class="text-overlay text-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p class="text-h5">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-white"></span>
                </p>
              </div>
            </div>
            <a href="map-property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
              <span class="v-center">
                <span class="btn btn-lg btn-red-500"><i class="fa fa-fw fa-star"></i> Details</span>
              </span>
            </a>
          </div>
        </div>

        <h4 class="category">Properties</h4>
        <div class="sidebar-block padding-none">
          <div data-toggle="gridalicious" data-width="200">
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-primary inline absolute left margin-none">Sale</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-378874-real-estate-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Property for sale</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;277,028.00</span>&nbsp;

                <i class="small fa fa-fw icon-home-fill-1" data-toggle="tooltip" data-title="Agency"></i>

                <a href="property.html" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-default inline absolute left margin-none">Sale</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-195203-houses-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Property for sale</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;82,331.00</span>&nbsp;

                <i class="small fa fa-fw icon-home-fill-1" data-toggle="tooltip" data-title="Agency"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-default inline absolute left margin-none">Sale</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-196089-house-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Property for sale</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;81,662.00</span>&nbsp;

                <i class="small fa fa-fw icon-user-1" data-toggle="tooltip" data-title="Individual"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-primary inline absolute left margin-none">Rent</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-197173-residential-home-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Residential Home</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;132,021.00</span>&nbsp;

                <i class="small fa fa-fw icon-user-1" data-toggle="tooltip" data-title="Individual"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-primary inline absolute left margin-none">Rent</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-3979102-superb-backyard-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Superb Backyard</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;175,654.00</span>&nbsp;

                <i class="small fa fa-fw icon-home-fill-1" data-toggle="tooltip" data-title="Agency"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-default inline absolute left margin-none">Sale</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-2238345-apartments-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Apartment</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;187,285.00</span>&nbsp;

                <i class="small fa fa-fw icon-user-1" data-toggle="tooltip" data-title="Individual"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
            <div class="panel panel-default relative">
              <div class="ribbon-heading ribbon-default inline absolute left margin-none">Sale</div>
              <div class="cover hover overlay margin-none">
                <img src="./resources/images/photodune-1112879-modern-kitchen-in-luxury-mansion-xs.jpg" alt="location" class="img-responsive" />
                <a href="#" class="overlay overlay-full overlay-bg-black overlay-hover">
                  <span class="v-center">
                <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                  </span>
                </a>
              </div>
              <div class="panel-body">
                <h4 class="margin-v-0-5">Luxury Mansion</h4>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span class="label label-grey-100">&euro;72,152.00</span>&nbsp;

                <i class="small fa fa-fw icon-home-fill-1" data-toggle="tooltip" data-title="Agency"></i>

                <a href="#" class="btn btn-primary btn-circle absolute bottom right"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-block equal-padding">
          <ul class="pagination margin-none">
            <li class="disabled"><a href="#">&laquo;</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>

      </div>
    </aside>
    <!-- 오른쪽사이드바 구역 끝 -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    <!-- sidebar effects OUTSIDE of st-pusher: -->
    <!-- st-effect-1, st-effect-2, st-effect-4, st-effect-5, st-effect-9, st-effect-10, st-effect-11, st-effect-12, st-effect-13 -->

    <!-- content push wrapper -->
 
    <div class="st-pusher">	<!-- 페이지 하단 부분 시작 -->

      <!-- sidebar effects INSIDE of st-pusher: -->
      <!-- st-effect-3, st-effect-6, st-effect-7, st-effect-8, st-effect-14 -->

      <!-- this is the wrapper for the content -->
      <div class="st-content">






	<!-- 중간쪽 코드 잠시 빼냄 -->
	<!-- 중간쪽 코드 부분에 임시로 지도 삽입 -->
		<div class="st-content-inner padding-top-none" id="content">
		<!-- 지도삽입 -->
			<div id="map" style="width:100%;height:800px;"></div>
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
		</div>











      </div>
      <!-- /st-content -->

    </div>
    <!-- /st-pusher -->

    <!-- Footer -->
    <footer class="footer">
      <strong>Real Estate</strong> v1.2.0 &copy; Copyright 2015
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

  <!-- Vendor Scripts Bundle
    Includes all of the 3rd party JavaScript libraries above.
    The bundle was generated using modern frontend development tools that are provided with the package
    To learn more about the development process, please refer to the documentation.
    Do not use it simultaneously with the separate bundles above. -->
	<script src="js/vendor/all.js"></script>

<!-- Vendor Scripts Standalone Libraries-->  
	<script src="./resources/js/vendor/core/all.js"></script>
	<script src="./resources/js/vendor/core/jquery.js"></script>
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
	<script src="./resources/js/vendor/forms/all.js"></script>
	<script src="./resources/js/vendor/media/all.js"></script>
	<script src="./resources/js/vendor/angular/all.js"></script>

  <!-- App Scripts Bundle
    Includes Custom Application JavaScript used for the current theme/module;
    Do not use it simultaneously with the standalone modules below. -->
  <script src="./resources/js/app/app.js"></script>

  <!-- App Scripts Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL the modules are 100% compatible -->

	<script src="./resources/js/app/essentials.js"></script>
	<script src="./resources/js/app/layout.js"></script>
	<script src="./resources/js/app/sidebar.js"></script>
	<script src="./resources/js/app/media.js"></script>
	<script src="./resources/js/app/maps.js"></script>

  <!-- App Scripts CORE [html]:
        Includes the custom JavaScript for this theme/module;
        The file has to be loaded in addition to the UI modules above;
        app.js already includes main.js so this should be loaded
        ONLY when using the standalone modules; -->
	<script src="./resources/js/app/main.js"></script>
	
</body>
</html>