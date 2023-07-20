import React, { useState, useEffect } from "react";
import getMatchStrategy from "../../../../api/matchStrategy";
import { StrategyStyle } from "./index.style";
import Shirt from "../img/logo.png";

const Strategy = ({ matchId }) => {
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [homePlayer, setHomePlayer] = useState([]);
  const [awayPlayer, setAwayPlayer] = useState([]);
  const [homeCoach, setHomeCoach] = useState([]);
  const [awayCoach, setAwayCoach] = useState([]);

  const fetchData = async () => {
    const data = await getMatchStrategy(matchId);
    setAway(data.data.AwayTeam);
    setHome(data.data.HomeTeam);
    setHomePlayer(data.data.HomeTeam.Players);
    setAwayPlayer(data.data.AwayTeam.Players);
    setHomeCoach(data.data.HomeTeam.Coaches);
    setAwayCoach(data.data.AwayTeam.Coaches);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StrategyStyle>
      <div className="stratery">
        <p className="title">ĐỘI HÌNH RA SÂN</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="name">
                <img src={home.PictureUrl} alt="/" />
                <p>{home.TeamName}</p>
              </div>
              <p className="teamTitleEnd">Vị trí</p>
            </div>
            <div className="awayTeam">
              <p className="teamTitle">Vị trí</p>
              <div className="nameEnd">
                <p>{away.TeamName}</p>
                <img src={away.PictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              {homePlayer.map((player) => (
                <div key={player.IdPlayer} className="playersTeam">
                  {player.Status === 1 && player.Position !== 4 && (
                    <div className="players">
                      <div className="player">
                        <div className="shirt">
                          <img src={Shirt} alt="/" />
                          <p className="number">{player.ShirtNumber}</p>
                        </div>
                        <p>{player.Name}</p>
                      </div>
                      <div className="positionEnd">
                        {player.Position === 0 && <p>GoalKeeper</p>}
                        {player.Position === 1 && <p>Defender</p>}
                        {player.Position === 2 && <p>Midfielder</p>}
                        {player.Position === 3 && <p>Forward</p>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="content">
              {awayPlayer.map((player) => (
                <div key={player.IdPlayer} className="playersTeam">
                  {player.Status === 1 && player.Position !== 4 && (
                    <div className="players">
                      <div className="position">
                        {player.Position === 0 && <p>GoalKeeper</p>}
                        {player.Position === 1 && <p>Defender</p>}
                        {player.Position === 2 && <p>Midfielder</p>}
                        {player.Position === 3 && <p>Forward</p>}
                      </div>
                      <div className="player">
                        <p>{player.Name}</p>
                        <div className="shirtEnd">
                          <p className="number">{player.ShirtNumber}</p>
                          <img src={Shirt} alt="/" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="title">CẦU THỦ DỰ BỊ</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="name">
                <img src={home.PictureUrl} alt="/" />
                <p>{home.TeamName}</p>
              </div>
            </div>
            <div className="awayTeam_1 ">
              <div className="nameEnd">
                <p>{away.TeamName}</p>
                <img src={away.PictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              {homePlayer.map((player) => (
                <div key={player.IdPlayer} className="playersTeam">
                  {player.Position === 4 && (
                    <div className="players">
                      <div className="player">
                        <div className="shirt">
                          <img src={Shirt} alt="/" />
                          <p className="number">{player.ShirtNumber}</p>
                        </div>
                        <p>{player.Name}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="content">
              {awayPlayer.map((player) => (
                <div key={player.IdPlayer} className="playersTeam_1">
                  {player.Position === 4 && (
                    <div className="players playerEnd">
                      <div className="player">
                        <p>{player.Name}</p>
                        <div className="shirtEnd">
                          <p className="number">{player.ShirtNumber}</p>
                          <img src={Shirt} alt="/" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="title">NGƯỜI QUẢN LÝ</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="name">
                <img src={home.PictureUrl} alt="/" />
                <p>{home.TeamName}</p>
              </div>
            </div>
            <div className="awayTeam_1 ">
              <div className="nameEnd">
                <p>{away.TeamName}</p>
                <img src={away.PictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              {homeCoach.map((player) => (
                <div key={player.IdPlayer} className="playersTeam">
                  <div className="players">
                    <div className="player">
                      <a href={player.UrlCoach}>
                        <p className="coachesName">{player.Name}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content">
              {awayCoach.map((player) => (
                <div key={player.IdPlayer} className="playersTeam_1">
                  <div className="players playerEnd">
                    <div className="player">
                      <a href={player.UrlCoach}>
                        <p className="coachesName">{player.Name}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StrategyStyle>
  );
};

export default Strategy;
