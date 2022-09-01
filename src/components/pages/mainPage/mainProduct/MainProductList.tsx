import React, { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getMainProduct,
  SectionName,
} from "../../../../store/slice/mainProductSlice";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import MainProductItem from "./MainProductItem";
import MainProductModalApp from "./MainProductModalApp";
import { getMainProductItem } from "../../../../store/slice/mainProductItemSlice";

interface IMainProductListProps {
  endpoint: SectionName;
  title: string;
}

const MainProductList: FC<IMainProductListProps> = ({ endpoint, title }) => {
  const { data, loading, error } = useAppSelector((state) => state.mainProduct);
  const list = data[endpoint];
  const dispatch = useAppDispatch();
  const { item, typeModal, idModal, openModal } = useAppSelector(
    (state) => state.mainProductItem
  );

  useEffect(() => {
    dispatch(getMainProduct(endpoint));
  }, []);

  return (
    <section className={cl.group_card}>
      { error ? 
      <h1>{error}</h1> :
      loading ? (
        <h1>Загрузка</h1>
      ) : (
        <>
          <h1>{title}</h1>
          <figure className={cl.group_figure}>
            {list.map(({ h2Text, pText, strongText, img, id, type }) => (
              <MainProductItem
                h2Text={h2Text}
                pText={pText}
                strongText={strongText}
                img={img}
                key={endpoint + id}
                id={id}
                type={type}
              />
            ))}
          </figure>
        </>
      )}
    </section>
  );
};

export default MainProductList;
