package inz.project.services;

import java.util.List;
import java.util.Optional;

import inz.project.models.Place;
import inz.project.models.User;

public interface UserService {

	User createUser(User user);
	List<User> getUsers();
	User getUserById(Long id);
	Optional<User> getUserByLogin(String login);
	Boolean existsByLogin(String login);
	Boolean existsByMail(String mail);
	User updateUser(Long id, User user);
}
