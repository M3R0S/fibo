import { FC } from "react";
import useScreenSize from "hook/useScreenSize/useScreenSize";
import NavbarBurgerMenuAlternative from "./navbarBurgerMenuAlternative/NavbarBurgerMenuAlternative";
import NavbarBurgerMenuClassic from "./navbarBurgerMenuClassic/NavbarBurgerMenuClassic";

const NavbarBurgerMenu: FC = () => {
  const { screenWidth } = useScreenSize();

  if (screenWidth > 530) {
    return <NavbarBurgerMenuClassic />;
  } else {
    return <NavbarBurgerMenuAlternative />;
  }
};

export default NavbarBurgerMenu;
