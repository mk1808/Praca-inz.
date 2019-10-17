package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "Image")
public class Image {


	@Id 
	@GeneratedValue 
	private Long id; 
	
	@NotNull
	private String image;

	public Image() {
		super();
	}

	public Image(Long id, @NotNull String image) {
		super();
		this.id = id;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
