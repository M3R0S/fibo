import { FC } from "react";

import cl from "./footerDevicePad.module.scss";

import { FooterContactDevicePad, FooterInfoDevicePad } from "./content";

export const FooterDevicePad: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDevicePad />
            <FooterContactDevicePad />
        </div>
    );
};
