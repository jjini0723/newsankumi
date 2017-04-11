<<<<<<< HEAD
/**
 * 다음단계 이후!
 */


function boardList2() {
	$(document).ready(function() {
		$.ajax({
			type : "get",
			success : function(data) {
				console.log(data);
				var html = "";
				html += '<div data-scrollable id="sidebar-map1">';
				html += '<h4 class="category">희망위치추가</h4>';
				html += '<div class="sidebar-block padding-none" id = "req_loc1">';
				html += '<div data-toggle="gridalicious" data-width="400">';
				
				///////추가하는 부분
				html += '<div class="map_wrap padding-none" style="color:black">';
			    html += '<div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>';
			    html += '<div id="menu_wrap" class="bg_white">';
			    html += '<div class="option">';
			    html += '<div>';        
			    html += '<form onsubmit="searchPlaces(); return false;">';
			    html += '키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15">'; 
			    html += '<button type="submit">검색하기</button>'; 
			    html += '</form>';
			    html += '</div>';
			    html += '</div>';
			    html += '<hr>';
			    html += '<ul id="placesList"></ul>';
			    html += '<div id="pagination"></div>';
			    html += '</div>';
			    html += '</div>';
				
				
				
				/////////
				html += '</div></div>';
				html += '<h4 class="category">희망 목적지</h4>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';

				html += '<div class="sidebar-block equal-padding">';
				html += '<ul class="pagination margin-none">';
				html += '<li class="disabled"><a href="#">&laquo;</a></li>';
				html += '<li><a href="#" onclick = "boardList();">이전단계</a></li>';
				html += '<li><a href="#" onclick = "boardList3();">최적의 주거공간 찾기</a></li>';
				html += '<li class="disabled"><a href="#">&raquo;</a></li>';
				html += '</ul></div></div>';

				$("#test123").html(html);
			},
			error : function(e) {
				console.log(e);
			}
		});
	});
}

function boardList3() {
	$(document)
			.ready(
					function() {
						console.log("여기까지333");

						$
								.ajax({
									type : "get",
									success : function(data) {
										console.log(data);
										var html = "";
										html += '<div data-scrollable id="sidebar-map1">';
										html += '<h4 class="category">주거지역 검색 결과</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
										html += '<h4 class="category">아파트 정보</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
										html += '<h4 class="category">소요시간 비교</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';

										html += '<div class="sidebar-block equal-padding">';
										html += '<ul class="pagination margin-none">';
										html += '<li class="disabled"><a href="#">&laquo;</a></li>';
										html += '<li><a href="#" onclick ="boardList2();">이전단계</a></li>';
										html += '<li><a href="#" onclick ="">검색결과저장</a></li>';
										html += '</ul></div></div>';

										$("#test123").html(html);
									},
									error : function(e) {
										console.log(e);
									}
								});
					});
	
=======
/**
 * 다음단계 이후!
 */


function boardList2() {
	$(document)
			.ready(
					function() {

						$
								.ajax({
									type : "get",
									success : function(data) {
										console.log(data);
										var html = "";
										html += '<div data-scrollable id="sidebar-map1">';
										html += '<h4 class="category">희망위치추가</h4>';
										html += '<div class="sidebar-block padding-none req_loc1" id = "req_loc1">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
										html += '<h4 class="category">희망 목적지</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';

										html += '<div class="sidebar-block equal-padding">';
										html += '<ul class="pagination margin-none">';
										html += '<li class="disabled"><a href="#">&laquo;</a></li>';
										html += '<li><a href="#" onclick = "boardList();">이전단계</a></li>';
										html += '<li><a href="#" onclick = "boardList3();">최적의 주거공간 찾기</a></li>';
										html += '<li class="disabled"><a href="#">&raquo;</a></li>';
										html += '</ul></div></div>';

										$("#test123").html(html);
									},
									error : function(e) {
										console.log(e);
									}
								});
					});
}

function boardList3() {
	$(document)
			.ready(
					function() {
						console.log("여기까지333");

						$
								.ajax({
									type : "get",
									success : function(data) {
										console.log(data);
										var html = "";
										html += '<div data-scrollable id="sidebar-map1">';
										html += '<h4 class="category">주거지역 검색 결과</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
										html += '<h4 class="category">아파트 정보</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
										html += '<h4 class="category">소요시간 비교</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400"></div></div>';

										html += '<div class="sidebar-block equal-padding">';
										html += '<ul class="pagination margin-none">';
										html += '<li class="disabled"><a href="#">&laquo;</a></li>';
										html += '<li><a href="#" onclick ="boardList2();">이전단계</a></li>';
										html += '<li><a href="#" onclick ="JSalert()">검색결과저장</a></li>';
										html += '</ul></div></div>';

										$("#test123").html(html);
									},
									error : function(e) {
										console.log(e);
									}
								});
					});
	
}

//이메일 보내기
function JSalert(){
	swal({   title: "Require Email!",   
    text: "Enter your email address:",   
    type: "input",   
    showCancelButton: true,   
    closeOnConfirm: false,   
    animation: "slide-from-top",   
    inputPlaceholder: "Your Email address" }, 
    
    function(inputValue){   
        if (inputValue === false) 
        return false;      
           if (inputValue === "") {     
            swal.showInputError("Please enter email!");     
            return false   
            }      
         swal("Action Saved!", "You entered following email: " + inputValue, "success"); });
>>>>>>> origin/master
}