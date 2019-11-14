package inz.project.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.models.Schedule;
import inz.project.models.Trip;
import inz.project.repositories.PositionInTripRepository;
import inz.project.services.PositionInTripService;

@Service
public class PositionInTripServiceImpl implements PositionInTripService{
	
	
	@Autowired PositionInScheduleServiceImpl positionInScheduleService;
	@Autowired PositionInTripRepository positionInTripRepository;
	@Autowired TripServiceImpl tripService;
	@Autowired PlaceServiceImpl placeService;
	@Autowired ScheduleServiceImpl scheduleService;
	
	@Override
	public PositionInTrip createPositionInTrip(PositionInTrip positionInTrip) {
		Place place = this.placeService.getPlaceById(positionInTrip.getPlace().getId());
		Trip trip = this.tripService.getTripById(positionInTrip.getTrip().getId());
		positionInTrip.setPlace(place);
		positionInTrip.setTrip(trip);
		PositionInSchedule positionSchedule = new PositionInSchedule();
		PositionInTrip positionTrip = this.positionInTripRepository.save(positionInTrip);
		positionSchedule.setPositionInTrip(positionTrip);
		PositionInSchedule newPosition = this.positionInScheduleService.createPositionInSchedule(positionSchedule);
		
	/*	Schedule schedule = positionInTrip.getTrip().getSchedule();
		List<PositionInSchedule> oldPosition = schedule.getPositionsInSchedule();
		oldPosition.add(newPosition);
		schedule.setPositionsInSchedule(oldPosition);
		this.scheduleService.updateSchedule(schedule.getId(), schedule);*/
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
	public List<PositionInTrip> getAllPositionsByTripId(Long id){
		Trip trip = this.tripService.getTripById(id);
		List<PositionInTrip>positions = this.positionInTripRepository.getPositionInTripByTrip(trip);
		return positions;
	}
	
	@Override
	public PositionInTrip getPositionInTripByTripAndPlace(Long idTrip, Long idPlace) {
		Place place = this.placeService.getPlaceById(idPlace);
		Trip trip = this.tripService.getTripById(idTrip);
		return this.positionInTripRepository.getPositionInTripByTripAndPlace(trip, place);
	}
	
	@Override
	public void deletePositionInTrip(Long idPlace, Long idTrip) {
		PositionInTrip posInTrip = this.getPositionInTripByTripAndPlace(idTrip, idPlace);
		PositionInSchedule posInSchedule = 
				this.positionInScheduleService.getPositionInScheduleByPositionInTrip(posInTrip.getId());
		this.positionInScheduleService.deletePositionInSchedule(posInSchedule.getId());
		this.positionInTripRepository.deleteById(posInTrip.getId());
	}
	
	
	

}
