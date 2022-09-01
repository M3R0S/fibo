import React from "react";
import cl from "../../assets/styles/footer/footer.module.sass";
import { v4 as uuidv4 } from "uuid";

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
      <div>
        <h1>8 499 391-84-49</h1>
        <button className={cl.call}>Заказать звонок</button>
      </div>
    </section>
  );
};

const linkContacts = ["https://www.visa.com.ru/", "#", "#", "#", "#", "#"];

export default FooterContact;
