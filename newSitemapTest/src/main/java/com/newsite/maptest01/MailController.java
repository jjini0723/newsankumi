package com.newsite.maptest01;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newsite.maptest01.vo.SendMail;

@Controller
public class MailController {

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
   public void emailcheck(String user, HttpSession session)
   {
	  System.out.println(user);
	  
      SendMail mail = new SendMail("", null, null);
      
      int code = mail.test(user);
      
      num = code;
      
      System.out.println("메일 전송완료.");
   }
   
   @ResponseBody
   @RequestMapping(value = "checknum", method = RequestMethod.POST)
   public int checknum()
   {
	   System.out.println(num);
	   return num;
   }
   
   private static int num;
   
   
}
