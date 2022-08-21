import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import cl from "../../../assets/styles/pages/mainPages/mainPages.module.sass";
import { SectionName } from "../../../store/slice/mainPageSlice";
import MainPagesList from "./MainPagesList";
// import compact, { Collection } from "lodash";

const MainPagesListApp: FC = () => {
  return (
    <section className={cl.container}>
      {galleries.map((gallery) => (
        <MainPagesList {...gallery} key={uuidv4()} />
      ))}
    </section>
  );
};

const galleries: Array<{ title: string; endpoint: SectionName }> = [
  {
    title: "Пицца",
    endpoint: "pizza",
  },
  {
    title: "Паста",
    endpoint: "pasta",
  },
  {
    title: "Супы",
    endpoint: "soup",
  },
  {
    title: "Салаты",
    endpoint: "salad",
  },
];

export default MainPagesListApp;
