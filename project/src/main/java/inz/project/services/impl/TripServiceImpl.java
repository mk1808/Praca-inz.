package inz.project.services.impl;


import org.springframework.stereotype.Service;
import inz.project.services.TripService;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.repositories.TripRepository;

@Service
public class TripServiceImpl implements TripService {

	private final TripRepository tripRepository;
	public TripServiceImpl (TripRepository tripRepository)
	{
		this.tripRepository=tripRepository;
	}
	
	@Override
	public Trip createTrip(Trip trip) {
		return this.tripRepository.save(trip);
		
	}
	
}
