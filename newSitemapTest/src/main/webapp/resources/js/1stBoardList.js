function boardList() {
	//window.scroll(0,0);
	$(document).ready(function() {
		console.log("boardlist1");
		$.ajax({
			type : "get",
			success : function(data) {
				var html = "";
				/*html += '<div data-scrollable id="sidebar-map1">';*/
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">검색결과</h4>';
				html += '<div data-toggle="gridalicious" data-width="400" class="req_loc1" id="req_loc1" style = "height:100px; overflow-y: scroll;"></div>';
				html += '<div class="sidebar-block padding-none" style="color:black;" data-height="400"></div>';
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">지역추가</h4>';
				html += '<div class="sidebar-block padding-none cd-filter-content cd-select cd-filters">';
				html += '<select class="filter3" name="selectThis3" id="selectThis3" style = "margin-left:30px;" onchange="addAddress(this)">';
				html += '<option value="">시/도</option>';
				html += '<option value="서울특별시">서울특별시</option>';
				html += '<option value="인천광역시">인천광역시</option>';
				html += '<option value="경기도">경기도</option>';
				html += '</select>';
				html += '<select class="filter4" name="selectThis4" id="selectThis4" onchange="addAddress2(this)">';
				html += '<option value="">읍/군/구</option>';
				html += '</select>';
				html += '<select class="filter5" name="selectThis5" id="selectThis5" >';
				html += '<option value="">동</option>';
				html += '</select>';
				html += '<a href = "#" onclick = "addItem();"id = "addAddress">추가</a><br>';
				html += '<div class="cd-filter-right-confirm">';
				html += '</div>';
				html += '</div>';
				html += '<div data-toggle="gridalicious" data-width="300"></div>';
				html += '<h4 class="ribbon-heading text-h5 ribbon-primary">지역종합현황</h4>';
				html += '<div class="sidebar-block padding-none" >';
				html += '<div data-toggle="gridalicious" data-height="200px height = "100px">';
				html += '<canvas id = "myChart" width = "100px" height = "100px" style="z-index:15;"></canvas></div>';
				html += '</div>';
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




