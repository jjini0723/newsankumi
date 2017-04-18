package com.newsite.maptest01.vo;

import java.io.Serializable;

public class DongGu implements Serializable {
	private String gu;
	private String dong;
	
	
	
	
	
	public DongGu() {
	}
	
	public DongGu(String gu, String dong) {
		super();
		this.gu = gu;
		this.dong = dong;
	}
	public String getGu() {
		return gu;
	}
	public void setGu(String gu) {
		this.gu = gu;
	}
	public String getDong() {
		return dong;
	}
	public void setDong(String dong) {
		this.dong = dong;
	}

	@Override
	public String toString() {
		return "DongGu [gu=" + gu + ", dong=" + dong + "]";
	}

}
