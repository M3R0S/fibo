import React, { FC, useCallback, useEffect, useState } from "react";
import NavInfo from "./NavInfo";
import NavMenu from "./NavMenu";
import cl from "../../assets/styles/navbar/navbar.module.sass";
import * as Scroll from "react-scroll";
import { debounce } from "../../helpers/debounce";
import { Transition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import {
  setScreenWidth,
} from "../../store/slice/navbarSlice";
import { useLocation } from "react-router-dom";
import { setIdActive } from "../../store/slice/navbarSlice";
import { getBasketTotalPrice } from "../../store/slice/basketPageSlice";
import NavbarMedia1200 from "./NavbarMedia1200";

const Navbar: FC = () => {
  const scroller = Scroll.scroller;
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const { screenWidth, idActive} = useAppSelector(
    (state) => state.navbar
  );
  const { list, totalPrice } = useAppSelector((state) => state.basketPage);
  const { loading } = useAppSelector(({ mainProduct }) => mainProduct);
  const dispatch = useAppDispatch();
  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigation = useCallback(
    debounce(() => {
      if (scrollY > window.scrollY) {
        setScrollDown(false);
      } else if (scrollY < window.scrollY) {
        setScrollDown(true);
      }
      setScrollY(window.scrollY);
    }),
    [scrollY]
  );

  const resize = useCallback(() => {
    dispatch(setScreenWidth(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setScreenWidth(window.innerWidth));
    window.addEventListener("resize", () => resize());
    // console.log(screenWidth);
    return window.removeEventListener("resize", () => resize());
  }, [screenWidth, dispatch, resize]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (location.pathname === "/promotion") {
      dispatch(setIdActive("Promotion"));
    }
    if (location.pathname === "/contact") {
      dispatch(setIdActive("Contact"));
    }
    if (location.pathname !== "/error" && idActive) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("basketList", JSON.stringify(list));
    localStorage.setItem(
      "basketTotalPrice",
      String(list.reduce((sum, item) => (sum += item.price), 0))
    );
    dispatch(
      getBasketTotalPrice(Number(localStorage.getItem("basketTotalPrice")))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, totalPrice]);

  useEffect(() => {
    if (loading === false && idActive) {
      scroller.scrollTo(idActive, {
        smooth: true,
        delay: 300,
        duration: 700,
        offset: -110,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      {screenWidth && screenWidth > 1200 ? (
        <Transition in={scrollDown} timeout={500}>
          {(state) => (
            <header className={`${cl.header} ${cl[state]}`}>
              {scrollDown ? (
                <NavMenu scrollDown={scrollDown}></NavMenu>
              ) : (
                <>
                  <NavInfo></NavInfo>
                  <NavMenu scrollDown={scrollDown}></NavMenu>
                </>
              )}
            </header>
          )}
        </Transition>
      ) : (
        <header className={cl.header}>
          <NavbarMedia1200></NavbarMedia1200>
        </header>
      )}
    </>
  );
};

export default Navbar;
