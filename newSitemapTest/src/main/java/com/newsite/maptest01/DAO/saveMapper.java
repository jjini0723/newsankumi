package com.newsite.maptest01.DAO;

import java.util.ArrayList;

import com.newsite.maptest01.vo.saveData;

public interface saveMapper {

	public void save(saveData save);
	public ArrayList<saveData> loadData(String email,String number);
}
