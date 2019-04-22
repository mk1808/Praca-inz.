package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "Place")
public class Place {
	
	@Id @GeneratedValue private Long id; 
	private String name;
	private String category;
	private String description;
	private String country;
	private String region;
	private String city;
	private String street;
	private String number;
	//@NotNull
	/*@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="u_id") //nullable=false, insertable = false, updatable = false)
	@JsonIgnore */
	
	@ManyToOne
    @JoinColumn(name="user_id")
    private User user;
	
	private String phoneNumber;
	private String website;
	private String status;
	
	public Place() {}
	public Place(Long id, String name, String category, String description, String country, String region, String city,
			String street, String number, User user, String phoneNumber, 
			String website, String status) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.description = description;
		this.country = country;
		this.region = region;
		this.city = city;
		this.street = street;
		this.number = number;
		this.user = user;
		this.phoneNumber = phoneNumber;
		this.website = website;
		this.status = status;
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public User getUser() {
		return this.user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
