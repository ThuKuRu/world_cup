import api from "./api";

const getMatchStrategy = async (IdMatch) => {
  const matchStrategy = await api({
    method: "GET",
    url: `/TaticsMatch/${IdMatch}`,
  });
  return matchStrategy;
};

export default getMatchStrategy;
