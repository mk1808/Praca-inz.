package inz.project.services;

import java.util.List;

import inz.project.models.Place;
import inz.project.models.PlaceCategory;

public interface PlaceService {

	Place getPlaceById(Long id);
	List<Place> getPlaces();
	List<Place> getPlacesByName(String name);
	List<String> getRegions(String region);
	List<Place> getPlacesByRegion(String region);
	List<Place> getPlacesByCategory(PlaceCategory category);
	List<Place> findPlaceByRegCat(String region, PlaceCategory category);
	List<Place> findPlaceByRegCatNam(String region, String name, PlaceCategory category );
	Place createPlace(Place place);
	Place updatePlace(Long id, Place place);
	void deletePlace(Long id);
	
}
