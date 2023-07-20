import styled from "styled-components";

const StatisticalStyle = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  justify-content: center;
  display: flex;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  .statistical {
    font-weight: 600;
    .matchStatistical {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .team {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        p {
          margin: 0.5em;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
        }
        div {
          margin: 0.5em;
        }
      }
      .start {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        p {
          margin: 0.5em;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
        }
        div {
          margin: 0.5em;
        }
      }
      .end {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        p {
          margin: 0.5em;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
        }
        div {
          margin: 0.5em;
          display: flex;
          justify-content: flex-end;
        }
      }
      .teamName {
        display: flex;
        align-items: center;
        img {
          height: 30px;
          width: auto;
          margin-right: 0.5em;
        }
        p {
          font-size: 20px;
          font-weight: 600;
        }
      }
      .teamNameEnd {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          height: 30px;
          width: auto;
          margin-left: 0.5em;
        }
        p {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
`;

export { StatisticalStyle };
