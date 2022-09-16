import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import {
  SectionName,
} from "../../../../store/slice/mainProductSlice";
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

const galleries: Array<{
  title: string;
  endpoint: SectionName;
  idEllement: string;
}> = [
  {
    title: "Пицца",
    endpoint: "pizza",
    idEllement: "mainProductSectionPizza",
  },
  {
    title: "Паста",
    endpoint: "pasta",
    idEllement: "mainProductSectionPasta",
  },
  {
    title: "Супы",
    endpoint: "soup",
    idEllement: "mainProductSectionSoup",
  },
  {
    title: "Салаты",
    endpoint: "salad",
    idEllement: "mainProductSectionSalad",
  },
];

export default MainProductListApp;
