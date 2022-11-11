import { FC, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { setLinkActive } from "../../../../../store/slice/navbarSlice";
import cl from "./buttonHome.module.sass";

interface IButtonHome {
  children?: JSX.Element | string;
  className?: string;
}

const ButtonHome: FC<IButtonHome> = ({ children, className }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  function clickHandlerGoHome() {
    navigate("/main");
    animateScroll.scrollToTop({
      duration: location.pathname === "/main" ? 500 : 0,
    });
    dispatch(setLinkActive(null));
  }

  return (
    <button
      className={[cl.button_home_root, className].join(" ")}
      type="button"
      onClick={clickHandlerGoHome}
    >
      {children}
    </button>
  );
};

export default memo(ButtonHome);
