package com.newsite.maptest01.vo;

public class aptsale {
	private String goyucode;
	private String salegubun;
	private String aptsize;
	private String sale;
	private String wolse;
	private String ploor;
	private String commitdate;
	
	public aptsale() {
	}

	public aptsale(String goyucode, String salegubun, String aptsize, String sale, String wolse, String ploor,
			String commitdate) {
		super();
		this.goyucode = goyucode;
		this.salegubun = salegubun;
		this.aptsize = aptsize;
		this.sale = sale;
		this.wolse = wolse;
		this.ploor = ploor;
		this.commitdate = commitdate;
	}

	public String getGoyucode() {
		return goyucode;
	}

	public void setGoyucode(String goyucode) {
		this.goyucode = goyucode;
	}

	public String getSalegubun() {
		return salegubun;
	}

	public void setSalegubun(String salegubun) {
		this.salegubun = salegubun;
	}

	public String getAptsize() {
		return aptsize;
	}

	public void setAptsize(String aptsize) {
		this.aptsize = aptsize;
	}

	public String getSale() {
		return sale;
	}

	public void setSale(String sale) {
		this.sale = sale;
	}

	public String getWolse() {
		return wolse;
	}

	public void setWolse(String wolse) {
		this.wolse = wolse;
	}

	public String getPloor() {
		return ploor;
	}

	public void setPloor(String ploor) {
		this.ploor = ploor;
	}

	public String getCommitdate() {
		return commitdate;
	}

	public void setCommitdate(String commitdate) {
		this.commitdate = commitdate;
	}

	@Override
	public String toString() {
		return "aptsale [goyucode=" + goyucode + ", salegubun=" + salegubun + ", aptsize=" + aptsize + ", sale=" + sale
				+ ", wolse=" + wolse + ", ploor=" + ploor + ", commitdate=" + commitdate + "]";
	}

	
	
	
}
