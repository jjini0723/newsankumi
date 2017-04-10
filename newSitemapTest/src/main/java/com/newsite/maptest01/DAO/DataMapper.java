package com.newsite.maptest01.DAO;

import java.util.ArrayList;

public interface DataMapper {
	
	public ArrayList<String> selectGungu(String sido);
	public ArrayList<String> selectDong(String gungu);
}
