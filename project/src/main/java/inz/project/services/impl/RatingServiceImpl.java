package inz.project.services.impl;

import java.util.List;
import java.util.stream.Collectors;

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
		if(this.ratingRepository.getRatingByPlaceAndUser(myPlace, myUser)!=null)
			return this.ratingRepository.getRatingByPlaceAndUser(myPlace, myUser);
		else return null;
	}
	
	@Override
	public Rating createRating(Rating rating) {
		Rating saved=new Rating();
		if(rating.getPlace()==null) {
			Trip trip = this.tripService.getTripById(rating.getTrip().getId());
			int numberOfRatingsTrip=this.getRatingByTrip(rating.getTrip().getId()).size();
			Rating newRating = this.getRatingByTripAndUser(rating.getTrip().getId(), rating.getUser().getId()); 
			if(newRating==null) {
				saved = this.ratingRepository.save(rating);
				Double newMeanTrip=(trip.getMean()*numberOfRatingsTrip+rating.getValue())/(numberOfRatingsTrip+1);
				trip.setMean(newMeanTrip);
				this.tripService.updateTrip(trip);
			}
			else {
				List<Rating> allRatings = this.getRatingByTrip(rating.getTrip().getId());
				Double sum=allRatings.stream().map(x->x.getValue()).mapToDouble(f->f.doubleValue()).sum();
				Double newMeanTrip=(sum-newRating.getValue()+rating.getValue())/numberOfRatingsTrip;
				trip.setMean(newMeanTrip);
				this.tripService.updateTrip(trip);
				newRating.setValue(rating.getValue());
				saved = this.ratingRepository.save(newRating);
			}
		}
		else {
			Place place = this.placeService.getPlaceById(rating.getPlace().getId());
			int numberOfRatingsPlace=this.getRatingByPlace(rating.getPlace().getId()).size();
			
			Rating newRating = this.getRatingByPlaceAndUser(rating.getPlace().getId(), rating.getUser().getId()); 
			if(newRating==null) {
				saved = this.ratingRepository.save(rating);
				Double newMeanPlace=(place.getMean()*numberOfRatingsPlace+rating.getValue())/(numberOfRatingsPlace+1);
				place.setMean(newMeanPlace);
				this.placeService.updatePlace(place);
			
			}
			else {
				List<Rating> allRatings = this.getRatingByPlace(rating.getPlace().getId());
				Double sum=allRatings.stream().map(x->x.getValue()).mapToDouble(f->f.doubleValue()).sum();
				Double newMeanPlace=(sum-newRating.getValue()+rating.getValue())/numberOfRatingsPlace;
				newRating.setValue(rating.getValue());
				place.setMean(newMeanPlace);
				this.placeService.updatePlace(place);
				saved = this.ratingRepository.save(newRating);
				
			}
			
		}
		return saved;
		
	}
	
	@Override
	public List<Rating> getRatingByTrip(Long trip){
		Trip tripObj = this.tripService.getTripById(trip);
		List<Rating> list = this.ratingRepository.getRatingByTrip(tripObj);
		return list;
	}
	
	@Override
	public List<Rating> getRatingByPlace(Long place){
		Place placeObj = this.placeService.getPlaceById(place);
		List<Rating> list = this.ratingRepository.getRatingByPlace(placeObj);
		return list;
	}
	
	

}
