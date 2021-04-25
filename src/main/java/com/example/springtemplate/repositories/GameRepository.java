package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository
    extends CrudRepository<Game, Integer> {
}
