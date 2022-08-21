import React, { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hook/storeHook/useStore";
import { getMainPage, SectionName } from "../../../store/slice/mainPageSlice";
import cl from "../../../assets/styles/pages/mainPages/mainPages.module.sass";
import MainPagesItem from "./MainPagesItem";

interface IMainPageListProps {
  endpoint: SectionName;
  title: string;
}

const MainPagesList: FC<IMainPageListProps> = ({endpoint, title}) => {
  const { data, loading } = useAppSelector((state) => state.mainPage);
  const list = data[endpoint]
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMainPage(endpoint));
  }, []);


  return (
    <section className={cl.group_card}>
      {loading ? (
        <h1>Загрузка</h1>
      ) : (
        <>
          <h1>{title}</h1>
          <figure className={cl.group_figure}>
            {list.map(({ h2Text, pText, strongText, img, id }) => (
              <MainPagesItem
                h2Text={h2Text}
                pText={pText}
                strongText={strongText}
                img={img}
                key={endpoint + id}
              />
            ))}
          </figure>
        </>
      )}
    </section>
  );
};

export default MainPagesList;
