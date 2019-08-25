package inz.project.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "PositionInSchedule")
public class PositionInSchedule {
	@Id @GeneratedValue private Long id;
	
	private Date startDay;

	private Date endDay;
	
	private Date startTime;

	private Date endTime;
	
	@OneToOne
	private PositionInTrip positionInTrip;
	
	@ManyToOne
    private Schedule schedule;
	
	public PositionInSchedule() {	}

	public PositionInSchedule(Long id, Date startDay, Date endDay, Date startTime, Date endTime,
			PositionInTrip positionInTrip, Schedule schedule) {
		super();
		this.id = id;
		this.startDay = startDay;
		this.endDay = endDay;
		this.startTime = startTime;
		this.endTime = endTime;
		this.positionInTrip = positionInTrip;
		this.schedule=schedule;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getStartDay() {
		return startDay;
	}

	public void setStartDay(Date startDay) {
		this.startDay = startDay;
	}

	public Date getEndDay() {
		return endDay;
	}

	public void setEndDay(Date endDay) {
		this.endDay = endDay;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public PositionInTrip getPositionInTrip() {
		return positionInTrip;
	}

	public void setPositionInTrip(PositionInTrip positionInTrip) {
		this.positionInTrip = positionInTrip;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}
	
	


}
