/**
 * 
 */

carFlag = true;
walkFlag = true;
tradiFlag = true;
function dfa(carArray, walkArray, tradiArray){
	if(parseInt(tmapCarKeyCount) <= parseInt(tmapLine)) {
		carusekey = tmapCarKey1;
	} else if(parseInt(tmapLine)<parseInt(tmapCarKeyCount)&&parseInt(tmapCarKeyCount)<=parseInt(tmapLine)*2) {
		carusekey = tmapCarKey2;
	} else if(parseInt(tmapLine)*2<parseInt(tmapCarKeyCount)&&parseInt(tmapCarKeyCount)<=parseInt(tmapLine)*3) {
		carusekey = tmapCarKey3;
	} else if(parseInt(tmapLine)*3<parseInt(tmapCarKeyCount)&&parseInt(tmapCarKeyCount)<=parseInt(tmapLine)*4) {
		carusekey = tmapCarKey4;
	} else if(parseInt(tmapLine)*4<parseInt(tmapCarKeyCount)&&parseInt(tmapCarKeyCount)<=parseInt(tmapLine)*5) {
		carusekey = tmapCarKey5;
	}
	if(parseInt(tmapWalkKeyCount) <= parseInt(tmapLine)) {
		walkusekey = tmapWalkKey1;
	} else if(parseInt(tmapLine)<parseInt(tmapWalkKeyCount)&&parseInt(tmapWalkKeyCount)<=parseInt(tmapLine)*2) {
		walkusekey = tmapWalkKey2;
	} else if(parseInt(tmapLine)*2<parseInt(tmapWalkKeyCount)&&parseInt(tmapWalkKeyCount)<=parseInt(tmapLine)*3) {
		walkusekey = tmapWalkKey3;
	} else if(parseInt(tmapLine)*3<parseInt(tmapWalkKeyCount)&&parseInt(tmapWalkKeyCount)<=parseInt(tmapLine)*4) {
		walkusekey = tmapWalkKey4;
	} else if(parseInt(tmapLine)*4<parseInt(tmapWalkKeyCount)&&parseInt(tmapWalkKeyCount)<=parseInt(tmapLine)*5) {
		walkusekey = tmapWalkKey5;
	}
	if(parseInt(googleKeyCount) <= parseInt(googleLine)) {
		tradiusekey = googleKey1;
	} else if(parseInt(googleLine)<parseInt(googleKeyCount)&&parseInt(googleKeyCount)<=parseInt(googleLine)*2) {
		tradiusekey = googleKey2;
	} else if(parseInt(googleLine)*2<parseInt(googleKeyCount)&&parseInt(googleKeyCount)<=parseInt(googleLine)*3) {
		tradiusekey = googleKey3;
	} else if(parseInt(googleLine)*3<parseInt(googleKeyCount)&&parseInt(googleKeyCount)<=parseInt(googleLine)*4) {
		tradiusekey = googleKey4;
	}else if(parseInt(googleLine)*5<parseInt(googleKeyCount)&&parseInt(googleKeyCount)<=parseInt(googleLine)*5){
		tradiusekey = googleKey5;
	}
    //선택된 애들 false로 변경
	carNum = carArray.length * perfect.length;
    walkNum = walkArray.length * perfect.length;
    tradiNum = tradiArray.length * perfect.length;
    if(carArray.length!=0){
    	carFlag = false;
    }
    if(walkArray.length!=0){
        walkFlag = false;
    }
    if(tradiArray.length!=0){
        tradiFlag = false;
    }
    var carTitle = [];
    var walkTitle = [];
    var transTitle = [];
    var title = [];
    for (var i = 0; i < carArray.length; i++) {
    	if (carArray.length!=0) {
    		title.push(carArray[i].title);
    	}
    }
    for (var j = 0; j < walkArray.length; j++) {
    	if (walkArray.length!=0) {
    		title.push(walkArray[j].title);
		}
    }
    for (var k = 0; k < tradiArray.length; k++) {
    	if (tradiArray.length!=0) {
		    title.push(tradiArray[k].title);
		}
    }
  
    $("#titleList").val(JSON.stringify(title));
    if(carArray.length!=0){//자동차가 선택되지 않으면 배열 길이가 0이라 이 ajax는 작동하지않음
    	var flag1 = 0;
        $.each(carArray,function(index,item) { //자동차가 선택 된 회수만큼 작동 희망목적지가 3곳 다 자동차면 3번 돈다
        	var avg = 0;
            var count =0;
            $.each(perfect,function(index,item1) { // 선택되어있는 아파트만큼 돈다
            	$.ajax({
	                type : "POST",   
	                url : "https://apis.skplanetx.com/tmap/routes?version=1&format=json&reqCoordType=WGS84GEO&resCoordType=WGS84GEO&startX="+item1.x+"&startY="+item1.y+"&startName=a&endName=b&endX="+item.y+"&endY="+item.x+"&appKey="+carusekey,
	                success : function(data){//succes 안에서 길이만큼 반복 후 2번 돌아야 할시 2번돌고 true로 변경
	                    yebi = data.features[0].properties.totalTime//시간만 빼온다
	                    if(item1.car1=='') {//소요 시간을 1번부터 돌면서 빈곳에 집어넣음, 만약 자동차로 3개가 골라졌으면 1,2,3번 다 찬다
	                    	item1.car1=yebi;
	                        avg=avg+yebi;
	                        ++count;
	                        if(count==perfect.length){
	                        	$.each(perfect,function(index,item){
		                            item.car1avg=avg/count;
		                            item.car1point=(item.car1avg/item.car1).toFixed(5);
	                            });
	                        }
	                    } else if(item1.car2=='') {
	                    	item1.car2=yebi;
	                        avg=avg+yebi;
	                        ++count;
	                        if(count==perfect.length) {
	                        	$.each(perfect,function(index,item) {
	                        		item.car2avg=avg/count;
	                        		item.car2point=(item.car2avg/item.car2).toFixed(5);
	                            });
	                        }
	                    } else if(item1.car3=='') {
	                        item1.car3=yebi;
	                        avg=avg+yebi;
	                        ++count;
	                        if(count==perfect.length) {
	                            $.each(perfect,function(index,item) {
	                            	item.car3avg=avg/count;
	                            	item.car3point=(item.car3avg/item.car3).toFixed(5);
	                            });
	                        }
	                    } else if(item1.car4=='') {
	                        item1.car4=yebi;
	                        avg=avg+yebi;
	                        ++count;
	                        if(count==perfect.length) {
	                            $.each(perfect,function(index,item) {
	                            	item.car4avg=avg/count;
	                            	item.car4point=(item.car4avg/item.car4).toFixed(5);
	                            });
	                        }
	                    } else if(item1.car5=='') {
	                        item1.car5=yebi;
	                        avg=avg+yebi;
	                        ++count;
	                        if(count==perfect.length) {
	                            $.each(perfect,function(index,item) {
		                            item.car5avg=avg/count;
		                            item.car5point=(item.car5avg/item.car5).toFixed(5);
	                            });
	                        }
	                    }
	                    flag1++;
	                    tmapCarKeyCount++;
	                    if(flag1==carNum) {
	                        carFlag=true;
	                    }
	                },
	                error : function(e) {
	                }
                });
            });
        });      
    }
    if(walkArray.length!=0) {//도보가 선택되지 않았으면 작동 안함
        var flag2 = 0;
        $.each(walkArray,function(index,item) {//도보로 설정 된 만큼 돈다
            var avg1 = 0;
            var count1 =0;
            $.each(perfect,function(index,item1) {//아파트 개수만큼 돈다 ex)도보로 2개 설정 된상태에서 아파트가 200개 면 url400번 날린다
                $.ajax({
                	type : "POST",      
                	url : "https://apis.skplanetx.com/tmap/routes?version=1&format=json&reqCoordType=WGS84GEO&resCoordType=WGS84GEO&startX="+item1.x+"&startY="+item1.y+"&startName=a&endName=b&endX="+item.y+"&endY="+item.x+"&appKey=32b893de-a5dc-30c0-b49d-bfc3aab6a131",
                	success : function(data){
                		yebi = data.features[0].properties.totalTime//총 시간만 출력
                		if(item1.walk1=='') {//빈곳 찾아 가기
                			item1.walk1=yebi;
                			avg1=avg1+yebi;
                			++count1;
                			if(count1==perfect.length) {
                				$.each(perfect,function(index,item) {
                					item.walk1avg=avg1/count1;
                					item.walk1point=(item.walk1avg/item.walk1).toFixed(5);
                				});
                			}
                		} else if(item1.walk2=='') {
                			item1.walk2=yebi;
                			avg1=avg1+yebi;
                			++count1;
                			if(count1==perfect.length) {
                				$.each(perfect,function(index,item) {
                					item.walk2avg=avg1/count1;
                					item.walk2point=(item.walk2avg/item.walk2).toFixed(5);
                				});
                			}
                		} else if(item1.walk3=='') {
                			item1.walk3=yebi;
                			avg1=avg1+yebi;
                			++count1;
                			if(count1==perfect.length) {
                				$.each(perfect,function(index,item) {
                					item.walk3avg=avg1/count1;
                					item.walk3point=(item.walk3avg/item.walk3).toFixed(5);
                				});
                			}
                		} else if(item1.walk4=='') {
                			item1.walk4=yebi;
                			avg1=avg1+yebi;
                			++count1;
                			if(count1==perfect.length) {
                				$.each(perfect,function(index,item) {
                					item.walk4avg=avg1/count1;
                					item.walk4point=(item.walk4avg/item.walk4).toFixed(5);
                				});
                			}
                		} else if(item1.walk5=='') {
                			item1.walk5=yebi;
                			avg1=avg1+yebi;
                			++count1;
                			if(count1==perfect.length) {
                				$.each(perfect,function(index,item) {
                					item.walk5avg=avg1/count1;
                					item.walk5point=(item.walk5avg/item.walk5).toFixed(5);
                				});
                			}
                		}
                		flag2++;
                		tmapWalkKeyCount++;
                		if(flag2==walkNum) {
                			walkFlag=true;
                		}
                	},
                	error : function(e) {
                   
                	}
            	});
        	});
    	});
	}
    if(tradiArray.length!=0) {//대중교통이 선택되지 않았으면 작동 안함
	    var flag3 = 0;
        $.each(tradiArray,function(index,item) {//대중교통이 선택 된 횟수 만큼
            var avg2 = 0;
            var count2 =0;
            $.each(perfect,function(index,item1) {//아파트 개수 만큼
                jQuery.ajaxSettings.traditional = true;
                $.ajax({
	                type:"post",
	                contentType : "application/json;charset=utf-8",
	                dataType : "json",
	                url:"https://maps.googleapis.com/maps/api/directions/json?origin="+item1.y+","+item1.x+"&destination="+item.x+","+item.y+"&mode=transit&key="+tradiusekey,
	                success:function(data) {
	                    yebi = data.routes[0].legs[0].duration.value;//소요시간만 뺀다
	                    if(item1.tradi1==''){// 자리에 찾아 들어간다
	                        item1.tradi1=yebi;
	                        avg2=avg2+yebi;
	                        ++count2;
	                        if(count2==perfect.length) {
	                            $.each(perfect,function(index,item) {
		                            item.tradi1avg=avg2/count2;
		                            item.tradi1point=(item.tradi1avg/item.tradi1).toFixed(5);
	                            });
	                        }
	                    } else if(item1.tradi2=='') {
	                        item1.tradi2=yebi;
	                        avg2=avg2+yebi;
	                        ++count2;
	                        if(count2==perfect.length){
	                            $.each(perfect,function(index,item){
		                            item.tradi2avg=avg2/count2;
		                            item.tradi2point=(item.tradi2avg/item.tradi2).toFixed(5);
	                            });
                        	}
                    	}else if(item1.tradi3==''){
	                        item1.tradi3=yebi;
	                        avg2=avg2+yebi;
	                        ++count2;
	                        if(count2==perfect.length){
	                            $.each(perfect,function(index,item){
		                            item.tradi3avg=avg2/count2;
		                            item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
	                            });
                        	}
                		}else if(item1.tradi4==''){
	                        item1.tradi3=yebi;
	                        avg2=avg2+yebi;
	                        ++count2;
	                        if(count2==perfect.length){
	                            $.each(perfect,function(index,item){
		                            item.tradi3avg=avg2/count2;
		                            item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
	                            });
	                        }
            			}else if(item1.tradi5==''){
	                        item1.tradi3=yebi;
	                        avg2=avg2+yebi;
	                        ++count2;
	                        if(count2==perfect.length){
	                            $.each(perfect,function(index,item){
		                            item.tradi3avg=avg2/count2;
		                            item.tradi3point=(item.tradi3avg/item.tradi3).toFixed(5);
	                            });
	                        }
	                    }
	                    flag3++;
	                    googleKeyCount++;
	                    if(flag3==tradiNum){
	                        tradiFlag=true;
	                    }
	                },
	                error:function(e){
	                    console.log(e)
	                }
            	});
        	});
    	});
	}
    var setInt = setInterval(function() {
        if(carFlag == true&& walkFlag == true&&tradiFlag==true) {
    	    sendArray();
    	    drawlist();
    	    clearInterval(setInt);
    	    saveKeyCount(carNum,walkNum,tradiNum);
        }
    }, 1000);
    //다 돌고 모두 true가 되었을때 setinterval인터벌 플래그 확인 하다가 다 트루가 되면 다음 실행
}
function sendArray() {
    var newperfect = new Array();
    $.each(perfect, function(key, value) {
        if($.inArray(value, newperfect) === -1) newperfect.push(value);
    });
	$.each(newperfect,function(index,item) {
		item.totalpoint = parseFloat(item.car1point)+parseFloat(item.car2point)+parseFloat(item.car3point)+parseFloat(item.walk1point)+parseFloat(item.walk2point)+parseFloat(item.walk3point)+parseFloat(item.tradi1point)+parseFloat(item.tradi2point)+parseFloat(item.tradi3point);

	});
	perfect.sort(function(a,b) {
		if(a.totalpoint>b.totalpoint) {
			return -1;
		}
		if(a.totalpoint<b.totalpoint) {
			return 1;
		}
		return 0;
	});
	var changepoint = 0;
	var percent=0;
	changepoint = parseFloat(perfect[0].totalpoint);
	if(changepoint > 5) {
		percent=parseFloat(changepoint/5);
		$.each(perfect,function(index,item) {
    	    var scorex = parseFloat(item.totalpoint)/percent.toFixed(2);
    	    var scorey = parseFloat(item.dongScore);
    	    item.changepoint = parseFloat(scorex+scorey).toFixed(2);
    	    if(parseFloat(item.changepoint)>10) {
    	    	item.changepoint = '10.00';
    	    }
    	    item.sortpoint = parseFloat(item.changepoint)*100;
		});
	} else if(changepoint<5) {
		percent=parseFloat(5/changepoint);
		$.each(perfect,function(index,item) {
    	    var score1 = parseFloat(item.totalpoint)*percent.toFixed(2);
     	    var score2 = parseFloat(item.dongScore);
            item.changepoint = parseFloat(score1+score2).toFixed(2);
            if(parseFloat(item.changepoint)>10) {
            	item.changepoint = '10.00';
            }
            item.sortpoint = parseFloat(item.changepoint)*100;
		});
	} 
	perfect.sort(function(a,b) {
        if(a.changepoint>b.changepoint) {
            return -1;
        }
        if(a.changepoint<b.changepoint){
            return 1;
        }
        return 0;
    });
	perfect.sort(function(a,b) {
        if(a.sortpoint>b.sortpoint){
            return -1;
        }
        if(a.sortpoint<b.sortpoint){
            return 1;
        }
        return 0;
    });
}

function drawlist() {
    $("#graphData").val(JSON.stringify(perfect));
    getTradeInfo(perfect[0].x);
    focusin(perfect[0].x,perfect[0].y);
    getChartData2(0);
    var newperfect = new Array();
    var html = "";
    var rank = 0;
    html += '<ul class = "category" data-width="400" id = "list2" style="padding-top: 0;"><table class="blueone" style="width: 270px;"><tr><td style="width: 80%;">아파트 명</td><td style="width: 20%;">평점</td></tr>';
    filterAddr = perfect;
    for (var i = 0; i < perfect.length; i++) {
	    html += '<tr><td><a href = "#" id = "" value = "" onclick = "initChart2(); getTradeInfo('+perfect[i].x+'); focusin('+perfect[i].x+','+perfect[i].y+'); getChartData2('+i+'); changeMarker('+i+'); return false;">'+perfect[i].kaptName+'</a></td><td>'+perfect[i].changepoint+'</td></tr>' ;
    }                                       
    html += '</table></ul>';
    $('#lll').html(html);
}

function focusin(x,y) {
	var moveLatLon = new daum.maps.LatLng(y, x);
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
    map.setLevel(5);
}