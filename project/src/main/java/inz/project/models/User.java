package inz.project.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.JoinColumn;

import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@Entity
@Table(name = "User", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
            "login"
        }),
        @UniqueConstraint(columnNames = {
            "mail"
        })
})

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
	
	
	@Id 
	@GeneratedValue 
	private Long id; 
	
	@NaturalId 
	@NotNull  
	@Size(max = 50)
    @Email
    private String mail; 
	
	@Size(min=5, max = 20)
	@NotNull 
	private String login;
	
	@NotNull
	@Size(min=6, max = 100)
	private String password;
	
	
	
	
	
	
	///

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", 
      joinColumns = @JoinColumn(name = "user_id"), 
      inverseJoinColumns = @JoinColumn(name = "role_id"))
	@NotNull 
	private Role role;
	
	
	private String sex;
	private Long age;
	private String city;
	private String country;
	
	public User ()
    {
       
    }

	

	
	public User( @NotNull @Size(max = 50) @Email String mail,
			@Size(min = 5, max = 20) @NotNull String login,
			@NotNull @Size(min = 6, max = 100) String password, 
			@NotNull Role role) {
		super();
		
		this.mail = mail;
		this.login = login;
		this.password = password;
		this.role = role;
		
	}



	public User(Long id, @NotNull @Size(max = 50) @Email String mail, @Size(min = 5, max = 20) @NotNull String login,
			@NotNull @Size(min = 6, max = 100) String password,  @NotNull Role role, String sex, Long age, String city, String country) {
		super();
		this.id = id;
		this.mail = mail;
		this.login = login;
		this.password = password;
		
		this.role = role;
		this.sex = sex;
		this.age = age;
		this.city = city;
		this.country = country;
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
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
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
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}





}
