package inz.project.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import inz.project.models.Place;
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
}
	