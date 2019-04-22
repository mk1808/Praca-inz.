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
@Table(name = "Trip")
public class Trip {
	@Id @GeneratedValue private Long id; 
	private String name;
   
	@ManyToOne
    @JoinColumn(name="user_id")
	private User user;
	
	private String country;
	private String region;
	private String description;
	private String duration;
	public Trip() {}
	public Trip(Long id, String name, User user, String country, String region, String description, String duration) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.country = country;
		this.region = region;
		this.description = description;
		this.duration = duration;
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
