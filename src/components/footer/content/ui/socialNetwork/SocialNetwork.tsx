import LinkBlank from "components/ui/components/link/linkBlank/LinkBlank";
import { FC } from "react";
import { socialNetwork } from "../const";
import { IUiClassName } from "../types";
import cl from "./socialNetwork.module.sass";

const SocialNetwork: FC<IUiClassName> = ({ classNameWrapper }) => {
  return (
    <>
      <h1 className={cl.title}>Мы в соцсетях:</h1>
      <figure className={classNameWrapper}>
        {socialNetwork.map(({ id, src, title }) => (
          <LinkBlank href={src} key={id} className={cl.link}>
            {title}
          </LinkBlank>
        ))}
      </figure>
    </>
  );
};

export default SocialNetwork;
