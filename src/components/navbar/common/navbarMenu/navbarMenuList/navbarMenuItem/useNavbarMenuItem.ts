import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import classNames from "classnames";

import cl from "./navbarMenuItem.module.scss";
import { IUseNavbarMenuItem } from "components/navbar/common/types";
import { TIMEOUT_ANIMATION_SCROLL_ENDPOINTS } from "components/navbar/common/const";

import { useAppDispatch, useAppSelector } from "store";
import { setGlobalIsIntersecting } from "store/slice/global/globalSlice";
import { setLinkActive, setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

export const useNavbarMenuItem = ({ endpoint, isAnchor, to }: IUseNavbarMenuItem) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { isEndLoadingProduct } = useAppSelector((state) => state.mainProduct);
    const { linkActive } = useAppSelector((state) => state.navbar);

    const [linkClassName, setLinkClassName] = useState<string>(cl.link);

    function blockGlobalIntersecting() {
        dispatch(setGlobalIsIntersecting(false));
        setTimeout(
            () => dispatch(setGlobalIsIntersecting(true)),
            TIMEOUT_ANIMATION_SCROLL_ENDPOINTS
        );
    }

    function onClick() {
        dispatch(setLinkActive(endpoint));
        dispatch(setOpenNavbarBurger(false));

        const pathname = location.pathname;
        const mainPage = "/main";

        if (isAnchor) {
            if (pathname !== mainPage) {
                navigate(mainPage);
            }

            if (pathname === mainPage) {
                scroller.scrollTo(endpoint, {
                    smooth: isEndLoadingProduct ? true : false,
                    duration: isEndLoadingProduct ? TIMEOUT_ANIMATION_SCROLL_ENDPOINTS : 0,
                    offset: -80,
                });
                blockGlobalIntersecting();
            }
        }

        if (!isAnchor) {
            navigate(to);
            animateScroll.scrollToTop({
                duration: 0,
            });
        }
    }

    useEffect(() => {
        if (linkActive === endpoint) {
            setLinkClassName(classNames(cl.link, cl.link_active));
        }

        if (linkActive !== endpoint) {
            setLinkClassName(cl.link);
        }
    }, [endpoint, linkActive]);

    return { onClick, linkClassName };
};
