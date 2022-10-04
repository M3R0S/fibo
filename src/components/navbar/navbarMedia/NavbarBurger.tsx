import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "../../../assets/styles/navbar/navbarMedia1200.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hook/storeHook/useStore";
import { setOpenModalBurger } from "../../../store/slice/navbarSlice";
import NavbarBurgerNavAlternative from "./NavbarBurgerNavAlternative";
import NavbarBurgerNavClassic from "./NavbarBurgerNavClassic";

const NavbarBurger: FC = () => {
  const dispatch = useAppDispatch();
  const { openModalBurger, screenWidth } = useAppSelector(
    (state) => state.navbar
  );
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
      {screenWidth && screenWidth > 530 ? (
        <NavbarBurgerNavClassic
          openModalBurger={openModalBurger}
        ></NavbarBurgerNavClassic>
      ) : (
        <NavbarBurgerNavAlternative
          openModalBurger={openModalBurger}
        ></NavbarBurgerNavAlternative>
      )}
    </>
  );
};

export default NavbarBurger;
