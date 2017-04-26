package com.newsite.maptest01;

import java.io.BufferedInputStream;
import java.net.URL;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserFactory;

import com.newsite.maptest01.DAO.mapDao;
import com.newsite.maptest01.vo.GuGwanhal;
import com.newsite.maptest01.vo.aptInfo;
import com.newsite.maptest01.vo.aptName;
import com.newsite.maptest01.vo.aptsale;
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	public final static String GET_URL = "http://apis.data.go.kr/1611000/AptListService/getRoadnameAptList";
    public final static String GET_KEY = "pSMWn87uRCBPH7CYLz7cgSugrQD0U9uYMQFBty6bZximARbBws232iw2fV0uIyjWmee7s8pEeEiBuwuuOhJV5A%3D%3D";
	public final static String GET_URL2 = "http://apis.data.go.kr/1611000/AptBasisInfoService/getAphusBassInfo?kaptCode=";
    public final static String GET_KEY2 = "P0A6kob9lKrE3P7EPU%2BF0WLOsKloQi7iZSxlSZIpHvF2ljpECCnFqgh90uSMPzt2Pdk9U9I2KwJEt4lJQGXS6A%3D%3D";
    public final static String GET_KEY3 = "xvqCf7tkTGQZ3W82UGq7LTVf09swWdh9ahkz%2BWe6EohVausaAx%2FnJta8kjBJU6lv521V3KU4cZgdyjCqrL0rVw%3D%3D";
    public final static String GET_KEY4 = "It7hTbFaURgkgwAsaWlo9F27Uq4rMVfll%2BYT2hoW%2BgbqrsCIKSEi7XzejdQe6Q%2FnyWcJJG82EHNtO26BayebhA%3D%3D";
    public final static String GET_KEY5 = "xvqCf7tkTGQZ3W82UGq7LTVf09swWdh9ahkz%2BWe6EohVausaAx%2FnJta8kjBJU6lv521V3KU4cZgdyjCqrL0rVw%3D%3D";
    public final static String GET_KEY6 = "P0A6kob9lKrE3P7EPU%2BF0WLOsKloQi7iZSxlSZIpHvF2ljpECCnFqgh90uSMPzt2Pdk9U9I2KwJEt4lJQGXS6A%3D%3D";
    public final static String GET_KEY7 = "bkomOZtMIiCFnE5738mjIbiMLRTAWDxcAF7hQrAhB9UNIB3%2FfjfVqA6IcLmTaTx3grGZgYc3bAavc3BubwFGXQ%3D%3D";
    public final static String GET_KEY8 = "e6zQRW5XSwELJXT8bt0LCJQLifhvHouTLsROwSa8Pg8J6FielHS0JZwglSUoSkNonrxWhEJUip0pdZDT9o%2BlVw%3D%3D";
	/**
	 * Simply selects the home view to render by returning its name.
	 */
    
    @Autowired
	mapDao dao;
	

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(){
		return "newSiteTest2";
	}
	
	@RequestMapping(value="newSiteTest", method=RequestMethod.GET)
	public String newSiteTest(){
		return "newSiteTest";
	}
	
	@RequestMapping(value="select", method=RequestMethod.GET)
	public String select(){
		return "select";
	}
	
	
	@RequestMapping(value="newSiteTest2", method=RequestMethod.GET)
	public String newSiteTest2(){
		return "newSiteTest2";
	}
	
	@RequestMapping(value="test123", method=RequestMethod.GET)
	public String test123(){
		
		return "test123";
	}
	
	/////////////뒷단 코드 시작
	@ResponseBody
	@RequestMapping(value = "test11", method=RequestMethod.POST)
	public aptName test(@RequestBody String loadCode){
		System.out.println("12x3123x");
		aptName aN = new aptName();
		
		
		try {
			String juso = GET_URL+"?"+loadCode+"&ServiceKey="+GET_KEY;
			//System.out.println(juso);
			URL url = new URL(juso);
			XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
	    	factory.setNamespaceAware(true);
	    	XmlPullParser xpp = factory.newPullParser();
	    	BufferedInputStream bis = new BufferedInputStream(url.openStream());
	    	xpp.setInput(bis,"utf-8");
	    	
	    	String tag = null;
	    	int event_type = xpp.getEventType();
	    	
	    	ArrayList<String> list = new ArrayList<String>();
	    	
	    	String addr = null;
	    	while(event_type != XmlPullParser.END_DOCUMENT){
	    		if(event_type == XmlPullParser.START_TAG){
	    			tag = xpp.getName();
	    		}else if(event_type == XmlPullParser.TEXT){
	    			
	    			if(tag.equals("kaptName")){
	    				addr = xpp.getText();
	    			
	    			}
	    		}else if (event_type == XmlPullParser.END_TAG){
	    			tag = xpp.getName();
	    			if(tag.equals("item")){
	    				
	    				aN.setAptName(addr);
	    				list.add(addr);
	    			}
	    		}
	    		event_type = xpp.next();
	    	}
	    	System.out.println(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return aN;
	}
	@ResponseBody
	@RequestMapping(value = "getDoroCD", method = RequestMethod.POST)
	public ArrayList<aptInfo> getDoroCD(String sigunguName, String ghName, String dongScore) {
		System.out.println("sigunguName : "+sigunguName);
		System.out.println("ghName : "+ghName);
		System.out.println("dongScore: "+dongScore);
		ArrayList<aptInfo> aptInfoList = new ArrayList<>();
		ArrayList<aptInfo> aptInfoList2 = new ArrayList<>();
		ArrayList<aptInfo> aptInfoList3 = new ArrayList<>();
		String[] guArray = sigunguName.split(",");
		String[] ghNameArray = ghName.split(",");
		String[] scoreArray = dongScore.split(",");
		for(int i = 0; i < guArray.length; i++) {
			GuGwanhal gugh = new GuGwanhal(guArray[i], ghNameArray[i]);
			try {
				aptInfoList = dao.getAptInfoList(gugh);
				for(int j = 0; j < aptInfoList.size(); j++) {
					aptInfoList2.add(aptInfoList.get(j));
				}
				System.out.println(gugh);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		for(int z = 0; z<aptInfoList2.size();z++){
	         if(aptInfoList3.size()==0){
	            aptInfoList3.add(aptInfoList2.get(z));
	         }else{
	        	 for(int x =0; x<aptInfoList3.size();x++){
	        		 if(!(aptInfoList3.get(x).getKaptName().equals(aptInfoList2.get(z).getKaptName()))){
	        			 if(x == aptInfoList3.size()-1){
	        				 aptInfoList3.add(aptInfoList2.get(z));
	                         break;
	                     }
	                 }else{
	                	 break;
	                 }
	             }
	         }
	    }
		for(int i=0; i<aptInfoList3.size();i++){
			if(aptInfoList3.get(i).getGhName().equals(ghNameArray[0])){
				aptInfoList3.get(i).setDongScore(scoreArray[0]);
			}else if(aptInfoList3.get(i).getGhName().equals(ghNameArray[1])){
				aptInfoList3.get(i).setDongScore(scoreArray[1]);
			}else if(aptInfoList3.get(i).getGhName().equals(ghNameArray[2])){
				aptInfoList3.get(i).setDongScore(scoreArray[2]);
			}else if(aptInfoList3.get(i).getGhName().equals(ghNameArray[3])){
				aptInfoList3.get(i).setDongScore(scoreArray[3]);
			}else if(aptInfoList3.get(i).getGhName().equals(ghNameArray[4])){
				aptInfoList3.get(i).setDongScore(scoreArray[4]);
			}
		}
		System.out.println("aptInfoList : "+aptInfoList);
		return aptInfoList3;
	}
	@ResponseBody
	@RequestMapping(value= "getTradeInfo", method = RequestMethod.POST)
	public ArrayList<aptsale> getTradeInfo(String xloc,String yloc){
		ArrayList<aptsale> result = new ArrayList<>();
		xloc = xloc.substring(0, 9);
		yloc = yloc.substring(0, 10);
		System.out.println(xloc+","+yloc);
		result = dao.getTradeInfo(xloc,yloc);
		System.out.println(result);
		return result;
	}
	/*
	@ResponseBody
	@RequestMapping(value="getBoundary", method = RequestMethod.POST)
	public Object[] getBoundary(String gu, String dong) {
		//return 해줄 데이터 배열
		// index : 0 - 테두리 좌표 리스트(ArrayList<String>)
		// index : 1 - 읍면동 리스트(String)
		ArrayList<String> emdList = new ArrayList<>();
		ArrayList<String> emdList2 = new ArrayList<>();
		ArrayList<String> boundaryList = new ArrayList<>();
		ArrayList<DongGu> dongguList = new ArrayList<>();
		
		String[] guArray = gu.split(",");
		String[] dongArray = dong.split(",");
		String dong2 = "";
		String gu2 = "";
		for(int i = 0; i < dongArray.length; i++) {
			dongguList = dao.getBoundary(guArray[i], dongArray[i]);
			for(int j = 0; j < dongguList.size(); j++) {
				
				boundaryList.add(dongguList.get(j).getBjd_cd());
				if(j == dongguList.size()-1 && i == dongArray.length-1) {
					dong2 += dongguList.get(j).getEmd_nm();
					gu2 += guArray[i];
				}else {
					dong2 += dongguList.get(j).getEmd_nm()+",";
					gu2 += guArray[i]+",";
				}
			}
		}
		Object[] result = {boundaryList, gu2, dong2};
		System.out.println("result : "+ result);
		System.out.println("boundaryList : "+boundaryList);
		System.out.println("dong2 : "+dong2);
		System.out.println("gu2 : "+gu2);
		return result;
		
		
		for(int i = 0; i < dongArray.length; i++) {
			String dong2 = null;
			for(int j = 0; j < dongArray[i].length(); j++) {
				String check = dongArray[i].charAt(j)+"";
				System.out.println("한글자씩 : "+check);
				if(isNumber(check)) {
					String check2 = dongArray[i].charAt(j-1)+"";
					String check4 = dongArray[i].charAt(j+1)+"";
					System.out.println("숫자일 경우 앞 글자 : "+check2);
					if(check2.equals("제")) {
						String check3 = dongArray[i].charAt(j-2)+"";
						System.out.println("숫자 앞에 제 일 경우 그 앞글자 : "+check3);
						if(check3.equals("제")) {
							dong2 = dongArray[i].substring(0, j-1)+"동";
							emdList.add(dong2);
							System.out.println("숫자 앞에 두글자가 제 일 경우 동이름 : "+emdList);
						} else {
							dong2 = dongArray[i].substring(0, j-2)+"동";
							emdList.add(dong2);
							System.out.println("숫자 앞에 한글자가 제 일 경우 동이름 : "+emdList);
						}
					} else {
						if(check4.equals(",") || check4.equals(".")) {
							dong2 = dongArray[i].substring(0, j+1)+"";
							emdList.add(dong2);
							System.out.println("숫자 뒤에 ,나 . 있을 경우 동이름 : "+emdList);
							break;
						} else if(check4.equals("가")) {
							dong2 = dongArray[i].substring(0, j+1)+"";
							emdList.add(dong2);
							System.out.println("숫자 뒤에 ,나 . 있을 경우 동이름 : "+emdList);
							break;
						} else {
							dong2 = dongArray[i].substring(0, j)+"동";
							emdList.add(dong2);
							System.out.println("숫자 뒤에 ,나 . 없을 경우 동이름 : "+emdList);
							break;
						}
					}
				}
			}
			if(!dongArray[i].contains(".")) {
				emdList.add(dongArray[i]);
				System.out.println("숫자 없을 경우 동이름 : "+emdList);
			}
		}
		System.out.println("emdList : "+emdList);
		for(int k = 0; k < emdList.size(); k++) {
			
			DongGu donggu = dao.getBoundary(guArray[k], emdList.get(k));
			boundaryList.add(donggu.getBjd_cd());
			emdList2.add(donggu.getEmd_nm());
		}
		System.out.println(boundaryList);
		Object[] result = {emdList2, boundaryList};
		return result;
		
		
	}
	*/
	public static boolean isNumber(String check){
        boolean result = false;
        try{
            Integer.parseInt(check) ;
            result = true ;
        }catch(Exception e){}
        return result ;
    }
}

