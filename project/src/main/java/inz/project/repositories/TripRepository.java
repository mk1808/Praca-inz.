package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Trip;
import inz.project.models.User;

public interface TripRepository extends JpaRepository<Trip, Long> {
	List<Trip> getTripsByUser(User user);

}
