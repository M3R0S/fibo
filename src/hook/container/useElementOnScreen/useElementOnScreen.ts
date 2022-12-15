import { useRef, useEffect, useState, useCallback } from "react";

import { IOption } from "./constants/types";

import { useAppSelector } from "store";

export const useElementOnScreen = (option: IOption) => {
    const containerRef = useRef(null);
    const { isIntersectingMainProduct } = useAppSelector((state) => state.mainProduct);
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    const callback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting && isIntersectingMainProduct) {
                setIsIntersecting(true);
            } else {
                setIsIntersecting(false);
            }
        },
        [isIntersectingMainProduct]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(callback, option);
        const temp = containerRef.current;

        if (temp) {
            observer.observe(temp);
        }

        return () => {
            if (temp) {
                observer.unobserve(temp);
            }
        };
    }, [option, callback]);

    return { containerRef, isIntersecting };
};
