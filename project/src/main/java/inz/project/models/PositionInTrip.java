package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "PositionInTrip")
public class PositionInTrip {
	@Id @GeneratedValue private Long id; 
	private String tripId;
	private String placeId;


}
