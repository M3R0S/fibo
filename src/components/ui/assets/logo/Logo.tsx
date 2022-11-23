import ButtonHome from "components/ui/components/button/buttonHome/ButtonHome";
import { FC } from "react";
import logo from "./image/header-logo.png";
import { ILogo } from "./types";

const Logo: FC<ILogo> = ({ classNameLogo, classNameHome }) => {
  return (
    <ButtonHome className={classNameHome}>
      <img src={logo} alt="Фибо" className={classNameLogo} />
    </ButtonHome>
  );
};

export default Logo;
