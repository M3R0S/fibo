import { FC } from "react";

import { ILogo } from "./constants/types";
import { LOGO } from "./constants/const";

import { ButtonNavigateMain } from "components/ui";

export const Logo: FC<ILogo> = ({ classNameLogo, classNameHome }) => {
    const { ALT, SRC } = LOGO;

    return (
        <ButtonNavigateMain className={classNameHome}>
            <img src={SRC} alt={ALT} className={classNameLogo} />
        </ButtonNavigateMain>
    );
};
