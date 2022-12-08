import { FC } from "react";

import cl from "./footerInfoDeviceMobile.module.scss";

import { AssetsInfo, SocialNetwork } from "components/footer/common";
import {ButtonCallNumber, ButtonOrderCall, Logo} from "components/ui";

export const FooterInfoDeviceMobile: FC = () => {
    return (
        <section className={cl.container}>
            <header className={cl.header}>
                <Logo classNameLogo={cl.logo} />
                <div className={cl.control}>
                    <ButtonCallNumber className={cl.call_number} />
                    <ButtonOrderCall className={cl.order_call} />
                </div>
            </header>
            <AssetsInfo classNameWrapper={cl.title} />
            <SocialNetwork classNameWrapper={cl.social_network} />
        </section>
    );
};
