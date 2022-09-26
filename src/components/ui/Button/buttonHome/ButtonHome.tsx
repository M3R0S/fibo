import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { setIdActive } from "../../../../store/slice/navbarSlice";

interface IButtonHome {
    children?: JSX.Element | string
}

const ButtonHome: FC<IButtonHome> = ({children}) => {
  const navigate = useNavigate();
  const animateScroll = Scroll.animateScroll;
  const dispatch = useAppDispatch();

  return (
    <button
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
