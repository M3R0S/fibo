import { FC } from "react";

import { useScreenSize } from "hook";

import { NavbarDeviceComputer } from "./device/computer/NavbarDeviceComputer";
import { NavbarDeviceOther } from "./device/other/NavbarDeviceOther";

export const NavbarApp: FC = () => {
    const { screenWidth } = useScreenSize();

    if (screenWidth > 1200) {
        return <NavbarDeviceComputer />;
    } else {
        return <NavbarDeviceOther />;
    }
};
