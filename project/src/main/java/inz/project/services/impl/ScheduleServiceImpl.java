package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Schedule;
import inz.project.models.User;
import inz.project.repositories.ScheduleRepository;
import inz.project.services.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService{

	@Autowired ScheduleRepository scheduleRepository;
	
	@Override
	public Schedule createSchedule(Schedule schedule) {
		return this.scheduleRepository.save(schedule);
	}
	
	@Override
	public Schedule updateSchedule(Long id, Schedule schedule) {
		schedule.setId(id);
		Schedule updated = this.scheduleRepository.save(schedule);
		return updated;
	}
}
