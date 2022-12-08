import { FC } from "react";
import classNames from "classnames";

import cl from "./popupOverlay.module.scss";
import { useClosePopupOverlay } from "./useClosePopupOverlay";
import { IPopupOverlay } from "../types";

export const PopupOverlay: FC<IPopupOverlay> = ({ isOpened, onClose }) => {
    useClosePopupOverlay({ isOpened, onClose });

    return (
        <div
            className={
                isOpened
                    ? classNames(cl.overlay, cl.overlay_enabled)
                    : classNames(cl.overlay, cl.overlay_disabled)
            }
            onClick={onClose}
            tabIndex={0}
        />
    );
};
