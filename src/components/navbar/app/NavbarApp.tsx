import { FC } from "react";
import useScreenSize from "hook/useScreenSize/useScreenSize";
import NavbarBigScreen from "../container/navbarBigScreen/NavbarBigScreen";
import NavbarSmallScreen from "../container/navbarSmallScreen/NavbarSmallScreen";

const NavbarApp: FC = () => {
  const { screenWidth } = useScreenSize();

  if (screenWidth > 1200) {
    return <NavbarBigScreen />;
  } else {
    return <NavbarSmallScreen />;
  }
};

export default NavbarApp;
