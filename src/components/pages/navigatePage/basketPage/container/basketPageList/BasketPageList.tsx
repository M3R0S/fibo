import { FC } from "react";
import cl from "./basketPageList.module.sass";
import { useAppSelector } from "hook/useStore/useStore";
import ButtonHome from "components/ui/components/button/buttonHome/ButtonHome";
import BasketProductItem from "../../content/basketPageItem/BasketPageItem";

const BasketPageList: FC = () => {
  const { list } = useAppSelector((state) => state.basketPage);

  return (
    <section className={cl.list}>
      {list.length > 0 ? (
        list.map((obj) => <BasketProductItem {...obj} key={obj.id} />)
      ) : (
        <div className={cl.basket_void}>
          <h2>Корзина пуста.</h2>
          <ButtonHome className={cl.button_home}>Желаете добавить?</ButtonHome>
        </div>
      )}
    </section>
  );
};

export default BasketPageList;
