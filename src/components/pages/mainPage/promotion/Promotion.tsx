import { FC, useEffect } from "react";
import promotion from "../../../../assets/image/promotion.png";
import promotionMini from "../../../../assets/image/promotion-mini.png";
import cl from "../../../../assets/styles/pages/promotionPage/promotion.module.sass";
import { Link } from "react-router-dom";
import modelWoman from "../../../../assets/image/model-woman.png";
import { v4 as uuidv4 } from "uuid";
import useElementOnScreen from "../../../../hook/useElementOnScreen/useElementOnScreen";
import { setLinkActive } from "../../../../store/slice/navbarSlice";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";

const promoImg = [
  promotion,
  promotionMini,
  promotionMini,
  promotionMini,
  promotionMini,
];

const Promotion: FC = () => {
  const dispatch = useAppDispatch();
  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.7,
  });

  useEffect(() => {
    if (isIntersecting) dispatch(setLinkActive(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <section className={cl.container}>
      <h1>
        Наши <span>акции</span>
      </h1>
      <figure className={cl.promotion_cont}>
        {promoImg.map((img) => (
          <div className={cl.promotion_card} key={uuidv4()}>
            <img src={img} alt={img}></img>
          </div>
        ))}
      </figure>
      <Link className={cl.promotion_link} to="/promotion" ref={containerRef}>
        Все акции
      </Link>
      <img src={modelWoman} alt="Model Woman" className={cl.model_woman} />
    </section>
  );
};

export default Promotion;
