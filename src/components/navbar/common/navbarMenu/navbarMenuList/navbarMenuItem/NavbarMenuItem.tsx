import { FC, memo } from "react";

import { useNavbarMenuItem } from "./useNavbarMenuItem";
import { INavbarMenuItem } from "components/navbar/common/types";

export const NavbarMenuItem: FC<INavbarMenuItem> = memo(({ endpoint, isAnchor, title, to }) => {
    const { onClick, linkClassName } = useNavbarMenuItem({ endpoint, isAnchor, to });

    return (
        <button className={linkClassName} onClick={onClick}>
            {title}
        </button>
    );
});
