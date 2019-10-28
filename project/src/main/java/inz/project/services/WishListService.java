package inz.project.services;

import inz.project.models.WishList;

public interface WishListService {
	
	WishList createWishList(WishList list);
	void deleteWishList(Long id);
	
}
