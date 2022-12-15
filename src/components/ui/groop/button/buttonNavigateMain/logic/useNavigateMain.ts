import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

import { SCROLLER_DURATION_MAIN_PRODUCT } from "utils/globalConst";

import { useAppDispatch } from "store";
import { setNavbarLinkActive } from "store/slice";

export const useNavigateMain = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    function navigateMain() {
        navigate("/main");
        animateScroll.scrollToTop({
            duration: location.pathname === "/main" ? SCROLLER_DURATION_MAIN_PRODUCT : 0,
        });
        dispatch(setNavbarLinkActive(null));
    }

    return { navigateMain };
};
