import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import cl from "../../../../assets/styles/pages/basket/basketPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import BasketProductItem from "./BasketProductItem";
import ButtonHome from "../../../ui/Button/buttonHome/ButtonHome";
import CountUp from "react-countup";
import { changePromoCodeRatio } from "../../../../store/slice/basketPageSlice";

const BasketPageList: FC = () => {
  const { list, totalPrice } = useAppSelector((state) => state.basketPage);
  const dispatch = useAppDispatch();
  const [promoCode, setPromoCode] = useState<string>("");
  // const [promoCodeInfo, setPromoCodeInfo] = useState<boolean | null>(null);
  const [inUsePromoCode, setInUsePromoCode] = useState<boolean | null>(null);

  function getPromoCode() {
    switch (promoCode) {
      case "киса":
        dispatch(changePromoCodeRatio(0.9));
        setInUsePromoCode(true);
        // setPromoCodeInfo(true)
        break;
      case "котёнок":
        dispatch(changePromoCodeRatio(0.8));
        setInUsePromoCode(true);
        // setPromoCodeInfo(true)
        break;
      default:
        setInUsePromoCode(false);
    }
  }

  return (
    <main className={cl.basket}>
      <section className={cl.container}>
        <h1>Корзина</h1>
        {list.length !== 0 ? (
          list.map((obj) => (
            <BasketProductItem {...obj} key={obj.id}></BasketProductItem>
          ))
        ) : (
          <h2 className={cl.clear_basket}>
            Корзина пуста.{" "}
            <ButtonHome className={cl.button_home}>
              Желаете добавить?
            </ButtonHome>
          </h2>
        )}
        <div className={cl.footer}>
          <h3>Промокод</h3>
          <div className={cl.footer_content}>
            <div className={cl.promo_code}>
              <div className={cl.promo_code_info}>
                <input
                  type="text"
                  placeholder="Введите промокод"
                  className={
                    inUsePromoCode
                      ? [cl.promo_check, cl.promo_check_disabled].join(" ")
                      : cl.promo_check
                  }
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  onClick={getPromoCode}
                  className={
                    inUsePromoCode
                      ? [cl.promo_enter, cl.promo_enter_disabled].join(" ")
                      : cl.promo_enter
                  }
                >
                  Применить
                </button>
              </div>
              {/* {inUsePromoCode !== null &&
                (inUsePromoCode ? (
                  <b>Промокод успешно введён!</b>
                ) : (
                  <b>Не верный промокод!</b>
                ))} */}
              <b
                className={
                  inUsePromoCode
                    ? [cl.promo_code_result, cl.promo_code_result_success].join(
                        " "
                      )
                    : [cl.promo_code_result, cl.promo_code_result_fail].join(
                        " "
                      )
                }
              >
                {inUsePromoCode !== null &&
                  (inUsePromoCode
                    ? "Промокод успешно введён!"
                    : "Не верный промокод!")}
              </b>
            </div>
            <span className={cl.summary}>
              Сумма заказа:
              <CountUp
                separator=" "
                preserveValue={true}
                end={totalPrice}
                duration={0.5}
                suffix={" ₽"}
              ></CountUp>
            </span>
          </div>
          <div className={cl.footer_navigation}>
            <Link to={"/main"} className={cl.back}>
              Вернуться в магазин
            </Link>
            <button className={cl.place_order}>Оформить заказ</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BasketPageList;
