import React, { useState, useEffect } from "react";
import getMatchEvent from "../../../../api/matchEvent";
import { DEVELOPMENTS } from "../../../../constants/index";
import { DevelopmentStyle } from "./index.style";
import Foot from "../img/football.png";
import YellowCard from "../img/yellowCard.png";
import Swap from "../img/swap1.png";

const Development = ({ matchId }) => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const data = await getMatchEvent(matchId);
    setEvents(data.data.EventArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DevelopmentStyle>
      <div className="container">
        <div className="title">KẾT THÚC TRẬN ĐẤU</div>
      </div>
      {events.map((event) => (
        <div className="event">
          {event.Tag === DEVELOPMENTS.GOAL && (
            <div className="table" key={event.IdPlayer}>
              <div className="header">
                <div className="headerLeft">
                  <img src={Foot} alt="/" />
                  <div className="title"> GHI BÀN</div>
                </div>
                <div className="headerRight">
                  <span>Phút {event.Minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <div className="name">
                      <div>
                        <a href={event.UrlPlayer}>{event.NamePlayer}</a>
                      </div>
                      <div> - </div>
                      <div>{event.JerseyNum}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {event.Tag === DEVELOPMENTS.SUB && (
            <div className="table">
              <div className="header">
                <div className="headerLeft">
                  <img src={Swap} alt="/" />
                  <span className="title">THAY NGƯỜI</span>
                </div>
                <div className="headerRight">
                  <span>Phút {event.Minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <div className="titlePlayIn">VÀO SÂN</div>
                    <div className="name">
                      <div>
                        <a href={event.UrlPlayerOn}>{event.PlayerOnName}</a>
                      </div>
                      <div> - </div>
                      <div>{event.JerseyNumOn}</div>
                    </div>
                    <div className="info">
                      <img src={event.UrlPictureTeam} alt="/" />
                      <div className="team">
                        <a href={event.UrlTeam}>{event.TeamName}</a>
                      </div>
                      <div> - </div>
                      <div>{event.PositionLocalizedOn}</div>
                    </div>
                  </div>
                  <div className="player">
                    <div className="titlePlayOut">RA SÂN</div>
                    <div className="nameOut">
                      <div>{event.JerseyNumOff}</div>
                      <div> - </div>
                      <div>
                        <a href={event.UrlPlayerOff}>{event.PlayerOffName}</a>
                      </div>
                    </div>
                    <div className="infoOut">
                      <div>{event.PositionLocalizedOff}</div>
                      <div> - </div>
                      <div className="team">
                        <a href={event.UrlTeam}>{event.TeamName}</a>
                      </div>
                      <img src={event.UrlPictureTeam} alt="/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {event.Tag === DEVELOPMENTS.BOOKING && (
            <div className="table">
              <div className="header">
                <div className="headerLeft">
                  <img src={YellowCard} alt="/" />
                  <span className="title">THẺ VÀNG</span>
                </div>
                <div className="headerRight">
                  <span>Phút {event.Minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <div className="name">
                      <div>
                        <a href={event.UrlPlayer}>{event.NamePlayer}</a>
                      </div>
                      <div> - </div>
                      <div>{event.JerseyNum}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </DevelopmentStyle>
  );
};

export default Development;
