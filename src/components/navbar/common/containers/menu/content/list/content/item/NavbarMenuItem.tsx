import { FC, memo } from "react";

import { useSetLinkActive } from "./logic";
import { INavbarMenuItem } from "./constants/types";

export const NavbarMenuItem: FC<INavbarMenuItem> = memo((props) => {
    const { title } = props;

    const { onClick, linkClassName } = useSetLinkActive(props);

    return (
        <button className={linkClassName} onClick={onClick}>
            {title}
        </button>
    );
});
