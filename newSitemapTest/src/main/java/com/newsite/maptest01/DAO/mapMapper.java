package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import com.newsite.maptest01.vo.bjdName;
import com.newsite.maptest01.vo.kaptCode;

public interface mapMapper {

	public ArrayList<String> getDoroCD(bjdName name);
	public void kaptcode(kaptCode kaptcode);
	public ArrayList<String> emdList();
	public ArrayList<kaptCode> loadKaptCode(String emd);
}
