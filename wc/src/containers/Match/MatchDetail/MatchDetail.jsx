import React, { useState, useEffect } from "react";
import getMatchDetailList from "../../../api/matchDetailApi";
import { MatchDetailStyle } from "./index.style";
import Icon from "./img/youtube.png";
import Development from "./Development/Development";
import Strategy from "./Strategy/Strategy";
import Statistical from "./Statistical/Statistical";
import New from "./New/New";

const MatchDetail = ({ matchId }) => {
  const [changes, setChanges] = useState("details");
  const [details, setDetails] = useState({});
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [awayGoal, setAwayGoal] = useState([]);
  const [homeGoal, setHomeGoal] = useState([]);

  const fetchData = async () => {
    const data = await getMatchDetailList(matchId);
    setDetails(data.data);
    setAway(data.data.AwayTeam);
    setHome(data.data.HomeTeam);
    setAwayGoal(data.data.AwayTeam.Goals);
    setHomeGoal(data.data.HomeTeam.Goals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MatchDetailStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="container">
        <div className="title">
          <div className="titleLeft">
            <p className="wc"> Giải bóng đá Thế giới 2022</p>
            <p>・</p>
            <p>{details.Date}</p>
          </div>
          <p className="titleRight">Kết thúc</p>
        </div>
        <div className="teams">
          <div className="team">
            <img className="nationImg" src={home.PictureUrl} alt="/" />
            <a href={details.LinkHomeTeam}>{home.TeamName}</a>
          </div>
          <div className="score">
            <div className="matchScore">
              <div>{home.Score}</div>
              <div>-</div>
              <div>{away.Score}</div>
            </div>
            <div className="penaltyScore">
              <div>{details.HomeTeamPenaltyScore}</div>
              <div>penalty</div>
              <div>{details.AwayTeamPenaltyScore}</div>
            </div>
          </div>
          <div className="team">
            <img className="nationImg" src={away.PictureUrl} alt="/" />
            <a href={details.LinkAwayTeam}>{away.TeamName}</a>
          </div>
        </div>
        <div className="goals">
          <div className="goalLeft">
            {homeGoal.slice(0, Math.floor(`${home.Score}`)).map((win) => (
              <div className="wins">
                <div className="win">
                  <span>{win.NamePlayer}: </span>
                  <span>{win.Minute}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="goal">
            <span className="material-symbols-outlined">sports_soccer</span>
          </div>
          <div className="goalRight">
            {awayGoal.slice(0, Math.floor(`${away.Score}`)).map((win) => (
              <div className="win">
                <span>{win.NamePlayer}:</span>
                <span>{win.Minute}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="stadium">
          <span>Sân vận động: </span>
          <a href={details.Stadium_URL}> {details.Stadium}</a>
        </div>
        <div
          className="video"
          style={{
            backgroundImage: `url(${details.ImageURL})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <a href={details.VideoURL}>
            <div className="time">
              <img className="icon" src={Icon} alt="/" />
              <span>Tóm tắt về trận đấu - {details.TimePlay}</span>
            </div>
          </a>
        </div>
        <div className="changes">
          <div
            className={`container ${changes === "details" ? "active" : null}`}
          >
            <div
              onClick={() => {
                setChanges("details");
              }}
            >
              DEVELOPMENT
            </div>
          </div>
          <div
            className={`container ${changes === "strategy" ? "active" : null}`}
          >
            <div
              onClick={() => {
                setChanges("strategy");
              }}
            >
              STRATEGY
            </div>
          </div>
          <div
            className={`container ${
              changes === "statistical" ? "active" : null
            }`}
          >
            <div
              className="subItem"
              onClick={() => {
                setChanges("statistical");
              }}
            >
              STATISTICAL
            </div>
          </div>
          <div className={`container ${changes === "new" ? "active" : null}`}>
            <div
              onClick={() => {
                setChanges("new");
              }}
            >
              NEW
            </div>
          </div>
        </div>
        <div className="component">
          {changes === "details" && <Development matchId={matchId} />}
          {changes === "strategy" && <Strategy matchId={matchId} />}
          {changes === "statistical" && (
            <Statistical matchId={matchId} away={away} home={home} />
          )}
          {changes === "new" && <New />}
        </div>
      </div>
    </MatchDetailStyle>
  );
};

export default MatchDetail;
