import React, { FC } from "react";
// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../../../hook/storeHook/useStore";
// import { getPromotionList } from "../../../store/slice/promotionSlice";
import promotion from "../../../assets/image/promotion.png";
import promotionMini from "../../../assets/image/promotion-mini.png";
import cl from "../../../assets/styles/pages/promotion/promotion.module.sass";
import { Link } from "react-router-dom";
import modelWoman from '../../../assets/image/model-woman.png'
import { v4 as uuidv4 } from "uuid";

const promoImg = [
  promotion,
  promotionMini,
  promotionMini,
  promotionMini,
  promotionMini,
];

const Promotion: FC = () => {
  // const dispatch = useAppDispatch();
  // const { list, loading, error } = useAppSelector((state) => state.promotion);

  // useEffect(() => {
  //   dispatch(getPromotionList());
  // }, []);
  return (
    <section className={cl.container}>
      <h1>Наши <span>акции</span></h1>
      <figure className={cl.promotion_cont}>
        {promoImg.map((img) => (
          <button className={cl.promotion_card} key={uuidv4()}>
            <img src={img} alt={img}></img>
          </button>
        ))}
      </figure>
        <Link className={cl.promotion_link} to="#">Все акции</Link>
        <img src={modelWoman} alt="Model Woman" className={cl.modelWoman} />
    </section>
  );
};

export default Promotion;
