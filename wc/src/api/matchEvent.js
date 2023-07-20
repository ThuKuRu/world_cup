import api from "./api";

const getMatchEvent = async (IdMatch) => {
  const matchEvent = await api({
    method: "GET",
    url: `/eventMatch/${IdMatch}`,
  });
  return matchEvent;
};

export default getMatchEvent;
