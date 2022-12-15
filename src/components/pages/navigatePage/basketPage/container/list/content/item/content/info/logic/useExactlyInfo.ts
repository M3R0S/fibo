import { useState } from "react";

import { IUseExactlyInfo } from "../constants/types";


export const useExactlyInfo = ({ info }: IUseExactlyInfo) => {
    const [isFullInfo, setIsFullInfo] = useState<boolean>(false);
    const [exactlyInfo, setExactlyInfo] = useState<string>(info.substring(0, 30) + "...");
    const [showExactlyInfo, setShowExactyInfo] = useState<string>("Показать весь состав");

    function onSetExactlyInfo() {
        if (!isFullInfo) {
            setIsFullInfo(true);
            setExactlyInfo(info);
            setShowExactyInfo("Свернуть");
        } else {
            setIsFullInfo(false);
            setExactlyInfo(info.substring(0, 30) + "...");
            setShowExactyInfo("Показать весь состав");
        }
    }

    return { exactlyInfo, showExactlyInfo, onSetExactlyInfo };
};