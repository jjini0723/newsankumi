package com.newsite.maptest01.vo;

import java.util.Comparator;

public class RankComparator implements Comparator<ConditionResult>{
	//public static String condition;//조건이름
	
	//순차배열
	@Override
	public int compare(ConditionResult first, ConditionResult second) {
		double firstValue = 0;
		double secondValue = 0;
		
		try {
			/*firstValue = first.getProperty(condition);
			secondValue = second.getProperty(condition);*/
			
			firstValue = first.getTotalScore();
			secondValue = second.getTotalScore();
							
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if(firstValue > secondValue){
			return -1;
		}
		else if(firstValue < secondValue){
			return 1;
		}
		else{
			return 0;
		}
	}

}
