import { FC, memo } from "react";

import { useSetLinkActive } from "./logic";
import { INavbarMenuItem } from "components/navbar/common/types";

export const NavbarMenuItem: FC<INavbarMenuItem> = memo(({ endpoint, isAnchor, title, to }) => {
    const { onClick, linkClassName } = useSetLinkActive({ endpoint, isAnchor, to });

    return (
        <button className={linkClassName} onClick={onClick}>
            {title}
        </button>
    );
});
