package inz.project.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.models.PositionInTrip;
import inz.project.models.User;
import inz.project.services.PositionInTripService;
import inz.project.services.UserService;

@RestController
@RequestMapping("/api/positionInTrip")
public class PositionInTripController {
	

	private final PositionInTripService positionInTripService;
	public PositionInTripController(PositionInTripService positionInTripService) {
		this.positionInTripService=positionInTripService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	PositionInTrip createPositionInTrip(@RequestBody PositionInTrip positionInTrip) {
		return positionInTripService.createPositionInTrip(positionInTrip);
	}
	
	
	
	@GetMapping("/{id}")
	PositionInTrip getPositionInTripById(@PathVariable Long id) {
		return positionInTripService.getPositionInTripById(id);
	}
	
	@GetMapping("/trip/{id}")
	List<Place> getPositionInTripByTrip(@PathVariable Long id) {
		return positionInTripService.getPositionInTripByTripId(id);
	}

	
}
