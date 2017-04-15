/**
 * 
 */
function getTradeInfo(x){
	//kaptAddr으로 받아서
	//var kaptAddr = '서울특별시 강남구  역삼동 716 역삼동부센트레빌';
	console.log(123);
	var xloc = null;
	var yloc = null;
	var info = null;
	$.each(perfect,function(index,item){
		if(item.x==x){
			xloc = item.y;
			yloc = item.x;
			info = item;
		}
	})
	alert(xloc+","+yloc);
	jQuery.ajaxSettings.traditional = true;
	 $.ajax({
  	   type:"post",
  	   url:"getTradeInfo",
  	   data : {
  		   xloc : xloc,
  		   yloc : yloc
  	   },
  	   success : function(data){
  		   console.log(data),console.log(info)
  	   },
  	   error : function(e){
  		   console.log(e)
  	   }
     })
	
	
	
	
	
}