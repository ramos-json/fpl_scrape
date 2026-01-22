import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from 'react-router-dom';
import "./index.scss"
import positionData from './positions.json';

const Position = () => {

    const renderPosition = (positions) => { 
        return (
          <div className="images-container">
            {positions.map((position, idx) => (
              <div key={idx} className="image-box">
                <img src={position.cover} alt="positions" className="teams-image" />
                <div className="content">
                  <p className="title">{position.title}</p>
                  <Link className="btn" to={`/data?position=${encodeURIComponent(position.search)}`}>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
    };

    return (
        <>
            <div className="container teams-page">
                <div>{renderPosition(positionData.positions)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Position;