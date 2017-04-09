/**
 * 기준 지역 선택 셀렉트박스 db 로딩
 */

function searchThis(obj){
	var sido = $(obj).find('option:selected').text();
	console.log(sido);
	document.getElementById('mp_addcd_sido').value = $("#mp_addcd_sido").val();
	$.ajax({
		url : "selectGungu",
		type : "post",
		data : {
			sido:sido
		},
		success : function(data){
			console.log(data);
			$("#mp_addcd_gg").children().remove(); 
			if(sido=='서울특별시'){
				$("#mp_addcd_gg").append("<option value = ''>구</option>");
			}else if(sido=='인천광역시'){
				$("#mp_addcd_gg").append("<option value = ''>군/구</option>");
			}else {
				$("#mp_addcd_gg").append("<option value = ''>시/군/구</option>");
			}
			//var result = data['sigunList'];
			for(var mp_addcd_gg in data){
				//mc = data['mp_addcd_gg'+i+''];
				$("#mp_addcd_gg").append("<option value="+data[mp_addcd_gg]+">"+data[mp_addcd_gg]+"</option>");
			}
			
		},
		error : function(err){
			alert(err);
			alert("처리 중 오류가 발생했습니다. 관리자에게 문의하세요.");
			
		}
		
		
	});
	
	
}