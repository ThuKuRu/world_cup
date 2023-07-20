import styled from "styled-components";

const StatisticsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  .statistics {
    display: flex;
    flex-direction: column;
    width: 60vw;
    justify-content: center;
    margin-bottom: 1em;
    .title {
      align-items: center;
      display: flex;
      margin: 0.5em;
      justify-content: center;
      font-weight: 700;
      font-size: 20px;
      .img {
        width: auto;
        height: 1em;
        margin-right: 0.3em;
      }
    }
    .content {
      border: 3px solid #ccc;
      border-radius: 1em;
      font-size: 20px;
      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 3px solid #ccc;
        font-weight: 600;
        .head {
          margin: 0.5em;
        }
      }
      .goal {
        border-bottom: 1px solid #ccc;
        margin: 0.5em;
        a {
          font-weight: 600;
          color: #000;
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          align-items: center;
          margin-bottom: 0.5em;
          .left {
            display: flex;
            flex-wrap: wrap;
            .rank {
              margin: 0.7em 1em 0 1em;
            }
            .image {
              height: 3em;
              width: 3em;
              border-radius: 50%;
            }
            .info {
              margin-left: 1em;
              .nation {
                display: flex;
                .nationImg {
                  height: 1.5em;
                  width: auto;
                  margin-right: 0.5em;
                }
                .nationName {
                  margin: 0;
                }
              }
            }
          }
          .right {
            display: flex;
            margin-right: 1em;
          }
        }
      }
    }
  }
`;

export { StatisticsStyle };
