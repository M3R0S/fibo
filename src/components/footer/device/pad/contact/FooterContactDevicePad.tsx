import { FC } from "react";

import cl from "./footerContactDevicePad.module.scss";

import { Copyright, LinkContacts, PaymentSystems } from "components/footer/common";
import { ButtonCallNumber, ButtonOrderCall } from "components/ui";

export const FooterContactDevicePad: FC = () => {
    return (
        <section className={cl.container}>
            <LinkContacts classNameWrapper={cl.link_contacts} />
            <div className={cl.control}>
                <ButtonCallNumber className={cl.call_number} />
                <ButtonOrderCall className={cl.order_call} />
                <PaymentSystems classNameWrapper={cl.payment_systems} />
            </div>
            <Copyright classNameWrapper={cl.footer} />
        </section>
    );
};
