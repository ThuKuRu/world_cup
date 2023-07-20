import React, { useState, useEffect } from "react";
import getMatchStatistical from "../../../../api/matchStatistic";
import { StatisticalStyle } from "./index.style";

const Statistical = ({ matchId, away, home }) => {
  const [awayTeam, setAwayTeam] = useState([]);
  const [homeTeam, setHomeTeam] = useState([]);

  const fetchData = async () => {
    const data = await getMatchStatistical(matchId);
    setAwayTeam(data.data.PropertiesAwayTeam);
    setHomeTeam(data.data.PropertiesHomeTeam);
  };

  const formatControlRatio = (ratio) => {
    return parseFloat(ratio).toFixed(2);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StatisticalStyle>
      <div className="statistical">
        <div className="matchStatistical">
          <div className="teamName">
            <img className="nationImg" src={home.PictureUrl} alt="/" />
            <p>{home.TeamName}</p>
          </div>
          <div className="team">
            <p className="title">SỐ LIỆU THỐNG KÊ</p>
          </div>
          <div className="teamNameEnd">
            <p>{away.TeamName}</p>
            <img className="nationImg" src={away.PictureUrl} alt="/" />
          </div>
        </div>
        <div className="matchStatistical">
          <div className="start">
            <div>{formatControlRatio(homeTeam[0]?.[1])}</div>
            {homeTeam.slice(1, homeTeam.length).map((homeTeams, index) => (
              <div key={index}>{homeTeams[1]}</div>
            ))}
          </div>
          <div className="team">
            <p>Tỉ lệ kiểm soát trận đấu</p>
            <p>Số bàn thắng</p>
            <p>Số bàn thua</p>
            <p>Hỗ trợ</p>
            <p>Số lần tấn công khung thành</p>
            <p>Số lần tấn công trúng đích</p>
            <p>Số lần truyền bóng</p>
            <p>Số thẻ vàng</p>
            <p>Số thẻ đỏ</p>
            <p>Phạm lỗi</p>
            <p>Liệt vị</p>
          </div>
          <div className="end">
            <div>{formatControlRatio(awayTeam[0]?.[1])}</div>
            {awayTeam.slice(1, awayTeam.length).map((awayTeams, index) => (
              <div key={index}>{awayTeams[1]}</div>
            ))}
          </div>
        </div>
      </div>
    </StatisticalStyle>
  );
};

export default Statistical;
