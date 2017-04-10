

function boardList() {
	$(document).ready(function(){ 
   console.log("여기까지1");
   
   $.ajax({
      type : "get",
      success : function(data) {
    	  console.log(data);
         var html ="";
         html += '<div data-scrollable id="sidebar-map1">';
         html += '<h4 class="category">검색결과</h4>';
         html += '<div class="sidebar-block padding-none">';
         html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
         html += '<h4 class="category">지역추가</h4>';
         html += '<div class="sidebar-block padding-none">';
         html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
         html += '<h4 class="category">지역종합현황</h4>';
         html += '<div class="sidebar-block padding-none">';
         html += '<div data-toggle="gridalicious" data-width="400"></div></div>';
        	 
         html += '<div class="sidebar-block equal-padding">';
         html += '<ul class="pagination margin-none">';
         html += '<li><a href="#" onclick = "boardList2();">다음단계</a></li>';
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



function boardList2() {
	$(document).ready(function(){ 
   console.log("여기까지22");
   
   $.ajax({
      type : "get",
      success : function(data) {
    	  console.log(data);
         var html ="";
         html += '<div data-scrollable id="sidebar-map1">';
         html += '<h4 class="category">희망위치추가</h4>';
         html += '<div class="sidebar-block padding-none">';
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
	$(document).ready(function(){ 
   console.log("여기까지333");
   
   $.ajax({
      type : "get",
      success : function(data) {
    	  console.log(data);
         var html ="";
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
}