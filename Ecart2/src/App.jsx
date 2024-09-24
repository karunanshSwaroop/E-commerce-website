import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/ErrorPage";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
