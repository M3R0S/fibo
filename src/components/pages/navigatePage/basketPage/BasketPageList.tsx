import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import cl from "../../../../assets/styles/pages/basket/basketPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import BasketProductItem from "./BasketProductItem";
import ButtonHome from "../../../ui/components/button/buttonHome/ButtonHome";
import CountUp from "react-countup";
import {
  changePromoCodeRatio,
  setPromoCodeActive,
} from "../../../../store/slice/basketPageSlice";

const BasketPageList: FC = () => {
  const { list, totalPrice, promoCodeActive } = useAppSelector(
    (state) => state.basketPage
  );
  const dispatch = useAppDispatch();
  const [promoCode, setPromoCode] = useState<string>("");

  function getPromoCode() {
    switch (promoCode) {
      case "киса":
        dispatch(changePromoCodeRatio(0.9));
        dispatch(setPromoCodeActive(true));
        // setCorrectPromoCode(true);
        break;
      case "котёнок":
        dispatch(changePromoCodeRatio(0.5));
        dispatch(setPromoCodeActive(true));
        // setCorrectPromoCode(true);
        break;
      default:
        dispatch(setPromoCodeActive(false));
      // setCorrectPromoCode(false);
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
                  placeholder={
                    promoCodeActive ? "Промокод введён" : "Введите промокод"
                  }
                  className={
                    promoCodeActive === null
                      ? cl.promo_check
                      : promoCodeActive
                      ? [cl.promo_check, cl.promo_check_disabled].join(" ")
                      : [cl.promo_check, cl.promo_check_warning].join(" ")
                  }
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  onClick={getPromoCode}
                  className={
                    promoCodeActive === null
                      ? cl.promo_enter
                      : promoCodeActive
                      ? [cl.promo_enter, cl.promo_enter_disabled].join(" ")
                      : [cl.promo_enter, cl.promo_enter_warning].join(" ")
                  }
                >
                  Применить
                </button>
              </div>
              <b
                className={
                  promoCodeActive
                    ? [cl.promo_code_result, cl.promo_code_result_success].join(
                        " "
                      )
                    : [cl.promo_code_result, cl.promo_code_result_fail].join(
                        " "
                      )
                }
              >
                {promoCodeActive !== null &&
                  (promoCodeActive
                    ? "Промокод успешно применён!"
                    : "Неверный промокод!")}
              </b>
            </div>
            <strong className={cl.summary}>
              Сумма заказа:{" "}
              <CountUp
                separator=" "
                preserveValue={true}
                end={totalPrice}
                duration={0.5}
                suffix={" ₽"}
              ></CountUp>{" "}
            </strong>
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
