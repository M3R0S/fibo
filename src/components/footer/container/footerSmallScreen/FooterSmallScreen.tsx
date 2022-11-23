import { FC } from "react";
import cl from "./footerSmallScreen.module.sass";
import FooterContactSmallScreen from "components/footer/content/footerContact/footerContactSmallScreen/FooterContactSmallScreen";
import FooterInfoSmallScreen from "components/footer/content/footerInfo/footerInfoSmallScreen/FooterInfoSmallScreen";

const FooterSmallScreen: FC = () => {
  return (
    <div className={cl.wrapper}>
      <FooterInfoSmallScreen />
      <FooterContactSmallScreen />
    </div>
  );
};

export default FooterSmallScreen;
