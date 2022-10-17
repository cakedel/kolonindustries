import MainContents from "./components/MainContents";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import Employment from "./components/Employment";
import Sustain from "./components/Sustain";
import Company from "./components/Company";

const App = () => {
  const [data, getData] = useState([]);
  const url =
    "https://raw.githubusercontent.com/cakedel/kolondata/main/data.json";

  useEffect(() => {
    const getStock = async () => {
      const response = await axios.get(url);
      getData(response.data);
      console.log(response.data);
    };
    getStock();
  }, []);

  return (
    <div>
      {data ? (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/*" element={<MainContents />} />
            <Route path="/subMenu/1" element={<Company />} />
            <Route path="/subMenu/2" element={<Product />} />
            <Route path="/subMenu/3" element={<Sustain />} />
            <Route path="/subMenu/4" element={<Stock stockData={data} />} />
            <Route path="/subMenu/5/*" element={<Employment />} />
          </Route>
        </Routes>
      ) : (
        <div>Now Loading</div>
      )}
    </div>
  );
};

export default App;
