package inz.project.services.impl;

import java.text.DateFormat;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Locale;

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

	@Autowired
	PositionInScheduleRepository positionInScheduleRepository;
	@Autowired
	PositionInTripServiceImpl positionInTripService;

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
	public List<PositionInSchedule> getPositionsInScheduleForTrip(Long id) {
		List<PositionInTrip> posInTrip = this.positionInTripService.getAllPositionsByTripId(id);
		List<PositionInSchedule> posInSchedule = new ArrayList<PositionInSchedule>();
		for (PositionInTrip pos : posInTrip) {
			posInSchedule.add(this.positionInScheduleRepository.getPositionInScheduleByPositionInTrip(pos));

		}
		posInSchedule.sort(Comparator.comparing(PositionInSchedule::getStartDay));

		return posInSchedule;
	}

	@Override
	public List<List<PositionInSchedule>> getPositionsInScheduleSorted(List<PositionInSchedule> posInSchedule) {
		Date previous = posInSchedule.get(0).getPositionInTrip().getTrip().getSchedule().getStart();
		List<List<PositionInSchedule>> table = new ArrayList<List<PositionInSchedule>>();
		Long duration = posInSchedule.get(0).getPositionInTrip().getTrip().getDuration();
		for (int j = 0; j < duration; j++) {
			List<PositionInSchedule> add = new ArrayList<PositionInSchedule>();
			table.add(add);
		}
		List<Date> dates = new ArrayList<Date>();
		dates.add(posInSchedule.get(0).getStartDay());
		Date current = posInSchedule.get(0).getStartDay();
		
		for (int m = 0; m < duration; m++) {
			Date newDate = this.addOneDay(current);
			current=newDate;
			dates.add(newDate);
			//System.out.println(newDate);
		}
		int dateNo=0;
		for (PositionInSchedule pos : posInSchedule) {
			dateNo=0;
			for (Date date:dates) {
				System.out.println(date);
				
				if(this.equalDate(pos.getStartDay(), date)) {
					System.out.println(dateNo);
					table.get(dateNo).add(pos);
					dateNo++;
					break;
				}
				else {
					dateNo++;
				}
				
			}
		}
		
		
		/*
		int i = 0;
		for (PositionInSchedule pos : posInSchedule) {

			if (pos.getStartDay().compareTo(previous) == 0) {
				table.get(i).add(pos);
				previous = pos.getStartDay();
			} else {
				i = i + 1;
				table.get(i).add(pos);
				previous = pos.getStartDay();
			}
		}*/
		for (List<PositionInSchedule> list : table) {
			list.sort(Comparator.comparing(PositionInSchedule::getStartTime));
		}

		return table;
	}

	@Override
	public List<List<PositionInSchedule>> getPosForTripSorted(Long id) {
		List<PositionInSchedule> posInSchedule = this.getPositionsInScheduleForTrip(id);
		List<List<PositionInSchedule>> table = this.getPositionsInScheduleSorted(posInSchedule);
		return table;
	}

	public Date addOneDay(Date oldDate) {
		String newDate = oldDate.toString();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
		Calendar c = Calendar.getInstance();
		c.setTime(oldDate);
	//	c.get(field)
	/*	try {
			c.setTime(sdf.parse(newDate));
		} catch (ParseException e) {

			e.printStackTrace();
		}*/
		c.add(Calendar.DATE, 1);
		newDate = sdf.format(c.getTime());
//System.out.println(newDate);
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		try {
			date = format.parse(newDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	//	System.out.println(date);
		return date;
	}

	private Boolean equalDate(Date date1, Date date2) {


//Format formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//String s = formatter.format(date);


		Format sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
		String sDate1 = sdf.format(date1);
		String sDate2 = sdf.format(date2);
		return sDate1.equals(sDate2);
	}
	
	@Override
	public Boolean isHourCorrect(Date open, Date close, Date start, Date end) {
		int f = start.compareTo(open);
		int l = close.compareTo(end);

		if (f >= 0 && l >= 0)
			return true;
		else
			return false;

	}

	@Override
	public Boolean isDayCorrect(List<Boolean> openDays, int day) {
		return openDays.get(day);
	}
}
