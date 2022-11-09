import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import { TPromotionContent } from "../../../../../store/slice/promotion/types/promotionTypes";

const PromotionPageItem: FC<TPromotionContent> = ({ id, img, title, info }) => {
  const navigate = useNavigate();

  function onOpenPopup() {
    navigate(`${id}/info`);
  }

  return (
    <article className={[cl.card, cl.card_enabled].join(" ")}>
      <img src={img} alt="Акция" />
      <div className={cl.card_wrapper}>
        <h2>{title}</h2>
        <p>{info.length > 200 ? info.substring(0, 200) + "..." : info}</p>
      </div>
      <button className={cl.open_popup} onClick={onOpenPopup}>
        Посмотреть
      </button>
    </article>
  );
};

// todo Исправить лишние рендеры айтемов списка

export default memo(PromotionPageItem);
