package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.newsite.maptest01.vo.ConditionResult;


@Repository
public class DataDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	//조건
	public ArrayList<ConditionResult> selectCondition(ArrayList<String> list){
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		
		ArrayList<ConditionResult> conditionList = mapper.selectCondition(list);		
		//HashMap<String, ConditionResult> conditionList = mapper.selectCondition(list);
		
		return conditionList;
	}
	
	//전체. 조건(x)
	public ArrayList<ConditionResult> selectAllInfo(){
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ArrayList<ConditionResult> allInfoList = mapper.selectAllInfo();
		return allInfoList;
	}
		
		
		
	public ArrayList<String> selectGungu(String sido){
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ArrayList<String> gunguList = mapper.selectGungu(sido);
		return gunguList;
	}
	
	public ArrayList<String> selectDong(String gungu){
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ArrayList<String> dongList = mapper.selectDong(gungu);
		return dongList;
	}
	

	public ConditionResult getAddress(String dong) {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ConditionResult result = mapper.getAddress(dong);
		return result;
	}

	
	//기준지역
	public ConditionResult standardChart(String si, String gu) {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ConditionResult result = mapper.standardChart(si,gu);
		System.out.println("dao" + result);
		
		return result;
	}

	public ConditionResult allStandard() {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ConditionResult result = mapper.allStandard();
		return result;
	}

	
	public ConditionResult createData(int citycode) {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		ConditionResult result = mapper.createData(citycode);
		return result;
	}
}
