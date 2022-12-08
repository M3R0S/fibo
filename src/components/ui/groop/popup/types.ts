import { ReactNode } from "react";

export interface IPopupOverlay {
    isOpened: boolean;
    onClose: () => void;
}

export interface IPopupPortal {
    children: ReactNode;
}
