import api from "./api";

const getRankList = async () => {
  const rank = await api({
    method: "GET",
    url: "/matchgroup",
  });
  return rank;
};

export default getRankList;
