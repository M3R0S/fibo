import { FC } from "react";

import cl from "./newProductApp.module.scss";
import { MODEL_MEN } from "./constants/const";

import { useDisabledNavbarLinkActive } from "hook";
import { useGetNewProductListQuery } from "store/slice";

import { NewProductItem } from "./content";
import { Loader } from "components/ui";

export const NewProductApp: FC = () => {
    const { data: list = [], isLoading, isError } = useGetNewProductListQuery(null);

    const { containerRef } = useDisabledNavbarLinkActive();

    const { ALT, SRC } = MODEL_MEN;

    return (
        <section ref={containerRef} className={cl.container}>
            <img className={cl.model_man} src={SRC} alt={ALT} />
            <h1>{isError ? "Ошибка загрузки новых продуктов" : "Новинки"}</h1>
            <figure className={cl.content}>
                {isLoading && <Loader className={cl.loader} />}
                {list.map((item) => (
                    <NewProductItem {...item} key={item.type + item.id} />
                ))}
            </figure>
        </section>
    );
};
