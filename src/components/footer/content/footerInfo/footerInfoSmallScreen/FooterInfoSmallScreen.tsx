import Logo from "components/ui/assets/logo/Logo";
import { FC } from "react";
import AssetsInfo from "../../ui/assetsInfo/AssetsInfo";
import SocialNetwork from "../../ui/socialNetwork/SocialNetwork";
import cl from "./footerInfoSmallScreen.module.sass";

const FooterInfoSmallScreen: FC = () => {
  return (
    <section className={cl.container}>
      <Logo />
      <div className={cl.content}>
        <AssetsInfo classNameWrapper={cl.title} />
        <SocialNetwork classNameWrapper={cl.social_network} />
      </div>
    </section>
  );
};

export default FooterInfoSmallScreen;
