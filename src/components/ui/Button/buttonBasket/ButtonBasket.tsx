import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch, useAppSelector
} from "../../../../hook/storeHook/useStore";
import * as Scroll from "react-scroll";
import { setIdActive } from "../../../../store/slice/navbarSlice";
import cl from './buttonBasket.module.sass'

interface IButtonBasket {
  className?: string;
}

const ButtonBasket: FC<IButtonBasket> = ({
  className,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const animateScroll = Scroll.animateScroll;
  const { totalPrice } = useAppSelector((state) => state.basketPage);


  return (
    <button
      type="button"
      className={`${cl.basket_root} ${className}`}
      onClick={() => {
        navigate("/basket");
        dispatch(setIdActive(null));
        animateScroll.scrollToTop({
          duration: 0,
        });
      }}
    >
      {totalPrice ? `Корзина | ${totalPrice} ₽` : "Корзина"}
    </button>
  );
};

export default ButtonBasket;