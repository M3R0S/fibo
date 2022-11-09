import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "../../../../assets/styles/pages/basket/basketProductItem.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  decrementQuantityItem,
  deleteBasketItem,
  incrementQuantityItem,
  TPostBasketItem,
} from "../../../../store/slice/basketPageSlice";
import CountUp from "react-countup";

const BasketProductItem: FC<TPostBasketItem> = ({
  title,
  img,
  quantity,
  info,
  price,
  dough,
  size,
  weight,
  idProduct,
  typeProduct,
}) => {
  const [targetAnimation, setTargetAnimation] = useState<boolean>();
  const [isFullInfo, setIsFullInfo] = useState<boolean>(false);
  const [deleteBasketElement, setDeleteBasketElement] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { screenWidth } = useAppSelector((state) => state.navbar);

  function increment() {
    if (quantity < 100) {
      dispatch(
        incrementQuantityItem({
          idProduct,
          typeProduct,
          size,
          dough,
        })
      );
    }
  }

  function decrement() {
    if (quantity > 1) {
      dispatch(
        decrementQuantityItem({
          idProduct,
          typeProduct,
          size,
          dough,
        })
      );
    }
  }

  return (
    <CSSTransition
      in={deleteBasketElement}
      timeout={500}
      classNames={{
        enterActive: cl.delete_enter_active,
      }}
      exit={false}
      onEntered={() =>
        dispatch(deleteBasketItem({ idProduct, typeProduct, dough, size }))
      }
    >
      <section className={cl.container}>
        <figure className={cl.content}>
          <div className={cl.content_left}>
            <img src={img} alt="Продукция" />
            <div className={cl.info}>
              <h2>{title}</h2>
              {screenWidth && screenWidth > 500 ? (
                info.length > 80 ? (
                  <CSSTransition
                    in={targetAnimation}
                    timeout={500}
                    onEntered={() => setIsFullInfo(!isFullInfo)}
                    onExiting={() => setIsFullInfo(!isFullInfo)}
                    classNames={{
                      enter: cl.text_enter,
                      enterActive: cl.text_enter_active,
                      enterDone: cl.text_enter_done,
                      exit: cl.text_exit,
                      exitActive: cl.text_exit_active,
                      exitDone: cl.text_exit_done,
                    }}
                  >
                    <>
                      <p>{isFullInfo ? info : info.substring(0, 80) + "..."}</p>
                      <span
                        onClick={() => setTargetAnimation(!targetAnimation)}
                      >
                        {isFullInfo ? "Свернуть" : "Показать весь состав"}
                      </span>
                    </>
                  </CSSTransition>
                ) : (
                  <p>{info}</p>
                )
              ) : (
                <CSSTransition
                  in={targetAnimation}
                  timeout={600}
                  onEntered={() => setIsFullInfo(!isFullInfo)}
                  onExiting={() => setIsFullInfo(!isFullInfo)}
                  classNames={{
                    enter: cl.text_enter,
                    enterActive: cl.text_enter_active,
                    enterDone: cl.text_enter_done,
                    exit: cl.text_exit,
                    exitActive: cl.text_exit_active,
                    exitDone: cl.text_exit_done,
                  }}
                >
                  <>
                    <p>{isFullInfo && info}</p>
                    <span onClick={() => setTargetAnimation(!targetAnimation)}>
                      {isFullInfo ? "Свернуть" : "Показать состав"}
                    </span>
                  </>
                </CSSTransition>
              )}
              <p className={cl.p_active}>
                {typeProduct === "pizza"
                  ? `${dough} тесто. ${weight} г.`
                  : `${weight} г.`}
              </p>
            </div>
          </div>
          <div className={cl.content_right}>
            <CountUp
              className={cl.price}
              separator=" "
              preserveValue={true}
              end={Number(price) * quantity}
              duration={0.5}
              suffix={" ₽"}
            ></CountUp>
            <div className={cl.quantity}>
              <button onClick={decrement}>-</button>
              <p>{quantity}</p>
              <button onClick={increment}>+</button>
            </div>
            <button
              onClick={() => {
                setDeleteBasketElement(!deleteBasketElement);
              }}
              className={cl.delete}
            ></button>
          </div>
        </figure>
      </section>
    </CSSTransition>
  );
};

export default React.memo(BasketProductItem);
