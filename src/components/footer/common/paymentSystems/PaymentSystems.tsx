import { FC } from "react";

import cl from "./paymentSystems.module.scss";
import { IFooterConstantsClassName } from "../types";
import { PAYMENT_SYSTEM } from "../const";

import { LinkBlank } from "components/ui";

export const PaymentSystems: FC<IFooterConstantsClassName> = ({ classNameWrapper }) => {
    return (
        <figure className={classNameWrapper}>
            {PAYMENT_SYSTEM.map(({ id, src }) => (
                <LinkBlank className={cl.link} href={src} key={id} />
            ))}
        </figure>
    );
};
