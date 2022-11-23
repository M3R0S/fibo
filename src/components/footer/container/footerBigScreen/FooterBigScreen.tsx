import { FC } from "react";
import cl from "./footerBigScreen.module.sass";
import FooterContactBigScreen from "components/footer/content/footerContact/footerContactBigScreen/FooterContactBigScreen";
import FooterInfoBigScreen from "components/footer/content/footerInfo/footerInfoBigScreen/FooterInfoBigScreen";

const FooterBigScreen: FC = () => {
  return (
    <div className={cl.wrapper}>
      <FooterInfoBigScreen />
      <FooterContactBigScreen />
    </div>
  );
};

export default FooterBigScreen;
