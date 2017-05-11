/**
 * 다음단계 이후!
 */


function boardList2(result) {
	call(result[0], result[1], result[2]);
    $(document).ready(function() {
    	$.ajax({
            type : "get",
            success : function(data) {
                var html = "";
            
                //희망위치추가
                html += '<div data-scrollable id="sidebar-map1">';
                html += '<h4 class="ribbon-heading ribbon-primary">생활권역구성</h4>';
                html += '<div class="panel-body text-center" id = "req_loc1">';
                html += '<div data-toggle="gridalicious" data-width="400">';
            
                /////// 희망목적지 검색 및 검색결과 리스트 출력부분
                html += '<div class="map_wrap panel-body text-center" style="color:black">';
                html += '<div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>';
                html += '<div id="menu_wrap" class="bg_white">';
                html += '<div class="option">';
             
                //검색부분
                html += '<form class="text-center panel-boby" onsubmit="searchPlaces(); return false;">';
                html += '<div class="input-group">';
                html += '<input type="text" class="form-control" placeholder="희망목적지를 입력해주세요." id="keyword">'; 
                html += '<div class="input-group-btn">';
                html += '<button class="btn btn-default" type="submit">검색</button>';
                html += '</div>';
                html += '</div>';
                html += '</form>';

                html += '</div>';
                html += '<ul id="placesList"></ul>';
                html += '<ul class="pagination margin-none" id="pagination"></ul>';
                html += '</div>';
                html += '</div>';
            
                /////////
             
                //희망목적지      
                html += '</div></div>';
                html += '<h4 class="category">생활권역</h4>';
                html += '<div class="text-center">';
                html += '<div data-toggle="gridalicious" data-width="400">';
             
                ///////////// 등록된 희망목적지가 추가될 부분
                html += '<div class="map_wrap text-center panel-boby" style="display: inline-flex;color:black;">';
                html += '<ul id="getItem"></ul>';
                html += '</div>';
                /////////////
            
                html += '</div></div>';

                //다음단계
			    html += '<div class="sidebar-block text-center filter_commit">';
			    html += '<a class="btn btn-primary btn-block" onclick = "hopeListSizeChk();"><strong style="color:white;">최적의 주거공간 찾기</strong></a>';
			    html += '</div></div>';
                $("#test123").html(html);
            },
            error : function(e) {
            	console.log(e);
            }
		});
	});
}

function boardList3() {
	var semo = null;
	$(document).ready(function() {
		$.ajax({
			type : "get",
			success : function(data) {
				var html = "";
				html += '<div data-scrollable id="sidebar-map1">';
				
				//주거지역검색결과
				html += '<h4 class="ribbon-heading ribbon-primary">추천 아파트 리스트</h4>';
				html += '<div style="overflow:auto;height:200px;" id = "lll"></div>';
				html += '<div class="panel-body text-center">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
				
				//아파트정보
				html += '<h4 class="ribbon-heading ribbon-primary" id="info">아파트 세부정보</h4>';

				html += '<div style="border:1px solid #dedede; margin:10px;" id = "aptInfo"></div>';
				
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
				
				//부동산거래정보
				html += '<h4 class="ribbon-heading ribbon-primary" id="tradeInfo">아파트 거래정보</h4>';
				html += '<div style="overflow:auto;height:70px;display:none;" id = "aptTradeInfo" ></div>';
				html += '<div style="overflow:hidden;height:70px;display:none;" id = "aptTradeInfo2" ></div>';
				html += '<div class="sidebar-block padding-none">';
				html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
			
				//소요시간비교
				html += '<h4 class="ribbon-heading ribbon-primary" id="timegraph">소요시간 비교</h4>';
				html += '<div class="sidebar-block padding-none"></div>';
				html += '<div data-toggle="gridalicious" data-width="400" style="display:block; text-align:center;">';
				html += '<canvas id = "myChart2" width = "300px" height = "300px" style="z-index:15; left:50%; display:inline-block;"></canvas></div>';
				
				//저장하기
				html += '<div class="sidebar-block text-center filter_commit">';
				html += '<a class="btn btn-primary btn-block" onclick = "JSalert();"><strong style="color:white;">검색결과저장</strong></a>';
				html += '</div></div>';

	            $("#test123").html(html);
	            
	        	var height = document.getElementById("aptInfo");
	        	var tradewindow = document.getElementById("aptTradeInfo");
	        	var tradewindow2 = document.getElementById("aptTradeInfo2");
	//        	height.style.display="block";
	        	$("#info").mouseenter(function(){
	        		height.style.display="block";
	        	});
	        	$("#lll").mouseenter(function(){
	        		height.style.display="none";
	        	});
	        	$("#aptInfo").mouseleave(function(){
	        		height.style.display="none";
	        	})
	        	$("#tradeInfo").mouseenter(function(){
	        		tradewindow.style.display="block";
	        	//	tradewindow2.style.display="block";
	        	});
	        	$("#aptTradeInfo2").mouseenter(function(){
	        		tradewindow.style.display="block";
	        		tradewindow2.style.display="block";
	        	});
	        	$("#info").mouseenter(function(){
	        		tradewindow.style.display="none";
	        		tradewindow2.style.display="none";
	        	});
	        	$("#aptTradeInfo").mouseleave(function(){
	        		tradewindow.style.display="none";
	        		tradewindow2.style.display="none";
	        	})
	        	$("#timegraph").mouseenter(function(){
	        		tradewindow.style.display="none";
	        		tradewindow2.style.display="none";
	        	})
	        	
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
function showFilter(){
	$("#filter").show();
}
//이메일 보내기
function JSalert(){
	var checknumber = null;
	var checkemail = null;
    swal({   title: "저장하기",   
    text: "이메일 주소를 입력하세요:",   
    type: "input",   
    showCancelButton: true,   
    closeOnConfirm: false,   
    animation: "slide-from-top",   
    inputPlaceholder: "이메일 주소" }, 

    function(inputValue){
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	    if (inputValue === false){
	    	return false; 
	    }       	
	    if (inputValue === "") {     
	    	swal.showInputError("이메일 주소를 입력해주세요");     
	        return false   
	    }   
	    else if(regex.test(inputValue) == false){
	    	swal.showInputError("올바른 이메일 주소를 입력해주세요");
	  		return false;
	  	}checkemail=inputValue;
    
	    $.ajax ({
			type : "post",
			url : "emailcheck",		
			data : 
			{
				user : inputValue
			},				
			success : function(data)
			{
				console.log("메일로 인증번호가 전송되었습니다.");	
				checknumber=data;
				save(checknumber,checkemail);
			},				
			error : function(e)
			{
				console.log(e);
			}
		})
    swal("저장이 완료되었습니다.", "다음 주소로 코드가 전송되었습니다 : " + inputValue, "success"); });
}