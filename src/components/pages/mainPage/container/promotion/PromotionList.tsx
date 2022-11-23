import { FC } from "react";
import cl from "./promotionList.module.sass";
import { Link } from "react-router-dom";
import modelWoman from "./image/model-woman.png";
import { promotionImg } from "./const";
import PromotionItem from "../../content/promotionItem/PromotionItem";
import usePromotionList from "./usePromotionList";

const PromotionList: FC = () => {
  const { linkToPromotionPage, containerRef } = usePromotionList();

  return (
    <section className={cl.container}>
      <h1>
        Наши <span>акции</span>
      </h1>
      <figure className={cl.content}>
        {promotionImg.map(({ id, img }) => (
          <PromotionItem img={img} key={id} />
        ))}
      </figure>
      <Link className={cl.link} to="/promotion" ref={containerRef} onClick={linkToPromotionPage}>
        Все акции
      </Link>
      <img src={modelWoman} alt="Фоновое изображение" className={cl.model_woman} />
    </section>
  );
};

export default PromotionList;
