import { FC } from "react";

import cl from "./footerDeviceMobile.module.scss";

import { FooterContactDeviceMobile } from "./contact/FooterContactDeviceMobile";
import { FooterInfoDeviceMobile } from "./info/FooterInfoDeviceMobile";

export const FooterDeviceMobile: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDeviceMobile />
            <FooterContactDeviceMobile />
        </div>
    );
};
