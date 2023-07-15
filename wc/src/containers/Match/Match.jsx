import React, { useState, useEffect } from "react";
import { MatchStyle } from "./index.style";
import getMatchList from "../../api/matchApi";
import { TABS } from "../../constants/index";

const Match = ({ setTab, setMatchId }) => {
  const [matches, setMatches] = useState([]);
  const [dates, setDates] = useState([]);
  const [swap, setSwap] = useState(false);
  const [swaps, setSwaps] = useState([]);

  const fetchData = async () => {
    const data = await getMatchList();
    setMatches(Object.values(data.data));
    setDates(Object.keys(data.data));
    setSwaps(
      Object.values(data.data)
        .slice()
        .reverse()
        .map(() => false)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MatchStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      {matches
        .slice()
        .reverse()
        .map((match, index) => (
          <div className="matchComponent">
            <div className="nav">
              <div className="dateTime">
                {dates[matches.length - index - 1]}
              </div>
              <label
                className="icon"
                htmlFor={[matches.length - index - 1]}
                onClick={() =>
                  setSwaps(() => {
                    return swaps.map((current, ind) => {
                      if (index === ind) {
                        return !current;
                      }
                      return current;
                    });
                  })
                }
              >
                <div className={swaps[index] === true ? "active" : "appear"}>
                  <span class="material-symbols-outlined">close</span>
                </div>
                <div className={swaps[index] === false ? "active" : "appear"}>
                  <span className="material-symbols-outlined">
                    open_in_full
                  </span>
                </div>
              </label>
            </div>
            <div className="container">
              <form>
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
          </div>
        ))}
    </MatchStyle>
  );
};

export default Match;
