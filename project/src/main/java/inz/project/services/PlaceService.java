package inz.project.services;

import java.util.List;

import inz.project.models.Place;

public interface PlaceService {

	Place getPlaceById(Long id);
	List<Place> getPlaces();
	List<Place> getPlacesByName(String name);
	List<String> getPlacesByRegion(String region);
	Place createPlace(Place place);
	Place updatePlace(Long id, Place place);
	void deletePlace(Long id);
	
}
