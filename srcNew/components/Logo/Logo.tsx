import { FC } from "react";

import { Button, Image } from "components/ui";
import { logoAccordance } from "./Logo.constants";
import { LogoProps } from "./Logo.types";
import { useNavigate } from "react-router-dom";

export const Logo: FC<LogoProps> = (props) => {
    const { buttonClassName, imageClassName } = props;
    const { alt, src } = logoAccordance;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/main");
    };

    return (
        <Button
            variant="NavigateHome"
            className={buttonClassName}
            onClick={handleClick}
        >
            <Image src={src} alt={alt} className={imageClassName} />
        </Button>
    );
};
