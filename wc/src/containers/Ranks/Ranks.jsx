import React, { useState, useEffect } from "react";
import getRankList from "../../api/ranksApi";
import { RankStyle } from "./index.style";

const Ranks = () => {
  const [ranks, setRanks] = useState([]);

  const fetchData = async () => {
    const data = await getRankList();
    setRanks(Object.values(data.data));
    console.log(Object.values(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RankStyle>
      <div className="center">
        {ranks
          .sort((a, b) => {
            if (a.group < b.group) {
              return -1;
            }
            return 1;
          })
          .map((rank) => (
            <div className="component" key={rank._id}>
              <div className="title">
                <p> GROUP {rank.Group}</p>
              </div>
              <div className="table">
                <div className="header">
                  <div className="td first">#</div>
                  <div className="td nation">Nation</div>
                  <div className="td teamName">Team</div>
                  <div className="td">P</div>
                  <div className="td">W</div>
                  <div className="td">D</div>
                  <div className="td">L</div>
                  <div className="td">GD</div>
                  <div className="td">Pts</div>
                </div>
                {rank.Data.map((tr) => (
                  <div className="tr">
                    <div className="td first">{tr.Rank}</div>
                    <div className="td nation">
                      <img
                        src={tr.ImgUrl.replace("{format}-{size}", "sq-1")}
                        alt="/"
                      />
                    </div>
                    <div className="td teamName">{tr.TeamName}</div>
                    <div className="td">{tr.Pld}</div>
                    <div className="td">{tr.W}</div>
                    <div className="td">{tr.D}</div>
                    <div className="td">{tr.L}</div>
                    <div className="td">{tr.GD}</div>
                    <div className="td">{tr.Pts}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </RankStyle>
  );
};

export default Ranks;
