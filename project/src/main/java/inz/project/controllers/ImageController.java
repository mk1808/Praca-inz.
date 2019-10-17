package inz.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Image;
import inz.project.services.impl.ImageServiceImpl;

@RestController
@RequestMapping("/api/images")
public class ImageController {
	
	@Autowired ImageServiceImpl imageService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Image createPlace(@RequestBody Image image) {
		return imageService.createImage(image);
	}

}
