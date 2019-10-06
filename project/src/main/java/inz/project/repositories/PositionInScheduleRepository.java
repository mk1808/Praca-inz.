package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.models.Trip;

public interface PositionInScheduleRepository extends JpaRepository<PositionInSchedule, Long>{

	PositionInSchedule getPositionInScheduleByPositionInTrip(PositionInTrip position);
}
