package inz.project.services.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import inz.project.services.TripService;
import inz.project.models.Place;
import inz.project.models.PlaceCategory;
import inz.project.models.Schedule;
import inz.project.models.Trip;
import inz.project.models.TripTag;
import inz.project.models.User;
import inz.project.repositories.TripRepository;

@Service
public class TripServiceImpl implements TripService {

	public TripServiceImpl() {}
	
	@Autowired TripRepository tripRepository;
	@Autowired UserServiceImpl userService;
	@Autowired ScheduleServiceImpl scheduleService;
	
	@Override
	public Trip createTrip(Trip trip) {
		Schedule schedule = new Schedule();
		trip.setSchedule(this.scheduleService.createSchedule(schedule));
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
	
	@Override
	public List<Trip> getTripsByTags(Set<TripTag> tags){
		return this.tripRepository.getTripsByTagsInOrderByTags(tags);
	}
	
	@Override
	public List<String> getRegions(String region){
		return this.tripRepository.findRegions(region);
	}
	
	@Override
	public List<Trip> getTripsByDuration(Long from, Long to){
		if (from==null)from = 1L;
		if (to==null) to=100L;
		return this.tripRepository.getTripsByDurationGreaterThanEqualAndDurationLessThanEqual(from, to);
	}
	
	
	
	@Override
	public List<Trip> findTripByRegTagDur(String region, Set<TripTag> tag, String durationFrom, String durationTo){
		 List<Trip>trips = new ArrayList<Trip>();
		 Boolean regB = (region==""||region==null)?false:true;
		 Boolean tagB =  (tag==null||tag.isEmpty())?false:true;
		 Boolean fromB = (durationFrom==""||durationFrom==null)?false:true;
		 Boolean toB = (durationTo==""||durationTo==null)?false:true;
		 Boolean durB = fromB||toB;
		 if(!regB&&!tagB) {trips = this.tripRepository.getTripsByDurationGreaterThanEqualAndDurationLessThanEqual(
				 Long.valueOf(durationFrom),Long.valueOf(durationTo));}
		 else if (!regB&&!durB) {trips.addAll(this.tripRepository.getTripsByTagsInOrderByTags(tag));}
		 else if (!durB&&!tagB) {trips = this.tripRepository.getTripsByRegion(region);}
		 else if (!durB) {}
		 else if (!regB) {}
		 else if (!tagB) {}
		 else {}
		 return trips;
	}
}
