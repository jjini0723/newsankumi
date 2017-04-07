package com.newsite.maptest01;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(){
		return "home";
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

}
