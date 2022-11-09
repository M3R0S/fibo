import { FC } from "react";
import * as Scroll from "react-scroll";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setEndLoadingProduct,
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
  clNavLink: string;
  clNavLinkActive: string;
}

const NavMenuItem: FC<INavMenuItem> = ({
  endpoint,
  isAnchor,
  title,
  to,
  clNavLink,
  clNavLinkActive,
}) => {
  const ScrollLink = Scroll.Link;
  const animateScroll = Scroll.animateScroll;
  const dispatch = useAppDispatch();
  const { linkActive, endLoadingProduct } = useAppSelector(
    (state) => state.navbar
  );
  const navigate = useNavigate();
  const location = useLocation()

  const { pasta, pizza, salad, soup } = endLoadingProduct;

  
  return (
    <li>
      {isAnchor ? (
      // todo Переделать СкролЛинк. Убрать ошибку о ненайденом элементе
        <ScrollLink
          to={location.pathname === '/main' ? endpoint : ''}
          smooth={pasta && pizza && salad && soup ? true : false}
          duration={700}
          offset={-95}
          className={
            linkActive === endpoint
              ? `${clNavLink} ${clNavLinkActive}`
              : clNavLink
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
            linkActive === endpoint
              ? `${clNavLink} ${clNavLinkActive}`
              : clNavLink
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
