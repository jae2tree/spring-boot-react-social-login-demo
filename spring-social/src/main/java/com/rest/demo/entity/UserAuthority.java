package com.rest.demo.entity;


import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name="authorities")
public class UserAuthority implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String authority;

    @Override
    public String getAuthority() {
        return this.authority;
    }

    public UserAuthority setAuthority(String authority) {
        this.authority = authority;
        return this;
    }
}