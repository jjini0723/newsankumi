package com.newsite.maptest01.vo;

import java.io.Serializable;

public class GuGwanhal implements Serializable{
	String gu;
	String ghName;
	
	
	public GuGwanhal() {
		super();
	}
	
	public GuGwanhal(String gu, String ghName) {
		super();
		this.gu = gu;
		this.ghName = ghName;
	}
	public String getGu() {
		return gu;
	}
	public void setGu(String gu) {
		this.gu = gu;
	}
	public String getGhName() {
		return ghName;
	}
	public void setGhName(String ghName) {
		this.ghName = ghName;
	}
	@Override
	public String toString() {
		return "GuGwanhal [gu=" + gu + ", ghName=" + ghName + "]";
	};
	
	

}
