import { FC } from "react";

import { useScreenSize } from "hook";

import { NavbarDeviceComputer, NavbarDeviceOther } from "./device";

export const NavbarApp: FC = () => {
    const { screenWidth } = useScreenSize();

    if (screenWidth > 1200) {
        return <NavbarDeviceComputer />;
    } else {
        return <NavbarDeviceOther />;
    }
};
