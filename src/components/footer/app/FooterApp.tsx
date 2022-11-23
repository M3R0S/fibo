import { FC } from "react";
import cl from "./footerApp.module.sass";
import useScreenSize from "hook/useScreenSize/useScreenSize";
import FooterBigScreen from "../container/footerBigScreen/FooterBigScreen";
import FooterMobileScreen from "../container/footerMobileScreen/FooterMobileScreen";
import FooterSmallScreen from "../container/footerSmallScreen/FooterSmallScreen";
import imageBackground from "./images/footer-background.png";

const FooterApp: FC = () => {
  const { screenWidth } = useScreenSize();
  return (
    <footer className={cl.footer}>
      {screenWidth > 1200 ? (
        <FooterBigScreen />
      ) : screenWidth > 700 ? (
        <FooterSmallScreen />
      ) : (
        <FooterMobileScreen />
      )}
      <img className={cl.pizza_pasta} src={imageBackground} alt="Фоновое изображение" />
    </footer>
  );
};

export default FooterApp;
