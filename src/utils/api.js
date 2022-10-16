import axios from "axios";

const isDev = ["localhost:3000", "127.0.0.1:3000"].includes(
  window.location.host
);

export const stockApi = axios.create({
  baseURL: isDev
    ? "http://127.0.0.1:18000/stock-proxy-api"
    : "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService",
});
