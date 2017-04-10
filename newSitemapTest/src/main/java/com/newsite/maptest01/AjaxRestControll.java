package com.newsite.maptest01;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.newsite.maptest01.DAO.DataDAO;

@RestController
public class AjaxRestControll {
	private static final Logger logger = LoggerFactory.getLogger(AjaxRestControll.class);
	
	@Autowired
	private DataDAO dataDao;
	

	@RequestMapping(value = "selectGungu", method = RequestMethod.POST)
	public ArrayList<String> selectGungu(String sido){
		ArrayList<String> sigunList = new ArrayList();
		sigunList = dataDao.selectGungu(sido);
		int lastIndex = sigunList.size()-1;
		sigunList.remove(lastIndex);
		
		return sigunList;
	}
	
	
	@RequestMapping(value = "selectDong", method = RequestMethod.POST)
	public ArrayList<String> selectDong(String gungu){
		System.out.println(gungu);
		ArrayList<String> dongList = dataDao.selectDong(gungu);
		System.out.println(dongList);
		int lastIndex = dongList.size()-1;
		dongList.remove(lastIndex);
		
		return dongList;
	}

}
