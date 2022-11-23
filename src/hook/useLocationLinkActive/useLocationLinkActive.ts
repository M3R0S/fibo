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
    if (path === "/error") {
      dispatch(setLinkActive(null));
    }
  }, [dispatch, location.pathname]);
};

export default useLocationLinkActive;
