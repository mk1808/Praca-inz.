package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "PositionInTrip")
public class PositionInTrip {
	@Id @GeneratedValue private Long id; 

	@ManyToOne
    //@JoinColumn(name="trip_id")
    private Trip trip;
	
	@ManyToOne
    //@JoinColumn(name="place_id")
    private Place place;
	
	public PositionInTrip(){}
	public PositionInTrip(Long id, Place place, Trip trip) {
		super();
		this.id = id;
		this.place = place;
		this.trip=trip;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Trip getTrip() {
		return trip;
	}
	public void setTrip(Trip trip) {
		this.trip = trip;
	}
	public Place getPlace() {
		return place;
	}
	public void setPlace(Place place) {
		this.place = place;
	}
	
	

}
