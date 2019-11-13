package inz.project.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.Rating;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.repositories.RatingRepository;
import inz.project.services.RatingService;

@Service
public class RatingServiceImpl implements RatingService{
	
	@Autowired RatingRepository ratingRepository;
	@Autowired TripServiceImpl tripService;
	@Autowired PlaceServiceImpl placeService;
	@Autowired UserServiceImpl userService;
	
	@Override
	public Rating getRatingByTripAndUser(Long trip, Long user){
		Trip myTrip = this.tripService.getTripById(trip);
		User myUser = this.userService.getUserById(user);
		return this.ratingRepository.getRatingByTripAndUser(myTrip, myUser);
	}
	
	@Override
	public Rating getRatingByPlaceAndUser(Long place, Long user){
		Place myPlace = this.placeService.getPlaceById(place);
		User myUser = this.userService.getUserById(user);
		return this.ratingRepository.getRatingByPlaceAndUser(myPlace, myUser);
	}
	
	@Override
	public Rating createRating(Rating rating) {
		Rating saved=new Rating();
		if(rating.getPlace()==null) {
			Rating newRating = this.getRatingByTripAndUser(rating.getTrip().getId(), rating.getUser().getId()); 
			if(newRating==null) {
				saved = this.ratingRepository.save(rating);
			}
			else {
				newRating.setValue(rating.getValue());
				saved = this.ratingRepository.save(newRating);
			}
		}
		else {
			Rating newRating = this.getRatingByPlaceAndUser(rating.getPlace().getId(), rating.getUser().getId()); 
			if(newRating==null) {
				saved = this.ratingRepository.save(rating);
			}
			else {
				newRating.setValue(rating.getValue());
				saved = this.ratingRepository.save(newRating);
			}
			
		}
		return saved;
		
	}
	
	

}
