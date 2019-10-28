package inz.project.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import inz.project.models.User;
import inz.project.models.WishList;
import inz.project.repositories.WishListRepository;
import inz.project.services.WishListService;

public class WishListServiceImpl implements WishListService{
	
	@Autowired WishListRepository wishListRepository;
	@Autowired UserServiceImpl userService;
	
	
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
}
