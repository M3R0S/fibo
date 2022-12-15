import { FC } from "react";

import cl from "./footerInfoDevicePad.module.scss";

import { FooterCommonAssetsInfo, FooterCommonSocialNetwork } from "components/footer/common";
import { Logo } from "components/ui";

export const FooterInfoDevicePad: FC = () => {
    return (
        <section className={cl.container}>
            <Logo />
            <div className={cl.content}>
                <FooterCommonAssetsInfo classNameWrapper={cl.title} />
                <FooterCommonSocialNetwork classNameWrapper={cl.social_network} />
            </div>
        </section>
    );
};
