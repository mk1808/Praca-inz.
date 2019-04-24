package inz.project.database;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import inz.project.models.Place;
import inz.project.models.User;
import inz.project.repositories.PlaceRepository;
import inz.project.repositories.UserRepository;

//@Component
public class Data implements CommandLineRunner {
	
	private final PlaceRepository placeRepository;
	private final UserRepository userRepository;
	public Data (PlaceRepository placeRepository,UserRepository userRepository )
	{
		this.placeRepository=placeRepository;
		this.userRepository=userRepository;
	}
	
	@Override
	public void run (String... args) throws Exception{
		
		
		/*
		User u1 = new User();
		u1.setLogin("l");
		u1.setMail("aaa@gm.pl");
		u1.setRole("1");
		userRepository.save(u1);
		
		Place p1 = new Place();
		p1.setName("Muzeum ");
		p1.setCategory("museum");
		p1.setCountry("Poland");
		p1.setUser(u1);
		placeRepository.save(p1);
		
		*/
	}

}
