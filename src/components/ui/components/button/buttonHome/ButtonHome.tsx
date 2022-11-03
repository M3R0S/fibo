import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { setIdActive } from "../../../../../store/slice/navbarSlice";
import cl from './buttonHome.module.sass'

interface IButtonHome {
    children?: JSX.Element | string
    className?: string
}

const ButtonHome: FC<IButtonHome> = ({children, className}) => {
  const navigate = useNavigate();
  const animateScroll = Scroll.animateScroll;
  const dispatch = useAppDispatch();

  return (
    <button
      className={[cl.button_home_root, className].join(' ')}
      type="button"
      onClick={() => {
        navigate("/main");
        animateScroll.scrollToTop();
        dispatch(setIdActive(null));
      }}
    >
        {children}
    </button>
  );
};

export default ButtonHome;
