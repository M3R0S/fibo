import { FC, memo } from "react";
import cl from "./promotionPageList.module.scss";
import { useGetPromotionPageListQuery } from "store/slice/promotionPage/promotionPageApi";
import Loader from "components/ui/assets/loader/Loader";
import PromotionPageItem from "../content/PromotionPageItem";

const PromotionPageList: FC = () => {
    const { data: list = [], isLoading, isError } = useGetPromotionPageListQuery(null);

    return (
        <section className={cl.container}>
            <h1>{isError ? "Ошибка загрузки акций" : "Акции"}</h1>
            {isLoading && <Loader className={cl.loader} />}
            {list && (
                <div className={cl.cards}>
                    {list.map((card) => (
                        <PromotionPageItem {...card} key={card.id} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default memo(PromotionPageList);
