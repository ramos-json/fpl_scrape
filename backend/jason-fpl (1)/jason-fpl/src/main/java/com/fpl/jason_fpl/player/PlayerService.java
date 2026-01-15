package com.fpl.jason_fpl.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }
    public List<Player> getPlayers(){
        return playerRepository.findAll();
    }
    public List<Player> getPlayersFromTeam(String teamName){
        return playerRepository.findAll().stream()
                .filter(p->p.getTeam_name().equals(teamName))
                .toList();
    }
    public List<Player> getPlayersByName(String search){
        return playerRepository.findAll().stream()
                .filter(p -> p.getName().toLowerCase().contains(search.toLowerCase()))
                .toList();
    }
    public List<Player> getPlayersByPos(String search){
        return playerRepository.findAll().stream()
                .filter(p ->p.getPosition().contains(search))
                .toList();
    }
    public List<Player> getPlayersByNation(String nation){
        return playerRepository.findAll().stream()
                .filter(p ->p.getNation().toLowerCase().contains(nation.toLowerCase()))
                .toList();
    }
}
