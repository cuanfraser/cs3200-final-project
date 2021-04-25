package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.PlayerRepository;
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
public class PlayerDao {
    @Autowired
    PlayerRepository repository;
    TeamRepository teamRepository;


    @PostMapping("/api/players")
    public Player createPlayer(@RequestBody Player player) {
        return repository.save(player);
    }

    @PostMapping("/api/teams/{tid}/players")
    public Player createPlayerForTeam(
            @PathVariable("tid") Integer tid,
            @RequestBody Player player) {
        player = repository.save(player);
        Team team = teamRepository.findById(tid).get();
        player.setTeam(team);
        return repository.save(player);
    }

    @GetMapping("/api/teams/{tid}/players")
    public List<Player> findPlayersForTeam(
            @PathVariable("tid") Integer tid) {
        Team team = teamRepository.findById(tid).get();
        return team.getPlayers();
    }

    @GetMapping("/api/players")
    public List<Player> findAllPlayers() {
        return (List<Player>) repository.findAll();
    }
    @GetMapping("/api/players/{id}")
    public Player findPlayerById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }

    @PutMapping("/api/players/{id}")
    public Player updatePlayer(
            @PathVariable("id") Integer id,
            @RequestBody() Player newPlayer) {
        Player player = this.findPlayerById(id);
        player.setFirstName(newPlayer.getFirstName());
        player.setLastName(newPlayer.getLastName());
        player.setUsername(newPlayer.getUsername());
        player.setPassword(newPlayer.getPassword());
        player.setEmail(newPlayer.getEmail());
        player.setDob(newPlayer.getDob());
        // TODO: UPDATE TEAM
        return repository.save(player);
    }

    @DeleteMapping("/api/players/{id}")
    public void deletePlayer(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
