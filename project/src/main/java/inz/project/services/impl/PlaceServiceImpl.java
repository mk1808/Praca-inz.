package inz.project.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import inz.project.models.OpeningHours;
import inz.project.models.Place;
import inz.project.models.PlaceCategory;
import inz.project.models.PositionInSchedule;
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
				place.getHours().getMon(),
				place.getHours().getTue(),
				place.getHours().getWed(),
				place.getHours().getThu(),
				place.getHours().getFri(),
				place.getHours().getSat(),
				place.getHours().getSun(),
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
		//place.getImage()
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
	
	public List<String> createHours(Long id){
		Place place=this.getPlaceById(id);
		List<String> hours = new ArrayList<String>();
		for(int i=0; i<7; i++) {
			hours.add(null);
		}
		if(place.getHours().getMon()) hours.set(0, place.getHours().getMonOpen().toString()+ 
				'-'+place.getHours().getMonClose().toString() );
		if(place.getHours().getTue()) hours.set(1, place.getHours().getTueOpen().toString()+ 
				'-'+place.getHours().getTueClose().toString() );
		if(place.getHours().getWed()) hours.set(2, place.getHours().getWedOpen().toString()+ 
				'-'+place.getHours().getWedClose().toString() );
		if(place.getHours().getThu()) hours.set(3, place.getHours().getThuOpen().toString()+ 
				'-'+place.getHours().getThuClose().toString() );
		if(place.getHours().getFri()) hours.set(4, place.getHours().getFriOpen().toString()+ 
				'-'+place.getHours().getFriClose().toString() );
		if(place.getHours().getSat()) hours.set(5, place.getHours().getSatOpen().toString()+ 
				'-'+place.getHours().getSatClose().toString() );
		if(place.getHours().getSun()) hours.set(6, place.getHours().getSunOpen().toString()+ 
				'-'+place.getHours().getSunClose().toString() );
		//List<String> newHours = hours.stream().filter(h->h==hours.get(0).) 
		return hours;
		//		List<PositionInSchedule> posWOTime = list.stream().filter(p->p.getStartTime()==null).collect(Collectors.toList());
	}
	
	@Override
	public List<Place> getUncheckedPlaces(){
		return this.placeRepository.findPlacesByChecked(false);
	}
}
	