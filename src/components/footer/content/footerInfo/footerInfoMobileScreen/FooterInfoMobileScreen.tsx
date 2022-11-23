import Logo from "components/ui/assets/logo/Logo";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonOrderCall from "components/ui/components/button/buttonOrderCall/ButtonOrderCall";
import { FC } from "react";
import AssetsInfo from "../../ui/assetsInfo/AssetsInfo";
import SocialNetwork from "../../ui/socialNetwork/SocialNetwork";
import cl from "./footerInfoMobileScreen.module.sass";

const FooterInfoMobileScreen: FC = () => {
  return (
    <section className={cl.container}>
      <header className={cl.header}>
        <Logo classNameLogo={cl.logo} />
        <div className={cl.control}>
          <ButtonCallNumber className={cl.call_number} />
          <ButtonOrderCall className={cl.order_call} />
        </div>
      </header>
      <AssetsInfo classNameWrapper={cl.title} />
      <SocialNetwork classNameWrapper={cl.social_network} />
    </section>
  );
};

export default FooterInfoMobileScreen;
