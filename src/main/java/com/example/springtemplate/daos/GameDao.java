package com.example.springtemplate.daos;

import com.example.springtemplate.models.Game;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.GameRepository;
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
public class GameDao {
    @Autowired
    GameRepository repository;
    @Autowired
    TeamRepository teamRepository;


    @PostMapping("/api/games")
    public Game createGame(@RequestBody Game game) {
        return repository.save(game);
    }

    // SPECIFIC CREATE API FOR ADDING GAME WITH 2 TEAMS
    @PostMapping("/api/games/home/{hid}/away/{aid}")
    public Game createHomeGameForTeam(
            @PathVariable("hid") Integer hid,
            @PathVariable("aid") Integer aid,
            @RequestBody Game game) {
        Team home = teamRepository.findById(hid).get();
        Team away = teamRepository.findById(aid).get();
        game.setHome(home);
        game.setAway(away);
        return repository.save(game);
    }

    @GetMapping("/api/teams/{tid}/games")
    public List<Game> findGamesForTeam(
            @PathVariable("tid") Integer tid) {
        Team team = teamRepository.findById(tid).get();
        return team.getGames();
    }

    @GetMapping("/api/games")
    public List<Game> findAllGames() {
        return (List<Game>) repository.findAll();
    }
    @GetMapping("/api/games/{id}")
    public Game findGameById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }

    @PutMapping("/api/games/{id}")
    public Game updateGame(
            @PathVariable("id") Integer id,
            @RequestBody() Game newGame) {
        Game game = this.findGameById(id);
        game.setLocation(newGame.getLocation());
        game.setStartTime(newGame.getStartTime());
        // TODO: UPDATE TEAMS
        return repository.save(game);
    }

    @DeleteMapping("/api/games/{id}")
    public void deleteGame(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
