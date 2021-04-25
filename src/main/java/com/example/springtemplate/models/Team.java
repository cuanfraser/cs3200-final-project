package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String city;

    @OneToMany(mappedBy = "player")
    private List<Player> players;

    @OneToOne(mappedBy = "coach")
    private Coach coach;

    @Enumerated(EnumType.STRING)
    private Conference conference;

    public Integer getId() {
        return id;
    }

    public Conference getConference() {
        return conference;
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

    public void setId(Integer id) {
        this.id = id;
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
