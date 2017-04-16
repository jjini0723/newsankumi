/**
 * 
 */

function dfa(carArray, walkArray, tradiArray){
   /*var car1 = {
         y : '37.4833729',
         x : '126.9797921'
   };
   var walk1 = {
         y : '37.4993211',
         x : '127.0527393'
   };
   var tradi1 = {
         y : '37.5118467',
         x : '127.0863366'
   };
   var car = new Array();
   var walk = new Array();
   var tradi = new Array();
   car.push(car1);
   walk.push(walk1);
   tradi.push(tradi1);*/
////////////////////////////////수동으로 자동차1,도보1,대중교통1 선택 가정해서 좌표 객체화 해서 배열에 집어넣음
   
   alert('호잇');
   console.log(carArray);
   console.log(walkArray);
   console.log(tradiArray);
   

   if(carArray.length!=0){//자동차가 선택되지 않으면 배열 길이가 0이라 이 ajax는 작동하지않음
      var avg = 0;
      var count =0;
      $.each(carArray,function(index,item){ //자동차가 선택 된 회수만큼 작동 희망목적지가 3곳 다 자동차면 3번 돈다
         $.each(perfect,function(index,item1){ // 선택되어있는 아파트만큼 돈다
            $.ajax({
               type : "POST",   
                async: false,
                url : "https://apis.skplanetx.com/tmap/routes?version=1&format=json&reqCoordType=WGS84GEO&resCoordType=WGS84GEO&startX="+item1.x+"&startY="+item1.y+"&startName=a&endName=b&endX="+item.y+"&endY="+item.x+"&appKey=2bb28cd1-f268-3af6-8329-e6b49122331b",
                success : function(data){
                   yebi = data.features[0].properties.totalTime//시간만 빼온다
                   if(item1.car1==''){//소요 시간을 1번부터 돌면서 빈곳에 집어넣음, 만약 자동차로 3개가 골라졌으면 1,2,3번 다 찬다
                      item1.car1=yebi;
                      avg=avg+yebi;
                      ++count;
                      if(count==perfect.length){
                         $.each(perfect,function(index,item){
                            item.car1avg=avg/count;
                            item.car1point=(item.car1avg/item.car1).toFixed(5);
                         })
                      }
                    }else if(item1.car2==''){
                       item1.car2=yebi;
                       avg=avg+yebi;
                      ++count;
                      if(count==perfect.length){
                         $.each(perfect,function(index,item){
                            item.car2avg=avg/count;
                            item.car2point=(item.car2avg/item.car2).toFixed(5);
                         })
                      }
                   }else if(item1.car3==''){
                      item1.car3=yebi;
                       avg=avg+yebi;
                      ++count;
                      if(count==perfect.length){
                         $.each(perfect,function(index,item){
                            item.car3avg=avg/count;
                            item.car3point=(item.car3avg/item.car3).toFixed(5);
                         })
                      }
                   }else if(item1.car4==''){
                      item1.car4=yebi;
                       avg=avg+yebi;
                      ++count;
                      if(count==perfect.length){
                         $.each(perfect,function(index,item){
                            item.car4avg=avg/count;
                            item.car4point=(item.car4avg/item.car4).toFixed(5);
                         })
                      }
                   }else if(item1.car5==''){
                      item1.car5=yebi;
                       avg=avg+yebi;
                      ++count;
                      if(count==perfect.length){
                         $.each(perfect,function(index,item){
                            item.car5avg=avg/count;
                            item.car5point=(item.car5avg/item.car5).toFixed(5);
                         })
                      }
                   }
                },
                error : function(e){
                   
                }
            })
         })
      })
   }
   if(walkArray.length!=0){//도보가 선택되지 않았으면 작동 안함
      var avg1 = 0;
      var count1 =0;
      $.each(walkArray,function(index,item){//도보로 설정 된 만큼 돈다
         $.each(perfect,function(index,item1){//아파트 개수만큼 돈다 ex)도보로 2개 설정 된상태에서 아파트가 200개 면 url400번 날린다
            $.ajax({
               type : "POST",      
                async: false,
                url : "https://apis.skplanetx.com/tmap/routes?version=1&format=json&reqCoordType=WGS84GEO&resCoordType=WGS84GEO&startX="+item1.x+"&startY="+item1.y+"&startName=a&endName=b&endX="+item.y+"&endY="+item.x+"&appKey=2bb28cd1-f268-3af6-8329-e6b49122331b",
                success : function(data){
                   yebi = data.features[0].properties.totalTime//총 시간만 출력
                   console.log(data)
                   if(item1.walk1==''){//빈곳 찾아 가기
                      item1.walk1=yebi;
                      avg1=avg1+yebi;
                      ++count1;
                      if(count1==perfect.length){
                         $.each(perfect,function(index,item){
                            item.walk1avg=avg1/count1;
                            item.walk1point=(item.walk1avg/item.walk1).toFixed(5);
                         })
                      }
                   }else if(item1.walk2==''){
                      item1.walk2=yebi;
                       avg1=avg1+yebi;
                      ++count1;
                      if(count1==perfect.length){
                         $.each(perfect,function(index,item){
                            item.walk2avg=avg1/count1;
                            item.walk2point=(item.walk2avg/item.walk2).toFixed(5);
                         })
                      }
                   }else if(item1.walk3==''){
                      item1.walk3=yebi;
                       avg1=avg1+yebi;
                      ++count1;
                      if(count1==perfect.length){
                         $.each(perfect,function(index,item){
                            item.walk3avg=avg1/count1;
                            item.walk3point=(item.walk3avg/item.walk3).toFixed(5);
                         })
                      }
                   }else if(item1.walk4==''){
                      item1.walk4=yebi;
                       avg1=avg1+yebi;
                      ++count1;
                      if(count1==perfect.length){
                         $.each(perfect,function(index,item){
                            item.walk4avg=avg1/count1;
                            item.walk4point=(item.walk4avg/item.walk4).toFixed(5);
                         })
                      }
                   }else if(item1.walk5==''){
                      item1.walk5=yebi;
                       avg1=avg1+yebi;
                      ++count1;
                      if(count1==perfect.length){
                         $.each(perfect,function(index,item){
                            item.walk5avg=avg1/count1;
                            item.walk5point=(item.walk5avg/item.walk5).toFixed(5);
                         })
                      }
                   }
                },
                error : function(e){
                   
                }
            })
         })
      })
   }
   if(tradiArray.length!=0){//대중교통이 선택되지 않았으면 작동 안함
      var avg2 = 0;
      var count2 =0;
      $.each(tradiArray,function(index,item){//대중교통이 선택 된 횟수 만큼
         $.each(perfect,function(index,item1){//아파트 개수 만큼
            jQuery.ajaxSettings.traditional = true;
            $.ajax({
               type:"post",
               async: false,
               contentType : "application/json;charset=utf-8",
               dataType : "json",
               url:"https://maps.googleapis.com/maps/api/directions/json?origin="+item1.y+","+item1.x+"&destination="+item.x+","+item.y+"&mode=transit&key=AIzaSyCY7dyy4vD8x7q9Is03binfIE9TgEoVA5w",
               success:function(data){
                  yebi = data.routes[0].legs[0].duration.value;//소요시간만 뺀다
                  if(item1.tradi1==''){// 자리에 찾아 들어간다
                     item1.tradi1=yebi;
                     avg2=avg2+yebi;
                     ++count2;
                     if(count2==perfect.length){
                        $.each(perfect,function(index,item){
                           item.tradi1avg=avg2/count2;
                           item.tradi1point=(item.tradi1avg/item.tradi1).toFixed(5);
                        })
                     }
                  }else if(item1.tradi2==''){
                     item1.tradi2=yebi;
                      avg2=avg2+yebi;
                     ++count2;
                     if(count2==perfect.length){
                        $.each(perfect,function(index,item){
                           item.tradi2avg=avg2/count2;
                           item.tradi2point=(item.tradi2avg/item.tradi2).toFixed(5);
                        })
                     }
                  }else if(item1.tradi3==''){
                     item1.tradi3=yebi;
                      avg2=avg2+yebi;
                     ++count2;
                     if(count2==perfect.length){
                        $.each(perfect,function(index,item){
                           item.tradi3avg=avg2/count2;
                           item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
                        })
                     }
                  }else if(item1.tradi4==''){
                     item1.tradi3=yebi;
                      avg2=avg2+yebi;
                     ++count2;
                     if(count2==perfect.length){
                        $.each(perfect,function(index,item){
                           item.tradi3avg=avg2/count2;
                           item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
                        })
                     }
                  }else if(item1.tradi5==''){
                     item1.tradi3=yebi;
                      avg2=avg2+yebi;
                     ++count2;
                     if(count2==perfect.length){
                        $.each(perfect,function(index,item){
                           item.tradi3avg=avg2/count2;
                           item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
                        })
                     }
                  }
               },
               error:function(e){
                  console.log(e)
               }
            })
         })
      })
   }
   
   $.each(perfect,function(index,item){
         item.totalpoint = parseFloat(item.car1point)+parseFloat(item.car2point)+parseFloat(item.car3point)+parseFloat(item.walk1point)+parseFloat(item.walk2point)+parseFloat(item.walk3point)+parseFloat(item.tradi1point)+parseFloat(item.tradi2point)+parseFloat(item.tradi3point);

   })
   var perfect2 = new Array();
   var perfect3 = new Array();
   var save=0;

//   $.each(perfect,function(index,item){
//      perfect2.push(item.totalpoint);
//   })
   
   
   
   perfect.sort(function(a,b){
      if(a.totalpoint>b.totalpoint){
         return -1;
      }
      if(a.totalpoint<b.totalpoint){
         return 1;
      }
      return 0;
   })
   
   var changepoint = 0;
   var percent=0;
   changepoint = parseFloat(perfect[0].totalpoint);
   if(changepoint>5){
      percent=parseFloat(changepoint/5);
      $.each(perfect,function(index,item){
         item.changepoint = (item.totalpoint/percent).toFixed(2);
      })
   }else if(changepoint<5){
      percent=parseFloat(5/changepoint);
      $.each(perfect,function(index,item){
         item.changepoint = ((parseFloat(item.totalpoint))*percent).toFixed(2);
      })
   }

   
//   for(var i=perfect2.length;i=0;i--){
//      for(var j=0;j<perfect.length;j++){
//         if(perfect2[i]==perfect[j].totalpoint){
//            perfect3.push(perfect[j]);
//         }
//      }
//   }
   
   
   
}



function drawlist() {
   console.log(perfect);
   console.log("drawlist");
   createData2();
   var html = "";
   var rank = 0;
   html += '<ul class = "category" data-width="400" id = "list2"><table><tr><td>아파트 명</td><td>평점</td></tr>';
   console.log(perfect[0]);
      for (var i = 0; i < perfect.length; i++) {
         html += '<tr><td><a href = "#" id = "" value = "" onclick = "getTradeInfo('+perfect[i].x+'); createData2('+perfect[i].kaptName+','+');">'+perfect[i].kaptName+'</a></td><td>'+perfect[i].changepoint+'</td></tr>' ;
      };                                       
   html += '</table></ul>';
   $('#lll').html(html);
   
   
   
}

