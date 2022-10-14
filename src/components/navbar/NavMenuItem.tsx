import React, { FC } from "react";
import * as Scroll from "react-scroll";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { Link, useNavigate } from "react-router-dom";
import {
  setIdActive,
  setOpenModalBurger,
  setStaticScrollY,
} from "../../store/slice/navbarSlice";

interface INavMenuItem {
  isAnchor: boolean;
  idEllement: string;
  title: string;
  to: string;
  clNavLink: string;
  clNavLinkActive: string;
}

const NavMenuItem: FC<INavMenuItem> = ({
  idEllement,
  isAnchor,
  title,
  to,
  clNavLink,
  clNavLinkActive,
}) => {
  const ScrollLink = Scroll.Link;
  const animateScroll = Scroll.animateScroll;
  const dispatch = useAppDispatch();
  const { idActive } = useAppSelector((state) => state.navbar);
  const navigate = useNavigate();

  return (
    <li>
      {isAnchor ? (
        <ScrollLink
          to={idEllement}
          smooth={true}
          duration={700}
          offset={-80}
          className={
            idActive === idEllement
              ? `${clNavLink} ${clNavLinkActive}`
              : clNavLink
          }
          onClick={() => {
            navigate("/main");
            dispatch(setIdActive(idEllement));
            dispatch(setStaticScrollY(window.scrollY));
            dispatch(setOpenModalBurger(false));
          }}
        >
          {title}
        </ScrollLink>
      ) : (
        <Link
          className={
            idActive === idEllement
              ? `${clNavLink} ${clNavLinkActive}`
              : clNavLink
          }
          to={to}
          onClick={() => {
            animateScroll.scrollToTop();
            dispatch(setIdActive(idEllement));
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
