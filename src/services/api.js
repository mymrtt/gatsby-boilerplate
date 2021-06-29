// Libs
import axios from "axios";

export const Teste = (user) =>
  axios({
    url: `/`,
    method: "post",
    data: user,
  });
