package inz.project.services.impl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.PositionInSchedule;
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
		Trip trip = this.tripRepository.getTripByScheduleId(id);
		List<PositionInSchedule> positionList = this.positionInScheduleService
				.getPositionsInScheduleForTrip(trip.getId());
		positionList.forEach(x->{x.setStartDay(null); x.setEndDay(null);
			this.positionInScheduleService.updatePositionInSchedule(x);
		});
		
		Long duration=this.positionInScheduleService.countDays(schedule.getStart(), schedule.getEnd());
		
	
		Schedule updated = this.scheduleRepository.save(schedule);
		trip.setSchedule(schedule);
		trip.setDuration(duration);
		this.tripService.updateTrip(trip);
		
		return updated;
	}

	
	
}
