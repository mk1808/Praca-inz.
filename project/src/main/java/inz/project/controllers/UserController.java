package inz.project.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.models.User;
import inz.project.repositories.PlaceRepository;
import inz.project.repositories.UserRepository;
import inz.project.services.PlaceService;
import inz.project.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private final UserService userService;
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	@GetMapping()
	List<User> getUsers(){
	return userService.getUsers();
	}
	
	@GetMapping("/{id}")
	User getUserById(@PathVariable Long id) {
		return userService.getUserById(id);
	}

}
