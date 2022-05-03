package com.mkg.ipldashboard.repository;

import com.mkg.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long> {
    
    Team findByTeamName(String teamName);
}
