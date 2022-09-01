import React, { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { getMainProductItem } from "../../../../store/slice/mainProductItemSlice";
import { SectionName } from "../../../../store/slice/mainProductSlice";
import MainProductList from "./MainProductList";
import MainProductModalApp from "./MainProductModalApp";

const MainProductListApp: FC = () => {

  return (
    <>
      <section className={cl.container}>
        {galleries.map((gallery) => (
          <MainProductList {...gallery} key={uuidv4()} />
        ))}
      </section>
      <MainProductModalApp></MainProductModalApp>
    </>
  );
};

const galleries: Array<{ title: string; endpoint: SectionName }> = [
  {
    title: "Пицца",
    endpoint: "pizza",
  },
  {
    title: "Паста",
    endpoint: "pasta",
  },
  {
    title: "Супы",
    endpoint: "soup",
  },
  {
    title: "Салаты",
    endpoint: "salad",
  },
];

export default MainProductListApp;
