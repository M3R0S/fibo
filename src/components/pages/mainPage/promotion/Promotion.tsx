import React, { FC } from "react";
import promotion from "../../../../assets/image/promotion.png";
import promotionMini from "../../../../assets/image/promotion-mini.png";
import cl from "../../../../assets/styles/pages/promotion/promotion.module.sass";
import { Link } from "react-router-dom";
import modelWoman from "../../../../assets/image/model-woman.png";
import { v4 as uuidv4 } from "uuid";
import useElementOnScreen from "../../../../hook/useElementOnScreen/useElementOnScreen";

const promoImg = [
  promotion,
  promotionMini,
  promotionMini,
  promotionMini,
  promotionMini,
];

const Promotion: FC = () => {
  const containerRef = useElementOnScreen({ threshold: 0.9 }, null);

  return (
    <section className={cl.container}>
      <h1>
        Наши <span>акции</span>
      </h1>
      <figure className={cl.promotion_cont} ref={containerRef}>
        {promoImg.map((img) => (
          <button className={cl.promotion_card} key={uuidv4()}>
            <img src={img} alt={img}></img>
          </button>
        ))}
      </figure>
      <Link className={cl.promotion_link} to="/promotion">
        Все акции
      </Link>
      <img src={modelWoman} alt="Model Woman" className={cl.modelWoman} />
    </section>
  );
};

export default Promotion;
