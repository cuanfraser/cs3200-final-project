package com.example.springtemplate.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "coach")
public class Coach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idcoach;
    private String firstName;

    @OneToOne
    @JoinColumn(name = "idteam_coach")
    @JsonIgnore
    private Team team;

    public Integer getId() {
        return idcoach;
    }

    public void setId(Integer idcoach) {
        this.idcoach = idcoach;
    }
}
