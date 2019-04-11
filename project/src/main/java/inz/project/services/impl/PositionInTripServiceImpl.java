package inz.project.services.impl;

import org.springframework.stereotype.Service;

import inz.project.models.PositionInTrip;
import inz.project.repositories.PositionInTripRepository;
import inz.project.services.PositionInTripService;

@Service
public class PositionInTripServiceImpl implements PositionInTripService{
	private final PositionInTripRepository positionInTripRepository;
	public PositionInTripServiceImpl (PositionInTripRepository positionInTripRepository)
	{
		this.positionInTripRepository=positionInTripRepository;
	}
	
	@Override
	public PositionInTrip createPositionInTrip(PositionInTrip positionInTrip) {
		return this.positionInTripRepository.save(positionInTrip);
	}
	
	@Override
	public PositionInTrip getPositionInTripById(Long id) {
		return this.positionInTripRepository.findById(id).get();
	}

}
