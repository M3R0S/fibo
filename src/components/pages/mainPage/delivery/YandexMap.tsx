import { FC, useEffect, useState } from "react";
import cl from "../../../../assets/styles/pages/delivery/delivery.module.sass";

interface IYandexMap {
  isIntersecting: boolean;
}

const YandexMap: FC<IYandexMap> = ({ isIntersecting }) => {
  const [mountMap, setMountMap] = useState<boolean>(false);

  useEffect(() => {
    if (isIntersecting) {
      setMountMap(true);
    }
  }, [isIntersecting]);

  return (
    <div className={cl.yandex_map}>
      {mountMap && (
        <iframe
          className={cl.yandex_map}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
          title="map"
        />
      )}
    </div>
  );
};

export default YandexMap;
