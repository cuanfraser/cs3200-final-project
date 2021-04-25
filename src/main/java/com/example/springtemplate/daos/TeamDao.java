package com.example.springtemplate.daos;

import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamDao {
    @Autowired
    TeamRepository repository;

    public Team createTeam(Team team) {
        return null;
    }
    @GetMapping("/api/teams")
    public List<Team> findAllTeams() {
        return (List<Team>) repository.findAll();
    }
    @GetMapping("/api/teams/{tid}")
    public Team findTeamById(
            @PathVariable("tid") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/teams/{tid}/name/{name}")
    public Team updateTeamName(
            @PathVariable("tid") Integer id,
            @PathVariable("name") String newTeamName) {
        Team team = repository.findById(id).get();
        team.setName(newTeamName);
        return repository.save(team);
    }

    // TODO
    public Integer updateTeam(
            @PathVariable("tid") Integer id,
            Team newTeam) {
        return null;
    }
    public Integer deleteTheater(Integer id) {
        return null;
    }
}
