package inz.project.services;

import java.util.List;
import java.util.Set;

import inz.project.models.Trip;
import inz.project.models.TripTag;

public interface TripService {
	Trip createTrip(Trip trip);
	List<Trip> getTrips();
	Trip getTripById(Long id);
	List<Trip> getTripsByUser(Long id);
	List<Trip> getTripsByTags(Set<TripTag> tags);
}
