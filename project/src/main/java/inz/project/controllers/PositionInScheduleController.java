package inz.project.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.services.PositionInScheduleService;
import inz.project.services.PositionInTripService;
import inz.project.services.impl.PositionInScheduleServiceImpl;

@RestController
@RequestMapping("/api/positionInSchedule")
public class PositionInScheduleController {

	private final PositionInScheduleServiceImpl positionInScheduleService;
	public PositionInScheduleController(PositionInScheduleServiceImpl positionInScheduleService) {
		this.positionInScheduleService=positionInScheduleService;
	}
	
	@PutMapping
	PositionInSchedule update(@RequestBody PositionInSchedule position) {
		PositionInSchedule updated = positionInScheduleService.updatePositionInSchedule(position); 
		return updated;
	}
	
	@GetMapping("/posInTrip/{id}")
	PositionInSchedule getByPositionInTrip(@PathVariable Long id) {
		return positionInScheduleService.getPositionInScheduleByPositionInTrip(id);
	}

}
