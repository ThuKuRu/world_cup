import styled from "styled-components";

const StrategyStyle = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
  }
  .stratery {
    width: 80%;
    .title {
      display: flex;
      margin-top: 1em;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      justify-content: center;
      flex-direction: column;
    }
    .matchStrategy {
      padding: 0.5em;
      width: 100%;
      border: 2px solid #000;
      margin-bottom: 1em;
      border-radius: 1em;
      .teams {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .homeTeam,
        .awayTeam,
        .awayTeam_1 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          .teamTitle {
            color: #a1435f;
            margin: 10px 0 10px 10px;
            font-size: 20px;
            font-weight: 600;
          }
          .teamTitleEnd {
            display: flex;
            color: #a1435f;
            margin: 10px 10px 10px 0;
            font-size: 20px;
            font-weight: 600;
            justify-content: flex-end;
          }
          .name {
            display: flex;
            align-items: center;
            img {
              height: 30px;
              width: auto;
              margin: 0 0.5em;
            }
            p {
              font-weight: 600;
              font-size: 20px;
              margin: 10px 0;
            }
          }
          .nameEnd {
            display: flex;
            justify-content: flex-end;
            img {
              height: 30px;
              width: auto;
              margin: 0 0.5em;
            }
            p {
              font-weight: 600;
              font-size: 20px;
              margin: 10px 0;
              margin: 0;
            }
          }
        }
        .awayTeam_1 {
          display: flex;
          justify-content: flex-end;
        }
      }
      .container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .content {
          .players {
            display: flex;
            justify-content: space-between;
            .player {
              display: flex;
              justify-content: space-between;
              .coachesName {
                height: 24px;
                margin: 0.5em;
              }
              p {
                font-weight: 600;
                margin: 0;
                margin: 0em 0.5em;
                height: 48px;
              }
              .shirt {
                img {
                  height: 30px;
                  width: auto;
                  margin: 0 0.5em;
                }
                p {
                  font-weight: 600;
                  margin: 0;
                  margin: 0;
                }
                display: flex;
                @media (max-width: 1024px) {
                  display: none;
                }
              }
              .shirtEnd {
                display: flex;
                justify-content: flex-end;
                @media (max-width: 1024px) {
                  display: none;
                }
                img {
                  height: 30px;
                  width: auto;
                  margin: 0 0.5em;
                }
                p {
                  font-weight: 600;
                  margin: 0;
                  margin: 0;
                }
              }
            }
            .position {
              p {
                font-weight: 600;
                margin: 0;
                margin: 0em 0.5em;
              }
            }
            .positionEnd {
              display: flex;
              justify-content: flex-end;
              p {
                font-weight: 600;
                margin: 0;
                margin: 0em 0.5em;
              }
            }
          }
          .playerEnd {
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
  }
`;

export { StrategyStyle };
