import { FC } from "react";
import cl from "./footerMobileScreen.module.sass";
import FooterContactMobileScreen from "components/footer/content/footerContact/footerContactMobileScreen/FooterContactMobileScreen";
import FooterInfoMobileScreen from "components/footer/content/footerInfo/footerInfoMobileScreen/FooterInfoMobileScreen";

const FooterMobileScreen: FC = () => {
  return (
    <div className={cl.wrapper}>
      <FooterInfoMobileScreen />
      <FooterContactMobileScreen />
    </div>
  );
};

export default FooterMobileScreen;
