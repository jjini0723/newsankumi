/**
 * 추가하고 싶은 지역 선택 셀렉트 박스 - DB연결
 */

//기준지역 선택
function addAddress(obj){
	var sido = $(obj).find('option:selected').text();
	console.log(sido);
	document.getElementById('selectThis3').value = $("#selectThis3").val();
	
	$.ajax({
		url : "selectGungu",
		type : "post",
		data : {
			sido:sido
		},
		success : function(data){
			console.log(data);
			$("#selectThis4").children().remove(); 
			$("#selectThis5").children().remove(); 
			if(sido=='서울특별시'){
				$("#selectThis4").append("<option value = ''>구</option>");
				$("#selectThis5").append("<option value = ''>동</option>");
			}else if(sido=='인천광역시'){
				$("#selectThis4").append("<option value = ''>군/구</option>");
				$("#selectThis5").append("<option value = ''>동</option>");
			}else {
				$("#selectThis4").append("<option value = ''>시/군/구</option>");
				$("#selectThis5").append("<option value = ''>동</option>");
			}
			for(var gu in data){
				$("#selectThis4").append("<option value="+data[gu]+">"+data[gu]+"</option>");
			}
		},
		error : function(err){
			alert(err);
			alert("처리 중 오류가 발생했습니다. 관리자에게 문의하세요.");
			
		}
	});
}

//지역추가
	function addAddress2(obj){
		var gungu = $(obj).find('option:selected').text();
		console.log(gungu);
		document.getElementById('selectThis4').value = $("#selectThis4").val();
		
		$.ajax({
			url : "selectDong",
			type : "post",
			data : {
				gungu : gungu
			},
			success : function(data){
				console.log(data);
				$("#selectThis5").children().remove(); 
				for(var dong in data){
					$("#selectThis5").append("<option value="+data[dong]+">"+data[dong]+"</option>");
				}
				
			},
			error : function(err){
				alert(err);
				alert("처리 중 오류가 발생했습니다. 관리자에게 문의하세요.");
			}
			
		});
		
}
	
	
	
