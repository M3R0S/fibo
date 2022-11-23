import { FC } from "react";
import cl from "./linkContacts.module.sass";
import LinkBlank from "components/ui/components/link/linkBlank/LinkBlank";
import { linkContacts } from "../const";
import { IUiClassName } from "../types";
import useScreenSize from "hook/useScreenSize/useScreenSize";

const LinkContacts: FC<IUiClassName> = ({ classNameWrapper }) => {
  const { screenWidth } = useScreenSize();

  return (
    <div className={classNameWrapper}>
      <strong>Остались вопросы? А мы всегда на связи:</strong>
      <figure className={cl.container}>
        {linkContacts.map(({ id, src }) => (
          <LinkBlank className={cl.link} href={src} key={id} />
        ))}
        {screenWidth > 700 && <button className={cl.write}>Написать нам</button>}
      </figure>
      {screenWidth < 700 && <button className={cl.write}>Написать нам</button>}
    </div>
  );
};

export default LinkContacts;
