import { FC, useEffect } from "react";
import modelMen from "../../../../assets/image/model-man.png";
import cl from "../../../../assets/styles/pages/newProduct/newProduct.module.sass";
import NewProductItem from "./NewProductItem";
import Loader from "../../../ui/assets/loader/Loader";
import { useGetNewProductListQuery } from "../../../../store/slice/newProduct/newProductApi";
import useElementOnScreen from "../../../../hook/elementOnScreenHook/useElementOnScreen";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { setLinkActive } from "../../../../store/slice/navbarSlice";

const NewProductList: FC = () => {
  const {
    data: list = [],
    isLoading,
    isError,
  } = useGetNewProductListQuery(null);

  const dispatch = useAppDispatch();

  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.7,
  });

  useEffect(() => {
    if (isIntersecting) {
      dispatch(setLinkActive(null));
    }
  }, [isIntersecting, dispatch]);

  return (
    <section ref={containerRef} className={cl.container}>
      <img className={cl.model_man} src={modelMen} alt="Фоновое изображение" />
      <h1>{isError ? "Ошибка загрузки новых продуктов" : "Новинки"}</h1>
      <figure className={cl.content}>
        {isLoading && <Loader className={cl.loader} />}
        {list.map((item) => (
          <NewProductItem {...item} key={item.type + item.id} />
        ))}
      </figure>
    </section>
  );
};

export default NewProductList;
