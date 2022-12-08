import { useCallback, useEffect } from "react";
import { IPopupOverlay } from "../types";

export const useClosePopupOverlay = ({ isOpened, onClose }: IPopupOverlay) => {
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
