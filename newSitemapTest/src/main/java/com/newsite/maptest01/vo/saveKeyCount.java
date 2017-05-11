package com.newsite.maptest01.vo;

public class saveKeyCount {
	private String tmapCarKeyCount;
	private String tmapWalkKeyCount;
	private String googleKeyCount;
	
	public saveKeyCount() {
	}

	public saveKeyCount(String tmapCarKeyCount, String tmapWalkKeyCount, String googleKeyCount) {
		super();
		this.tmapCarKeyCount = tmapCarKeyCount;
		this.tmapWalkKeyCount = tmapWalkKeyCount;
		this.googleKeyCount = googleKeyCount;
	}

	public String getTmapCarKeyCount() {
		return tmapCarKeyCount;
	}

	public void setTmapCarKeyCount(String tmapCarKeyCount) {
		this.tmapCarKeyCount = tmapCarKeyCount;
	}

	public String getTmapWalkKeyCount() {
		return tmapWalkKeyCount;
	}

	public void setTmapWalkKeyCount(String tmapWalkKeyCount) {
		this.tmapWalkKeyCount = tmapWalkKeyCount;
	}

	public String getGoogleKeyCount() {
		return googleKeyCount;
	}

	public void setGoogleKeyCount(String googleKeyCount) {
		this.googleKeyCount = googleKeyCount;
	}

	@Override
	public String toString() {
		return "saveKeyCount [tmapCarKeyCount=" + tmapCarKeyCount + ", tmapWalkKeyCount=" + tmapWalkKeyCount
				+ ", googleKeyCount=" + googleKeyCount + "]";
	}
	
	
}
