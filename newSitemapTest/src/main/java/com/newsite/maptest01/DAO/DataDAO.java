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
}
