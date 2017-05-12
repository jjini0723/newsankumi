/**
 * 
 */
function getTradeInfo(x){
    //kaptAddr으로 받아서
    //var kaptAddr = '서울특별시 강남구  역삼동 716 역삼동부센트레빌';
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
    });
    jQuery.ajaxSettings.traditional = true;
    $.ajax({
        type:"post",
        url:"getTradeInfo",
        data : {
           xloc : xloc,
           yloc : yloc
        },
        success : function(data){
        	drawAptTradeInfo(data)
        },
        error : function(e){
           console.log(e)
        }
     });
     //아파트 세부정보
     var html = "";
     html += '<div class="thum cover hover overlay" style="float:left; width:65px; margin:15px;">';
     html += '<img src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151125_5655088ba5cdf.png" alt="" width="64" height="64">';
     html += '<a class="overlay overlay-full" style="top: 25px;left: 4px;">';
     html += '<span class="v-bottom" style="color:white; font-weight:bold; font-size:20px; text-shadow: -1px 0 #4374D9, 0 1px #4374D9, 1px 0 #4374D9, 0 -1px #4374D9;">';
     html += info.changepoint;
     html += '</span></a>';
     html += '</div>';
     html += '<p class="location" id="list2" style="font-weight: 100;padding: 0;">';
     html += '<sapn class="text-center" style="font-size: 16px; font-weight: 400;">'+info.kaptUsedate+'건축</sapn><br>';
     html += '<sapn class="text-center" style="font-size: 20px; font-weight: 600;">'+info.kaptName+'</sapn><br>';
     html += '<sapn class="text-center" style="font-size: 16px; font-weight: 400;">'+info.kaptAddr+'</sapn>';
     html += '</p>';     
	 $('#aptInfo').html(html);
     //////////////////////////////////////////////////////////////////////////////////////////

      
function drawAptTradeInfo(data){   
    var tradeInfo = data;
    var newTradeInfo = new Array();
    tradeInfo.sort(function(a,b) {
        if(a.aptsize>b.aptsize) {
            return 1;
        }
        if(a.aptsize<b.aptsize) {
            return -1;
        }
        return 0;
    });
    var html1 = "";
    var html2 = "";
    if(tradeInfo.length==0) {
        html1 += '<ul class = "category" data-width="200" id = "list2">';
        html1 += '<li style="color:#333;">부동산거래내역이없습니다</li>' ;
        html1 += '</ul>';
        html2 += '';
        $('#aptTradeInfo').html(html1);
        $('#aptTradeInfo2').html(html2);
    } else {
    	var size = new Array();
        var type = new Array();
        type.push("매매");type.push("전세");type.push("월세");
        var newsize = new Array();
        $.each(tradeInfo,function(index,item){
            size.push(parseInt(item.aptsize).toFixed(0));
        });
        $.each(size, function(key, value) { 
            if($.inArray(value, newsize) === -1) newsize.push(value); });
     		newsize.sort(function(a, b){return a-b});
     		html1 += '<ul class = "nav nav-tabs" data-width="200" id = "list2">';
     		for(var i=0;i<newsize.length;i++) {
                html1 += '<li class="active">';
                html1 += '<a data-toggle="tab" href="#call2'+i+'" onclick = "itekute(call2'+i+');">';
                html1 += parseInt(newsize[i])+'m<sup>2</sup><br>';
                html1 += '('+(parseInt(newsize[i])/3.3).toFixed(0)+'평)';
                html1 += '</a>';
                html1 += '</li>';
                html1 += '';
                $.each(tradeInfo,function(index,item) {
                    if(newsize[i]==parseInt(item.aptsize).toFixed(0)) {
                        newTradeInfo.push(item);
                    }
                });
                var newTradeInfo1 = null;
                var newTradeInfo2 = null;
                var newTradeInfo3 = null;
                $.each(newTradeInfo,function(index,item) {
                    if(item.salegubun=='매매'){
	                    newTradeInfo1 = item;
	                    if(newTradeInfo1.commitdate=='') {
	                        newTradeInfo1.commitdate='날짜정보없음';
	                    }
                    }
                    if(item.salegubun=='전세') {
                    	newTradeInfo2 = item;
                    	if(newTradeInfo2.commitdate==''){
                    		newTradeInfo2.commitdate='날짜정보없음';
                    	}
                    }
	                if(item.salegubun=='월세'){
	                    newTradeInfo3 = item;
	                    if(newTradeInfo3.commitdate=='') {
	                        newTradeInfo3.commitdate='날짜정보없음';
	                    }
	                }
	            });
	            html2 += '<div class="tab-content" style="text-align:center">';
	            html2 += '<div class="tab-pane fade in active" style= "display:none" id=call2'+i+'>';
	            if(newTradeInfo1!=null&&newTradeInfo2!=null&&newTradeInfo3!=null) {
	                html2 += '<p id=call2'+i+'>';
	            	html2 += '매매 /'+newTradeInfo1.sale+'만원 / '+ newTradeInfo1.commitdate+'<br>';
	            	html2 += '전세 /'+newTradeInfo2.sale+'만원/ '+ newTradeInfo2.commitdate+'<br>';
	            	html2 += '월세 / 보증금('+newTradeInfo3.sale+'만원)'; 
	            	html2 += '월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</p>' ;
	            } else if(newTradeInfo1!=null&&newTradeInfo2!=null) {
	            	html2 += '<p id=call2'+i+'>';
	            	html2 += '매매 /'+newTradeInfo1.sale+'만원 / '+ newTradeInfo1.commitdate+'<br>';
	            	html2 += '전세 /'+newTradeInfo2.sale+'만원/ '+ newTradeInfo2.commitdate+'</p>' ;
	            } else if(newTradeInfo2!=null&&newTradeInfo3!=null) {
	                html2 += '<p id=call2'+i+'>';
	                html2 += '전세 /'+newTradeInfo2.sale+'만원/ '+ newTradeInfo2.commitdate+'<br>';
	                html2 += '월세 / 보증금('+newTradeInfo3.sale+'만원)'; 
	                html2 += '월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</p>' ;
	            } else if(newTradeInfo1!=null&&newTradeInfo3!=null) {
	                html2 += '<p id=call2'+i+'>';	
	                html2 += '매매 /'+newTradeInfo1.sale+'만원 / '+ newTradeInfo1.commitdate+'<br>';
	                html2 += '월세 / 보증금('+newTradeInfo3.sale+'만원)'; 
	                html2 += '월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</p>' ;
	            } else if(newTradeInfo1!=null) {
	                html2 += '<p id=call2'+i+'>';
	                html2 += '매매 /'+newTradeInfo1.sale+'만원 / '+newTradeInfo1.commitdate+'</p>' ;
	            } else if(newTradeInfo2!=null) {
	                html2 += '<p id=call2'+i+'>';
	                html2 += '전세 /'+newTradeInfo2.sale+'만원/ '+ newTradeInfo2.commitdate+'</p>' ;
	            } else if(newTradeInfo3!=null) {
	                html2 += '<p id=call2'+i+'>';
	                html2 += '월세 / 보증금('+newTradeInfo3.sale+'만원)'; 
	                html2 += '월세('+newTradeInfo3.wolse+'만원) / '+newTradeInfo3.commitdate+'</p>' ;
	            }
	            html2 += '</div>';
	            html2 += '</div>';
	               
	        }
	        html2 += '</ul>';
	        $('#aptTradeInfo').html(html1);
	        $('#aptTradeInfo2').html(html2);
	    }
	}
}
function itekute(id){
    $('#aptTradeInfo2').show();
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