package com.newsite.maptest01;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.newsite.maptest01.DAO.DataDAO;
import com.newsite.maptest01.vo.ConditionResult;
import com.newsite.maptest01.vo.RankComparator;

@RestController
public class AjaxRestControll {
	private static final Logger logger = LoggerFactory.getLogger(AjaxRestControll.class);
	
	@Autowired
	private DataDAO dataDao;
	
	//조건 가중치 계산결과 최종순위랭킹
	@ResponseBody
	@RequestMapping(value = "selectConditions", method = RequestMethod.POST)
	public ArrayList<ConditionResult> selectConditions(@RequestBody Object list){//객체 아니면 Object로 해야 받아짐
		HashMap<String, ArrayList<HashMap<String, Object>>> mapList = (HashMap<String, ArrayList<HashMap<String, Object>>>)list;
		
		ArrayList<ConditionResult> finalList = new ArrayList<>();//최종적 10개 추천리스트
		ArrayList<ConditionResult> resultList = new ArrayList<>();//모든도시 조건랭크결과 리스트				
		ArrayList<String> conditionList = new ArrayList<>();//dao넘기는 용
		HashMap<String, Double> levelSettingMap = new HashMap<>();//가중치 먹이기 용
		int recommendCount = 10;//추천할 리스트 갯수(보여줄 도시개수 여기서 설정)
		
		for (int i=0; i < mapList.get("list").size(); i++){
			String condition = mapList.get("list").get(i).get("condition").toString();//넘어온 키값(조건이름)
			double level = Double.parseDouble((String)mapList.get("list").get(i).get("level"));//넘어온 가중치
			conditionList.add(condition);
			levelSettingMap.put(condition, level);
		}
		System.out.println(conditionList);
		resultList = dataDao.selectCondition(conditionList);
		
		for(ConditionResult c : resultList){
			//가중치 계산
			double total = 0.0;
			try{
				for(int i = 0; i < conditionList.size(); i++){//조건별로 구분하기 위한 포문					
					double value = c.getProperty(conditionList.get(i)) * levelSettingMap.get(conditionList.get(i));
					total += value;					
				}	
				c.setTotalScore(total);
				//System.out.println(c);
			}
			catch (Exception e) {
				e.printStackTrace();
			}				
		}
		
		RankComparator comp = new RankComparator();//정렬용			
		try{
			Collections.sort(resultList, comp);
			for(int i = 0; i < recommendCount; i++){
				finalList.add(resultList.get(i));
			}
			//System.out.println("전체결과 : "+resultList);			
		}catch (Exception e) {
			e.printStackTrace();
		}	
		//System.out.println("count개 결과 : "+finalList);
		return finalList;
	}
	
	//모든도시 전체정보 가져오기
	@ResponseBody
	@RequestMapping(value = "allInfo", method = RequestMethod.POST)
	public ArrayList<ConditionResult> selectAllInfo(){
		ArrayList<ConditionResult> allInfoList = dataDao.selectAllInfo();		
		return allInfoList;
	}
	
		

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
	

	@RequestMapping(value = "getAddress", method = RequestMethod.POST)
	public ConditionResult getAddress(String dong){
		System.out.println(dong);
		ConditionResult result = dataDao.getAddress(dong);
		
		return result;
	}
	
	@RequestMapping(value = "standardChart", method = RequestMethod.POST)
	public ConditionResult standardChart(String si, String gu){
		System.out.println(gu);
		ConditionResult result = dataDao.standardChart(si,gu);
		System.out.println("result" + result);
		
		return result;
	}
	
	@RequestMapping(value = "allStandardChart", method = RequestMethod.POST)
	public ConditionResult allStandardChart(){
		ConditionResult result = dataDao.allStandard();
		
		
		return result;
	}
	
	@RequestMapping(value = "createData", method = RequestMethod.POST)
	public ConditionResult createData(int citycode){
		
		ConditionResult result = dataDao.createData(citycode);
		
		return result;
	}

}
