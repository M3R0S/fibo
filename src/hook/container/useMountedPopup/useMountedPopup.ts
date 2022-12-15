import { useState, useEffect } from "react";

export const useMountedPopup = (isOpened: boolean) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened && !isMounted) {
            setIsMounted(true);
        }
        if (!isOpened && isMounted) {
            setTimeout(() => {
                setIsMounted(false);
            }, 500);
        }
    }, [isOpened, isMounted]);

    return { isMounted };
};
