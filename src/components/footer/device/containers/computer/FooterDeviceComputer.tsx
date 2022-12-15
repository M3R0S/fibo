import { FC } from "react";

import cl from "./footerDeviceComputer.module.scss";

import { FooterContactDeviceComputer, FooterInfoDeviceComputer } from "./content";

export const FooterDeviceComputer: FC = () => {
    return (
        <div className={cl.wrapper}>
            <FooterInfoDeviceComputer />
            <FooterContactDeviceComputer />
        </div>
    );
};
