import styled from "styled-components";

const TopNavStyle = styled.div`
  --mainColor: #09ae3e;
  --hover: #000;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  color: #ffffff;
  background-color: var(--mainColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 100;
  .TopRight {
    margin-left: 3em;
    .logo {
      height: 40px;
      weight: auto;
    }
  }
  .listItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .container {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0px 16px;
      font-size: 20px;
      font-weight: 900;
      height: 100%;
      text-decoration: none;
      div {
        margin: 0.625em 0em;
        display: flex;
        align-items: center;
        p {
          cursor: pointer;
          color: #828388;
        }
      }
      &.active {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        font-size: 20px;
        font-weight: 900;
        height: 100%;
        background-color: #000;
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
          background-color: var(--mainColor);
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
          border-radius: 5px;
        }
      }
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
        transform: translateY(-0.25em);
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
        transform: translateY(-0.25em);
        border-radius: 5px;
        p {
          color: #ccc;
        }
      }
    }
  }
  .TopLeft {
    display: flex;
    align-items: center;
    margin-right: 50px;
    .selectList {
      margin-top: 0.3em;
      font-family: "Barlow", sans-serif;
      font-weight: 900;
      padding: 0px 3px 5px;
      text-decoration: none !important;
      font-size: 20px;
      border-top: none;
      border-right: none;
      border-left: none;
      color: #fff;
      border-bottom: 3px solid #000;
      background-color: #09ae3e;
      .menuItem {
        font-size: 20px;
        padding: 5px 10px;
        text-align: center;
        background-color: #ccc;
        color: #000;
        font-weight: 900;
        list-style: none;
      }
    }
    .avatar {
      margin-top: 5px;
      margin-left: 20px;
      border: 1px solid #000;
      border-radius: 6px;
      height: 40px;
      weight: 40px;
    }
  }
  .toggleBtn {
    cursor: pointer;
    align-items: center;
    display: none;
    span {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }

  .dropDown {
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 300px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border-radius: 1em;
    overflow: hidden;
    color: #000;
    display: none;
    li {
      padding: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0px 16px;
      font-size: 20px;
      font-weight: 900;
      height: 100%;
      text-decoration: none;
      background-color: #d9d9d9;
      border-bottom: 1px solid #ccc;
      div {
        margin: 0.625em 0em;
        display: flex;
        align-items: center;
        p {
          cursor: pointer;
          color: #828388;
        }
      }
      &.active {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        font-size: 20px;
        font-weight: 900;
        height: 100%;
        background-color: #000;
        text-decoration: none;
        color: #fff;
        border-bottom: 1px solid #000;
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
          background-color: #d9d9d9;
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
          border-radius: 5px;
          color: #000;
        }
      }
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
        transform: translateY(-0.25em);
      }
      &:hover {
        box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
        transform: translateY(-0.25em);
        border-radius: 5px;
        p {
          color: #ccc;
        }
      }
    }
  }

  .dropDown.active {
    display: block;
  }

  @media (max-width: 1024px) {
    .listItem,
    .TopLeft {
      display: none;
    }
    .toggleBtn {
      display: block;
      margin-right: 3em;
    }
  }
`;

export { TopNavStyle };
