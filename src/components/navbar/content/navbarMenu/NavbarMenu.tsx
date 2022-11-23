import { FC, memo } from "react";
import cl from "./navbarMenu.module.sass";
import ButtonLogin from "components/ui/components/button/buttonLogin/ButtonLogin";
import ButtonBasket from "components/ui/components/button/buttonBasket/ButtonBasket";
import NavbarMenuList from "./navbarMenuList/NavbarMenuList";

const NavbarMenu: FC = () => {
  return (
    <section className={cl.container}>
      <NavbarMenuList className={cl.nav} />
      <ButtonLogin />
      <ButtonBasket />
    </section>
  );
};

export default memo(NavbarMenu);
