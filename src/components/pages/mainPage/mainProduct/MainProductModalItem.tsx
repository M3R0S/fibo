import React, { FC } from 'react'
import { setClosedModal, TMainProductItemModal } from '../../../../store/slice/mainProductItemSlice';
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import { useAppDispatch } from '../../../../hook/storeHook/useStore';
import close from "../../../../assets/image/main-product/close.png";
import PizzaModal from './modalItem/PizzaModal';
import SupplementsList from './supplements/SupplementsList';

const MainProductModalItem : FC<TMainProductItemModal>  = ({h1Text, id, img, price, type, weightProduct, weightProductBig, weightProductMedium, weightProductSmall}) => {

    const dispatch = useAppDispatch()

  return (
    <article onClick={(e) => e.stopPropagation()} className={cl.card_content}>
      <img
        className={cl.main_pic}
        src={img}
        alt={`Modal img: ${img}`}
      />
      <div className={cl.card_info}>
        <h1>{h1Text}</h1>
        {type === "pizza" ? (
          <PizzaModal weightProductBig={weightProductBig} weightProductMedium={weightProductMedium} weightProductSmall={weightProductSmall}></PizzaModal>
        ) : (
          <div className={cl.supplements_title}>
            <b>{`Выход продукта: ${weightProduct} г`}</b>
            <h3>Добавку не желаете?</h3>
          </div>
        )}
        <SupplementsList endpoint={type}></SupplementsList>
        <button className={cl.add_basket}>Добавить в корзину | 150₽</button>
      </div>
      <button onClick={() => dispatch(setClosedModal())} className={cl.close}>
        <img src={close} alt={close} />
      </button>
    </article>
  );
}

export default MainProductModalItem