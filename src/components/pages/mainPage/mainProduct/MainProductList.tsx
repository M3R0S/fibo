import React, { FC, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getMainProduct,
  SectionName,
  setLoadingTime,
} from "../../../../store/slice/mainProductSlice";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import MainProductItem from "./MainProductItem";
import * as Scroll from "react-scroll";
import Loader from "../../../ui/loader/Loader";
import useElementOnScreen from "../../../../hook/useElementOnScreen/useElementOnScreen";

interface IMainProductListProps {
  endpoint: SectionName;
  title: string;
  idEllement: string;
}

const MainProductList: FC<IMainProductListProps> = ({
  endpoint,
  title,
  idEllement,
}) => {
  const { data, loading, error } = useAppSelector((state) => state.mainProduct);
  const list = data[endpoint];
  const dispatch = useAppDispatch();
  const Element = Scroll.Element;
  const [localTimeLoading, setLocalTimeLoaing] = useState<number | null>(null);

  const containerRef = useElementOnScreen(
    { threshold: 0.3, },
    idEllement
  );

  useEffect(() => {
    setLocalTimeLoaing(Date.now());
    dispatch(getMainProduct(endpoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localTimeLoading && dispatch(setLoadingTime(Date.now() - localTimeLoading));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Element name={idEllement}>
      <section className={cl.group_card}>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <>
            <h1>{title}</h1>
            <Loader></Loader>
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <figure ref={containerRef} className={cl.group_figure}>
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
    </Element>
  );
};

export default MainProductList;
