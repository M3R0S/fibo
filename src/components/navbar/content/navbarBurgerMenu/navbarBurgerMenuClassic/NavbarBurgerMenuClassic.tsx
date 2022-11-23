import { FC } from "react";
import cl from "./navbarBurgerMenuClassic.module.sass";
import ButtonLogin from "components/ui/components/button/buttonLogin/ButtonLogin";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "hook/useStore/useStore";
import NavbarMenuList from "../../navbarMenu/navbarMenuList/NavbarMenuList";

const NavbarBurgerMenuClassic: FC = () => {
  const { openNavbarBurger } = useAppSelector((state) => state.navbar);

  return (
    <CSSTransition
      in={openNavbarBurger}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: cl.nav_enter,
        enterActive: cl.nav_enter_active,
        exitActive: cl.nav_exit_active,
      }}
    >
      <NavbarMenuList className={cl.nav}>
        <ButtonLogin className={cl.login} />
      </NavbarMenuList>
    </CSSTransition>
  );
};

export default NavbarBurgerMenuClassic;
