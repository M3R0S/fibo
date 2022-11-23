import { FC } from "react";
import cl from "./newProductList.module.sass";
import modelMen from "./image/model-man.png";
import NewProductItem from "../../content/newProductItem/NewProductItem";
import Loader from "components/ui/assets/loader/Loader";
import { useGetNewProductListQuery } from "store/slice/newProduct/newProductApi";
import useNewProductList from "./useNewProductList";

const NewProductList: FC = () => {
  const { data: list = [], isLoading, isError } = useGetNewProductListQuery(null);

  const { containerRef } = useNewProductList();

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
