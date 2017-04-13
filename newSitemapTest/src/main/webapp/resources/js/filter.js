
function filter(){
	console.log(perfect);

	var startkaptUsedate =null ; // 연도 4자리만 미사용시 null
	var endkaptUsedate  =1995 ;// ""
	var kaptMparea_60 = null; // 18평이하 -null, used
	var kaptMparea_85 = null; // 19평~24평이하-null, used
	var kaptMparea_135 = 'used'; //25평~40평이하-null, used

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
}