import React, { FC, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cl from "../../../assets/styles/navbar/navMenu.module.sass";
import { v4 as uuidv4 } from "uuid";
import * as Scroll from "react-scroll";
import logoImg from "../../../assets/image/header-logo.png";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hook/storeHook/useStore";
import {
  setIdActive,
  setStaticScrollY,
} from "../../../store/slice/navbarSlice";

interface INavMenu {
  scrollDown: boolean;
}

const NavMenu: FC<INavMenu> = ({ scrollDown }) => {
  const ScrollLink = Scroll.Link;
  const scroller = Scroll.scroller;
  const animateScroll = Scroll.animateScroll;
  const { loading } = useAppSelector(({ mainProduct }) => mainProduct);
  const { idActive } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loadingActive, setLoadingActive] = useState<boolean>(false);

  useEffect(() => {
    if (loading === false && idActive && loadingActive) {
      scroller.scrollTo(idActive, {
        smooth: true,
        delay: 0,
        duration: 700,
        offset: -110,
      });
      setLoadingActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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

  return (
    <section className={cl.container}>
      {scrollDown && (
        <Link
          to="/main"
          onClick={() => {
            animateScroll.scrollToTop();
            dispatch(setIdActive(null));
          }}
        >
          <img src={logoImg} alt="Logo" className={cl.logo_scroll} />
        </Link>
      )}
      <nav>
        <ul>
          {navLinks.map(({ to, title, isAnchor, idEllement, offset }) => (
            <li key={uuidv4()}>
              {isAnchor ? (
                <ScrollLink
                  to={idEllement}
                  smooth={true}
                  duration={700}
                  offset={offset}
                  className={
                    idActive === idEllement ? cl.nav_active : cl.nav_disable
                  }
                  onClick={() => {
                    navigate("/main");
                    dispatch(setIdActive(idEllement));
                    setLoadingActive(true);
                    dispatch(setStaticScrollY(window.scrollY));
                  }}
                >
                  {title}
                </ScrollLink>
              ) : (
                <Link
                  className={
                    idActive === idEllement ? cl.nav_active : cl.nav_disable
                  }
                  to={to}
                  onClick={() => {
                    dispatch(setIdActive(idEllement));
                    dispatch(setStaticScrollY(window.scrollY));
                  }}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {!scrollDown && (
        <button type="button" className={cl.login}>
          Войти
        </button>
      )}
      <button type="button" className={cl.basket}>
        Корзина | '1'
      </button>
    </section>
  );
};

export const navLinks = [
  {
    to: "/main",
    title: "Пицца",
    isAnchor: true,
    idEllement: "mainProductSectionPizza",
    offset: -110,
  },
  {
    to: "/main",
    title: "Паста",
    isAnchor: true,
    idEllement: "mainProductSectionPasta",
    offset: -110,
  },
  {
    to: "/main",
    title: "Супы",
    isAnchor: true,
    idEllement: "mainProductSectionSoup",
    offset: -110,
  },
  {
    to: "/main",
    title: "Салаты",
    isAnchor: true,
    idEllement: "mainProductSectionSalad",
    offset: -110,
  },
  {
    to: "/error",
    title: "Напитки",
    isAnchor: false,
    idEllement: "mainProductSectionWater",
    offset: -110,
  },
  {
    to: "/error",
    title: "Десерты",
    isAnchor: false,
    idEllement: "mainProductSectionDesert",
    offset: -110,
  },
  {
    to: "/error",
    title: "Бакалея",
    isAnchor: false,
    idEllement: "mainProductSectionBakaly",
    offset: -110,
  },
  {
    to: "/error",
    title: "Антипасти",
    isAnchor: false,
    idEllement: "mainProductSectionAntipasty",
    offset: -110,
  },
  {
    to: "/promotion",
    title: "Акции",
    isAnchor: false,
    idEllement: "Promotion",
  },
  {
    to: "/error",
    title: "Комбо",
    isAnchor: false,
    idEllement: "Combo",
  },
  {
    to: "/contact",
    title: "Контакты",
    isAnchor: false,
    idEllement: "Contact",
  },
];

export default NavMenu;
