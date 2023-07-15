import styled from "styled-components";

const FooterStyle = styled.div`
  --mainColor: #09ae3e;
  background-color: #000;
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  li {
    list-style: none;
  }
  .footerContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    .constact {
      margin-left: 3em;
      margin-bottom: 1.125rem;
      .logo {
        height: 35px;
        width: auto;
      }
      .socialMedia {
        margin-top: 0.5em;
        display: flex;
        .icon {
          width: 30px;
          height: auto;
          margin-left: 0.5em;
          cursor: pointer;
        }
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2em;
      li {
        h3 {
          color: var(--mainColor);
        }
        color: #a8a29e;
        transition: all 0.4s;
        cursor: pointer;
        &:hover {
          color: var(--mainColor);
        }
      }
    }
    .subscribe {
      margin-right: 3em;
      margin-bottom: 1.125rem;
      h3 {
        color: var(--mainColor);
      }
      p {
        color: #a8a29e;
      }
      .input {
        display: flex;
        align-items: center;
        background-color: #171717;
        border-radius: 4px;
        input {
          all: unset;
          padding: 0.5rem;
          width: 100%;
        }
        button {
          background-color: var(--mainColor);
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1.125rem;
          height: 100%;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          align-items: center;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .footerContainer {
      grid-template-columns: repeat(3, 1fr);
      grap: 2rem;
      .subscribe {
        margin-left: 3rem;
      }
    }
  }

  @media (max-width: 600px) {
    .footerContainer {
      grid-template-columns: repeat(2, 1fr);
      grap: 2rem;
    }
  }

  @media (max-width: 426px) {
    .footerContainer {
      grid-template-columns: repeat(1, 1fr);
      padding: 3rem 2rem;
    }
  }
`;

export { FooterStyle };
