import MainContents from "./components/MainContents";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Employment from "./components/Employment";
import Sustain from "./components/Sustain";
import Company from "./components/Company";

const App = () => {
  // axios.get("http://localhost:4000/").then((res) => {
  //   console.log(res);
  // });

  //로컬 서버에서 데이터를 가져오는 코드라고 합니다. 현재 먹통이라 주석처리 해뒀습니다.

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<MainContents />} />
          <Route path="/subMenu/1" element={<Company />} />
          <Route path="/subMenu/2" element={<Product />} />
          <Route path="/subMenu/3" element={<Sustain />} />
          <Route path="/subMenu/4" element={<Stock />} />
          <Route path="/subMenu/5/*" element={<Employment />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
