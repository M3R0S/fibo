import { FC } from "react";
import BasketHeader from "../basketHeader/BasketHeader";
import BasketPageInfo from "../basketPageInfo/BasketPageInfo";
import BasketPageList from "../basketPageList/BasketPageList";
import cl from "./basketContainer.module.sass";

const BasketContainer: FC = () => {
  return (
    <section className={cl.container}>
      <BasketHeader />
      <BasketPageList />
      <BasketPageInfo />
    </section>
  );
};

export default BasketContainer;
