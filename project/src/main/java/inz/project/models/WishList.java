package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "WishList")
public class WishList {

	@Id 
	@GeneratedValue 
	private Long id; 
	
	@ManyToOne
    private User user;

	@ManyToOne
	private Trip trip;

	public WishList() {
		super();
	}

	public WishList(Long id, User user, Trip trip) {
		super();
		this.id = id;
		this.user = user;
		this.trip = trip;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

	
}
