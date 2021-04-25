package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository
    extends CrudRepository<Player, Integer> {
}
