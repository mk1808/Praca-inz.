package inz.project.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.User;
import inz.project.repositories.UserRepository;
import inz.project.services.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	private final UserRepository userRepository;
	public UserServiceImpl (UserRepository userRepository)
	{
		this.userRepository=userRepository;
	}
	
	@Override
	public User createUser(User user) {
		return this.userRepository.save(user);
	}
	
	@Override
	public List<User> getUsers(){
		return this.userRepository.findAll();
	}
	
	@Override
	public User getUserById(Long id) {
		return this.userRepository.findById(id).get();
	}
}

