package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Place;
import inz.project.models.PositionInTrip;
import inz.project.models.Trip;

public interface PositionInTripRepository extends JpaRepository<PositionInTrip, Long>{

	List<PositionInTrip> getPositionInTripByTrip(Trip trip);
	PositionInTrip getPositionInTripByTripAndPlace(Trip trip, Place place);
	List<PositionInTrip> getPositionInTripByPlace(Place place);

	
}
