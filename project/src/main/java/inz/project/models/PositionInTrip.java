package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "PositionInTrip")
public class PositionInTrip {
	@Id @GeneratedValue private Long id; 
	private String tripId;
	private String placeId;
	public PositionInTrip(){}
	public PositionInTrip(Long id, String tripId, String placeId) {
		super();
		this.id = id;
		this.tripId = tripId;
		this.placeId = placeId;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTripId() {
		return tripId;
	}
	public void setTripId(String tripId) {
		this.tripId = tripId;
	}
	public String getPlaceId() {
		return placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
	
	

}
