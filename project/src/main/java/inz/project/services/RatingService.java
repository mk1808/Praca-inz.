package inz.project.services;

import java.util.List;

import inz.project.models.Place;
import inz.project.models.Rating;
import inz.project.models.Trip;

public interface RatingService {

	Rating getRatingByTripAndUser(Long trip, Long user);
	Rating getRatingByPlaceAndUser(Long place, Long user);
	Rating createRating(Rating rating);
	List<Rating> getRatingByTrip(Long trip);
	List<Rating> getRatingByPlace(Long place);
	
	
	
}
