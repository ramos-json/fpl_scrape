import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from 'react-router-dom';
import "./index.scss";

import teamData from "../Data/teamData.json"

const Teams = () => {


    const renderTeam = (teams) => { 
        return (
          <div className="images-container">
            {teams.map((team, idx) => (
              <div key={idx} className="image-box">
                <img src={team.cover} alt="teams" className="teams-image" />
                <div className="content">
                  <p className="title">{team.title}</p>
                  <Link className="btn" to={`/data?team=${encodeURIComponent(team.title)}`}>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      }
    return (
        <>
            <div className="container teams-page">
                <div>{renderTeam(teamData.teams)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Teams