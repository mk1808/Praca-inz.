package inz.project.services;

import inz.project.models.Schedule;
import inz.project.models.User;

public interface ScheduleService {

	Schedule createSchedule(Schedule schedule);
	Schedule updateSchedule(Long id, Schedule schedule);
}
