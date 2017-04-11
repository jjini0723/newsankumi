
function boardList() {
	$(document)
			.ready(
					function() {
						console.log("여기까지1");
						$.ajax({
									type : "get",
									success : function(data) {
										console.log(data);
										var html = "";

										html += '<h4 class="category">검색결과</h4>';
										html += '<div data-toggle="gridalicious" data-width="400" class="req_loc1" id="req_loc1"></div>';
										html += '<div class="sidebar-block padding-none style="color:black" data-height="400">';
										html += '</div>';
										html += '<h4 class="category cd-filter-block">지역추가</h4>';
										html += '<div class="sidebar-block padding-none cd-filter-content cd-select cd-filters">';
										html += '<select class="filter3" name="selectThis3" id="selectThis3" onchange="addAddress(this)">';
										html += '<option value="">시/도</option>';
										html += '<option value="서울특별시">서울특별시</option>';
										html += '<option value="인천광역시">인천광역시</option>';
										html += '<option value="경기도">경기도</option>';
										html += '</select>';
										html += '<select class="filter4" name="selectThis4" id="selectThis4" onchange="addAddress2(this)">';
										html += '<option value="">읍/군/구</option>';
										html += '</select>';
										html += '<select class="filter5" name="selectThis5" id="selectThis5">';
										html += '<option value="">동</option>';
										html += '</select>';
										html += '<a href = "#" onclick = "addItem();"id = "addAddress">추가</a>';
										html += '<div class="cd-filter-right-confirm">';
										html += '</div>';
										html += '</div>';
										html += '<div data-toggle="gridalicious" data-width="400"></div>';
										html += '<h4 class="category">지역종합현황</h4>';
										html += '<div class="sidebar-block padding-none">';
										html += '<div data-toggle="gridalicious" data-width="400">';
										html += '<canvas id = "myChart" width = "200px" height = "200px" style="z-index:50;"></canvas>';
										html += '</div>';
										html += '<div class="sidebar-block equal-padding">';
										html += '<ul class="pagination margin-none">';
										html += '<li><a href="#" onclick = "boardList2();">다음단계</a></li>';
										html += '<li class="disabled"><a href="#">&raquo;</a></li>';
										html += '</ul></div></div>';

										/*
										 * html += '<div data-scrollable
										 * id="sidebar-map1">'; html += '<h4 class="category">검색결과</h4>';
										 * html += '<div class="sidebar-block
										 * padding-none req_loc1" id =
										 * "req_loc1">'; html += '<div
										 * data-toggle="gridalicious"
										 * data-width="400"></div></div>';
										 * html += '<h4 class="category">지역추가</h4>';
										 * html += '<div class="sidebar-block
										 * padding-none">'; html += '<div
										 * data-toggle="gridalicious"
										 * data-width="400"></div></div>';
										 * html += '<h4 class="category">지역종합현황</h4>';
										 * html += '<div class="sidebar-block
										 * padding-none">'; html += '<div
										 * data-toggle="gridalicious"
										 * data-width="400">'; html += '<canvas
										 * id = "myChart" width = "300px" height =
										 * "300px" style="z-index: 4;"></canvas>';
										 * html += '</div>;' html += '<div
										 * class="sidebar-block
										 * equal-padding">'; html += '<ul class="pagination margin-none">';
										 * html += '<li><a href="#" onclick =
										 * "boardList2();">다음단계</a></li>';
										 * html += '<li class="disabled"><a
										 * href="#">&raquo;</a></li>'; html += '</ul></div></div>';
										 */

										$("#test123").html(html);
										createChart();
										buildList(['1','2']);
									},
									error : function(e) {
										console.log(e);
									}
								});
					});
}

