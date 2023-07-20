import api from "./api";

const getFootballer = async () => {
  const footballer = await api({
    method: "GET",
    url: `/player`,
  });
  return footballer;
};

export default getFootballer;
