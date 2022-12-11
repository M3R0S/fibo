import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { IUseNewProductItem } from "./types";

const useNewProductItem = ({ id, type }: IUseNewProductItem) => {
    const navigate = useNavigate();

    const { isEndLoadingProduct } = useAppSelector((state) => state.mainProduct);

    function openProduct() {
        scroller.scrollTo(type, {
            smooth: isEndLoadingProduct ? true : false,
            duration: isEndLoadingProduct ? 700 : 0,
            offset: -95,
        });
        setTimeout(() => navigate(`${type}/${id}/info`), 700);
    }

    return { openProduct };
};

export default useNewProductItem;
