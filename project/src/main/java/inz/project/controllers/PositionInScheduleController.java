package inz.project.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
