package com.example.springtemplate.models;

import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idgame;
    private String location;
    private Date startTime;

    @ManyToOne
    @JoinColumn(name = "home_team")
    @JsonIgnore
    private Team homeTeam;

    @ManyToOne
    @JoinColumn(name = "away_team")
    @JsonIgnore
    private Team awayTeam;

    public Integer getId() {
        return idgame;
    }

    public void setId(Integer idgame) {
        this.idgame = idgame;
    }
}
