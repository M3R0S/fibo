import { FC, memo } from "react";

import { INavbarMenuList } from "./constants/types";
import { NAV_LINKS } from "./constants/const";

import { NavbarMenuItem } from "./content";

export const NavbarMenuList: FC<INavbarMenuList> = memo(({ children, className }) => {
    return (
        <nav className={className}>
            {NAV_LINKS.map((obj) => (
                <NavbarMenuItem {...obj} key={obj.id} />
            ))}
            {children}
        </nav>
    );
});
