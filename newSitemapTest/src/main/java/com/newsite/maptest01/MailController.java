package com.newsite.maptest01;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newsite.maptest01.DAO.saveDAO;
import com.newsite.maptest01.vo.SendMail;
import com.newsite.maptest01.vo.saveData;
import com.newsite.maptest01.vo.saveKeyCount;

@Controller
public class MailController {
	
	@Autowired
    saveDAO dao;

	@RequestMapping(value="mailTest", method=RequestMethod.POST)
	public String mailTest(){
		return "mailTest";
	}
	
	@RequestMapping(value="mailCheck", method=RequestMethod.GET)
	public String mailCheck(){
		return "mailCheck";
	}
	
	/**
    * 인증번호 보내기 
    * @return
    */
   @ResponseBody
   @RequestMapping(value="emailcheck", method=RequestMethod.POST)
   public int emailcheck(String user, HttpSession session)
   {
	  //System.out.println(user);
	  
      SendMail mail = new SendMail("", null, null);
      
      int code = mail.test(user);
      
      num = code;
      
      System.out.println(code);
      System.out.println(num);
      
      return code;
      //System.out.println("메일 전송완료.");
   }
   
   @ResponseBody
   @RequestMapping(value = "checknum", method = RequestMethod.POST)
   public int checknum()
   {
	   //System.out.println(num);
	   return num;
   }
   
   private static int num;
   
   @ResponseBody
   @RequestMapping(value = "save" , method=RequestMethod.POST)
   public void save(@RequestBody saveData save){
      System.out.println("컨트롤러"+save);
      try {
         dao.save(save);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
    @ResponseBody
    @RequestMapping(value="loadData", method=RequestMethod.POST)
    public ArrayList<saveData> loadData(String email, String number){
       System.out.println(email);
       System.out.println(number);
       ArrayList<saveData> result = new ArrayList<>();
       try {
         result = dao.loadData(email,number);
      } catch (Exception e) {
         e.printStackTrace();
      }
       System.out.println("콘트롤러"+result);
       return result;
    }
    @ResponseBody
    @RequestMapping(value="loadKeyCount", method=RequestMethod.POST)
    public ArrayList<saveKeyCount> loadKeyCount(){
       ArrayList<saveKeyCount> result = new ArrayList<>();
       try {
         result = dao.loadKeyCount();
      } catch (Exception e) {
         e.printStackTrace();
      }
       System.out.println("콘트롤러"+result);
       return result;
    }
    
    @ResponseBody
    @RequestMapping(value = "saveKeyCount" , method=RequestMethod.POST)
    public void saveKeyCount(@RequestBody saveKeyCount savekeycount){
       try {
          dao.saveKeyCount(savekeycount);
       } catch (Exception e) {
          e.printStackTrace();
       }
    }
   
}
