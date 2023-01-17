import { FC } from "react";

import cl from "./Navbar.module.scss";
import { navLinks } from "./const";
import { NavbarProps } from "./types";
import { Button } from "../Button/Button";

export const Navbar: FC<NavbarProps> = (props) => {
    const { className, children } = props;
    return (
        <nav className={className}>
            {navLinks.map((obj) => (
                <Button variant="NavLink" hookparams={obj} key={obj.id}>
                    {obj.title}
                </Button>
            ))}
            {children}
        </nav>
    );
};
