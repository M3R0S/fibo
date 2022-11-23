import { FC } from "react";
import cl from "./errorPage.module.sass";
import ButtonHome from "components/ui/components/button/buttonHome/ButtonHome";
import ButtonBack from "components/ui/components/button/buttonBack/ButtonBack";

const ErrorPage: FC = () => {
  return (
    <main className={cl.page}>
      <section className={cl.container}>
        <h1>К сожалению, страница недоступна</h1>
        <div className={cl.control}>
          <ButtonBack className={cl.back}>Назад</ButtonBack>
          <ButtonHome className={cl.home}>На главную</ButtonHome>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
