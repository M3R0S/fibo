import { animateScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "store";
import { setNavbarLinkActive } from "store/slice";

export const useNavigateBasket = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const patchBasket = "/basket";

    function navigateBasketPage() {
        navigate(patchBasket);
        dispatch(setNavbarLinkActive(null));
        animateScroll.scrollToTop({
            duration: 0,
        });
    }

    return { navigateBasketPage };
};
