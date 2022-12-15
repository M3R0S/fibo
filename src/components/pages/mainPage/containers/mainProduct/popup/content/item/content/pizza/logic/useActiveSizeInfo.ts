import { useEffect, useMemo, useState } from "react";

import { TPizzaSize } from "store/slice/constants/types";
import { ISizeAcordance, IUseActiveSizeInfo } from "../constants/types"; 

export const useActiveSizeInfo = (params: IUseActiveSizeInfo) => {
    const {
        priceBig,
        priceMedium,
        priceSmall,
        sizeBig,
        sizeMedium,
        sizeSmall,
        weightBig,
        weightMedium,
        weightSmall,
    } = params;

    const [activeSize, setActiveSize] = useState<TPizzaSize>("medium");
    const [totalPrice, setTotalPrice] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [weight, setWeight] = useState<string>("");

    const sizeAcordance = useMemo(
        (): ISizeAcordance => ({
            small: { price: priceSmall, size: sizeSmall, weight: weightSmall },
            medium: { price: priceMedium, size: sizeMedium, weight: weightMedium },
            big: { price: priceBig, size: sizeBig, weight: weightBig },
        }),
        [
            priceBig,
            priceMedium,
            priceSmall,
            sizeBig,
            sizeMedium,
            sizeSmall,
            weightBig,
            weightMedium,
            weightSmall,
        ]
    );

    useEffect(() => {
        const { price, size, weight } = sizeAcordance[activeSize];

        setTotalPrice(price);
        setSize(size);
        setWeight(weight);
    }, [activeSize, sizeAcordance]);

    return { activeSize, setActiveSize, totalPrice, size, weight };
};
