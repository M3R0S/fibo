import { animateScroll } from "react-scroll";
import { useAppDispatch } from "hook/useStore/useStore";
import { useNavigate } from "react-router-dom";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

const useButtonBasket = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function clickHandlerGoBasket() {
    navigate("/basket");
    dispatch(setLinkActive(null));
    animateScroll.scrollToTop({
      duration: 0,
    });
  }

  return { clickHandlerGoBasket };
};

export default useButtonBasket;
