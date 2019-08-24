package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Hotel;
import inz.project.models.Place;

public interface HotelRepository extends JpaRepository<Hotel, Long>{

}
