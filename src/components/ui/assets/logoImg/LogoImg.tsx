import { FC } from "react";
import logoImg from "../../../../assets/image/header-logo.png";

interface ILogoImg {
  className?: string;
}

const LogoImg: FC<ILogoImg> = ({ className }) => {
  return <img src={logoImg} alt="Фибо" className={className} />;
};

export default LogoImg;
