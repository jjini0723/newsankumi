package com.newsite.maptest01.vo;

import java.io.Serializable;

public class emdName implements Serializable {
	private String emdName1;
	private String emdName2;
	private String emdName3;
	private String emdName4;
	private String emdName5;
	
	
	
	public emdName(){}
	
	public emdName(String emdName1, String emdName2, String emdName3, String emdName4, String emdName5) {
		super();
		this.emdName1 = emdName1;
		this.emdName2 = emdName2;
		this.emdName3 = emdName3;
		this.emdName4 = emdName4;
		this.emdName5 = emdName5;
	}


	public String getEmdName1() {
		return emdName1;
	}


	public void setEmdName1(String emdName1) {
		this.emdName1 = emdName1;
	}


	public String getEmdName2() {
		return emdName2;
	}


	public void setEmdName2(String emdName2) {
		this.emdName2 = emdName2;
	}


	public String getEmdName3() {
		return emdName3;
	}


	public void setEmdName3(String emdName3) {
		this.emdName3 = emdName3;
	}


	public String getEmdName4() {
		return emdName4;
	}


	public void setEmdName4(String emdName4) {
		this.emdName4 = emdName4;
	}


	public String getEmdName5() {
		return emdName5;
	}


	public void setEmdName5(String emdName5) {
		this.emdName5 = emdName5;
	}


	@Override
	public String toString() {
		return "emdName [emdName1=" + emdName1 + ", emdName2=" + emdName2 + ", emdName3=" + emdName3 + ", emdName4="
				+ emdName4 + ", emdName5=" + emdName5 + "]";
	}
	
	
	

	

}
