/**
 * 
 */
function saveKeyCount(tmapCarKeyCount,tmapWalkKeyCount,googleKeyCount){
	jQuery.ajaxSettings.traditional = true;
	$.ajax({
		type : "POST",
		url : "saveKeyCount",
		contentType : "application/json;charset=utf-8",
		data : JSON.stringify({
			tmapCarKeyCount:tmapCarKeyCount,
			tmapWalkKeyCount:tmapWalkKeyCount,
			googleKeyCount:googleKeyCount
		})
		
	})
}
function loadKeyCount(){
	$.ajax({
		url:"loadKeyCount",
		type:"post",
		//dataType: "JSON",
		success:function(data){
			console.log(data)
			$.each(data,function(index,item){
				tmapCarKeyCount += parseInt(item.tmapCarKeyCount),
				tmapWalkKeyCount += parseInt(item.tmapWalkKeyCount),
				googleKeyCount += parseInt(item.googleKeyCount)
			})
			
		},
		error:function(e){
			console.log(e)
		}
		})
}