package com.newsite.maptest01.vo;

public class ConditionResult{
		
	public double getProperty(String key) throws Exception {
		return Double.parseDouble(this.getClass().getDeclaredField(key).get(this).toString()); 
	}	
		
	private String si;//시
	private String gu;//구
	private String dong;//동
	private int citycode;//도시코드	
	private double totalScore;//조건 합산 최종점수(가중치포함)
	private double leasingPrice;//전세가
	private double salePrice;//매매가
	
	//이하 조건들..	
	private double safety_fire;
	private double safety_traffic;
	private double safety_crime;
	private double safety_safety;
	private double safety_infection;
	private double safety_nature;
	
	private double people_foreign;
	private double people_density;
	
	private double nature_park;
	private double nature_pollution;
	
	private double life_convenient;
	private double life_shopping;
	private double life_restaurant;
	private double life_publicTraffic;
	
	private double education_student;
	private double education_academy;
	
	private double welfare_childCare;
	private double welfare_medical;
	private double welfare_society;
	private double welfare_culture;
	private double welfare_sports;
	private double welfare_salon;
		
	public ConditionResult() {}

	public ConditionResult(String si, String gu, String dong, int citycode, double totalScore, double leasingPrice,
			double salePrice, double safety_fire, double safety_traffic, double safety_crime, double safety_safety,
			double safety_infection, double safety_nature, double people_foreign, double people_density,
			double nature_park, double nature_pollution, double life_convenient, double life_shopping,
			double life_restaurant, double life_publicTraffic, double education_student, double education_academy,
			double welfare_childCare, double welfare_medical, double welfare_society, double welfare_culture,
			double welfare_sports, double welfare_salon) {
		super();
		this.si = si;
		this.gu = gu;
		this.dong = dong;
		this.citycode = citycode;
		this.totalScore = totalScore;
		this.leasingPrice = leasingPrice;
		this.salePrice = salePrice;
		this.safety_fire = safety_fire;
		this.safety_traffic = safety_traffic;
		this.safety_crime = safety_crime;
		this.safety_safety = safety_safety;
		this.safety_infection = safety_infection;
		this.safety_nature = safety_nature;
		this.people_foreign = people_foreign;
		this.people_density = people_density;
		this.nature_park = nature_park;
		this.nature_pollution = nature_pollution;
		this.life_convenient = life_convenient;
		this.life_shopping = life_shopping;
		this.life_restaurant = life_restaurant;
		this.life_publicTraffic = life_publicTraffic;
		this.education_student = education_student;
		this.education_academy = education_academy;
		this.welfare_childCare = welfare_childCare;
		this.welfare_medical = welfare_medical;
		this.welfare_society = welfare_society;
		this.welfare_culture = welfare_culture;
		this.welfare_sports = welfare_sports;
		this.welfare_salon = welfare_salon;
	}

	public String getSi() {
		return si;
	}

	public void setSi(String si) {
		this.si = si;
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

	public int getCitycode() {
		return citycode;
	}

	public void setCitycode(int citycode) {
		this.citycode = citycode;
	}

	public double getTotalScore() {
		return totalScore;
	}

	public void setTotalScore(double totalScore) {
		this.totalScore = totalScore;
	}

	public double getLeasingPrice() {
		return leasingPrice;
	}

	public void setLeasingPrice(double leasingPrice) {
		this.leasingPrice = leasingPrice;
	}

	public double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(double salePrice) {
		this.salePrice = salePrice;
	}

	public double getSafety_fire() {
		return safety_fire;
	}

	public void setSafety_fire(double safety_fire) {
		this.safety_fire = safety_fire;
	}

	public double getSafety_traffic() {
		return safety_traffic;
	}

	public void setSafety_traffic(double safety_traffic) {
		this.safety_traffic = safety_traffic;
	}

	public double getSafety_crime() {
		return safety_crime;
	}

	public void setSafety_crime(double safety_crime) {
		this.safety_crime = safety_crime;
	}

	public double getSafety_safety() {
		return safety_safety;
	}

	public void setSafety_safety(double safety_safety) {
		this.safety_safety = safety_safety;
	}

	public double getSafety_infection() {
		return safety_infection;
	}

	public void setSafety_infection(double safety_infection) {
		this.safety_infection = safety_infection;
	}

	public double getSafety_nature() {
		return safety_nature;
	}

	public void setSafety_nature(double safety_nature) {
		this.safety_nature = safety_nature;
	}

	public double getPeople_foreign() {
		return people_foreign;
	}

	public void setPeople_foreign(double people_foreign) {
		this.people_foreign = people_foreign;
	}

	public double getPeople_density() {
		return people_density;
	}

	public void setPeople_density(double people_density) {
		this.people_density = people_density;
	}

	public double getNature_park() {
		return nature_park;
	}

	public void setNature_park(double nature_park) {
		this.nature_park = nature_park;
	}

	public double getNature_pollution() {
		return nature_pollution;
	}

	public void setNature_pollution(double nature_pollution) {
		this.nature_pollution = nature_pollution;
	}

	public double getLife_convenient() {
		return life_convenient;
	}

	public void setLife_convenient(double life_convenient) {
		this.life_convenient = life_convenient;
	}

	public double getLife_shopping() {
		return life_shopping;
	}

	public void setLife_shopping(double life_shopping) {
		this.life_shopping = life_shopping;
	}

	public double getLife_restaurant() {
		return life_restaurant;
	}

	public void setLife_restaurant(double life_restaurant) {
		this.life_restaurant = life_restaurant;
	}

	public double getLife_publicTraffic() {
		return life_publicTraffic;
	}

	public void setLife_publicTraffic(double life_publicTraffic) {
		this.life_publicTraffic = life_publicTraffic;
	}

	public double getEducation_student() {
		return education_student;
	}

	public void setEducation_student(double education_student) {
		this.education_student = education_student;
	}

	public double getEducation_academy() {
		return education_academy;
	}

	public void setEducation_academy(double education_academy) {
		this.education_academy = education_academy;
	}

	public double getWelfare_childCare() {
		return welfare_childCare;
	}

	public void setWelfare_childCare(double welfare_childCare) {
		this.welfare_childCare = welfare_childCare;
	}

	public double getWelfare_medical() {
		return welfare_medical;
	}

	public void setWelfare_medical(double welfare_medical) {
		this.welfare_medical = welfare_medical;
	}

	public double getWelfare_society() {
		return welfare_society;
	}

	public void setWelfare_society(double welfare_society) {
		this.welfare_society = welfare_society;
	}

	public double getWelfare_culture() {
		return welfare_culture;
	}

	public void setWelfare_culture(double welfare_culture) {
		this.welfare_culture = welfare_culture;
	}

	public double getWelfare_sports() {
		return welfare_sports;
	}

	public void setWelfare_sports(double welfare_sports) {
		this.welfare_sports = welfare_sports;
	}

	public double getWelfare_salon() {
		return welfare_salon;
	}

	public void setWelfare_salon(double welfare_salon) {
		this.welfare_salon = welfare_salon;
	}

	@Override
	public String toString() {
		return "ConditionResult [si=" + si + ", gu=" + gu + ", dong=" + dong + ", citycode=" + citycode
				+ ", totalScore=" + totalScore + ", leasingPrice=" + leasingPrice + ", salePrice=" + salePrice
				+ ", safety_fire=" + safety_fire + ", safety_traffic=" + safety_traffic + ", safety_crime="
				+ safety_crime + ", safety_safety=" + safety_safety + ", safety_infection=" + safety_infection
				+ ", safety_nature=" + safety_nature + ", people_foreign=" + people_foreign + ", people_density="
				+ people_density + ", nature_park=" + nature_park + ", nature_pollution=" + nature_pollution
				+ ", life_convenient=" + life_convenient + ", life_shopping=" + life_shopping + ", life_restaurant="
				+ life_restaurant + ", life_publicTraffic=" + life_publicTraffic + ", education_student="
				+ education_student + ", education_academy=" + education_academy + ", welfare_childCare="
				+ welfare_childCare + ", welfare_medical=" + welfare_medical + ", welfare_society=" + welfare_society
				+ ", welfare_culture=" + welfare_culture + ", welfare_sports=" + welfare_sports + ", welfare_salon="
				+ welfare_salon + "]";
	}

	
	
}
