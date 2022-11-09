import { FC, useEffect } from "react";
import modelMen from "../../../../assets/image/model-man.png";
import cl from "../../../../assets/styles/pages/newPosition/newPosition.module.sass";
import NewPositionItem from "./NewPositionItem";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { getNewPositionList } from "../../../../store/slice/newPositionSlice";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../../ui/assets/loader/Loader";

const NewPositionList: FC = () => {
  const { list, loading, error } = useAppSelector((state) => state.newPosition);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewPositionList());
  }, []);

  return (
    <section className={cl.container}>
      <img className={cl.model_man} src={modelMen} alt="model Men" />
      <h1>Новинки</h1>
      <figure className={cl.new_position_cont}>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <Loader></Loader>
        ) : (
          list.map((newPosItem) => (
            <NewPositionItem {...newPosItem} key={uuidv4()}></NewPositionItem>
          ))
        )}
      </figure>
    </section>
  );
};

export default NewPositionList;
