import axios from "axios";
import React, { useEffect, useState } from "react";

const Stock = () => {
  // const kolonStock = result[0];
  // const stockPrice = Number(kolonStock.clpr);
  // const trquStockNum = Number(kolonStock.trqu);
  // const hiprStockNum = Number(kolonStock.hipr);
  // const loprStockNum = Number(kolonStock.lopr);
  // const mkpStockNum = Number(kolonStock.mkp);
  // const fltRtStockNum = Number(kolonStock.fltRt);

  // const date = kolonStock.basDt;
  const [data, setData] = useState();
  useEffect(() => {
    getStock();
  }, []);

  // 주가정보 취득
  const getStock = async () => {
    // Parameters
    // 공공데이터포털에서 받은 인증키
    const serviceKey =
      "H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D";
    // 한 페이지 결과 수
    const numOfRows = 1; // 거래 목록 중 최근 1일을 취득하기 위해 설정
    // 구분(xml, json)
    const resultType = "json";
    // 검색값과 ISIN코드이 일치하는 데이터를 검색
    const isinCd = "KR7120111000";

    // 금융위원회_주식시세정보 OPEN API 호출
    // KRX에 상장된 주식의 시세 정보 취득
    const baseURL =
      "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo";
    axios
      .get(
        `${baseURL}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&resultType=${resultType}&isinCd=${isinCd}`
      )
      .then((response) => {
        const result = response.data.response.body.items.item[0];
        setData(result);
      });
  };

  return (
    <>
      {data ? (
        <section className="Stock section">
          <div className="inner">
            <h3>주가정보</h3>
            <strong>
              {data.basDt.substr(0, 4) +
                "-" +
                data.basDt.substr(4, 2) +
                "-" +
                data.basDt.substr(6, 2)} 기준
            </strong>
            <table className="stocktable">
              <tbody>
                <tr>
                  <th className="stockNum" rowSpan={2}>
                    {Number(data.clpr).toLocaleString()}
                  </th>
                  <td className="topTitle bottomLine">전일대비</td>
                  <td className="topTitle bottomLine">등락률</td>
                  <td className="topTitle bottomLine">시가</td>
                  <td className="topTitle bottomLine">고가</td>
                  <td className="topTitle bottomLine">저가</td>
                  <td className="topTitle bottomLine">거래량</td>
                </tr>
                <tr>
                  <td className="bottomValue">{Number(data.vs)}</td>
                  <td className="bottomValue">{Number(data.fltRt).toFixed(2)}</td>
                  <td className="bottomValue">
                    {Number(data.mkp).toLocaleString()}
                  </td>
                  <td className="bottomValue">
                    {Number(data.hipr).toLocaleString()}
                  </td>
                  <td className="bottomValue">
                    {Number(data.lopr).toLocaleString()}
                  </td>
                  <td className="bottomValue">
                    {Number(data.trqu).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="inner">
            <h3>배당정보</h3>
            <table className="divideInfo">
              <thead>
                <tr className="content">
                  <td className="kind">구분</td>
                  <td className="sort">주식종류</td>
                  <td className="year 2021">12기(2021)</td>
                  <td className="year 2020">11기(2020)</td>
                  <td className="year 2019">10기(2019)</td>
                  <td className="year 2018">9기(2018)</td>
                  <td className="year 2017">8기(2017)</td>
                </tr>
              </thead>
              <tbody>
                <tr className="content">
                  <th className="title" rowSpan={2}>
                    주당현금배당(원)
                  </th>
                  <td className="stockSort">보통주</td>
                  <td className="number">1,300</td>
                  <td className="number">1,000</td>
                  <td className="number">900</td>
                  <td className="number">900</td>
                  <td className="number">1,100</td>
                </tr>
                <tr>
                  <td className="stockSort">우선주</td>
                  <td className="number">1,350</td>
                  <td className="number">1,050</td>
                  <td className="number">950</td>
                  <td className="number">950</td>
                  <td className="number">1,150</td>
                </tr>
                <tr className="content">
                  <th className="title" rowSpan={2}>
                    현금배당수익률(%)
                  </th>
                  <td className="stockSort">보통주</td>
                  <td className="number">1.8%</td>
                  <td className="number">2.5%</td>
                  <td className="number">1.8%</td>
                  <td className="number">1.7%</td>
                  <td className="number">1.4%</td>
                </tr>
                <tr>
                  <td className="stockSort">우선주 </td>
                  <td className="number">3.8%</td>
                  <td className="number">4.7%</td>
                  <td className="number">4.3%</td>
                  <td className="number">3.8%</td>
                  <td className="number">3.4%</td>
                </tr>
                <tr>
                  <th className="title" colSpan={2}>
                    현금배당금 총액(백 만원)
                  </th>
                  <td className="number">39,502</td>
                  <td className="number">29,885</td>
                  <td className="number">26,910</td>
                  <td className="number">26,910</td>
                  <td className="number">31,400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <div>NOW LOADING</div>
      )}
    </>
  );
};

export default Stock;
