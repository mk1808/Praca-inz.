package inz.project.services;

import inz.project.models.PositionInSchedule;

public interface PositionInScheduleService {

	PositionInSchedule createPositionInSchedule(PositionInSchedule positionInSchedule);
	PositionInSchedule getPositionInSchedule(Long id);
	PositionInSchedule updatePositionInSchedule(PositionInSchedule position);
}
