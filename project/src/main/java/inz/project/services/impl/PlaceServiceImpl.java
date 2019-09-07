package inz.project.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.PlaceCategory;
import inz.project.repositories.PlaceRepository;
import inz.project.services.PlaceService;

@Service
public class PlaceServiceImpl implements PlaceService{
	
	private final PlaceRepository placeRepository;
	public PlaceServiceImpl (PlaceRepository placeRepository)
	{
		this.placeRepository=placeRepository;
	}
	
	@Override
	public Place getPlaceById(Long id) {
		return this.placeRepository.findById(id).get();
	}
	
	@Override
	public List<Place> getPlaces(){
		return this.placeRepository.findAll();
	}
	
	@Override
	public Place createPlace(Place place) {
		
		return this.placeRepository.save(place);
	}
	
	@Override
	public Place updatePlace(Long id, Place place) {
		place.setId(id);
		return this.placeRepository.save(place);
	}
	
	@Override
	public void deletePlace(Long id) {
		this.placeRepository.deleteById(id);
	}
	
	@Override
	public List<Place> getPlacesByName(String name){
		return this.placeRepository.findPlaceByNames(name);
	}
	
	@Override
	public List<String> getRegions(String region){
		return this.placeRepository.findRegions(region);
	}
	

	
	@Override
	public List<Place> getPlacesByRegion(String region){
		return this.placeRepository.getPlacesByRegion(region);
	}
	
	@Override
	public List<Place> getPlacesByCategory(PlaceCategory category){
		return this.placeRepository.getPlacesByCategory(category);
	}
	
	@Override
	public List<Place> findPlaceByRegCatNam(String region, String name, PlaceCategory category ){
		return this.placeRepository.findPlaceByRegCatNam(region, name, category);
	}
	
	@Override
	public List<Place> findPlaceByRegCat(String region, PlaceCategory category){
		return this.placeRepository.findPlaceByRegCat(region, category);
	}
}
	