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
    @JoinColumn(name="trip_id")
    private Trip trip;
	
	@ManyToOne
    @JoinColumn(name="place_id")
    private Place place;
	
	public PositionInTrip(){}
	public PositionInTrip(Long id, Trip trip, Place place) {
		super();
		this.id = id;
		this.trip = trip;
		this.place = place;
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
