package inz.project.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inz.project.services.PositionInScheduleService;
import inz.project.services.ScheduleService;
import inz.project.services.impl.ScheduleServiceImpl;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {
	private final ScheduleServiceImpl scheduleService;
	public ScheduleController(ScheduleServiceImpl scheduleService) {
		this.scheduleService=scheduleService;
	}

}
