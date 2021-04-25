package com.example.springtemplate.daos;

import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamDao {
    @Autowired
    TeamRepository repository;


    @PostMapping("/api/teams")
    public Team createTeam(@RequestBody Team team) {
        return repository.save(team);
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

    @PutMapping("/api/teams/{tid}")
    public Team updateTeam(
            @PathVariable("tid") Integer id,
            @RequestBody() Team newTeam) {
        Team team = this.findTeamById(id);
        team.setName(newTeam.getName());
        team.setCity(newTeam.getCity());
        team.setConference(newTeam.getConference());
        return repository.save(team);
    }

    @DeleteMapping("/api/teams/{tid}")
    public void deleteTeam(
            @PathVariable("tid") Integer id) {
        repository.deleteById(id);
    }
}
