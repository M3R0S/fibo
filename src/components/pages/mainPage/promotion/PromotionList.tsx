import { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/promotionPage/promotion.module.sass";
import { Link } from "react-router-dom";
import modelWoman from "../../../../assets/image/model-woman.png";
import useElementOnScreen from "../../../../hook/elementOnScreenHook/useElementOnScreen";
import { setLinkActive } from "../../../../store/slice/navbarSlice";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { promotionImg } from "./const";
import PromotionItem from "./PromotionItem";
import { animateScroll } from "react-scroll";

const PromotionList: FC = () => {
  const dispatch = useAppDispatch();

  function clickHandlerGoPromotion() {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }

  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.7,
  });

  useEffect(() => {
    if (isIntersecting) {
      dispatch(setLinkActive(null));
    }
  }, [dispatch, isIntersecting]);

  return (
    <section className={cl.container}>
      <h1>
        Наши <span>акции</span>
      </h1>
      <figure className={cl.promotion_content}>
        {promotionImg.map(({ id, img }) => (
          <PromotionItem img={img} key={id} />
        ))}
      </figure>
      <Link
        className={cl.promotion_link}
        to="/promotion"
        ref={containerRef}
        onClick={clickHandlerGoPromotion}
      >
        Все акции
      </Link>
      <img
        src={modelWoman}
        alt="Фоновое изображение"
        className={cl.model_woman}
      />
    </section>
  );
};

export default PromotionList;
