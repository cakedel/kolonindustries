const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 4000;

app.use(express.json());
var cors = require("cors");
app.use(cors());
// cors 오류를 해결하기 위한 코드입니다.

// const getStock = async function () {
//   try {
//     const response = await axios.get(
//       "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D&numOfRows=1&resultType=json&isinCd=KR7120111000"
//     );
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// api 데이터를 불러오기 위한 코드입니다.
// 오류만 발생시키고 먹통이라 현재 주석 처리를 해놨습니다.
// axios.get("엔드포인트 + 각종 키 주소를 포함한 api url")


app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// 서버로 접속시 React에서 build 된 파일들을 보여주는 코드입니다.

app.get("/", (req, res) => {
  getStock().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  });
});

// 위에 주석 처리된 getStock() 함수를 cors 처리해주는 코드라고 합니다. 상단에서 처리했지만 혹시나 몰라서 추가했습니다.

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}/`);
});


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// 리액트에서 라우팅을 담당하게 해주는 코드입니다. 
