package inz.project.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
    private User user;
	
	@ManyToOne
	private Hotel hotel;
	
	@NotNull private Country country;
	@NotNull private String region;
	private String description;
	private Long duration;
	private String image;
	
	@OneToMany(cascade=CascadeType.ALL)
    private List <PositionInTrip> positionsInTrip;
	
	@OneToOne
	private Schedule schedule;
	
	@ElementCollection(targetClass = TripTag.class)
	@CollectionTable(name = "trip_tag",
	            joinColumns = @JoinColumn(name = "trip_id"))
	@Enumerated(EnumType.STRING)
	@Column(name = "tag_id")
	private Set<TripTag> tags;
	
	
	public Trip() {}

	public Trip(Long id, @NotNull String name, User user, @NotNull Country country, @NotNull String region,
			String description, Long duration, List<PositionInTrip> positionsInTrip, Hotel hotel, 
			Schedule schedule, Set<TripTag> tags, String image) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.country = country;
		this.region = region;
		this.description = description;
		this.duration = duration;
		this.positionsInTrip = positionsInTrip;
		this.hotel=hotel;
		this.schedule=schedule;
		this.tags=tags;
		this.image=image;
	
	}
	
	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
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
	public Country getCountry() {
		return country;
	}
	public void setCountry(Country country) {
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
	public Long getDuration() {
		return duration;
	}
	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Set<TripTag> getTags() {
		return tags;
	}

	public void setTags(Set<TripTag> tags) {
		this.tags = tags;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	

	
}
