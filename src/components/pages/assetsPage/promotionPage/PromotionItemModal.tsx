import React,  {FC} from 'react'
import { setClosedModal, TPromotionItem } from '../../../../store/slice/promotionItemSlice';
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import { useAppDispatch } from '../../../../hook/storeHook/useStore';

const PromotionItemModal: FC<TPromotionItem> = ({h2Text, img, pText}) => {

  const dispatch = useAppDispatch()

  return (
    <article className={cl.modal_card}>
      <img src={img} alt={img} />
      <div className={cl.wrapper_card_modal}>
        <h2>{h2Text}</h2>
        <p>{pText}</p>
        <button
          onClick={() => dispatch(setClosedModal())}
          className={cl.closed_modal}
        >
          Закрыть
        </button>
      </div>
    </article>
  );
};

export default PromotionItemModal