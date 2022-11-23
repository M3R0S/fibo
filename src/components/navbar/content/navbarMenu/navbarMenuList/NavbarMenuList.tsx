import { FC, memo } from "react";
import { navLinks } from "../const";
import NavbarMenuItem from "../navbarMenuItem/NavbarMenuItem";
import { INavbarMenuList } from "./type";

const NavbarMenuList: FC<INavbarMenuList> = ({ children, className }) => {
  return (
    <nav className={className}>
      {navLinks.map((obj) => (
        <NavbarMenuItem {...obj} key={obj.id} />
      ))}
      {children}
    </nav>
  );
};

export default memo(NavbarMenuList);
