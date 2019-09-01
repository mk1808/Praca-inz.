package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.repositories.PositionInScheduleRepository;
import inz.project.services.PositionInScheduleService;

@Service
public class PositionInScheduleServiceImpl implements PositionInScheduleService {

	@Autowired PositionInScheduleRepository positionInScheduleRepository;
	

	@Override
	public PositionInSchedule createPositionInSchedule(PositionInSchedule positionInSchedule) {
		
		return this.positionInScheduleRepository.save(positionInSchedule);
	}
}
