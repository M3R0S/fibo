import { FC, useCallback, useEffect } from "react";
import cl from "../../../../../assets/styles/pages/mainPage/mainProduct/page/mainProduct.module.sass";
import MainProductItem from "./MainProductItem";
import { Element } from "react-scroll";
import { TMainProductGalleries } from "../../../../../store/slice/mainProduct/types/mainProductTypes";
import { useLazyGetMainProductListQuery } from "../../../../../store/slice/mainProduct/mainProductApi";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import useElementOnScreen from "../../../../../hook/elementOnScreenHook/useElementOnScreen";
import {
  setEndLoadingProduct,
  setLinkActive,
} from "../../../../../store/slice/navbarSlice";
import Loader from "../../../../ui/assets/loader/Loader";

const MainProductList: FC<TMainProductGalleries> = ({ endpoint, title }) => {
  const dispatch = useAppDispatch();

  const [trigger, { data: list = [], isLoading, isError }] =
    useLazyGetMainProductListQuery();

  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.3,
  });

  const onIntersecting = useCallback(() => {
    dispatch(setLinkActive(endpoint));
    trigger({ type: endpoint });
    dispatch(setEndLoadingProduct({ endpoint, result: true }));
  }, [dispatch, endpoint, trigger]);

  useEffect(() => {
    if (isIntersecting) {
      onIntersecting();
    }
  }, [isIntersecting, onIntersecting]);

  return (
    <Element name={endpoint}>
      <section ref={containerRef} className={cl.group_card}>
        <h1>{isError ? "Ошибка загрузки" : title}</h1>
        {isLoading && <Loader className={cl.loader} />}
        <div className={cl.group_items}>
          {list.map((item) => (
            <MainProductItem {...item} key={item.id + item.type} />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default MainProductList;
