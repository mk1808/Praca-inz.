package inz.project.models;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Data
@Entity
@Table(name = "User")
public class User {
	
	//@Column(name="u_id")
	@Id @GeneratedValue private Long id; 
	@NotNull private String mail; 
	@NotNull private String login;
	//private String password;
	
	@NotNull private String role;
	
	///
	@OneToMany(mappedBy="user")
    private List <Place> places;
	
	@OneToMany(mappedBy="user")
    private List <Trip> trips;
	///

	private String sex;
	private Long age;
	private String city;
	private String country;
	
	public User ()
    {
       
    }

	public User(Long id, @NotNull String mail, @NotNull String login, @NotNull String role,
			List<Place> places,List<Trip> trips,
			String city, String country, String sex, Long age) {
		super();
		this.id = id;
		this.mail = mail;
		this.login = login;
		this.role = role;
		this.trips = trips;
		this.places = places;
		this.city = city;
		this.country = country;
		this.sex = sex;
		this.age = age;
	}

	
	public List<Place> getPlaces() {
		return places;
	}

	public void setPlaces(List<Place> places) {
		this.places = places;
	}

	public List<Trip> getTrips() {
		return trips;
	}

	public void setTrips(List<Trip> trips) {
		this.trips = trips;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}


}
