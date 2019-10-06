package inz.project.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.models.Trip;
import inz.project.repositories.PositionInTripRepository;
import inz.project.services.PositionInTripService;

@Service
public class PositionInTripServiceImpl implements PositionInTripService{
	
	
	@Autowired PositionInScheduleServiceImpl positionInScheduleService;
	@Autowired PositionInTripRepository positionInTripRepository;
	@Autowired TripServiceImpl tripService;
	@Autowired PlaceServiceImpl placeService;
	
	@Override
	public PositionInTrip createPositionInTrip(PositionInTrip positionInTrip) {
		PositionInSchedule positionSchedule = new PositionInSchedule();
		PositionInTrip positionTrip = this.positionInTripRepository.save(positionInTrip);
		positionSchedule.setPositionInTrip(positionTrip);
		this.positionInScheduleService.createPositionInSchedule(positionSchedule);
		return positionTrip;
	}
	
	@Override
	public PositionInTrip getPositionInTripById(Long id) {
		return this.positionInTripRepository.findById(id).get();
	}
	
	@Override
	public 	List<Place> getPositionInTripByTripId(Long id){
		Trip trip = this.tripService.getTripById(id);
		List<PositionInTrip>positions = this.positionInTripRepository.getPositionInTripByTrip(trip);
		List<Place> places = new ArrayList<Place>();
		for (PositionInTrip pos:positions) {
			places.add(pos.getPlace());
		}
		return places;
	}
	
	@Override
	public PositionInTrip getPositionInTripByTripAndPlace(Long idTrip, Long idPlace) {
		Place place = this.placeService.getPlaceById(idPlace);
		Trip trip = this.tripService.getTripById(idTrip);
		return this.positionInTripRepository.getPositionInTripByTripAndPlace(trip, place);
	}
	
	
	

}
