package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;

import inz.project.models.WishList;
import inz.project.repositories.WishListRepository;
import inz.project.services.WishListService;

public class WishListServiceImpl implements WishListService{
	
	@Autowired WishListRepository wishListRepository;
	
	
	@Override
	public WishList createWishList(WishList list) {
		return this.wishListRepository.save(list);
	}
	
	@Override
	public void deleteWishList(Long id) {
		this.wishListRepository.deleteById(id);
	}
}
