import React, { useState } from "react";
import TopNav from "./TopNav/TopNav";
import Match from "../Match/Match";
import Footballers from "../Footballers/Footballers";
import Statistics from "../Statistics/Statistics";
import Ranks from "../Ranks/Ranks";
import { TABS } from "../../constants/index";
import Footer from "./Footer/Footer";

const Layout = () => {
  const [tab, setTab] = useState("home");
  const [matchId, setMatchId] = useState("");

  return (
    <div>
      <TopNav setTab={setTab} tab={tab} />
      {tab === TABS.HOME && (
        <Match setTab={setTab} tab={tab} setMatchId={setMatchId} />
      )}
      {tab === TABS.FOOTBALLERS && <Footballers setTab={setTab} />}
      {tab === TABS.STATISTICS && <Statistics setTab={setTab} />}
      {tab === TABS.RANKS && <Ranks setTab={setTab} />}
      <Footer />
    </div>
  );
};

export default Layout;
