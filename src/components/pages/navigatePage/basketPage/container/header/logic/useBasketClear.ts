import { useAppDispatch } from "store";
import { clearBasket } from "store/slice";

export const useBasketClear = () => {
    const dispatch = useAppDispatch();

    function onClearBasket() {
        dispatch(clearBasket());
    }

    return { onClearBasket };
};
