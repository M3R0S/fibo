import { FC } from "react";

import { ILinkBlank } from "../types";

export const LinkBlank: FC<ILinkBlank> = ({ href, children, className }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
