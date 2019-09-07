package inz.project.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.models.PlaceCategory;
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
	
	@GetMapping("/filter")
	List<Place> getPlaceByName
	(@RequestParam(value ="name") String name) 
	{
		return placeService.getPlacesByName(name);
	}
	
	@GetMapping("/filter2")
	Set<String> getRegions
	(@RequestParam(value ="region") String region) 
	{
		Set<String> regionSet = new HashSet<String>(placeService.getRegions(region)); 
		return regionSet;
	}
	
	@GetMapping("regiooon/{region}")
	List<Place> getPlacesByRegion(@PathVariable String region) {
		return placeService.getPlacesByRegion(region);
	}
	
	@GetMapping("category/{category}")
	List<Place> getPlacesByCategory(@PathVariable PlaceCategory category) {
		return placeService.getPlacesByCategory(category);
	}
	
	@GetMapping("regioon/category/name/{region}/{category}/{name}")
	List<Place> getPlacesByRegCatNam(@PathVariable String region,
			@PathVariable String name,
			@PathVariable PlaceCategory category) {
		return placeService.findPlaceByRegCatNam(region, name, category);
	}
	
	@GetMapping("/region/category")
	List<Place> getPlacesByRegCat(@RequestParam(value ="region") String region,
			@RequestParam(value ="category") PlaceCategory category) {
		List<Place> places = placeService.findPlaceByRegCat(region, category);
		System.out.println("nnn");
		
		System.out.println(category);
		System.out.println(region);
		return places;
	}
	
	@GetMapping()
	List<Place> getPlaces(){
	return placeService.getPlaces();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Place createPlace(@RequestBody Place place) {
		return placeService.createPlace(place);
	}
	
	@PutMapping ("/{id}")
	Place updatePlace(@PathVariable Long id, @RequestBody Place place) {
		return placeService.updatePlace(id, place);
	}
	
	@DeleteMapping ("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void deletePlace(@PathVariable Long id) {
		
	}
	
	
}
