import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "../../../assets/styles/navbar/navbarMedia1200.module.sass";
import { useAppDispatch } from "../../../hook/storeHook/useStore";
import { setOpenModalBurger } from "../../../store/slice/navbarSlice";
import LogoImg from "../../ui/assets/logoImg/LogoImg";
import ButtonBasket from "../../ui/components/button/buttonBasket/ButtonBasket";
import ButtonCallNumber from "../../ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonHome from "../../ui/components/button/buttonHome/ButtonHome";
import ButtonLogin from "../../ui/components/button/buttonLogin/ButtonLogin";
import { navLinks } from "../NavMenu";
import NavMenuItem from "../NavMenuItem";

interface INavbarBurgerNavAlternative {
  openModalBurger: boolean;
}

const NavbarBurgerNavAlternative: FC<INavbarBurgerNavAlternative> = ({
  openModalBurger,
}) => {
  const dispatch = useAppDispatch();
  return (
    <CSSTransition
      in={openModalBurger}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: cl.navbar_enter,
        enterActive: cl.navbar_enter_active,
        enterDone: cl.navbar_enter_done,
        exit: cl.navbar_exit,
        exitActive: cl.navbar_exit_active,
        exitDone: cl.navbar_exit_done,
      }}
    >
      <section className={cl.alt_nav_container}>
        <div className={cl.alt_nav_header}>
          <ButtonHome className={cl.button_home}>
            <LogoImg className={cl.button_img}></LogoImg>
          </ButtonHome>
          <button
            className={cl.alt_nav_header_closed}
            type="button"
            onClick={() => dispatch(setOpenModalBurger(false))}
          ></button>
        </div>
        <nav className={cl.alt_nav_navbar}>
          <ul>
            {navLinks.map((link) => (
              <NavMenuItem
                clNavLink={cl.nav}
                clNavLinkActive={cl.nav_active}
                {...link}
                key={link.id}
              ></NavMenuItem>
            ))}
            <ButtonLogin className={cl.button_login}></ButtonLogin>
            <ButtonCallNumber
              className={cl.button_call_number}
            ></ButtonCallNumber>
            <ButtonBasket className={cl.button_basket}></ButtonBasket>
          </ul>
        </nav>
      </section>
    </CSSTransition>
  );
};

export default NavbarBurgerNavAlternative;
