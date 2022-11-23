import { FC, memo } from "react";
import { INavbarMenuItem } from "./types";
import useNavbarMenuItem from "./useNavbarMenuItem";

const NavbarMenuItem: FC<INavbarMenuItem> = ({ endpoint, isAnchor, title, to }) => {
  const { onClick, linkClassName } = useNavbarMenuItem({ endpoint, isAnchor, to });

  return (
    <button className={linkClassName} onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(NavbarMenuItem);
