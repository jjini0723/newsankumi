function boardList() {
	//window.scroll(0,0);
	$(document).ready(function() {
		console.log("boardlist1");
		$.ajax({
			type : "get",
			success : function(data) {
				var html = "";
				
				//검색결과
				html += '<div data-scrollable id="sidebar-map1">';
				html += '<h4 class="ribbon-heading ribbon-primary">추천지역리스트</h4>';
				html += '<div data-toggle="gridalicious" data-width="400" class="req_loc1" id="req_loc1" style = "height:150px; overflow-y: scroll;"></div>';
				
				//지역추가
				html += '<h4 class="ribbon-heading ribbon-primary">지역추가</h4>';
				html += '<div class="panel-body text-center">';
				
				html += '<select class="filter3" name="selectThis3" id="selectThis3" style = "margin-left:30px;" onchange="addAddress(this)">';
				html += '<option value="">시/도</option>';
				html += '<option value="서울특별시">서울특별시</option>';
				html += '<option value="인천광역시">인천광역시</option>';
				html += '<option value="경기도">경기도</option>';
				html += '</select>';
				html += '<select class="filter4" name="selectThis4" id="selectThis4" onchange="addAddress2(this)">';
				html += '<option value="">군/구</option>';
				html += '</select>';
				html += '<select class="filter5" name="selectThis5" id="selectThis5" >';
				html += '<option value="">읍/면/동</option>';
				html += '</select>';
				html += '<br>';
				html += '&nbsp &nbsp<a href = "#" onclick = "addItem();"id = "addAddress">추가</a><br>';
				html += '<div class="cd-filter-right-confirm">';
				html += '</div>';
				html += '</div>';
				html += '<div data-toggle="gridalicious" data-width="300"></div>';
				
				//지역종합현황
				html += '<h4 class="ribbon-heading ribbon-primary">지역현황비교</h4>';
				html += '<div class="sidebar-block padding-none" >';
				html += '<div data-toggle="gridalicious" data-height="300px height = "300px" style="display:block; text-align:center;">';
				html += '<canvas id = "myChart" width = "300px" height = "300px" style="z-index:15; left:50%; display:inline-block;" ></canvas></div>';
				html += '</div>';
				
				//다음단계
				html += '<div class="panel-body text-center">';
				html += '<ul class="pagination margin-none">';
				html += '<li><a href="#" onclick = "boardList2(); hoit();">생활권역 추가</a></li>';
				html += '</ul></div></div>';

				$("#test123").html(html);
			},
			error : function(e) {
				console.log(e);
			}
		});
	});
}




