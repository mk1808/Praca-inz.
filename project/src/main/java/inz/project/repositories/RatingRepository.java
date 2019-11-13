package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Place;
import inz.project.models.Rating;
import inz.project.models.Trip;
import inz.project.models.User;

public interface RatingRepository extends JpaRepository<Rating, Long>{ 

	Rating getRatingByTripAndUser(Trip trip, User user);
	Rating getRatingByPlaceAndUser(Place place, User user );
}
