import React, { FC } from "react";
import NavInfo from "./navInfo/NavInfo";
import NavMenu from "./navMenu/NavMenu";
import cl from "../../assets/styles/navbar/navbar.module.sass";

const Navbar: FC = () => {
  return (
    <header className={cl.header}>
      <NavInfo></NavInfo>
      <NavMenu></NavMenu>
    </header>
  );
};

export default Navbar;
