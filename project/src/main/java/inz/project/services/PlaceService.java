package inz.project.services;

import java.util.List;

import inz.project.models.Place;

public interface PlaceService {

	Place getPlaceById(Long id);
	List<Place> getPlaces();
}
