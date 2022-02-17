import axios from "axios";

const baseDomain = "https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {
    Authorization: "abcd1234",
  },
});
