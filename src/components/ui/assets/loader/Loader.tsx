import React, { FC } from "react";
import loader from "../../../../assets/image/loader.gif";
import cl from "../../../../assets/styles/ui/loader.module.sass";

interface ILoader {
  marginTop?: number;
}

const Loader: FC<ILoader> = ({ marginTop }) => {
  return (
    <div
      className={cl.loader_container}
      style={{ marginTop: marginTop + "px" }}
    >
        <img src={loader} alt="Загрузка" />
    </div>
  );
};

export default Loader;
