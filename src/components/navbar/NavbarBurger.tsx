import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "../../assets/styles/navbar/navbarMedia1200.module.sass";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { setOpenModalBurger } from "../../store/slice/navbarSlice";
import ButtonLogin from "../ui/Button/buttonLogin/ButtonLogin";
import { navLinks } from "./NavMenu";
import NavMenuItem from "./NavMenuItem";

const NavbarBurger: FC = () => {
  const dispatch = useAppDispatch();
  const { openModalBurger } = useAppSelector((state) => state.navbar);
  return (
    <>
      <CSSTransition
        in={openModalBurger}
        timeout={500}
        classNames={{
          enterActive: cl.burger_enter_active,
          enterDone: cl.burger_enter_done,
          exit: cl.burger_exit,
          exitActive: cl.burger_exit_active,
        }}
      >
        <button
          className={cl.burger}
          onClick={() => dispatch(setOpenModalBurger(!openModalBurger))}
        ></button>
      </CSSTransition>
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
          <nav className={cl.navbar}>
            <ul>
              {navLinks.map((obj) => (
                <NavMenuItem
                  clNavLink={cl.nav}
                  clNavLinkActive={cl.nav_active}
                  {...obj}
                  key={obj.id}
                ></NavMenuItem>
              ))}
              <ButtonLogin className={cl.login}></ButtonLogin>
            </ul>
          </nav>
        </CSSTransition>
    </>
  );
};

export default NavbarBurger;
