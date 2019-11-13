package inz.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Rating;
import inz.project.services.impl.RatingServiceImpl;

@RestController
@RequestMapping("/api/rating")
public class RatingController {
	
	@Autowired RatingServiceImpl ratingService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Rating createRating(@RequestBody Rating rating) {
		return ratingService.createRating(rating);
	}
	
}
