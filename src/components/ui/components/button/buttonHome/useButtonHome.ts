import { useAppDispatch } from "hook/useStore/useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

const useButtonHome = () => {
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

  return { clickHandlerGoHome };
};

export default useButtonHome;
