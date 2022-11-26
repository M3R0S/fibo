import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarApp from "components/navbar/app/NavbarApp";
import FooterApp from "components/footer/app/FooterApp";
import AppRouter from "routes/AppRouter";
import LoginPopupApp from "components/loginPopup/app/LoginPopupApp";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <AppRouter />
      {/* <LoginPopupApp /> */}
      <FooterApp />
    </BrowserRouter>
  );
};

export default App;
