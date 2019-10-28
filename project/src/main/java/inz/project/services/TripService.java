package inz.project.services;

import java.util.List;
import java.util.Set;

import inz.project.models.Place;
import inz.project.models.Trip;
import inz.project.models.TripTag;

public interface TripService {
	Trip createTrip(Trip trip);
	List<Trip> getTrips();
	Trip getTripById(Long id);
	List<Trip> getTripsByUser(Long id);
	List<Trip> getTripsByTags(Set<TripTag> tags);
	
	List<String> getRegions(String region);
	List<Trip> getTripsByDuration(Long from, Long to);
	List<Trip> findTripByRegTagDur(String region, Set<TripTag> tag, Long durationFrom, Long durationTo);
	Trip updateTrip(Trip trip);
	List<Trip> getTripsByPlaceIncluded(Long id);
}
