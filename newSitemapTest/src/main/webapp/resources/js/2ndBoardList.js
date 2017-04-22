/**
 * 다음단계 이후!
 */


function boardList2() {
   //emdName = "삼성동,역삼동";
   var result = sendData1();
   
   call(result[0], result[1]);
   $(document).ready(function() {
      $.ajax({
         type : "get",
         success : function(data) {
            var html = "";
            html += '<div data-scrollable id="sidebar-map1">';
            html += '<h4 class="ribbon-heading text-h5 ribbon-primary">희망위치추가</h4>';
            html += '<div class="sidebar-block padding-none" id = "req_loc1">';
            html += '<div data-toggle="gridalicious" data-width="400">';
            
            /////// 희망목적지 검색 및 검색결과 리스트 출력부분
            html += '<div class="map_wrap padding-none" style="color:black">';
             html += '<div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>';
             html += '<div id="menu_wrap" class="bg_white">';
             html += '<div class="option">';
             html += '<div>';
             html += '<form onsubmit="searchPlaces(); return false;">';
             html += '키워드 : <input type="text" value="" id="keyword" size="25" placeholder="희망목적지를 입력해주세요.">'; 
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
            html += '<div data-toggle="gridalicious" data-width="400">';
            
            ///////////// 등록된 희망목적지가 추가될 부분
            html += '<div class="map_wrap padding-none" style="color:black">';
            html += '<ul id="getItem"></ul>';
            html += '</div>';
            /////////////
            
            html += '</div></div>';
            html += '<div class="sidebar-block equal-padding">';
            html += '<ul class="pagination margin-none">';
            html += '<li class="disabled"><a href="#">&laquo;</a></li>';
            html += '<li><a href="#" onclick = "boardList();">이전단계</a></li>';
            html += '<li><a href="#" onclick = "boardList3(); searchBestLoc(); ">최적의 주거공간 찾기</a></li>';
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

	$(document).ready(function() {
		console.log("여기까지333");
		$.ajax({
			type : "get",
			success : function(data) {
				var html = "";
				html += '<div data-scrollable id="sidebar-map1">';
				
				
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">주거지역 검색 결과</h4>';
				html += '<div style="overflow:auto;height:200px;" id = "lll"></div>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
			
				
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">아파트 정보</h4>';
				html += '<div style="overflow:auto;height:100px;" id = "aptInfo"></div>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
				
				
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">부동산 거래정보</h4>';
				html += '<div style="overflow:auto;height:150px;" id = "aptTradeInfo"></div>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
			
				
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">소요시간 비교</h4>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div>';
				html += '<canvas id = "myChart2" width = "300px" height = "300px" style="z-index:15;"></canvas></div>';

				html += '<div class="sidebar-block equal-padding">';
				html += '<ul class="pagination margin-none">';
				html += '<li class="disabled"><a href="#">&laquo;</a></li>';
				html += '<li><a href="#" onclick ="boardList2();">이전단계</a></li>';
				html += '<li><a href="#" onclick ="JSalert();">검색결과저장</a></li>';
				html += '</ul></div></div>';

            $("#test123").html(html);
            if (html != "") {
            //   dfa();
            }
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
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	    if (inputValue === false){
	    	return false; 
	    }       	
	         
	    if (inputValue === "") {     
	    	swal.showInputError("Please enter email!");     
	        return false   
	    }   
	    else if(regex.test(inputValue) == false){
	    	swal.showInputError("Please input correct format email..");
	  		return false;
	  	}
	    
	    $.ajax
		({
			type : "post",
			url : "emailcheck",		
			data : 
			{
				user : inputValue
			},				
			success : function(data)
			{
				//alert("입력하신 메일로 인증번호가 전송되었습니다.");
				console.log("메일로 인증번호가 전송되었습니다.");				
			},				
			error : function(e)
			{
				console.log(e);
			}
		})
		swal("Action Saved!", "You entered following email: " + inputValue, "success"); });
}