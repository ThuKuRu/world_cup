import api from "./api";

const getMatchList = async () => {
  const match = await api({
    method: "GET",
    url: "/tutorialmatch",
  });
  return match;
};

export default getMatchList;
