import { FC } from "react";
import cl from "./navbarBigScreen.module.sass";
import { CSSTransition } from "react-transition-group";
import NavbarInfo from "components/navbar/content/navbarInfo/NavbarInfo";
import NavbarMenu from "components/navbar/content/navbarMenu/NavbarMenu";
import useNavbarBigScreen from "./useNavbarBigScreen";

const NavbarBigScreen: FC = () => {
  const { scrollDown, isAnimateScrollDown } = useNavbarBigScreen();

  return (
    <CSSTransition
      in={scrollDown}
      timeout={200}
      classNames={{
        enterActive: cl.navbar_enter_active,
        exitActive: cl.navbar_exit_active,
      }}
    >
      <header className={cl.navbar}>
        {isAnimateScrollDown ? null : <NavbarInfo />}
        <NavbarMenu />
      </header>
    </CSSTransition>
  );
};

export default NavbarBigScreen;
