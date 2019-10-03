package inz.project.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import inz.project.models.Trip;
import inz.project.models.TripTag;
import inz.project.models.User;

public interface TripRepository extends JpaRepository<Trip, Long> {
	List<Trip> getTripsByUser(User user);

	@Query("SELECT t.region FROM Trip t WHERE t.region LIKE CONCAT(:region,'%')")
    List<String> findRegions(String region);
	
	List<Trip> getTripsByRegion(String region);
	List<Trip> getTripsByDurationGreaterThanEqualAndDurationLessThanEqual(Long duration, Long duration2);
	
	List<Trip> getTripsByTagsInOrderByTags(Set<TripTag> tags);
	Trip getTripByScheduleId(Long id);
	
	
}
