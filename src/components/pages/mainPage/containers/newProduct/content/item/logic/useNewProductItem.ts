import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import { IUseNewProductItem } from "../constants/types";

import { SCROLLER_DURATION_MAIN_PRODUCT, SCROLLER_OFFSET_MAIN_PRODUCT } from "utils/globalConst";

export const useNewProductItem = (params: IUseNewProductItem) => {
    const { id, type } = params;

    const navigate = useNavigate();
    const { isEndLoadingMainProduct } = useAppSelector((state) => state.mainProduct);

    const patchPopup = `${type}/${id}/info`;

    function openProduct() {
        scroller.scrollTo(type, {
            smooth: isEndLoadingMainProduct ? true : false,
            duration: isEndLoadingMainProduct ? SCROLLER_DURATION_MAIN_PRODUCT : 0,
            offset: SCROLLER_OFFSET_MAIN_PRODUCT,
        });
        setTimeout(() => navigate(patchPopup), SCROLLER_DURATION_MAIN_PRODUCT);
    }

    return { openProduct };
};
