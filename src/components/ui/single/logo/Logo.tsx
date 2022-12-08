import ButtonHome from "components/ui";
import { FC } from "react";
import { Logo } from "./image/header-logo.png";
import { ILogo } from "../types";

export const Logo: FC<ILogo> = ({ classNameLogo, classNameHome }) => {
    return (
        <ButtonHome className={classNameHome}>
            <img src={logo} alt="Фибо" className={classNameLogo} />
        </ButtonHome>
    );
};
