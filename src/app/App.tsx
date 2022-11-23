import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarApp from "components/navbar/app/NavbarApp";
import FooterApp from "components/footer/app/FooterApp";
import AppRouter from "routes/AppRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <AppRouter />
      <FooterApp />
    </BrowserRouter>
  );
};

export default App;
