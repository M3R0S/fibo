import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import FooterApp from "./components/footer/FooterApp";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./routes/AppRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
      <FooterApp></FooterApp>
    </BrowserRouter>
  );
};

export default App;