import { FC } from "react";
import classNames from "classnames";

import cl from "./popupOverlay.module.scss";
import { useClosePopupOverlay } from "./useClosePopupOverlay";
import { IPopupOverlay } from "../types";
import { PopupPortal } from "../popupPortal/PopupPortal";

export const PopupOverlay: FC<IPopupOverlay> = ({ isOpened, onClose, children }) => {
    useClosePopupOverlay({ isOpened, onClose });

    return (
        <PopupPortal>
            <div
                className={
                    isOpened
                        ? classNames(cl.overlay, cl.overlay_enabled)
                        : classNames(cl.overlay, cl.overlay_disabled)
                }
                onClick={onClose}
                tabIndex={0}
            />
            {children}
        </PopupPortal>
    );
};
