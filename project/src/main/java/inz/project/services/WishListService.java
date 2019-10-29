package inz.project.services;

import java.util.List;

import inz.project.models.User;
import inz.project.models.WishList;

public interface WishListService {
	
	WishList createWishList(WishList list);
	void deleteWishList(Long id);
	List<WishList> getWishListByUser(Long id);
	List<WishList> getWishListByUserAndTrip(Long idUser, Long idTrip);
}
