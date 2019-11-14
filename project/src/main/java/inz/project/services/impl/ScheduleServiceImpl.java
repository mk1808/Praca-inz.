package inz.project.services.impl;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Schedule;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.repositories.ScheduleRepository;
import inz.project.repositories.TripRepository;
import inz.project.services.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService{

	@Autowired ScheduleRepository scheduleRepository;
	@Autowired TripRepository tripRepository;
	@Autowired TripServiceImpl tripService;
	@Autowired PositionInScheduleServiceImpl positionInScheduleService;
	
	@Override
	public Schedule createSchedule(Schedule schedule) {
		return this.scheduleRepository.save(schedule);
	}
	
	@Override
	public Schedule updateSchedule(Long id, Schedule schedule) {
		schedule.setId(id);
	
		Long duration=this.positionInScheduleService.countDays(schedule.getStart(), schedule.getEnd());
		Trip trip = this.tripRepository.getTripByScheduleId(id);
	
		Schedule updated = this.scheduleRepository.save(schedule);
		trip.setSchedule(schedule);
		trip.setDuration(duration);
		this.tripService.updateTrip(trip);
		return updated;
	}
	
	
}
