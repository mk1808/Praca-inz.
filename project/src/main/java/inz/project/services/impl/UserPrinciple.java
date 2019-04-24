package inz.project.services.impl;


import com.fasterxml.jackson.annotation.JsonIgnore;

import inz.project.models.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

public class UserPrinciple implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;

    private String login;

    private String mail;

    @JsonIgnore
    private String password;

    private GrantedAuthority authority;

    public UserPrinciple(Long id, String login, String mail, String password, 
			    		GrantedAuthority authority) {
        this.id = id;
        this.login=login;
        this.mail = mail;
        this.password = password;
        this.authority = authority;
    }

    public static UserPrinciple build(User user) {
        GrantedAuthority authority = 
                new SimpleGrantedAuthority(user.getRole().getName().name());

        return new UserPrinciple(
                user.getId(),
                user.getLogin(),
                user.getMail(),
                user.getPassword(),
                authority
        );
    }

    public Long getId() {
        return id;
    }

   
    public String getMail() {
        return mail;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
    	return Arrays.asList(authority);
    	//   	Collection<? extends GrantedAuthority> stefan=new ArrayDeque<? extends GrantedAuthority>(authority);
    	  // 	stefan.add(authority);
    	//stefan.add( authority);
    	//return stefan;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        
        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(id, user.id);
    }
}