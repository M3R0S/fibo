import { FC } from "react";

import cl from "./footerContactDevicePad.module.scss";

import {
    FooterCommonCopyright,
    FooterCommonLinkContacts,
    FooterCommonPaymentSystems,
} from "components/footer/common";
import { ButtonCallNumber, ButtonOrderCall } from "components/ui";

export const FooterContactDevicePad: FC = () => {
    return (
        <section className={cl.container}>
            <FooterCommonLinkContacts classNameWrapper={cl.link_contacts} />
            <div className={cl.control}>
                <ButtonCallNumber className={cl.call_number} />
                <ButtonOrderCall className={cl.order_call} />
                <FooterCommonPaymentSystems classNameWrapper={cl.payment_systems} />
            </div>
            <FooterCommonCopyright classNameWrapper={cl.footer} />
        </section>
    );
};
