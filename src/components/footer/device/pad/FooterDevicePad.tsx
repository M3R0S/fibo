import { FC } from "react";

import cl from "./footerDevicePad.module.scss";

import { FooterContactDevicePad } from "./contact/FooterContactDevicePad";
import { FooterInfoDevicePad } from "./info/FooterInfoDevicePad";

export const FooterDevicePad: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDevicePad />
            <FooterContactDevicePad />
        </div>
    );
};
