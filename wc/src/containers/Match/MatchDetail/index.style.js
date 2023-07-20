import styled from "styled-components";
const MatchDetailStyle = styled.div`
  --hover: #09ae3e;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  a {
    text-decoration: none;
    color: #000;
  }
  .container {
    width: 80%;
    height: auto;
    background-color: #d9d9d9;
    .title {
      display: flex;
      align-items: center;
      font-weight: 600;
      justify-content: space-between;
      margin-top: 0px;
      .titleLeft {
        display: flex;
        .wc {
          color: #a1435f;
          padding: 0 0 0 2em;
        }
      }
      .titleRight {
        margin-top: 11px;
        display: flex;
        color: #a1435f;
        padding: 0 2em 0 0;
      }
    }
    .teams {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 0.5em;
      .team {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .teamName {
          font-size: 20px;
          font-weight: 600;
        }
        .win {
          display: flex;
          justify-content: flex-start;
        }
      }
      .score {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .matchScore {
          width: 90%;
          display: flex;
          justify-content: space-between;
          font-size: 25px;
          font-weight: 700;
        }
        .penaltyScore {
          width: 60%;
          display: flex;
          justify-content: space-between;
          color: #a1435f;
          font-weight: 600;
        }
      }
    }
    .goals {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .goal {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .goalLeft {
        margin-left: 20%;
        font-weight: 600;
      }
      .goalRight {
        margin-right: 20%;
        font-weight: 600;
        .win {
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    .stadium {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;
      font-weight: 600;
    }
    .video {
      position: relative;
      height: 650px;
      @media (max-width: 1280px) {
        height: 600px;
      }
      @media (max-width: 1024px) {
        height: 450px;
      }
      @media (max-width: 768px) {
        height: 350px;
      }
      @media (max-width: 640px) {
        height: 250px;
      }
      .time {
        position: absolute;
        bottom: 0;
        height: 60px;
        width: 100%;
        background-color: rgba(9, 9, 20, 0.6);
        align-items: center;
        display: flex;
        .icon {
          width: 30px;
          height: 30px;
          padding: 0 0.5em 0 1em;
        }
        span {
          color: #fff;
        }
      }
    }
    .changes {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: auto;
      margin-top: -0.5em;
      color: #fff;
      .container {
        cursor: pointer;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 0px 16px;
        font-size: 20px;
        font-weight: 700;
        height: 100%;
        background-color: #000;
        text-decoration: none;
        div {
          margin: 0.625em 0em;
          display: flex;
          align-items: center;
          p {
            cursor: pointer;
            color: #fff;
          }
        }
        &.active {
          display: flex;
          align-items: center;
          padding: 0px 16px;
          font-size: 20px;
          font-weight: 700;
          height: 100%;
          background-color: #09ae3e;
          text-decoration: none;
          div {
            p {
              color: #fff;
            }
          }
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            background-color: #000;
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
        }
        &:focus {
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
        }
        &:hover {
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
          p {
            color: #fff;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .nationImg {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    .nationImg {
      width: 150px;
    }
    .win {
      display: flex;
      flex-direction: column;
    }
    .goalLeft {
      margin-left: 10%;
    }
    .goalRight {
      margin-left: 10%;
    }
  }

  @media (max-width: 640px) {
    .nationImg {
      width: 100px;
    }
    .goalLeft {
      margin-left: 5%;
    }
    .goalRight {
      margin-left: 15%;
    }
  }
`;

export { MatchDetailStyle };
