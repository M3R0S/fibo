import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import { animateScroll } from "react-scroll";
import { setLinkActive } from "../../../../../store/slice/navbarSlice";
import cl from "./buttonBasket.module.sass";
import CountUp from "react-countup";

interface IButtonBasket {
  className?: string;
}

const ButtonBasket: FC<IButtonBasket> = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { totalPrice } = useAppSelector((state) => state.basketPage);

  function clickHandlerGoBasket() {
    navigate("/basket");
    dispatch(setLinkActive(null));
    animateScroll.scrollToTop({
      duration: 0,
    });
  }

  return (
    <button
      type="button"
      className={[cl.basket_root, className].join(" ")}
      onClick={clickHandlerGoBasket}
    >
      {totalPrice ? (
        <CountUp
          className={cl.price}
          separator=" "
          preserveValue={true}
          end={totalPrice}
          duration={0.5}
          suffix={" ₽"}
          prefix={"Корзина | "}
        />
      ) : (
        "Корзина"
      )}
    </button>
  );
};

export default memo(ButtonBasket);
