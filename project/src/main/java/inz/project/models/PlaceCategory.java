package inz.project.models;

public enum PlaceCategory {

	MUSEUM("MUSEUM"), 
	ART_GALLERY("ART_GALLERY"), 
	PARK("PARK"), 
	MONUMENT("MONUMENT"),
	BUILDING("BUILDING"),
	OTHER("OTHER");

	String name;

	PlaceCategory(){}
	PlaceCategory(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	
}


