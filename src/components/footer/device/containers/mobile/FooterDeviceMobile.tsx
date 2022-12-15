import { FC } from "react";

import cl from "./footerDeviceMobile.module.scss";

import { FooterContactDeviceMobile, FooterInfoDeviceMobile } from "./content";

export const FooterDeviceMobile: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDeviceMobile />
            <FooterContactDeviceMobile />
        </div>
    );
};
