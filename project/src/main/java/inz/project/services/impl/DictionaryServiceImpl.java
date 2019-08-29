package inz.project.services.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import inz.project.models.Country;
import inz.project.services.DictionaryService;

@Service
public class DictionaryServiceImpl  implements DictionaryService {

		@Override
		public List<String> getCountries(){
			
			List<Country> list = Arrays.asList(Country.values());
			List<String> listStr = new ArrayList<String>(); 
			for(Country country: list) {
				listStr.add((country.getName()));
				
			}
			return listStr;
		}

}
