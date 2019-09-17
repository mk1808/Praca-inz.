package inz.project.controllers;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inz.project.messages.JwtResponse;
import inz.project.messages.SignInForm;
import inz.project.messages.SignUpForm;
import inz.project.models.Role;
import inz.project.models.RoleName;
import inz.project.models.User;
import inz.project.repositories.RoleRepository;
import inz.project.repositories.UserRepository;
import inz.project.security.jwt.JwtProvider;
import inz.project.services.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	  @Autowired
	    AuthenticationManager authenticationManager;

	    @Autowired
	    UserRepository userRepository;

	    @Autowired
	    UserService userService;
	    
	    @Autowired
	    RoleRepository roleRepository;

	    @Autowired
	    PasswordEncoder encoder;

	    @Autowired
	    JwtProvider jwtProvider;

	    @PostMapping("/signin")
	    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInForm loginRequest) {

	        Authentication authentication = authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(
	                        loginRequest.getLogin(),
	                        loginRequest.getPassword()
	                )
	        );

	        SecurityContextHolder.getContext().setAuthentication(authentication);

	        String jwt = jwtProvider.generateJwtToken(authentication);
	        User user = userService.getUserByLogin(loginRequest.getLogin()).get();
	        user.setPassword("");
	        return ResponseEntity.ok(new JwtResponse(jwt, user));
	    }

	    @PostMapping("/signup")
	    public ResponseEntity<String> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
	        if(userService.existsByLogin(signUpRequest.getUsername())) {
	            return new ResponseEntity<String>("Fail -> Username is already taken!",
	                    HttpStatus.BAD_REQUEST);
	        }

	        if(userService.existsByMail(signUpRequest.getEmail())) {
	            return new ResponseEntity<String>("Fail -> Email is already in use!",
	                    HttpStatus.BAD_REQUEST);
	        }

	        // Creating user's account
	        Role role;
	        String strRole = signUpRequest.getRole().toString();
        	switch(strRole) {
	    		case "admin":
	    			Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
	                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
	    			role=adminRole;
	    			
	    			break;
	    		
	    		default:
	        		Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
	                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
	        		role=userRole;       			
        	}
	        User user = new User(signUpRequest.getEmail(),
	        		signUpRequest.getUsername(),
	                encoder.encode(signUpRequest.getPassword()),
	                role);
	        
	       // user.setRole(role);
	        userRepository.save(user);

	        return ResponseEntity.ok().body("{\"success\":\"User registered successfully!\"}");
	    }
}
