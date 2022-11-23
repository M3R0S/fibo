import { FC } from "react";
import cl from "./mainProductList.module.sass";
import MainProductItem from "../../../../content/mainProductItem/MainProductItem";
import { Element } from "react-scroll";
import { useLazyGetMainProductListQuery } from "store/slice/mainProduct/mainProductApi";
import Loader from "components/ui/assets/loader/Loader";
import { IMainProductGalleries } from "../types";
import useMainProductList from "./useMainProductList";

const MainProductList: FC<IMainProductGalleries> = ({ endpoint, title }) => {
  const [trigger, { data: list = [], isLoading, isError }] = useLazyGetMainProductListQuery();

  const { containerRef } = useMainProductList({ endpoint, trigger });

  return (
    <Element name={endpoint}>
      <section ref={containerRef} className={cl.container}>
        <h1>{isError ? "Ошибка загрузки" : title}</h1>
        {isLoading && <Loader className={cl.loader} />}
        <div className={cl.cards}>
          {list.map((item) => (
            <MainProductItem {...item} key={item.id + item.type} />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default MainProductList;
