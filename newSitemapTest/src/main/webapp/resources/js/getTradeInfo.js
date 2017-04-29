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
   var tradeInfo = null;
   $.each(perfect,function(index,item){
      if(item.x==x){
         xloc = item.y;
         yloc = item.x;
         info = item;
      }
   })
   jQuery.ajaxSettings.traditional = true;
    $.ajax({
        type:"post",
        url:"getTradeInfo",
        data : {
           xloc : xloc,
           yloc : yloc
        },
        success : function(data){
           console.log(data),console.log(info),drawAptTradeInfo(data);
        },
        error : function(e){
           console.log(e)
        }
     })
     
    //아파트 세부정보
     var html = "";
      html += '<div class="thum cover hover overlay" style="float:left; width:65px; margin:15px;">';
      html += '<img src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151125_5655088ba5cdf.png" alt="" width="64" height="64">';
      html += '<a href="#" class="overlay overlay-full">';
      html += '<span class="v-center">';
      /*html += '점수래요';*/
      html += '<span class="btn btn-circle btn-white"><i class="fa fa-eye">'+info.changepoint+'</i></span>';
      html += '</span></a>';
      html += '</div>';
      html += '<p class="location" id="list2" style="font-weight: 100;padding: 0;">';
      html += '<h6 class="text-center">'+info.kaptUsedate+'건축</h6>';
      html += '<h3 class="text-center">'+info.kaptName+'</h3>';
      html += '<h6 class="text-center">'+info.kaptAddr+'</h6>';
      html += '</p>';     
    
      /*html += '<ul class = "category" data-width="200" id = "list2">';
      html += '주소:'+info.kaptAddr+"<br>아파트명:"+info.kaptName+"<br>건축년도:"+info.kaptUsedate+'<br>' ;
      html += '</ul>';*/
     
		$('#aptInfo').html(html);
      //////////////////////////////////////////////////////////////////////////////////////////

      
function drawAptTradeInfo(data){   
      var tradeInfo = data;
      var newTradeInfo = new Array();
      tradeInfo.sort(function(a,b){
         if(a.aptsize>b.aptsize){
            return 1;
         }
         if(a.aptsize<b.aptsize){
            return -1;
         }
         return 0;
      })
      
      
      var html1 = "";
      
      if(tradeInfo.length==0){
         html1 += '<ul class = "category" data-width="200" id = "list2">';
               html1 += '<li>부동산거래내역이없습니다</li>' ;
         html1 += '</ul>';
         $('#aptTradeInfo').html(html1);
      }else{
         var size = new Array();
         var type = new Array();
         type.push("매매");type.push("전세");type.push("월세");
         var newsize = new Array();
         console.log(tradeInfo);
         $.each(tradeInfo,function(index,item){
               size.push(parseInt(item.aptsize).toFixed(0));
         })
         console.log(size);
         $.each(size, function(key, value){ 
            if($.inArray(value, newsize) === -1) newsize.push(value); });
         newsize.sort(function(a, b){return a-b});
         console.log(newsize);
         
         html1 += '<ul class = "category" data-width="200" id = "list2">';
         for(var i=0;i<newsize.length;i++){
               html1 += '<div id=call'+i+'><li><a href="#" onclick = "itekute(call2'+i+');">'+parseInt(newsize[i])+'제곱미터('+(parseInt(newsize[i])/3.3).toFixed(0)+'평) 가격 정보 보기</a></li></div>' ;
               $.each(tradeInfo,function(index,item){
                  if(newsize[i]==parseInt(item.aptsize).toFixed(0)){
                     newTradeInfo.push(item);
                  }
               })
               var newTradeInfo1 = null;
               var newTradeInfo2 = null;
               var newTradeInfo3 = null;
               console.log(newTradeInfo);
               $.each(newTradeInfo,function(index,item){
                  if(item.salegubun=='매매'){
                     newTradeInfo1 = item;
                     if(newTradeInfo1.commitdate==''){
                        newTradeInfo1.commitdate='날짜정보없음';
                     }
                  }
                  if(item.salegubun=='전세'){
                     newTradeInfo2 = item;
                     if(newTradeInfo2.commitdate==''){
                        newTradeInfo2.commitdate='날짜정보없음';
                     }
                  }
                  if(item.salegubun=='월세'){
                     newTradeInfo3 = item;
                     if(newTradeInfo3.commitdate==''){
                        newTradeInfo3.commitdate='날짜정보없음';
                     }
                  }
               })
               if(newTradeInfo1!=null&&newTradeInfo2!=null&&newTradeInfo3!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>매매 /'+newTradeInfo1.sale+'만원 / '+newTradeInfo1.commitdate+'<br>전세 /'+newTradeInfo2.sale+'만원/ '+newTradeInfo2.commitdate+'<br>월세 / 보증금('+newTradeInfo3.sale+'만원) 월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo2.commitdate+'</div>' ;
               }else if(newTradeInfo1!=null&&newTradeInfo2!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>매매 /'+newTradeInfo1.sale+'만원 / '+newTradeInfo1.commitdate+'<br>전세 /'+newTradeInfo2.sale+'만원/ '+newTradeInfo2.commitdate+'</div>' ;
               }else if(newTradeInfo2!=null&&newTradeInfo3!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>전세 /'+newTradeInfo2.sale+'만원/ '+newTradeInfo2.commitdate+'<br>월세 / 보증금('+newTradeInfo3.sale+'만원) 월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</div>' ;
               }else if(newTradeInfo1!=null&&newTradeInfo3!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>매매 /'+newTradeInfo1.sale+'만원 / '+newTradeInfo1.commitdate+'<br>월세 / 보증금('+newTradeInfo3.sale+'만원) 월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</div>' ;
               }else if(newTradeInfo1!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>매매 /'+newTradeInfo1.sale+'만원 / '+newTradeInfo1.commitdate+'</div>' ;
               }else if(newTradeInfo2!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>전세 /'+newTradeInfo2.sale+'만원/ '+newTradeInfo2.commitdate+'</div>' ;
               }else if(newTradeInfo3!=null){
                  html1 += '<div style= "display:none" id=call2'+i+'>월세 / 보증금('+newTradeInfo3.sale+'만원) 월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</div>' ;
               }
               
            }
         
         
//         $.each(tradeInfo,function(index,item){
//               
//            if(parseInt(item.aptsize).toFixed(0)==newsize[0]&&item.salegubun==type[0]){
//               html1 += '<li>'+(parseInt(item.aptsize)/3.3).toFixed(0)+'평형 매매가 : '+item.sale+'000원</li>' ;
//            }
////               html1 += '<li>'+(parseInt(tradeInfo[0].aptsize)/3.3).toFixed(1)+'평형</li>' ;
//         })
         html1 += '</ul>';
         $('#aptTradeInfo').html(html1);
      }
   }
}
function itekute(id){
   $('#call20').hide();
   $('#call21').hide();
   $('#call22').hide();
   $('#call23').hide();
   $('#call24').hide();
   $('#call25').hide();
   $('#call26').hide();
   $('#call27').hide();
   $('#call28').hide();
   $('#call29').hide();
   $('#call210').hide();
   $('#call211').hide();
   $('#call212').hide();
   $('#call213').hide();
   $('#call214').hide();
   $('#call215').hide();
   $('#call216').hide();
   $('#call217').hide();
   $('#call218').hide();
   $('#call219').hide();
   $(id).show();
}