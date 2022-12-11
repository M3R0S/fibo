import { FC } from "react";

import cl from "./linkContacts.module.scss";
import { IFooterConstantsClassName } from "../types";
import { LINK_CONTACTS } from "../const";

import { useScreenSize } from "hook";

import { LinkBlank } from "components/ui";

export const LinkContacts: FC<IFooterConstantsClassName> = ({ classNameWrapper }) => {
    const { screenWidth } = useScreenSize();

    return (
        <div className={classNameWrapper}>
            <strong>Остались вопросы? А мы всегда на связи:</strong>
            <figure className={cl.container}>
                {LINK_CONTACTS.map(({ id, src }) => (
                    <LinkBlank className={cl.link} href={src} key={id} />
                ))}
                {screenWidth > 700 && <button className={cl.write}>Написать нам</button>}
            </figure>
            {screenWidth < 700 && <button className={cl.write}>Написать нам</button>}
        </div>
    );
};
