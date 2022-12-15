import { useEffect } from "react";

import { useAppDispatch } from "store";
import { setNavbarLinkActive } from "store/slice";
import { useElementOnScreen } from "../useElementOnScreen/useElementOnScreen";

export const useDisabledNavbarLinkActive = () => {
    const dispatch = useAppDispatch();

    const { containerRef, isIntersecting } = useElementOnScreen({
        threshold: 0.7,
    });

    useEffect(() => {
        if (isIntersecting) {
            dispatch(setNavbarLinkActive(null));
        }
    }, [isIntersecting, dispatch]);

    return { containerRef };
};
