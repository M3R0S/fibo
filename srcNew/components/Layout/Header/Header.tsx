import { useScreenSize } from "hook";
import { FC } from "react";
import { HeaderBigScreen } from "./BigScreen";

import cl from "./Header.module.scss";

export const Header: FC = () => {

    const { screenWidth } = useScreenSize();

    if (screenWidth >= 1200) {
        return <HeaderBigScreen />;
    } else {
        // return <NavbarSmallScreen />;
        return <div></div>;
    }
};
