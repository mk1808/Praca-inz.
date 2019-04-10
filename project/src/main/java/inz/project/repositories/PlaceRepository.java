package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import inz.project.models.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
	
}
