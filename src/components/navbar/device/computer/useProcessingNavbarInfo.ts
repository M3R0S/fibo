import { useScrollDirection } from "hook";
import { useState } from "react";

export const useProcessingNavbarInfo = () => {
    const { isScrollDown } = useScrollDirection();

    const [isEnabledNavbarInfo, setIsEnabledNavbarInfo] = useState<boolean>(true);

    function onDisabledNavbarInfo() {
        setIsEnabledNavbarInfo(false);
    }

    function onEnabledNavbarInfo() {
        setIsEnabledNavbarInfo(true);
    }

    return {
        isScrollDown,
        isEnabledNavbarInfo,
        onDisabledNavbarInfo,
        onEnabledNavbarInfo,
    };
};
