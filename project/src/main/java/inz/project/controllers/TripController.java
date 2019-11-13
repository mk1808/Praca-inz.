package inz.project.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Trip;
import inz.project.models.TripTag;
import inz.project.models.User;
import inz.project.repositories.TripRepository;
import inz.project.services.TripService;
import inz.project.services.UserService;

@RestController
@RequestMapping("/api/trips")
public class TripController {
	
	@Autowired TripRepository tripRepository;
	private final TripService tripService;
	public TripController(TripService tripService) {
		this.tripService=tripService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Trip createTrip(@RequestBody Trip trip) {
		return tripService.createTrip(trip);
	}
	
	@GetMapping()
	List<Trip> getTrips(){
	return tripService.getTrips();
	}
	
	@GetMapping("/{id}")
	Trip getTripById(@PathVariable Long id) {
		return tripService.getTripById(id);
	}
	
	@GetMapping("/user/{id}")
	List<Trip> getTripByUser(@PathVariable Long id) {
		return tripService.getTripsByUser(id);
	}
	
	@GetMapping("/tags")
	List<Trip> getTripByTags(@RequestParam (value ="tags") Collection<TripTag> tags) {
		List<TripTag> list = new ArrayList();
		Collections.sort(list);
		if (tags instanceof List)
		  list = (List)tags;
		else
		  list = new ArrayList(tags);
		
		
		Set set = new HashSet<TripTag>(list);
		return tripService.getTripsByTags(set);
	}
	
	@GetMapping("/filter")
	Set<String> getRegions (@RequestParam(value ="region") String region) 
	{
		Set<String> regionSet = new HashSet<String>(tripService.getRegions(region)); 
		return regionSet;
	}
	
	@GetMapping("/duration")
	List<Trip> getTripsByDuration (@RequestParam(value ="from") String from, @RequestParam(value ="to") String to) 
	{
		List<Trip> trips = this.tripService.getTripsByDuration(Long.valueOf(from), Long.valueOf(to));
		return trips;
	}
	
	@GetMapping("/all-filters")
	List<Trip> getTripsByRegTagDur (@RequestParam(value ="from") Long from, @RequestParam(value ="to") Long to,
			@RequestParam(value ="region") String region, @RequestParam(value ="tags") Collection<TripTag> tags) 
	{
		List<TripTag> list = new ArrayList();
		Collections.sort(list);
		if (tags instanceof List)
		  list = (List)tags;
		else
		  list = new ArrayList(tags);
		
		
		Set set = new HashSet<TripTag>(list);
		
		
		List<Trip> trips = this.tripService.findTripByRegTagDur(region, set, from, to);
		return trips;
	}
	
	@GetMapping("place")
	List<Trip> getTripsByDuration (@RequestParam(value ="place") Long id) 
	{
		List<Trip> trips = this.tripService.getTripsByPlaceIncluded(id);
		return trips;
	}
	
	
	@GetMapping("/belongs")
	Boolean ifBelongsToUser(@RequestParam(value ="trip") Long trip, 
			@RequestParam(value ="user") Long user) 
    {
		return tripService.ifBelongsToUser(trip, user);
    }
	
}
