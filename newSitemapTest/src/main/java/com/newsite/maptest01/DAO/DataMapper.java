package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import com.newsite.maptest01.vo.ConditionResult;


public interface DataMapper {
	public ArrayList<ConditionResult> selectCondition(ArrayList<String> list);
	public ArrayList<ConditionResult> selectAllInfo();
	
	public ArrayList<String> selectGungu(String sido);
	public ArrayList<String> selectDong(String gungu);
	public ConditionResult getAddress(String dong);
	public ConditionResult standardChart(String si, String gu);
	public ConditionResult allStandard();
	public ConditionResult createData(int citycode);
}
