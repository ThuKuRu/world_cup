import styled from "styled-components";

const FootballerStyle = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 50px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 600;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  a {
    text-decoration: none;
    color: #000;
    .player {
      display: flex;
      width: 200px;
      flex-direction: column;
      justify-content: center;
      border-radius: 1em;
      border: 2px solid #d9d9d9;
      margin-left: 1em;
      margin-bottom: 1em;
      .playerPicture {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
          width: 160px;
          height: 240px;
        }
      }
      .nation {
        display: flex;
        align-items: center;
        margin: 0.5em 0 1em 0;
        img {
          height: 30px;
          width: auto;
          margin-left: 1em;
        }
        p {
          margin: 0;
        }
      }
      p {
        padding: 0.5em 0 0 1em;
        margin: 0;
      }
      .name {
        height: 48px;
        font-size: 20px;
        font-weight: 600;
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.2em #ccc;
        background-color: #d9d9d9;
        border: 2px solid #000;
        color: #09ae3e;
      }
    }
  }
`;

export { FootballerStyle };
