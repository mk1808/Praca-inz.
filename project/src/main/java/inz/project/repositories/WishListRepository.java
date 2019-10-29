package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Place;
import inz.project.models.Trip;
import inz.project.models.User;
import inz.project.models.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long> {

	List<WishList> getWishListByUser(User user);
	List<WishList> getWishListByUserAndTrip(User user, Trip trip);
}
