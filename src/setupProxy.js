const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
