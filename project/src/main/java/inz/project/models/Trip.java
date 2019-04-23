package inz.project.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "Trip")
public class Trip {
	@Id @GeneratedValue private Long id; 
	@NotNull private String name;
   
	@ManyToOne
    @JoinColumn(name="user_id")
	private User user;
	
	@NotNull private String country;
	@NotNull private String region;
	private String description;
	private String duration;
	
	@OneToMany(mappedBy="trip")
    private List <PositionInTrip> positionsInTrip;
	
	public Trip() {}

	public Trip(Long id, @NotNull String name, User user, @NotNull String country, @NotNull String region,
			String description, String duration, List<PositionInTrip> positionsInTrip) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.country = country;
		this.region = region;
		this.description = description;
		this.duration = duration;
		this.positionsInTrip = positionsInTrip;
	}
	
	public List<PositionInTrip> getPositionsInTrip() {
		return positionsInTrip;
	}
	public void setPositionsInTrip(List<PositionInTrip> positionsInTrip) {
		this.positionsInTrip = positionsInTrip;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	
}
