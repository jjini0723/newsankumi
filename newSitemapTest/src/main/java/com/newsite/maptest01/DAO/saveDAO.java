package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.newsite.maptest01.vo.saveData;

@Repository
public class saveDAO {

	@Autowired
	SqlSession sqlSession;
	
	public void save(saveData save){
		saveMapper mapper = sqlSession.getMapper(saveMapper.class);
		System.out.println("dao"+save);
		mapper.save(save);
	}
	public ArrayList<saveData> loadData(String email, String number){
		ArrayList<saveData> result = new ArrayList<>();
		saveMapper mapper = sqlSession.getMapper(saveMapper.class);
		result = mapper.loadData(email,number);
		System.out.println("dao"+result);
		return result;
	}
}
