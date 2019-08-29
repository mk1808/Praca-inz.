package inz.project.services.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import inz.project.services.TripService;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.repositories.TripRepository;

@Service
public class TripServiceImpl implements TripService {

	public TripServiceImpl() {}
	
	@Autowired TripRepository tripRepository;
	@Autowired UserServiceImpl userService;
	
	@Override
	public Trip createTrip(Trip trip) {
		return this.tripRepository.save(trip);
		
	}

	@Override
	public List<Trip> getTrips(){
		return this.tripRepository.findAll();
	}
	
	@Override
	public Trip getTripById(Long id) {
		return this.tripRepository.findById(id).get();
	}
	
	@Override
	public List<Trip> getTripsByUser(Long id){
		User user = userService.getUserById(id);
		return this.tripRepository.getTripsByUser(user);
	}
}
