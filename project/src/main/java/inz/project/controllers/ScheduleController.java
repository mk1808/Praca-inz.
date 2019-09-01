package inz.project.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Schedule;
import inz.project.models.User;
import inz.project.services.impl.ScheduleServiceImpl;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {
	private final ScheduleServiceImpl scheduleService;
	public ScheduleController(ScheduleServiceImpl scheduleService) {
		this.scheduleService=scheduleService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Schedule createSchedule(@RequestBody Schedule schedule) {
		return scheduleService.createSchedule(schedule);
	}
	
	@PutMapping ("/{id}")
	Schedule updateSchedule(@PathVariable Long id, @RequestBody Schedule schedule) {
		Schedule updated = scheduleService.updateSchedule(id, schedule); 
		return updated;
	}

}
