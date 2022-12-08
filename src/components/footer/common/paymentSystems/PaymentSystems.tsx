import { FC } from "react";

import cl from "./paymentSystems.module.scss";
import { IUiClassName } from "../types";
import { paymentSystems } from "../const";

import { LinkBlank } from "components/ui";

export const PaymentSystems: FC<IUiClassName> = ({ classNameWrapper }) => {
    return (
        <figure className={classNameWrapper}>
            {paymentSystems.map(({ id, src }) => (
                <LinkBlank className={cl.link} href={src} key={id} />
            ))}
        </figure>
    );
};
