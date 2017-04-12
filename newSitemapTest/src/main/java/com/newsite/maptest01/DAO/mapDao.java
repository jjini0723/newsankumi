package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.newsite.maptest01.vo.bjdName;
import com.newsite.maptest01.vo.kaptCode;
@Repository
public class mapDao {
	@Autowired
	private SqlSession sqlsession;
	
	public ArrayList<String> getDoroCD(bjdName name){
		ArrayList<String> result = new ArrayList<>();
		System.out.println("dao"+name);
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.getDoroCD(name);
		System.out.println("dao"+result);
		return result;
		
	}
	public void kaptcode(kaptCode kaptcode){
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		mapper.kaptcode(kaptcode);
	}
	
	public ArrayList<String> emdList(){
		ArrayList<String> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.emdList();
		return result;
	}
	
	public ArrayList<kaptCode> loadKaptCode(String emd){
		ArrayList<kaptCode> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.loadKaptCode(emd);
		return result;
	}
}
