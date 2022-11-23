import { useCallback, useEffect, useState } from "react";
import cl from "./navbarMenuItem.module.sass";
import { useAppDispatch, useAppSelector } from "hook/useStore/useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { setGlobalIsIntersecting } from "store/slice/global/globalSlice";
import { setLinkActive, setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";
import { animateScroll, scroller } from "react-scroll";

interface IUseNavbarMenuItem {
  isAnchor: boolean;
  endpoint: string;
  to: string;
}

const useNavbarMenuItem = ({ endpoint, isAnchor, to }: IUseNavbarMenuItem) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isEndLoadingProduct } = useAppSelector((state) => state.mainProduct);
  const { linkActive } = useAppSelector((state) => state.navbar);

  const [linkClassName, setLinkClassName] = useState<string>(cl.link);

  function changeGlobalIntersecting() {
    dispatch(setGlobalIsIntersecting(false));
    setTimeout(() => dispatch(setGlobalIsIntersecting(true)), 700);
  }

  function defaultClick() {
    dispatch(setLinkActive(endpoint));
    dispatch(setOpenNavbarBurger(false));
  }

  function onClick() {
    if (isAnchor) {
      if (location.pathname !== "/main") {
        navigate("/main");
      }
      if (location.pathname === "/main") {
        scroller.scrollTo(endpoint, {
          smooth: isEndLoadingProduct ? true : false,
          duration: isEndLoadingProduct ? 700 : 0,
          offset: -80,
        });
        changeGlobalIntersecting();
      }
    }

    if (!isAnchor) {
      navigate(to);
      animateScroll.scrollToTop({
        duration: 0,
      });
    }

    defaultClick();
  }

  const onSetLinkClassName = useCallback(() => {
    if (linkActive === endpoint) {
      setLinkClassName([cl.link, cl.link_active].join(" "));
    } else {
      setLinkClassName(cl.link);
    }
  }, [endpoint, linkActive]);

  useEffect(() => {
    onSetLinkClassName();
  }, [onSetLinkClassName]);

  return { onClick, linkClassName };
};

export default useNavbarMenuItem;
