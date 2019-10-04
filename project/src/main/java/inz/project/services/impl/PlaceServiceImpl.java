package inz.project.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import inz.project.models.OpeningHours;
import inz.project.models.Place;
import inz.project.models.PlaceCategory;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.repositories.OpeningHoursRepository;
import inz.project.repositories.PlaceRepository;
import inz.project.repositories.UserRepository;
import inz.project.services.PlaceService;

@Service
public class PlaceServiceImpl implements PlaceService{
	
	private final PlaceRepository placeRepository;
	private final OpeningHoursRepository openingHoursRepository;
	private final UserServiceImpl userService;
	public PlaceServiceImpl (PlaceRepository placeRepository, UserServiceImpl userService,
			OpeningHoursRepository openingHoursRepository)
	{
		this.placeRepository=placeRepository;
		this.userService=userService;
		this.openingHoursRepository=openingHoursRepository;
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
		OpeningHours hours = new OpeningHours(
				place.getHours().getMon()==null?true:false,
				place.getHours().getTue()==null?true:false,
				place.getHours().getWed()==null?true:false,
				place.getHours().getThu()==null?true:false,
				place.getHours().getFri()==null?true:false,
				place.getHours().getSat()==null?true:false,
				place.getHours().getSun()==null?true:false,
				place.getHours().getMonOpen(),
				place.getHours().getMonClose(),
				place.getHours().getTueOpen(),
				place.getHours().getTueClose(),
				place.getHours().getWedOpen(),
				place.getHours().getWedClose(),
				place.getHours().getThuOpen(),
				place.getHours().getThuClose(),
				place.getHours().getFriOpen(),
				place.getHours().getFriClose(),
				place.getHours().getSatOpen(),
				place.getHours().getSatClose(),
				place.getHours().getSunOpen(),
				place.getHours().getSunClose()
				);
		
		OpeningHours newHours = this.openingHoursRepository.save(hours);
		place.setHours(newHours);
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
		System.out.print(category);
		return this.placeRepository.getPlacesByCategory(category);
	}
	
	@Override
	public List<Place> findPlaceByRegCatNam(String region, String name, PlaceCategory category ){
		return this.placeRepository.findPlaceByRegCatNam(region, name, category);
	}
	
	@Override
	public List<Place> findPlaceByRegCat(String region, PlaceCategory category){
		 List<Place>places = new ArrayList<Place>();
		 if (region==""||region==null) {places=this.placeRepository.getPlacesByCategory(category);}
		 else if (category==null) {places=this.placeRepository.getPlacesByRegion(region);}
		 else {places = this.placeRepository.getPlacesByRegionAndCategory(region, category); }
		 return places; 
	}
	
	@Override
	public List<Place> getPlacesByUser(Long id){
		User user = userService.getUserById(id);
		return this.placeRepository.getPlacesByUser(user);
	}
}
	