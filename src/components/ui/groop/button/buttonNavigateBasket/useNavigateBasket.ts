import { animateScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "store";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

export const useNavigateBasket = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function navigateBasketPage() {
        navigate("/basket");
        dispatch(setLinkActive(null));
        animateScroll.scrollToTop({
            duration: 0,
        });
    }

    return { navigateBasketPage };
};
