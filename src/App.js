import MainContents from "./components/MainContents";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Employment from "./components/Employment";
import Sustain from "./components/Sustain";
import Company from "./components/Company";
import axios from "axios"

const App = () => {

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
