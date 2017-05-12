/**
 * 
 */

function save(checknumber,checkemail) {
	var carindex = carArray.length;
	var walkindex = walkArray.length;
	var tradiindex = tradiArray.length;
	var gu = result300[0];
	var dong = result300[1];
	var dongscore = dongScore[0]+","+dongScore[1]+","+dongScore[2]+","+dongScore[3]+","+dongScore[4];
	var count = perfect.length;
	if(carArray.length<5) {
		for(var i =carindex;i<5;i++) {
			var carInfo = {title:'no',x:'no',y:'no'};
			carArray.push(carInfo);
		}
	}
	if(walkArray.length<5) {
		for(var j =walkindex;j<5;j++) {
			var walkInfo = {title:'no',x:'no',y:'no'};
			walkArray.push(walkInfo);
		}
	}
	if(tradiArray.length<5) {
		for(var k =tradiindex;k<5;k++) {
			var tradiInfo = {title:'no',x:'no',y:'no'};
			tradiArray.push(tradiInfo);
		}
	}
	var	checknumber = checknumber;
	var	checkemail = checkemail;
	var	gu = gu;
	var	dong =dong;
	var	car1 = carArray[0].title+','+carArray[0].x+','+carArray[0].y;
	var	car2 = carArray[1].title+','+carArray[1].x+','+carArray[1].y;
	var	car3 = carArray[2].title+','+carArray[2].x+','+carArray[2].y;
	var	car4 = carArray[3].title+','+carArray[3].x+','+carArray[3].y;
	var	car5 = carArray[4].title+','+carArray[4].x+','+carArray[4].y;
	var	walk1 = walkArray[0].title+','+walkArray[0].x+','+walkArray[0].y;
	var	walk2 = walkArray[1].title+','+walkArray[1].x+','+walkArray[1].y;
	var	walk3 = walkArray[2].title+','+walkArray[2].x+','+walkArray[2].y;
	var	walk4 = walkArray[3].title+','+walkArray[3].x+','+walkArray[3].y;
	var	walk5 = walkArray[4].title+','+walkArray[4].x+','+walkArray[4].y;
	var	tradi1 = tradiArray[0].title+','+tradiArray[0].x+','+tradiArray[0].y;
	var	tradi2 = tradiArray[1].title+','+tradiArray[1].x+','+tradiArray[1].y;
	var	tradi3 = tradiArray[2].title+','+tradiArray[2].x+','+tradiArray[2].y;
	var	tradi4 = tradiArray[3].title+','+tradiArray[3].x+','+tradiArray[3].y;
	var	tradi5 = tradiArray[4].title+','+tradiArray[4].x+','+tradiArray[4].y;
	jQuery.ajaxSettings.traditional = true;
	$.ajax({
		type : "post",
		url : "save",	
		contentType : "application/json;charset=utf-8",
		data : JSON.stringify({
			top123:top123,
			checknumber:checknumber,
			checkemail:checkemail,
			gu:gu,
			dong:dong,
			dongscore:dongscore,
			car1:car1,
			car2:car2,
			car3:car3,
			car4:car4,
			car5:car5,
			walk1:walk1,
			walk2:walk2,
			walk3:walk3,
			walk4:walk4,
			walk5:walk5,
			tradi1:tradi1,
			tradi2:tradi2,
			tradi3:tradi3,
			tradi4:tradi4,
			tradi5:tradi5,
			count:count
		})
	})
}