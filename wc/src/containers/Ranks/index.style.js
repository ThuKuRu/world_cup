import styled from "styled-components";

const RankStyle = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  margin-bottom: 30px;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  .center {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1280px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .component {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .title {
        display: flex;
        align-items: center;
        margin: 0.5em 0.5em 0.5em 1em;
        justify-content: flex-start;
        font-weight: 700;
        font-size: 20px;
        p {
          margin: 10px;
        }
      }
      .table {
        width: 600px;
        font-weight: 600;
        background-color: #d9d9d9;
        align-items: center;
        border-radius: 1em;
        margin-left: 2em;
        .header {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          border-bottom: 2px solid #fff;
          .td {
            display: flex;
            justify-content: center;
            padding: 0.5em;
            align-items: center;
          }
          .teamName {
            width: 100px;
          }
          .nation {
            width: 50px;
          }
        }
        .tr {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          border-bottom: 1px solid #fff;
          .td {
            padding: 0.5em;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nation {
            width: 50px;
            .img {
              margin-top: 0.5em;
            }
          }
          .teamName {
            width: 100px;
          }
        }
      }
    }
  }
`;

export { RankStyle };
