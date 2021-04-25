package com.example.springtemplate.models;

import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String email;
    private Date dateOfBirth;

    @ManyToOne
    @JsonIgnore
    private Team team;

    @Enumerated(EnumType.STRING)
    private Position position;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
