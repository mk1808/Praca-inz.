package inz.project.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import lombok.Data;

@Data
@Entity
@Table(name = "Place")
public class Place {
	
	@Id @GeneratedValue private Long id; 
	@NotNull private String name;
	@NotNull private PlaceCategory category;
	private String description;
	@NotNull private Country country;
	private String region;
	private String city;
	private String street;
	private String number;
	//@NotNull
	/*@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="u_id") //nullable=false, insertable = false, updatable = false)
	@JsonIgnore */
	
	
	@ManyToOne
    //@JoinColumn(name="user_id")
    private User user;
	
	
	private String phoneNumber;
	private String website;
	
	@NotNull 
	@Lob
	@Column(length=100000)
	private String status;
	@OneToOne
	@NotFound(action=NotFoundAction.IGNORE)
	private OpeningHours hours;
	/*
	@OneToMany(mappedBy="place")
    private List <PositionInTrip> positionsInTrip;
	*/
	

	@OneToMany(cascade=CascadeType.ALL)
	private List<Image> image;
	
	private Double longitude;
	private Double latitude;
	
	private Double mean=0.0;
	private Boolean checked=false;
	
	public Place() {}
	public Place(Long id,@NotNull String name, 	@NotNull PlaceCategory category, String description, 	
			@NotNull Country country, String region, String city,
			String street, String number,  String phoneNumber, 
			String website, @NotNull String status, User user, OpeningHours hours, List<Image>  image,
			Double longitude, Double latitude, Double mean, Boolean checked) {
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
		this.phoneNumber = phoneNumber;
		this.website = website;
		this.status = status;
		this.user=user;
		this.hours=hours;
		this.image=image;
		this.longitude=longitude;
		this.latitude=latitude;
		this.mean=mean;
		this.checked=checked;

	}
	
	
	
	
	
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
	public PlaceCategory getCategory() {
		return category;
	}
	public void setCategory(PlaceCategory category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public OpeningHours getHours() {
		return hours;
	}
	public void setHours(OpeningHours hours) {
		this.hours = hours;
	}
	public List<Image>  getImage() {
		return image;
	}
	public void setImage(List<Image>  image) {
		this.image = image;
	}
	public Double getLongitude() {
		return longitude;
	}
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	public Double getLatitude() {
		return latitude;
	}
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	public Double getMean() {
		return mean;
	}
	public void setMean(Double mean) {
		this.mean = mean;
	}
	public Boolean getChecked() {
		return checked;
	}
	public void setChecked(Boolean checked) {
		this.checked = checked;
	}
	
	
	
	
	
}
