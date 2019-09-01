package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.repositories.PositionInTripRepository;
import inz.project.services.PositionInTripService;

@Service
public class PositionInTripServiceImpl implements PositionInTripService{
	
	
	@Autowired PositionInScheduleServiceImpl positionInScheduleService;
	@Autowired PositionInTripRepository positionInTripRepository;
	
	@Override
	public PositionInTrip createPositionInTrip(PositionInTrip positionInTrip) {
		PositionInSchedule positionSchedule = new PositionInSchedule();
		PositionInTrip positionTrip = this.positionInTripRepository.save(positionInTrip);
		positionSchedule.setPositionInTrip(positionTrip);
		return positionTrip;
	}
	
	@Override
	public PositionInTrip getPositionInTripById(Long id) {
		return this.positionInTripRepository.findById(id).get();
	}

}
