package com.newsite.maptest01.vo;

public class StringMake { 
	//스트링 맨앞글자 대문자로 바꿔주는 메소드 (필요없어졌지만 혹시 몰라서놔둠)
	public static String stringFirstUpper(String data){
		String transString = data.substring(0, 1);
		transString = transString.toUpperCase();
		transString += data.substring(1);
		
		return transString;
	}
}
