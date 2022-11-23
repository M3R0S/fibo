import LinkBlank from "components/ui/components/link/linkBlank/LinkBlank";
import { FC } from "react";
import { IUiClassName } from "../types";
import cl from "./assetsInfo.module.sass";

const AssetsInfo: FC<IUiClassName> = ({classNameWrapper}) => {
  return (
    <header className={classNameWrapper}>
      <LinkBlank href="/" className={cl.link}>
        Калорийность и состав
      </LinkBlank>
      <LinkBlank href="/" className={cl.link}>
        Правовая информация
      </LinkBlank>
    </header>
  );
};

export default AssetsInfo;
