package inz.project.database;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import inz.project.models.Place;
import inz.project.models.Role;
import inz.project.models.RoleName;
import inz.project.models.User;
import inz.project.repositories.PlaceRepository;
import inz.project.repositories.RoleRepository;
import inz.project.repositories.UserRepository;

@Component
public class Data implements CommandLineRunner {
	
	private final PlaceRepository placeRepository;
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	public Data (PlaceRepository placeRepository,UserRepository userRepository,RoleRepository roleRepository )
	{
		this.placeRepository=placeRepository;
		this.userRepository=userRepository;
		this.roleRepository=roleRepository;
	}
	
	@Override
	public void run (String... args) throws Exception{
		try {
		Role r1=new Role();
		r1.setName(RoleName.ROLE_USER);
		roleRepository.save(r1);
		
		Role r2=new Role();
		r2.setName(RoleName.ROLE_ADMIN);
		roleRepository.save(r2);}
		catch(Exception e) {};
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
