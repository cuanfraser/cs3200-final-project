package com.example.springtemplate.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idteam;
    private String name;
    private String city;

    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<Player> players;

    @OneToOne(mappedBy = "team")
    @JsonIgnore
    private Coach coach;

    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private Conference conference;

    @OneToMany(mappedBy = "homeTeam")
    @JsonIgnore
    private List<Game> homeGames;

    @OneToMany(mappedBy = "awayTeam")
    @JsonIgnore
    private List<Game> awayGames;

    public Integer getId() {
        return idteam;
    }

    public Conference getConference() {
        return conference;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public List<Game> getGames() {
        List<Game> games = new ArrayList<Game>(homeGames);
        games.addAll(awayGames);
        return games;
    }


    public void setConference(Conference conference) {
        this.conference = conference;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Integer idteam) {
        this.idteam = idteam;
    }

    public List<Player> getMovies() {
        return players;
    }

    public void setMovies(List<Player> players) {
        this.players = players;
    }

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }


}
