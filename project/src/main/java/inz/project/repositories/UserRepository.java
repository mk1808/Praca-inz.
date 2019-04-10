package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
