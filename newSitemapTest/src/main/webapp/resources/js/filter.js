
function filter(){
   console.log(perfect);
   alert('필터안녕');
   var price = document.getElementById("price").value;
   var startkaptUsedate = price.substring(0,4);
   var endkaptUsedate = price.substring(7,11);
   var kaptMparea_60 = $("#kaptMparea60").is(":checked");
   var kaptMparea_85 = $("#kaptMparea85").is(":checked");
   var kaptMparea_135 = $("#kaptMparea135").is(":checked");
   if(kaptMparea_60==false){
      kaptMparea_60=null;
   };
   if(kaptMparea_85==false){
      kaptMparea_85=null;
   };
   if(kaptMparea_135==false){
      kaptMparea_135=null;
   };
//   var kaptMparea60 = document.getElementById("kaptMparea60").value;
//   var kaptMparea85 = document.getElementById("kaptMparea85").value;
//   var kaptMparea135 = document.getElementById("kaptMparea135").value; 
   console.log(startkaptUsedate+","+endkaptUsedate+","+kaptMparea_60+","+kaptMparea_85+","+kaptMparea_135);
//   var startkaptUsedate =null ; // 연도 4자리만 미사용시 null
//   var endkaptUsedate  =1995 ;// ""
//   var kaptMparea_60 = null; // 24평이하 -null, used
//   var kaptMparea_85 = null; // 25평~42평이하-null, used
//   var kaptMparea_135 = 'used'; //42이상-null, used

   var result = new Array(); // 결과 리턴 어레이
   var save = new Array(); // 임시 저장 어레이

   if(startkaptUsedate!=null){ //건축년도 필터를 사용 하겠다
      alert('asdf');
      $.each(perfect,function(index,item){
         if(parseInt(item.kaptUsedate.substring(0,4))>=parseInt(startkaptUsedate)&&parseInt(item.kaptUsedate.substring(0,4))<=parseInt(endkaptUsedate)){
            result.push(item);
         }
      })
       if(kaptMparea_60!=null||kaptMparea_85!=null||kaptMparea_135!=null){
         if(kaptMparea_60!=null&&kaptMparea_85!=null){
            $.each(result,function(index,item){
               alert(item.kaptMparea_60);
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
      } 
   }
   console.log(result);

   if(startkaptUsedate==null){ // 건축년도 필터를 사용하지 않는경우
      result=perfect;
       if(kaptMparea_60!=null||kaptMparea_85!=null||kaptMparea_135!=null){
         if(kaptMparea_60!=null&&kaptMparea_85!=null){
            $.each(result,function(index,item){
               alert(item.kaptMparea_60);
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null&&kaptMparea_85!=null&&kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0||parseInt(item.kaptMparea_85)!=0||parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_60!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_60)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_85!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_85)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
         else if(kaptMparea_135!=null){
            $.each(result,function(index,item){
               if(parseInt(item.kaptMparea_135)!=0){
                  save.push(item);
               }
         })
            result = null;
            result = save;
         }
      } 
       console.log(result);
   }
   console.log(result);
   console.log("drawlist");
   var html = "";
   var index =0;
   html += '<ul class = "category" data-width="400" id = "list2"><table><tr><td>아파트 명</td><td>평점</td></tr>';
//   polyMap(items[0].citycode);
//   createSelectedChart(items[0]);
   console.log(result[0]);
      for (var i = 0; i < result.length; i++) {
         html += '<tr><td><a href = "#" id = "" value = "" onclick = "getTradeInfo('+perfect[i].x+'),focuson('+perfect[i].x+','+perfect[i].y+');">'+perfect[i].kaptName+'</a></td><td>'+perfect[i].changepoint+'</td></tr>' ;
      };                                       
   html += '</table></ul>';
   $('#lll').html(html);
   
   
   
   
   
}