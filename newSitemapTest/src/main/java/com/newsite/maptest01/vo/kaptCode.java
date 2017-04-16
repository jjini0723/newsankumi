package com.newsite.maptest01.vo;

public class kaptCode {
	private String emd_nm;
	private String kaptcode;
	
	public kaptCode() {
		// TODO Auto-generated constructor stub
	}

	public kaptCode(String emd_nm, String kaptcode) {
		super();
		this.emd_nm = emd_nm;
		this.kaptcode = kaptcode;
	}

	public String getEmd_nm() {
		return emd_nm;
	}

	public void setEmd_nm(String emd_nm) {
		this.emd_nm = emd_nm;
	}

	public String getKaptcode() {
		return kaptcode;
	}

	public void setKaptcode(String kaptcode) {
		this.kaptcode = kaptcode;
	}

	@Override
	public String toString() {
		return "kaptCode [emd_nm=" + emd_nm + ", kaptcode=" + kaptcode + "]";
	}
	
	
	
	
}
