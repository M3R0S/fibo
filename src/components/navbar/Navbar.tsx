import { FC, useCallback, useEffect, useState } from "react";
import NavInfo from "./NavInfo";
import NavMenu from "./NavMenu";
import cl from "../../assets/styles/navbar/navbar.module.sass";
import * as Scroll from "react-scroll";
import { debounce } from "../../helpers/debounce";
import { Transition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { setLinkActive, setScreenWidth } from "../../store/slice/navbarSlice";
import { useLocation } from "react-router-dom";
import { setBasketTotalPrice } from "../../store/slice/basketPageSlice";
import NavbarMedia1200 from "./navbarMedia/NavbarMedia1200";
import useScreenSize from "../../hook/useScreenSize/useScreenSize";

const Navbar: FC = () => {
  const scroller = Scroll.scroller;
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const { screenWidth, linkActive } = useAppSelector((state) => state.navbar);
  const { list, totalPrice, promoCodeRatio } = useAppSelector(
    (state) => state.basketPage
  );
  // const { loading } = useAppSelector(({ mainProduct }) => mainProduct);
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

  useScreenSize();

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (location.pathname === "/promotion") {
      dispatch(setLinkActive("promotion"));
    }
    if (location.pathname === "/contact") {
      dispatch(setLinkActive("contact"));
    }
    if (location.pathname !== "/error" && linkActive) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("basketList", JSON.stringify(list));
    // localStorage.setItem(
    //   "basketTotalPrice",
    //   JSON.stringify(
    //     list.reduce((sum, item) => (sum += item.price * item.quantity), 0)
    //   )
    // );
    // console.log(localStorage.getItem('basketTotalPrice'))
    dispatch(
      setBasketTotalPrice(
        list.reduce(
          (sum, item) => (sum += Number(item.price) * item.quantity),
          0
        ) * promoCodeRatio
      )
    );
    // console.log("ef");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, totalPrice, promoCodeRatio]);

  // useEffect(() => {
  //   if (loading === false && linkActive) {
  //     scroller.scrollTo(linkActive, {
  //       smooth: true,
  //       delay: 300,
  //       duration: 700,
  //       offset: -80,

  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loading]);

  return (
    <>
      {screenWidth && screenWidth > 1200 ? (
        <Transition in={scrollDown} timeout={500}>
          {(state) => (
            <header className={`${cl.header} ${cl[state]}`}>
              {!scrollDown && <NavInfo />}
              <NavMenu scrollDown={scrollDown} />
            </header>
          )}
        </Transition>
      ) : (
        <header className={cl.header}>
          <NavbarMedia1200 />
        </header>
      )}
    </>
  );
};

export default Navbar;
