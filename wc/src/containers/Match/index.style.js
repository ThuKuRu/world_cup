import styled from "styled-components";

const MatchStyle = styled.div`
  --hover: #000;
  --mainColor: #09ae3e;
  margin-top: 80px;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  .matchComponent {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    .nav {
        width: 90%;
        display: flex;
        justify-content: space-between;
        .dateTime {
          margin-left: 1%;
          display: flex;
          flex-direction: flex-start;
          font-size: 20px;
          font-weight: 900;
          padding: 0 0 0 1em;
          border-left: 3px solid #09ae3e;
          margin-bottom: 1em;
          &:hover {
            color: var(--mainColor);
            cursor: pointer;
          }
        }
        .icon {
            cursor: pointer;
          .appear {
            display: block;
          }
          .active {
            display: none;
          }
        }
    }
      .matches {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: 1280px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .match {
          width: 330px;
          height: 220px;
          background-color: #d9d9d9;
          border-radius: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          margin-left: 20px;
        }
        .subMatch {
          border-radius: 1em;
          justify-content: center;
          width: 100%;
          .title {
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000;
            width: 50%;
            margin-left: 25%;
            margin-bottom: 10px;
            border-radius: 4px 4px 8px 8px;
            p {
              font-size: 18px;
              text-align: center;
              color: #fff;
              font-weight: 900;
            }
          }
          .info {
            width: 100%;
            text-align: center;
            height: 97px;
            margin-top: 20px;
            border-bottom: 3px dashed #000;
            display: grid;
            .twoTeam {
              grid-template-columns: repeat(3, 1fr);
              display: flex;
              justify-content: center;
              .team {
                width: 33.33%;
                .name {
                  margin-top: 4px;
                  font-size: 16px;
                  font-weight: 700;
                }
              }
              .dateTable {
                display: flex;
                flex-decoration: column;
                .column {
                  justify-content: center;
                  text-align: center;
                  .tableNone {
                    width: 33.33%;
                    margin-left: 80px;
                  }
                  .table {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    font-weight: 900;
                    color: #09ae3e;
                  }
                }
              }
            }
          }
        }

        .button {
          display: flex;
          float: right;
          .createButton {
            background-color: #ffcd08;
            padding: 0.2em 1em;
            border-radius: 1em;
            cursor: pointer;
            margin: 0.9em 1em 0 0;
            cursor: pointer;
            p {
              margin: 0;
              font-size: 20px;
              font-weight: 600;
            }
            &:hover {
              box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
              background-color: #09ae3e;
              p {
                color: #fff;
              }
            }
          }
        }
      }
    }
    input:checked + .matches {
      transition-duration: "0.5s";
      display: none;
    }
  }

  @keyframe fadeIn {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(100%);
    }
  }
`;

export { MatchStyle };
