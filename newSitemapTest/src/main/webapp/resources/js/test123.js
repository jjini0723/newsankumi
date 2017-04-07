

function boardList() {
	$(document).ready(function(){ 
   console.log("여기까지");
   
   $.ajax({
      type : "get",
      success : function(data) {
    	  console.log(data);
         var html ="";
         html += "<h1>ㅇㅇㅇㅇㅇㅇㅇ</h1>";
     
         $("#test123").html(html);
      },
      error : function(e) {
         console.log(e);
      }
   });
});
}
