package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.OpeningHours;

public interface OpeningHoursRepository extends JpaRepository<OpeningHours, Long>  {

}
