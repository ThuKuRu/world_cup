import React, { useState, useEffect } from "react";
import getFootballer from "../../api/footballerApi";
import { FootballerStyle } from "./index.style";

const Footballers = () => {
  const [footballer, setFootballer] = useState([]);

  const fetchData = async () => {
    const data = await getFootballer();
    setFootballer(Object.values(data.data));
    console.log(Object.values(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FootballerStyle>
      {footballer.map((player) => (
        <a href={player.information}>
          <div className="player">
            <div className="playerPicture">
              <img src={player.playerPicture} alt="/" />
            </div>
            <p className="name">{player.playerName}</p>
            <p className="position">{player.position}</p>
            <div className="nation">
              <img src={player.nationImage} alt="/" className="nationImage" />
              <p className="location">{player.nation}</p>
            </div>
          </div>
        </a>
      ))}
    </FootballerStyle>
  );
};

export default Footballers;
