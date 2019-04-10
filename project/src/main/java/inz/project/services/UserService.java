package inz.project.services;

import java.util.List;


import inz.project.models.User;

public interface UserService {

	User createUser(User user);
	List<User> getUsers();
	User getUserById(Long id);
}
