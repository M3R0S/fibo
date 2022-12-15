import { ReactNode } from "react";

export interface IPopupOverlay extends IUseClosePopupOverlay {
    children: ReactNode;
}

export interface IUseClosePopupOverlay {
    isOpened: boolean;
    onClose: () => void;
}
