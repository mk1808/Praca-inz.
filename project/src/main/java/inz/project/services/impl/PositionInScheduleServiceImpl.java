package inz.project.services.impl;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.models.Schedule;
import inz.project.models.Trip;
import inz.project.repositories.PositionInScheduleRepository;
import inz.project.services.PositionInScheduleService;

@Service
public class PositionInScheduleServiceImpl implements PositionInScheduleService {

	@Autowired PositionInScheduleRepository positionInScheduleRepository;
	@Autowired PositionInTripServiceImpl positionInTripService;
	

	@Override
	public PositionInSchedule createPositionInSchedule(PositionInSchedule positionInSchedule) {
		
		return this.positionInScheduleRepository.save(positionInSchedule);
	}
	
	@Override
	public PositionInSchedule getPositionInSchedule(Long id) {
		return this.positionInScheduleRepository.findById(id).orElse(null);
	
	}
	
	
	
	@Override
	public PositionInSchedule updatePositionInSchedule(PositionInSchedule position) {
		
		PositionInSchedule updated = this.getPositionInSchedule(position.getId());
		updated.setStartDay(position.getStartDay());
		updated.setStartTime(position.getStartTime());
		updated.setEndDay(position.getEndDay());
		updated.setEndTime(position.getEndTime());
		
		return this.positionInScheduleRepository.save(updated);
	}
	
	@Override
	public PositionInSchedule getPositionInScheduleByPositionInTrip(Long id) {
		PositionInTrip position = this.positionInTripService.getPositionInTripById(id);
		return this.positionInScheduleRepository.getPositionInScheduleByPositionInTrip(position);
	}
	
	@Override
	public PositionInSchedule getPositionInScheduleByTripAndPlace(Long idPlace, Long idTrip) {
		PositionInTrip posInTrip = this.positionInTripService.getPositionInTripByTripAndPlace(idTrip, idPlace);
		PositionInSchedule posInSchedule = this.getPositionInScheduleByPositionInTrip(posInTrip.getId());
		return posInSchedule;
	}
	@Override
	public Boolean isHourCorrect(Date open, Date close, Date start, Date end){
		int f=start.compareTo(open);
		int l=close.compareTo(end);
		System.out.println(l);
		System.out.println(f);
		if (f>0&&l>0)
			    return true;
			    else return false;
		
	}
}
