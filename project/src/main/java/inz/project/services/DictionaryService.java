package inz.project.services;

import java.util.List;

import inz.project.models.Country;

public interface DictionaryService {

	List<String> getCountries();
	List<String> getCategories();
	List<String> getTags();
}
