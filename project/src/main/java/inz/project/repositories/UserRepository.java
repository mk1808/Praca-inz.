package inz.project.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public Optional<User> getUserByLogin(String login);
	Boolean existsByLogin(String login);
	Boolean existsByMail(String mail);
}
