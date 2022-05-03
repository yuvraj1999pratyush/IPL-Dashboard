package com.mkg.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.mkg.ipldashboard.model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;



public interface MatchRepository extends CrudRepository<Match, Long> {
   
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
        String teamName1, LocalDate date1, LocalDate date2,
        String teamName2, LocalDate date3, LocalDate date4

        );

    default List<Match> findLatestMatchesByTeam(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }


}
