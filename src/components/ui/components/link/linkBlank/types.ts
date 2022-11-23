import { ReactNode } from "react";

export interface ILinkBlank {
  href: string;
  children?: string | ReactNode;
  className?: string;
}
