import { useState } from "react";

import { useScrollDirection } from "hook";

export const useProcessingHeaderInfo = () => {
    const { isScrollDown } = useScrollDirection();

    const [isEnabledHeaderInfo, setIsEnabledHeaderInfo] =
        useState<boolean>(true);

    function onDisabledHeaderInfo() {
        setIsEnabledHeaderInfo(false);
    }

    function onEnabledHeaderInfo() {
        setIsEnabledHeaderInfo(true);
    }

    return {
        isScrollDown,
        isEnabledHeaderInfo,
        onDisabledHeaderInfo,
        onEnabledHeaderInfo,
    };
};
