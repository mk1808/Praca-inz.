package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.models.Image;
import inz.project.repositories.ImageRepository;
import inz.project.services.ImageService;

@Service
public class ImageServiceImpl implements ImageService{
	
	@Autowired ImageRepository imageRepository;
	
	@Override
	public Image createImage(Image image) {
		return this.imageRepository.save(image);
		
	}
}
