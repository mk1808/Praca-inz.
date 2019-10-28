package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;

import inz.project.repositories.WishListRepository;
import inz.project.services.WishListService;

public class WishListServiceImpl implements WishListService{
	
	@Autowired WishListRepository wishListRepository;
	
}
