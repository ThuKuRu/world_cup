import React from "react";
import { NewStyle } from "./index.style";

const New = ({ away, home }) => {
  return (
    <NewStyle>
      Gần đây không có tin tức nào về
      <p> {home.TeamName} </p>
      hoặc
      <p> {away.TeamName}. </p>
    </NewStyle>
  );
};

export default New;
