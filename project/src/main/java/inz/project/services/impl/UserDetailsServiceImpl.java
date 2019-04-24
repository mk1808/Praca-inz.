package inz.project.services.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import inz.project.models.User;
import inz.project.repositories.UserRepository;
import inz.project.services.UserService;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
   
    UserRepository userRepository;
    UserService userService;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String login)
            throws UsernameNotFoundException {
    	
        User user = userRepository.getUserByLogin(login)
                	.orElseThrow(() -> 
                        new UsernameNotFoundException("User Not Found with -> username or email : " + login)
        );

        return UserPrinciple.build(user);
    }
}