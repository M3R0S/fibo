import { FC, memo } from "react";

import { navLinks } from "components/navbar/common/const";
import { INavbarMenuList } from "components/navbar/common/types";

import { NavbarMenuItem } from "./navbarMenuItem/NavbarMenuItem";

export const NavbarMenuList: FC<INavbarMenuList> = memo(({ children, className }) => {
    return (
        <nav className={className}>
            {navLinks.map((obj) => (
                <NavbarMenuItem {...obj} key={obj.id} />
            ))}
            {children}
        </nav>
    );
});
