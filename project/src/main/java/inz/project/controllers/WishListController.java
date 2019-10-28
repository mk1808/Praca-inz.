package inz.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Place;
import inz.project.models.WishList;
import inz.project.services.WishListService;
import inz.project.services.impl.WishListServiceImpl;

@RestController
@RequestMapping("/api/wishlists")
public class WishListController {

	@Autowired WishListServiceImpl wishListService;
	
	@DeleteMapping ("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void deletePlace(@PathVariable Long id) {
		this.wishListService.deleteWishList(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	WishList  createWishList (@RequestBody WishList wishList) {
		return wishListService.createWishList(wishList);
	}
	
	@GetMapping("/user/{id}")
	List<WishList> getWishListByUser(@PathVariable Long id) {
		return wishListService.getWishListByUser(id);
	}
}
