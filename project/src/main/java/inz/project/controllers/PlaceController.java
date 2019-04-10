package inz.project.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.services.PlaceService;

@RestController
@RequestMapping("/api/places")
public class PlaceController {
	private final PlaceService placeService;
	
	public PlaceController(PlaceService placeService) {
		this.placeService=placeService;
	}
	
	@GetMapping("/{id}")
	Place getPlaceById(@PathVariable Long id) {
		return placeService.getPlaceById(id);
	}
	
	@GetMapping()
	List<Place> getPlaces(){
	return placeService.getPlaces();
	}
}
