package inz.project.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "Schedule")
public class Schedule {

	@Id @GeneratedValue private Long id; 
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date start;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date end;
	
	@OneToMany
    private List <PositionInSchedule> positionsInSchedule;
	
	private Boolean scheduleExists;

	public Schedule() {
		
		super();
		this.scheduleExists=false;
	}

	public Schedule(Long id, Date start, Date end, List<PositionInSchedule> positionsInSchedule, Boolean scheduleExists) {
		super();
		this.id = id;
		this.start = start;
		this.end = end;
		this.positionsInSchedule = positionsInSchedule;
		this.scheduleExists=scheduleExists;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

	public List<PositionInSchedule> getPositionsInSchedule() {
		return positionsInSchedule;
	}

	public void setPositionsInSchedule(List<PositionInSchedule> positionsInSchedule) {
		this.positionsInSchedule = positionsInSchedule;
	}

	public Boolean getScheduleExists() {
		return scheduleExists;
	}

	public void setScheduleExists(Boolean exists) {
		this.scheduleExists = exists;
	}
	
	
	
}
