import { FC } from "react";
import cl from "./footerInfoBigScreen.module.sass";
import PaymentSystems from "../../ui/paymentSystems/PaymentSystems";
import SocialNetwork from "../../ui/socialNetwork/SocialNetwork";
import Logo from "components/ui/assets/logo/Logo";
import AssetsInfo from "../../ui/assetsInfo/AssetsInfo";
import Copyright from "../../ui/copyright/Copyright";

const FooterInfoBigScreen: FC = () => {
  return (
    <section className={cl.container}>
      <Logo classNameLogo={cl.logo} classNameHome={cl.button_home} />
      <AssetsInfo classNameWrapper={cl.header} />
      <SocialNetwork classNameWrapper={cl.social_network} />
      <Copyright classNameWrapper={cl.footer}>
        <PaymentSystems classNameWrapper={cl.payment_systems} />
      </Copyright>
    </section>
  );
};

export default FooterInfoBigScreen;
