package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import inz.project.models.Image;

public interface ImageRepository extends JpaRepository<Image, Long>{

}
