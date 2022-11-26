import { FC } from "react";
import cl from "./contactPage.module.sass";
import useLocationLinkActive from "hook/useLocationLinkActive/useLocationLinkActive";
import { Outlet } from "react-router-dom";
import ContactPageContent from "../content/ContactPageContent";

const ContactPageApp: FC = () => {
  useLocationLinkActive();

  return (
    <main className={cl.page}>
      <ContactPageContent />
      <Outlet />
    </main>
  );
};

export default ContactPageApp;
