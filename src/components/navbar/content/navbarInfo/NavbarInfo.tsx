import { FC } from "react";
import cl from "./navbarInfo.module.sass";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonOrderCall from "components/ui/components/button/buttonOrderCall/ButtonOrderCall";
import NavbarDeliveryInfo from "./NavbarDeliveryInfo/NavbarDeliveryInfo";
import Logo from "components/ui/assets/logo/Logo";

const NavbarInfo: FC = () => {
  return (
    <section className={cl.container}>
      <div className={cl.info}>
        <Logo />
        <NavbarDeliveryInfo />
      </div>
      <div className={cl.control}>
        <ButtonOrderCall />
        <ButtonCallNumber className={cl.call_number} />
      </div>
    </section>
  );
};

export default NavbarInfo;
