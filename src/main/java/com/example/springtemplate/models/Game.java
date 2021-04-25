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

    public Team getHomeTeam() {
        return homeTeam;
    }

    public Team getAwayTeam() {
        return awayTeam;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setId(Integer idgame) {
        this.idgame = idgame;
    }

    public void setHome(Team home) {
        this.homeTeam = home;
    }

    public void setAway(Team away) {
        this.awayTeam = away;
    }

}
