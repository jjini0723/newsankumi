package com.newsite.maptest01.vo;

public class aptcode {
	private String goyucode;
	private String xloc;
	private String yloc;
	
	public aptcode() {
		// TODO Auto-generated constructor stub
	}

	public aptcode(String goyucode, String xloc, String yloc) {
		super();
		this.goyucode = goyucode;
		this.xloc = xloc;
		this.yloc = yloc;
	}

	public String getGoyucode() {
		return goyucode;
	}

	public void setGoyucode(String goyucode) {
		this.goyucode = goyucode;
	}

	public String getXloc() {
		return xloc;
	}

	public void setXloc(String xloc) {
		this.xloc = xloc;
	}

	public String getYloc() {
		return yloc;
	}

	public void setYloc(String yloc) {
		this.yloc = yloc;
	}

	@Override
	public String toString() {
		return "aptcode [goyucode=" + goyucode + ", xloc=" + xloc + ", yloc=" + yloc + "]";
	}

	
	
	
	
}
