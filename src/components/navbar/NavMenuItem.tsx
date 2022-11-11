import { FC, useState, useEffect } from "react";
import cl from "../../assets/styles/navbar/navMenu.module.sass";
import * as Scroll from "react-scroll";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setGlobalIsIntersecting,
  setLinkActive,
  setOpenModalBurger,
  setStaticScrollY,
} from "../../store/slice/navbarSlice";

interface INavMenuItem {
  isAnchor: boolean;
  endpoint: string;
  title: string;
  to: string;
}

const NavMenuItem: FC<INavMenuItem> = ({
  endpoint,
  isAnchor,
  title,
  to,
}) => {
  const ScrollLink = Scroll.Link;
  const animateScroll = Scroll.animateScroll;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { linkActive, isEndLoadingProduct } = useAppSelector((state) => state.navbar);

  return (
    <li>
      {isAnchor ? (
        // todo Переделать СкролЛинк. Убрать ошибку о ненайденом элементе
        <ScrollLink
          to={location.pathname === "/main" ? endpoint : ""}
          smooth={isEndLoadingProduct ? true : false}
          duration={700}
          offset={-95}
          className={
            linkActive === endpoint ? [cl.nav, cl.nav_active].join(" ") : cl.nav
          }
          onClick={() => {
            navigate("/main");
            dispatch(setLinkActive(endpoint));
            dispatch(setStaticScrollY(window.scrollY));
            dispatch(setOpenModalBurger(false));
            dispatch(setGlobalIsIntersecting(false));
            setTimeout(() => dispatch(setGlobalIsIntersecting(true)), 700);
          }}
        >
          {title}
        </ScrollLink>
      ) : (
        <Link
          className={
            linkActive === endpoint ? [cl.nav, cl.nav_active].join(" ") : cl.nav
          }
          to={to}
          onClick={() => {
            animateScroll.scrollToTop();
            dispatch(setLinkActive(endpoint));
            dispatch(setStaticScrollY(window.scrollY));
            dispatch(setOpenModalBurger(false));
          }}
        >
          {title}
        </Link>
      )}
    </li>
  );
};

export default NavMenuItem;
