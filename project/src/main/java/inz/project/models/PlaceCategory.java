package inz.project.models;

public enum PlaceCategory {

	MUSEUM("Muzeum"), 
	ART_GALLERY("Galeria sztuki"), 
	PARK("Park"), 
	MONUMENT("Pomnik"),
	BUILDING("Budynek"),
	OTHER("Inne");

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


