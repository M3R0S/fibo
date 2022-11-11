import { FC, memo } from "react";
import cl from "../../../../assets/styles/pages/newProduct/newProduct.module.sass";
import { useNavigate } from "react-router-dom";
import { TNewProductItem } from "../../../../store/slice/newProduct/types/newProductTypes";
import { useAppSelector } from "../../../../hook/storeHook/useStore";
import { scroller } from "react-scroll";

const NewProductItem: FC<TNewProductItem> = ({
  title,
  img,
  price,
  type,
  id,
}) => {
  const navigate = useNavigate();
  const { isEndLoadingProduct } = useAppSelector((state) => state.navbar);

  function clickHandlerOpenProduct() {
    scroller.scrollTo(type, {
      smooth: isEndLoadingProduct ? true : false,
      duration: isEndLoadingProduct ? 700 : 0,
      offset: -95,
    });
    setTimeout(() => navigate(`${type}/${id}/info`), 700);
  }

  return (
    <div onClick={clickHandlerOpenProduct} className={cl.card}>
      <img src={img} alt="Новая продукция" />
      <div className={cl.info}>
        <h2>{title}</h2>
        <strong>{`${type === "pizza" ? "От" : ""} ${price} ₽`}</strong>
      </div>
    </div>
  );
};

export default memo(NewProductItem);
