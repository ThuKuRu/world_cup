import React, { useState, useEffect } from "react";
import { MatchStyle } from "./index.style";
import getMatchList from "../../api/matchApi";
import { TABS } from "../../constants/index";

const Match = ({ setTab, setMatchId }) => {
  const [matches, setMatches] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    const data = await getMatchList();
    setMatches(Object.values(data.data));
    setDates(Object.keys(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MatchStyle>
      {matches
        .slice()
        .reverse()
        .map((match, index) => (
          <div className="matchComponent">
            <form>
              <label
                className="dateTime"
                htmlFor={[matches.length - index - 1]}
              >
                {dates[matches.length - index - 1]}
              </label>
              <input
                name="hidden"
                id={matches.length - index - 1}
                className="hidden"
                type="checkbox"
                hidden
              />
              <div className="matches">
                {match.map((subMatch) => (
                  <div className="match">
                    <div className="subMatch">
                      <div className="title">
                        <p>{subMatch.groupStage}</p>
                      </div>
                      <div className="info">
                        <div className="twoTeam">
                          <div className="team">
                            <img
                              src={subMatch.imagehomeTeam.replace(
                                "{format}-{size}",
                                "sq-2"
                              )}
                              alt="/"
                            />
                            <p className="name"> {subMatch.homeTeam}</p>
                          </div>
                          <div className="dateTable">
                            <div className="column">
                              {subMatch.table === "0" ? (
                                <div className="tableNone" />
                              ) : (
                                <div className="table">{subMatch.table}</div>
                              )}
                            </div>
                          </div>
                          <div className="team">
                            <img
                              src={subMatch.imageawayTeam.replace(
                                "{format}-{size}",
                                "sq-2"
                              )}
                              alt="/"
                            />
                            <p className="name"> {subMatch.awayTeam}</p>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <div
                          className="createButton"
                          onClick={() => {
                            setMatchId(subMatch.idMatch);
                            setTab(TABS.DETAIL);
                          }}
                        >
                          <p className="create">More</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        ))}
    </MatchStyle>
  );
};

export default Match;
