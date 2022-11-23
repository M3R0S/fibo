import { FC } from "react";
import loader from "./image/loader.gif";
import cl from "./loader.module.sass";
import { ILoader } from "./types";

const Loader: FC<ILoader> = ({ className }) => {
  return (
    <div className={[cl.loader_container_root, className].join(" ")}>
      <img className={cl.loader_root} src={loader} alt="Загрузка" />
    </div>
  );
};

export default Loader;
