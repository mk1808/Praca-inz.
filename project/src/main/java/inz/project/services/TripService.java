package inz.project.services;

import java.util.List;

import inz.project.models.Trip;

public interface TripService {
	Trip createTrip(Trip trip);
	List<Trip> getTrips();
	Trip getTripById(Long id);
}
