import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

import { useAppDispatch } from "store";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

export const useNavigateMain = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    function navigateMain() {
        navigate("/main");
        animateScroll.scrollToTop({
            duration: location.pathname === "/main" ? 500 : 0,
        });
        dispatch(setLinkActive(null));
    }

    return { navigateMain };
};
