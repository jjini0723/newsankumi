package com.newsite.maptest01;

import java.io.BufferedInputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;

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
import com.newsite.maptest01.vo.aptInfo;
import com.newsite.maptest01.vo.aptName;
import com.newsite.maptest01.vo.kaptCode;

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
			System.out.println(juso);
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
	//public ArrayList<aptInfo> getDoroCD(String emdName){
	public ArrayList<aptInfo> getDoroCD(@RequestBody String emdName) {
//		ArrayList<String> result = new ArrayList<>();
//		ArrayList<String> aptNameList = new ArrayList<>();
//		ArrayList<String> newList = new ArrayList<>();
//		ArrayList<String> emdList = new ArrayList<>();
//		bjdName name = new bjdName();
//		emdList = dao.emdList();
//		double counter = 0;
//		double counterMax=10000;
//		double percent2=0;
//		double percent = 138;
//		for(int z=1100;z<1238;z++){
//			emdName = emdList.get(z);
//		System.out.println("콘"+emdName);
//		name.setBjdName1(emdName);
//		System.out.println("콘2"+name);
//		try {
//			result = dao.getDoroCD(name);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		System.out.println(result.size());
//		System.out.println("도로코드"+result);
//		aptName aN = new aptName();
//		System.out.println(result);
//		ArrayList<String> aptCode = new ArrayList<>();
//		kaptCode kaptcode1 = new kaptCode();
//		int count = 0;
//		String kaptCode = "";
		
//		for(int i = 0; i<result.size();i++){
//			try {
//				String juso = GET_URL+"?loadCode="+result.get(i)+"&ServiceKey="+GET_KEY4;
//				URL url = new URL(juso);
//				XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
//				factory.setNamespaceAware(true);
//				XmlPullParser xpp = factory.newPullParser();
//				BufferedInputStream bis = new BufferedInputStream(url.openStream());
//				xpp.setInput(bis,"utf-8");
//				System.out.println(++count+"juso"+juso);
//				System.out.println(aptCode);
//				System.out.println(aptCode.size());
//				++counter;
//				
//				String tag = null;
//				int event_type = xpp.getEventType();
//				
//				String kaptCo = null;
//				while(event_type != XmlPullParser.END_DOCUMENT){
//					if(event_type == XmlPullParser.START_TAG){
//						tag=xpp.getName();
//					}else if(event_type == XmlPullParser.TEXT){
//						if(tag.equals("kaptCode")){
//							kaptCo = xpp.getText();
//						}
//						}else if(event_type == XmlPullParser.END_TAG){
//							tag = xpp.getName();
//							if(tag.equals("item")){
//								aptCode.add(kaptCo);
//							}
//					}
//					event_type = xpp.next();
//				}
//				
//			} catch (Exception e) {
//				e.printStackTrace();
//			}		
//		}
//		for(int j =0; j<aptCode.size();j++){
//			if(j==aptCode.size()-1){
//				kaptCode += aptCode.get(j);
//			}else{
//			kaptCode += aptCode.get(j)+",";
//			}
//		}
//		kaptcode1.setEmd_nm(emdName);
//		kaptcode1.setKaptcode(kaptCode);
//		dao.kaptcode(kaptcode1);
		
		
		
		
//		System.out.println(aptCode);System.out.println(aptCode.size());
//		System.out.println("현재 진행도"+(++percent2)/percent*100+"%");
//		System.out.println("누적 신호 발송 수 : "+counter+"회  /  사용율 :"+counter/counterMax*100+"%");
//		}
//		System.out.println("끝");
//		
//	
		System.out.println(emdName+"찍히니?");
		ArrayList<kaptCode> kaptcodeList = new ArrayList<>();
		ArrayList<String> kaptcodeList2 = new ArrayList<>();
		HashMap<ArrayList<String>, ArrayList<String>> resultAddrList = new HashMap<>();
		ArrayList<String> emdNameList = new ArrayList<>();
		
		String[] emdNameArray = emdName.split(",");
		// 영석이 코드
		
		/*kaptcodeList = dao.loadKaptCode(emdName);
		String strcode = kaptcodeList.get(0).getKaptcode() ;
		for(String a : strcode.split(",")){
			kaptcodeList2.add(a);
		}*/
		
		// 수정사항
		
		for(int i = 0; i < emdNameArray.length; i++) {
			kaptcodeList = dao.loadKaptCode(emdNameArray[i]);
			String strCode = kaptcodeList.get(0).getKaptcode();
			for(String a : strCode.split(",")) {
				kaptcodeList2.add(a);
			}
		}
		
		
		System.out.println(kaptcodeList2);
		
		ArrayList<aptInfo> aptAddr = new ArrayList<>();
		ArrayList<aptInfo> newAddrList = new ArrayList<>();
		
		String tag = null;
		
		for(int i = 0; i<kaptcodeList2.size();i++){
			try {
				String juso = GET_URL2+kaptcodeList2.get(i)+"&ServiceKey="+GET_KEY;
				URL url = new URL(juso);
				XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
				factory.setNamespaceAware(true);
				XmlPullParser xpp = factory.newPullParser();
				BufferedInputStream bis = new BufferedInputStream(url.openStream());
				xpp.setInput(bis,"utf-8");
				System.out.println("juso"+juso);
				System.out.println(aptAddr);
				System.out.println(aptAddr.size());
				String kaptAddr = null;
				String doroJuso= null;
				String codeHallNm= null;
				String kaptName= null;
				String kaptMparea_135= null;
				String kaptMparea_60= null;
				String kaptMparea_85= null;
				String kaptUsedate= null;
				
				int event_type = xpp.getEventType();
				String kaptCode = null;
				while(event_type != XmlPullParser.END_DOCUMENT){
					if(event_type == XmlPullParser.START_TAG){
						tag=xpp.getName();
						
					}else if(event_type == XmlPullParser.TEXT){
						if(tag.equals("kaptAddr")){
							kaptAddr = xpp.getText();
						}
						if(tag.equals("doroJuso")){
							doroJuso = xpp.getText();
						}
						if(tag.equals("codeHallNm")){
							codeHallNm = xpp.getText();
						}
						if(tag.equals("kaptName")){
							kaptName = xpp.getText();
						}
						if(tag.equals("kaptMparea_135")){
							kaptMparea_135 = xpp.getText();
						}
						if(tag.equals("kaptMparea_60")){
							kaptMparea_60 = xpp.getText();
						}
						if(tag.equals("kaptMparea_85")){
							kaptMparea_85 = xpp.getText();
						}
						if(tag.equals("kaptUsedate")){
							kaptUsedate = xpp.getText();
						}
						}else if(event_type == XmlPullParser.END_TAG){
							tag = xpp.getName();
							if(tag.equals("item")){
								aptInfo aptinfo = new aptInfo(kaptAddr, doroJuso, codeHallNm, kaptName, kaptMparea_135, kaptMparea_60, kaptMparea_85, kaptUsedate);
								aptAddr.add(aptinfo);
							}
					}
					event_type = xpp.next();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}		
		}System.out.println(aptAddr);System.out.println(aptAddr.size()); 
		
		
		
		// 영석이 코드
		/*for(int i =0;i<aptAddr.size();i++){
			if(aptAddr.get(i).getKaptAddr().contains(emdName)){
				newAddrList.add(aptAddr.get(i));
			}
		}System.out.println(newAddrList);System.out.println(newAddrList.size());*/
		
		// 수정사항
		for(int i = 0; i < aptAddr.size(); i++) {
			for(int j = 0; j < emdNameArray.length; j++) {
				if(aptAddr.get(i).getKaptAddr().contains(emdNameArray[j])) {
					newAddrList.add(aptAddr.get(i));
				}
			}
		}System.out.println(newAddrList);System.out.println(newAddrList.size());
		
		
		
//		for(int q = 0; q<aptAddr.size();q++){
//			if(!newAddrList.contains(aptAddr.get(q))){
//				newAddrList.add(aptAddr.get(q));
//			}
//		}
//		System.out.println(newAddrList);
//		System.out.println(newAddrList.size());
//		
		
		
		
		
//		
		return newAddrList;
	}
	
	

}
