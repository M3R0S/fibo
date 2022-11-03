import React from "react";
import cl from "../../assets/styles/footer/footer.module.sass";
import { v4 as uuidv4 } from "uuid";
import ButtonCallNumber from "../ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonOrderCall from "../ui/components/button/buttonOrderCall/ButtonOrderCall";

const FooterContact = () => {
  return (
    <section className={cl.footer_contact_cont}>
      <strong>Остались вопросы? А мы всегда на связи:</strong>
      <figure className={cl.contacts}>
        {linkContacts.map((linkContact) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a href={linkContact} key={uuidv4()}></a>
        ))}
        <button className={cl.tell}>Написать нам</button>
      </figure>
      <div className={cl.info_cont}>
        <ButtonCallNumber className={cl.call_number}></ButtonCallNumber>
        <ButtonOrderCall className={cl.order_call}></ButtonOrderCall>
      </div>
    </section>
  );
};

export const linkContacts = [
  "https://www.visa.com.ru/",
  "2",
  "3",
  "4",
  "5",
  "6",
];

export default FooterContact;
