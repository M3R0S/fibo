import { useCallback, useEffect, useMemo, useState } from "react";

import { debounce } from "lodash";

export const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [screenHeight, setScreenHeight] = useState<number>(0);

    const debounceResize = useMemo(
        () =>
            debounce(() => {
                setScreenWidth(window.innerWidth);
                setScreenHeight(window.innerHeight);
            }, 200),
        []
    );

    const resize = useCallback(debounceResize, [debounceResize]);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [resize]);

    return { screenWidth, screenHeight };
};
