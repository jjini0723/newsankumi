/**
 * 추천 지역 리스트 가져오기
 */

var items = [ "test1", "test2", "test3", "test4", "test5","test3","test3","test3","test3"];

$(document).ready(function() {
    function deleteItem(){
    $('#btn-remove').click(function(){
        $('#select-to option:selected').each( function() {
            $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
        });
    });
    }
 
$("#filter_commit").click(function() {
	
	buildList(items);
	/*
	var values = $('items').map(function() {
		return $(this).val();
	});
	
	 .get().join(); 

	$.each(items, function(index, items) {
		var values = $("items").val("");
		addItem(values);

	});*/
});
});

//리스트 뿌리기
function buildList(items) {
	var html = "";
	html += '<ol class = "decimal">';
	/*$.each(items, function(index, item){
		html += '<li> ' + item + '<a href="#" onclick="removeItem(' + item + ');">   x   </a> '+ '</li>' ;
		
		
	});*/
		for (var i = 0; i < items.length; i++) {
			html += '<li> ' + items[i] + '<a href="#" onclick="removeItem(' + i + ');">   x   </a> '+ '</li>' ;
		};
	
	html += '</ol>';
	$('#req_loc1').html(html);
}


function addItem() {
	
	 var obj1 = document.getElementById("selectThis3"); // 시
	 var obj2 = document.getElementById("selectThis4"); // 구군
	 var obj3 = document.getElementById("selectThis5"); // 읍면동
	 var idx1 = obj1.options.selectedIndex; // obj1의 선택값인덱스 구하기
	 var idx2 = obj2.options.selectedIndex;
	 var idx3 = obj3.options.selectedIndex;
	 
	 var si = obj1.options[idx1].text;
	 var gu = obj2.options[idx2].text;
	 var dong = obj3.options[idx3].text;
	 
	 var addString = si + " " + gu + " " + dong;

	items.push(addString);
	buildList(items);
}

function removeItem(index) {
 
	items.splice(index, 1);
	buildList(items);
	
}
