import { useCallback, useEffect } from "react";

import { IUseClosePopupOverlay } from "../constants/types";

export const useClosePopupOverlay = ({ isOpened, onClose }: IUseClosePopupOverlay) => {
    const eventEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpened) {
            document.addEventListener("keydown", eventEscape);
        }
        return () => {
            document.removeEventListener("keydown", eventEscape);
        };
    }, [eventEscape, isOpened]);
};
