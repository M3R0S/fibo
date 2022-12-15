import { FC } from "react";
import { Element } from "react-scroll";

import cl from "./mainProductList.module.scss";
import { useIntersectingEndpoint } from "./logic";
import { IMainProductList } from "./constants/types";

import { MainProductItem } from "./content";
import { Loader } from "components/ui";

export const MainProductList: FC<IMainProductList> = ({ endpoint, title }) => {
    const { containerRef, isError, isLoading, list } = useIntersectingEndpoint({
        endpoint,
    });

    return (
        <Element name={endpoint}>
            <section className={cl.container} ref={containerRef}>
                <h1 ref={containerRef}>{isError ? "Ошибка загрузки" : title}</h1>
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
