import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setLinkActive } from "../../store/slice/navbar/navbarSlice";
import { useAppDispatch } from "../useStore/useStore";

const useLocationLinkActive = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/promotion") {
      dispatch(setLinkActive("promotion"));
    }
    if (path === "/contact") {
      dispatch(setLinkActive("contact"));
    }
    if (path === "/drink") {
      dispatch(setLinkActive("drink"));
    }
    if (path === "/desert") {
      dispatch(setLinkActive("desert"));
    }
    if (path === "/bakaly") {
      dispatch(setLinkActive("bakaly"));
    }
    if (path === "/antipasty") {
      dispatch(setLinkActive("antipasty"));
    }
    if (path === "/combo") {
      dispatch(setLinkActive("combo"));
    }
    if (path === "/error") {
      dispatch(setLinkActive(null));
    }
  }, [dispatch, location.pathname]);
};

export default useLocationLinkActive;
