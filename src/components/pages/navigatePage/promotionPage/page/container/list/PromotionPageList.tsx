import { FC } from "react";

import cl from "./promotionPageList.module.scss";

import { useGetPromotionPageListQuery } from "store/slice";

import { PromotionPageItem } from "./content";
import { Loader } from "components/ui";

export const PromotionPageList: FC = () => {
    const { data: list = [], isLoading, isError } = useGetPromotionPageListQuery(null);

    return (
        <section className={cl.container}>
            <h1>{isError ? "Ошибка загрузки акций" : "Акции"}</h1>
            {isLoading && <Loader className={cl.loader} />}
            <div className={cl.cards}>
                {list.map((card) => (
                    <PromotionPageItem {...card} key={card.id} />
                ))}
            </div>
        </section>
    );
};
