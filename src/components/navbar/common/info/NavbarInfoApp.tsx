import { FC } from "react";

import cl from "./navbarInfo.module.scss";

import { NavbarDeliveryInfo } from './delivery/NavbarDeliveryInfo'
import { ButtonCallNumber, ButtonOrderCall, Logo } from "components/ui";

export const NavbarInfoApp: FC = () => {
    return (
        <section className={cl.container}>
            <div className={cl.info}>
                <Logo />
                <NavbarDeliveryInfo />
            </div>
            <div className={cl.control}>
                <ButtonOrderCall />
                <ButtonCallNumber className={cl.call_number} />
            </div>
        </section>
    );
};
