/**
 * 
 */
function getTradeInfo(){
	//kaptAddr으로 받아서
	var kaptAddr = '서울특별시 강남구  역삼동 716 역삼동부센트레빌';
	$.each(perfect,function(index,item){
		if(item.kaptAddr==kaptAddr){
			var xloc = item.x;
			var yloc = item.y;
		}
	})
	
	jQuery.ajaxSettings.traditional = true;
	 $.ajax({
  	   type:"post",
  	   async : false,
  	   contentType : "application/json; charset=utf-8",
  	   url:"getTradeInfo",
  	   data : {
  		   xloc : xloc,
  		   yloc : yloc
  	   },
  	   success : function(data){
  		   console.log(data)
  	   },
  	   error : function(e){
  		   console.log(e)
  	   }
     })
	
	
	
	
	
}