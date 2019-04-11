package inz.project.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.services.TripService;
import inz.project.services.UserService;

@RestController
@RequestMapping("/api/trips")
public class TripController {
	
	private final TripService tripService;
	public TripController(TripService tripService) {
		this.tripService=tripService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Trip createTrip(@RequestBody Trip trip) {
		return tripService.createTrip(trip);
	}

}
