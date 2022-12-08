import { useAppDispatch } from "store";
import { clearBasket } from "store/slice/basketPage/basketPageSlice";

const useBasketPageApp = () => {
    const dispatch = useAppDispatch();

    function onClearBasket() {
        dispatch(clearBasket());
    }

    return { onClearBasket };
};

export default useBasketPageApp;
