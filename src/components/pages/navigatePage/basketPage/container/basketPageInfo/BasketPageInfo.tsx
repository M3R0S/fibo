import { FC } from "react";
import cl from "./basketPageInfo.module.sass";
import CountUp from "react-countup";
import { useAppSelector } from "hook/useStore/useStore";
import { Link } from "react-router-dom";
import BasketPagePromoCode from "../../content/basketPagePromoCode/BasketPagePromoCode";

const BasketPageInfo: FC = () => {
  const { totalPrice } = useAppSelector((state) => state.basketPage);

  return (
    <footer className={cl.container}>
      <h3>Промокод</h3>
      <div className={cl.info}>
        <BasketPagePromoCode />
        <strong className={cl.summary}>
          {"Сумма заказа:"}
          <CountUp
            separator=" "
            preserveValue={true}
            end={totalPrice}
            duration={0.5}
            prefix={" "}
            suffix={" ₽"}
          />
        </strong>
      </div>
      <div className={cl.navigation}>
        <Link to="/main" className={cl.back}>
          На главную
        </Link>
        <button className={cl.place_order}>Оформить заказ</button>
      </div>
    </footer>
  );
};

export default BasketPageInfo;
