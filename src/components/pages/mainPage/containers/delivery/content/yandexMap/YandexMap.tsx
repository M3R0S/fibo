import { FC } from "react";

import cl from "./yandexMap.module.scss";
import { useMountYandexMap } from "./logic";
import { IYandexMap } from "./constants/types";

export const YandexMap: FC<IYandexMap> = ({ isIntersecting }) => {
    const { mountMap } = useMountYandexMap({ isIntersecting });

    return (
        <div className={cl.yandex_map}>
            {mountMap ? (
                <iframe
                    className={cl.yandex_map}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
                    title="map"
                />
            ) : null}
        </div>
    );
};
