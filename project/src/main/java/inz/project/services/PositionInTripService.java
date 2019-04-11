package inz.project.services;


import inz.project.models.PositionInTrip;
import inz.project.repositories.PositionInTripRepository;


public interface PositionInTripService {
	

	PositionInTrip createPositionInTrip(PositionInTrip positionInTrip);
	PositionInTrip getPositionInTripById(Long id) ;
}
