import api from "./api";

const getMatchStatistical = async (IdMatch) => {
  const statistic = await api({
    method: "GET",
    url: `/summarymatch/${IdMatch}`,
  });
  return statistic;
};

export default getMatchStatistical;
