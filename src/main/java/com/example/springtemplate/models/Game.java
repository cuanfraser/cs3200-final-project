package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name = "game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String location;
    // TODO: DATE??
    private String date;

    @OneToOne(mappedBy = "team")
    private Team homeTeam;

    @OneToOne(mappedBy = "team")
    private Team awayTeam;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
