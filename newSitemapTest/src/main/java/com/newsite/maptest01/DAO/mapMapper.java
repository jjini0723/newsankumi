package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import com.newsite.maptest01.vo.GuGwanhal;
import com.newsite.maptest01.vo.aptInfo;
import com.newsite.maptest01.vo.aptcode;
import com.newsite.maptest01.vo.aptsale;
import com.newsite.maptest01.vo.bjdName;
import com.newsite.maptest01.vo.kaptCode;

public interface mapMapper {

	public ArrayList<String> getDoroCD(bjdName name);
	public void kaptcode(aptInfo aptInfo);
	public ArrayList<String> emdList();
	public ArrayList<String> gwanhalList();
	public ArrayList<String> getEmdList(String gwanhal);
	public ArrayList<kaptCode> loadKaptCode(String emd);
	public ArrayList<aptcode> aptcode();
	public ArrayList<aptsale> getTradeInfo(String xloc, String yloc);
	public ArrayList<aptInfo> getAptInfoList(GuGwanhal gugwanhal);
}
