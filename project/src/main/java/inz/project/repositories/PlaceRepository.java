package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import inz.project.models.Place;
import inz.project.models.PlaceCategory;
import inz.project.models.Trip;
import inz.project.models.User;

public interface PlaceRepository extends JpaRepository<Place, Long> {
	
	@Query("SELECT p FROM Place p WHERE p.name LIKE CONCAT(:name,'%')")
    List<Place> findPlaceByNames(String name);
	

	@Query("SELECT p.region FROM Place p WHERE p.region LIKE CONCAT(:region,'%')")
    List<String> findRegions(String region);
	
	List<Place> getPlacesByRegion(String region);
	List<Place> getPlacesByCategory(PlaceCategory category);
	
	@Query("SELECT p FROM Place p WHERE p.region LIKE CONCAT(:region,'%')"
			+ "AND p.name LIKE CONCAT(:name,'%')"
			+ "AND p.category LIKE CONCAT(:category,'%')")
    List<Place> findPlaceByRegCatNam(String region, String name, PlaceCategory category );
	
	
	//@Query("SELECT p FROM Place p WHERE p.region LIKE CONCAT(:region,'%')"
		//	+ "OR p.category LIKE CONCAT(:category,'%')")
    List<Place> getPlacesByRegionAndCategory(String region, PlaceCategory category);
    List<Place> getPlacesByUser(User user);
	

}
