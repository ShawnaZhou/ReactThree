import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Err from "../pages/Err";

const RouteFunc = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </div>
  );
};

export default RouteFunc;
