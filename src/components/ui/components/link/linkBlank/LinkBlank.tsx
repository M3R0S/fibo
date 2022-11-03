import React, { FC } from "react";

interface ILinkBlank {
  href: string;
  children?: string | number
}

const LinkBlank: FC<ILinkBlank> = ({ href, children }) => {
  return <a href={href} target="_blank"  rel="noreferrer">{children}</a>;
};

export default LinkBlank;
