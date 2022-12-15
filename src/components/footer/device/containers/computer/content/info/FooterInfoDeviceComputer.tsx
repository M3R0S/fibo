import { FC } from "react";

import cl from "./footerInfoDeviceComputer.module.scss";

import {
    FooterCommonAssetsInfo,
    FooterCommonCopyright,
    FooterCommonPaymentSystems,
    FooterCommonSocialNetwork,
} from "components/footer/common";
import { Logo } from "components/ui";

export const FooterInfoDeviceComputer: FC = () => {
    return (
        <section className={cl.container}>
            <Logo classNameLogo={cl.logo} classNameHome={cl.button_home} />
            <FooterCommonAssetsInfo classNameWrapper={cl.header} />
            <FooterCommonSocialNetwork classNameWrapper={cl.social_network} />
            <FooterCommonCopyright classNameWrapper={cl.footer}>
                <FooterCommonPaymentSystems classNameWrapper={cl.payment_systems} />
            </FooterCommonCopyright>
        </section>
    );
};
