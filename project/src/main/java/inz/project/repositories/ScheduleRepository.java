package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.PositionInTrip;
import inz.project.models.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

}
