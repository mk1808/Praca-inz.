package inz.project.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.models.WishList;
import inz.project.repositories.TripRepository;
import inz.project.repositories.UserRepository;
import inz.project.repositories.WishListRepository;
import inz.project.services.WishListService;

@Service
public class WishListServiceImpl implements WishListService{
	
	@Autowired WishListRepository wishListRepository;
	@Autowired UserServiceImpl userService;
	@Autowired TripRepository tripRepository;
	@Autowired UserRepository userRepository;
	
	
	@Override
	public WishList createWishList(WishList list) {
		return this.wishListRepository.save(list);
	}
	
	@Override
	public void deleteWishList(Long id) {
		this.wishListRepository.deleteById(id);
	}
	
	@Override
	public List<WishList> getWishListByUser(Long id){
		User user = this.userService.getUserById(id);
		return this.wishListRepository.getWishListByUser(user);
	}
	
	@Override
	public List<WishList> getWishListByUserAndTrip(Long idUser, Long idTrip){
		List<WishList> wishList = new ArrayList<WishList>();
		User user = this.userRepository.findById(idUser).orElse(null);
		Trip trip = this.tripRepository.findById(idTrip).orElse(null);
		
		wishList = this.wishListRepository.getWishListByUserAndTrip(user,trip);
		return wishList;
	
	}
}
