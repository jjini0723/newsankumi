package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.newsite.maptest01.vo.GuGwanhal;
import com.newsite.maptest01.vo.aptInfo;
import com.newsite.maptest01.vo.aptcode;
import com.newsite.maptest01.vo.aptsale;
import com.newsite.maptest01.vo.bjdName;
import com.newsite.maptest01.vo.kaptCode;
@Repository
public class mapDao {
	@Autowired
	private SqlSession sqlsession;
	
	public ArrayList<String> getDoroCD(bjdName name){
		ArrayList<String> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.getDoroCD(name);
		return result;
		
	}
	public void kaptcode(aptInfo aptInfo){
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		mapper.kaptcode(aptInfo);
	}
	
	public ArrayList<String> emdList(){
		ArrayList<String> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.emdList();
		return result;
	}
	
	public ArrayList<String> getEmdList(String gwanhal) {
		ArrayList<String> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.getEmdList(gwanhal);
		return result;
	}
	
	
	public ArrayList<kaptCode> loadKaptCode(String emd){
		ArrayList<kaptCode> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.loadKaptCode(emd);
		return result;
	}
	
	public ArrayList<aptcode> aptcode(){
		ArrayList<aptcode> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.aptcode();
		return result;
	}
	
	public ArrayList<aptsale> getTradeInfo(String xloc, String yloc){
		ArrayList<aptsale> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.getTradeInfo(xloc,yloc);
		return result;
	}
	
	public ArrayList<aptInfo> getAptInfoList(GuGwanhal gugwanhal) {
		ArrayList<aptInfo> result = new ArrayList<>();
		mapMapper mapper = sqlsession.getMapper(mapMapper.class);
		result = mapper.getAptInfoList(gugwanhal);
		return result;
	}
}
