package inz.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inz.project.models.Country;
import inz.project.services.impl.DictionaryServiceImpl;

@RestController
public class DictionaryController {

@Autowired DictionaryServiceImpl dictionaryService;
	
	@GetMapping ("api/countries")
	public List<String> getCountries(){
		return dictionaryService.getCountries();
	}

}
