package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import inz.project.models.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
	
	@Query("SELECT p FROM Place p WHERE p.name LIKE CONCAT(:name,'%')")
    List<Place> findPlaceByNames(String name);
	

	@Query("SELECT p.region FROM Place p WHERE p.region LIKE CONCAT(:region,'%')")
    List<String> findPlaceByRegion(String region);
}
