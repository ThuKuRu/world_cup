import api from "./api";

const getMatchDetailList = async (IdMatch) => {
  const matchDetail = await api({
    method: "GET",
    url: `/overviewmatch/${IdMatch}`,
  });
  return matchDetail;
};

export default getMatchDetailList;
