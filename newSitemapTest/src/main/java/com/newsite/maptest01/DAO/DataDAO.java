package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DataDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
		
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
