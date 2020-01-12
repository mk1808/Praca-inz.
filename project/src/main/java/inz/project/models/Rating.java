package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "Rating")
public class Rating {

	@Id @GeneratedValue private Long id; 
	
	@NotNull private Double value;
	
	@ManyToOne private User user;
	
	@ManyToOne private Place place;

	@ManyToOne private Trip trip;

	
	
	public Rating() {
		super();
	}
	
	

	public Rating(Long id, @NotNull Double value, User user, Place place, Trip trip) {
		super();
		this.id = id;
		this.value = value;
		this.user = user;
		this.place = place;
		this.trip = trip;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Place getPlace() {
		return place;
	}

	public void setPlace(Place place) {
		this.place = place;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}
	
	

}
 