import React, { useState } from "react";
import { TopNavStyle } from "./index.style";
import TopNavLogo from "../img/Slice_9.png";
import AvatarImg from "../img/thu_1.png";
import { TABS } from "../../../constants/index";

const TopNav = ({ tab, setTab }) => {
  const [value, setValue] = useState("en");
  const [down, setDown] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TopNavStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="TopRight">
        <img className="logo" src={TopNavLogo} alt="/" />
      </div>
      <ul className="listItem">
        <li className={`container ${tab === TABS.HOME ? "active" : null}`}>
          <div
            onClick={() => {
              setTab(TABS.HOME);
            }}
          >
            MATCH
          </div>
        </li>
        <li
          className={`container ${tab === TABS.FOOTBALLERS ? "active" : null}`}
        >
          <div
            onClick={() => {
              setTab(TABS.FOOTBALLERS);
            }}
          >
            FOOTBALLERS
          </div>
        </li>
        <li
          className={`container ${tab === TABS.STATISTICS ? "active" : null}`}
        >
          <div
            className="subItem"
            onClick={() => {
              setTab(TABS.STATISTICS);
            }}
          >
            STATISTICS
          </div>
        </li>
        <li className={`container ${tab === TABS.RANKS ? "active" : null}`}>
          <div
            onClick={() => {
              setTab(TABS.RANKS);
            }}
          >
            RANKS
          </div>
        </li>
      </ul>
      <div className="TopLeft">
        <select className="selectList" value={value} onChange={handleChange}>
          <option className="menuItem" value="en" selected="selected">
            ENGLISH (UK)
          </option>
          <option className="menuItem" value="vi">
            VIETNAMESE
          </option>
        </select>
        <img className="avatar" src={AvatarImg} variant="rounded" alt="/" />
      </div>
      <div
        className="toggleBtn"
        value="down"
        onClick={() => setDown((prev) => !prev)}
      >
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className={down === true ? "dropDown active" : "dropDown"}>
        <li className={`container ${tab === TABS.HOME ? "active" : null}`}>
          <div
            onClick={() => {
              setTab(TABS.HOME);
            }}
          >
            MATCH
          </div>
        </li>
        <li
          className={`container ${tab === TABS.FOOTBALLERS ? "active" : null}`}
        >
          <div
            onClick={() => {
              setTab(TABS.FOOTBALLERS);
            }}
          >
            FOOTBALLERS
          </div>
        </li>
        <li
          className={`container ${tab === TABS.STATISTICS ? "active" : null}`}
        >
          <div
            className="subItem"
            onClick={() => {
              setTab(TABS.STATISTICS);
            }}
          >
            STATISTICS
          </div>
        </li>
        <li className={`container ${tab === TABS.RANKS ? "active" : null}`}>
          <div
            onClick={() => {
              setTab(TABS.RANKS);
            }}
          >
            RANKS
          </div>
        </li>
      </div>
    </TopNavStyle>
  );
};

export default TopNav;
