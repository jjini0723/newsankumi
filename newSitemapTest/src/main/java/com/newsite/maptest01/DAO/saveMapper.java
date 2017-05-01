package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import com.newsite.maptest01.vo.saveData;
import com.newsite.maptest01.vo.saveKeyCount;

public interface saveMapper {

	public void save(saveData save);
	public ArrayList<saveData> loadData(String email,String number);
	public void saveKeyCount(saveKeyCount savekeycount);
	public ArrayList<saveKeyCount> loadKeyCount();
}
