import React, { FC } from "react";
import loader from "../../../../assets/image/loader.gif";
import cl from "./loader.module.sass";

interface ILoader {
  className?: string;
}

const Loader: FC<ILoader> = ({className}) => {
  return (
    <div
      className={[cl.loader_container_root, className].join(' ')}
    >
      <img className={cl.loader_root} src={loader} alt="Загрузка" />
    </div>
  );
};

export default Loader;
