import { FC } from "react";

import cl from "./footerDeviceComputer.module.scss";

import { FooterContactDeviceComputer } from "./contact/FooterContactDeviceComputer";
import { FooterInfoDeviceComputer } from "./info/FooterInfoDeviceComputer";

export const FooterDeviceComputer: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDeviceComputer />
            <FooterContactDeviceComputer />
        </div>
    );
};
