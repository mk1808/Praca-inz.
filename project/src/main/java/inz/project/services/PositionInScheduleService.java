package inz.project.services;

import java.util.List;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;

public interface PositionInScheduleService {

	PositionInSchedule createPositionInSchedule(PositionInSchedule positionInSchedule);
	PositionInSchedule getPositionInSchedule(Long id);
	PositionInSchedule updatePositionInSchedule(PositionInSchedule position);
	PositionInSchedule getPositionInScheduleByPositionInTrip(Long id);
}
