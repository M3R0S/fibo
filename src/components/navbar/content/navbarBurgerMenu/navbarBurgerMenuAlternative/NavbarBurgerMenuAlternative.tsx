import Logo from "components/ui/assets/logo/Logo";
import LogoImg from "components/ui/assets/logo/Logo";
import ButtonBasket from "components/ui/components/button/buttonBasket/ButtonBasket";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonHome from "components/ui/components/button/buttonHome/ButtonHome";
import ButtonLogin from "components/ui/components/button/buttonLogin/ButtonLogin";
import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import NavbarMenuList from "../../navbarMenu/navbarMenuList/NavbarMenuList";
import cl from "./navbarBurgerMenuAlternative.module.sass";
import useNavbarBurgerMenuAlternative from "./useNavbarBurgerMenuAlternative";

const NavbarBurgerMenuAlternative: FC = () => {
  const { onClose, openNavbarBurger } = useNavbarBurgerMenuAlternative();

  return (
    <CSSTransition
      in={openNavbarBurger}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: cl.container_enter,
        enterActive: cl.container_enter_active,
        enterDone: cl.container_enter_done,
        exit: cl.container_exit,
        exitActive: cl.container_exit_active,
        exitDone: cl.container_exit_done,
      }}
    >
      <section className={cl.container}>
        <header className={cl.control}>
          <Logo classNameLogo={cl.logo} />
          <button className={cl.closed} type="button" onClick={onClose} />
        </header>
        <NavbarMenuList className={cl.nav}>
          <ButtonLogin className={cl.button_login} />
          <ButtonCallNumber className={cl.button_call_number} />
          <ButtonBasket className={cl.button_basket} />
        </NavbarMenuList>
      </section>
    </CSSTransition>
  );
};

export default NavbarBurgerMenuAlternative;
