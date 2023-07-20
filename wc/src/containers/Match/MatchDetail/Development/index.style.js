import styled from "styled-components";

const DevelopmentStyle = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  a {
    text-decoration: none;
    color: #000;
  }
  .container {
    width: 100%;
    justify-content: center;
    .title {
      font-size: 20px;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      margin-bottom: 1em;
    }
  }

  .event {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    color: #000;
    font-weight: 600;
    .table {
      width: 50vw;
      align-items: center;
      justify-content: center;
      border: 3px solid #000;
      border-radius: 1em;
      .header {
        display: flex;
        border-bottom: 3px solid #000;
        justify-content: space-between;
        height: 2.5em;
        align-items: center;
        .headerLeft {
          display: flex;
          align-items: center;
          height: 2.5em;
          .material-symbols-outlined {
            margin: 0.1em 0 0 1em;
          }
          img {
            margin: 0.1em 0 0 1em;
            width: 20px;
            height: 20px;
          }
          .title {
            display: flex;
            margin: 0 0 0 0.5em;
          }
        }
        .headerRight {
          width: 50%;
          display: flex;
          justify-content: flex-end;
          font-weight: 600;
          margin-right: 1em;
        }
      }
      .contain {
        font-weight: 600;
        .players {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          @media (max-width: 1024px) {
            grid-template-columns: repeat(1, 1fr);
          }
          .player {
            display: flex;
            flex-direction: column;
            margin: 0.5em 1em 0 1em;
            @media (max-width: 1024px) {
              display: flex;
              justify-content: center;
            }
            .name {
              display: flex;
              justify-content: flex-start;
              margin-bottom: 0.5em;
            }
            .titlePlayIn {
              margin: 0.5em 0 0.5em 0;
              color: #09ae3e;
            }
            .titlePlayOut {
              display: flex;
              margin: 0.5em 0 0.5em 0em;
              color: #a1435f;
              justify-content: flex-end;
              @media (max-width: 1024px) {
                justify-content: flex-start;
              }
            }
            .nameOut {
              display: flex;
              justify-content: flex-end;
              margin-bottom: 0.5em;
              @media (max-width: 1024px) {
                justify-content: flex-start;
              }
            }
            .info {
              display: flex;
              justify-content: flex-start;
              margin-bottom: 0.5em;
              align-items: center;
              img {
                margin-right: 0.5em;
                width: 3em;
                height: auto;
                border-radius: 4px;
              }
            }
            .infoOut {
              display: flex;
              justify-content: flex-end;
              margin-bottom: 0.5em;
              align-items: center;
              img {
                margin-left: 0.5em;
                width: 3em;
                height: auto;
                border-radius: 4px;
              }
              @media (max-width: 1024px) {
                justify-content: flex-start;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    span {
      margin-left: 47%;
    }
  }
`;

export { DevelopmentStyle };
