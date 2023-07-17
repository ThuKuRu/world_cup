import React from "react";
import { STATISTICDATA } from "../../constants";
import { StatisticsStyle } from "./index.style";
import Goal from "./img/goals.png";
import Assists from "./img/assists.jpg";
import YellowCard from "./img/yellowCard.png";
import RedCard from "./img/redCard.png";

const Statistics = () => {
  return (
    <StatisticsStyle>
      <div className="statistics">
        <p className="title">
          <img className="img" src={Goal} alt="/" />
          GOALS
        </p>
        <div className="content">
          <div className="header">
            <div className="head">Player</div>
            <div className="head">Goals</div>
          </div>
          {STATISTICDATA.Goals.map((goals) => (
            <div className="goal">
              <a href={goals.information}>
                <div className="left">
                  <p className="rank">{goals.rankNumber}</p>
                  <img src={goals.image} alt="/" className="image" />
                  <div className="info">
                    <div className="name">{goals.name}</div>
                    <div className="nation">
                      <img
                        src={goals.nationImage}
                        alt="/"
                        className="nationImg"
                      />
                      <p className="nationName">{goals.nationName}</p>
                    </div>
                  </div>
                </div>
                <div className="right">{goals.quantity}</div>
              </a>
            </div>
          ))}
        </div>

        <p className="title">
          <img className="img" src={Assists} alt="/" />
          ASSISTS
        </p>
        <div className="content">
          <div className="header">
            <div className="head">Player</div>
            <div className="head">Assists</div>
          </div>
          {STATISTICDATA.Assists.map((goals) => (
            <div className="goal">
              <a href={goals.information}>
                <div className="left">
                  <p className="rank">{goals.rankNumber}</p>
                  <img src={goals.image} alt="/" className="image" />
                  <div className="info">
                    <div className="name">{goals.name}</div>
                    <div className="nation">
                      <img
                        src={goals.nationImage}
                        alt="/"
                        className="nationImg"
                      />
                      <p className="nationName">{goals.nationName}</p>
                    </div>
                  </div>
                </div>
                <div className="right">{goals.quantity}</div>
              </a>
            </div>
          ))}
        </div>

        <p className="title">
          <img className="img" src={YellowCard} alt="/" />
          YELLOW CARD
        </p>
        <div className="content">
          <div className="header">
            <div className="head">Player</div>
            <div className="head">Yellow Cards</div>
          </div>
          {STATISTICDATA.YellowCards.map((goals) => (
            <div className="goal">
              <a href={goals.information}>
                <div className="left">
                  <p className="rank">{goals.rankNumber}</p>
                  <img src={goals.image} alt="/" className="image" />
                  <div className="info">
                    <div className="name">{goals.name}</div>
                    <div className="nation">
                      <img
                        src={goals.nationImage}
                        alt="/"
                        className="nationImg"
                      />
                      <p className="nationName">{goals.nationName}</p>
                    </div>
                  </div>
                </div>
                <div className="right">{goals.quantity}</div>
              </a>
            </div>
          ))}
        </div>

        <p className="title">
          <img className="img" src={RedCard} alt="/" />
          RED CARD
        </p>
        <div className="content">
          <div className="header">
            <div className="head">Player</div>
            <div className="head">Red Cards</div>
          </div>
          {STATISTICDATA.RedCards.map((goals) => (
            <div className="goal">
              <a href={goals.information}>
                <div className="left">
                  <p className="rank">{goals.rankNumber}</p>
                  <img src={goals.image} alt="/" className="image" />
                  <div className="info">
                    <div className="name">{goals.name}</div>
                    <div className="nation">
                      <img
                        src={goals.nationImage}
                        alt="/"
                        className="nationImg"
                      />
                      <p className="nationName">{goals.nationName}</p>
                    </div>
                  </div>
                </div>
                <div className="right">{goals.quantity}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </StatisticsStyle>
  );
};

export default Statistics;
