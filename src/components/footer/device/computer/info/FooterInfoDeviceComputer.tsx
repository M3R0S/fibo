import { FC } from "react";

import cl from "./footerInfoDeviceComputer.module.scss";

import { AssetsInfo, Copyright, PaymentSystems, SocialNetwork } from "components/footer/common";
import { Logo } from "components/ui";

export const FooterInfoDeviceComputer: FC = () => {
    return (
        <section className={cl.container}>
            <Logo classNameLogo={cl.logo} classNameHome={cl.button_home} />
            <AssetsInfo classNameWrapper={cl.header} />
            <SocialNetwork classNameWrapper={cl.social_network} />
            <Copyright classNameWrapper={cl.footer}>
                <PaymentSystems classNameWrapper={cl.payment_systems} />
            </Copyright>
        </section>
    );
};
