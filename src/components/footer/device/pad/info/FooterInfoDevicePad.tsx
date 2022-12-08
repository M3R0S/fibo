import { FC } from "react";

import cl from "./footerInfoDevicePad.module.scss";

import { AssetsInfo, SocialNetwork } from "components/footer/common";
import { Logo } from "components/ui";

export const FooterInfoDevicePad: FC = () => {
    return (
        <section className={cl.container}>
            <Logo />
            <div className={cl.content}>
                <AssetsInfo classNameWrapper={cl.title} />
                <SocialNetwork classNameWrapper={cl.social_network} />
            </div>
        </section>
    );
};
