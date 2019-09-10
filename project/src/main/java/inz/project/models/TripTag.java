package inz.project.models;

public enum TripTag {

	Przyroda("Przyroda"), 
	Zabytki("Zabytki"), 
	Zwiedzanie("Zwiedzanie"), 
	AktywnyWypoczynek("Aktywny wypoczynek"), 
	Weekend("Weekend");
	
	String name;

	TripTag(){}
	TripTag(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
