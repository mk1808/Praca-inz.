package inz.project.database;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import inz.project.models.Place;
import inz.project.repositories.PlaceRepository;

@Component
public class Data implements CommandLineRunner {
	
	private final PlaceRepository placeRepository;
	public Data (PlaceRepository placeRepository)
	{
		this.placeRepository=placeRepository;
	}
	
	@Override
	public void run (String... args) throws Exception{
		Place p1 = new Place();
		p1.setName("Muzeum ");
		p1.setCategory("museum");
		p1.setCountry("Poland");
		placeRepository.save(p1);
	}

}
