import { FC } from "react";
import Copyright from "../../ui/copyright/Copyright";
import LinkContacts from "../../ui/linkContacts/LinkContacts";
import PaymentSystems from "../../ui/paymentSystems/PaymentSystems";
import cl from "./footerContactMobileScreen.module.sass";

const FooterContactMobileScreen: FC = () => {
  return (
    <section className={cl.container}>
      <LinkContacts classNameWrapper={cl.link_contacts} />
      <Copyright classNameWrapper={cl.copyright}>
        <PaymentSystems classNameWrapper={cl.payment_systems} />
      </Copyright>
    </section>
  );
};

export default FooterContactMobileScreen;
