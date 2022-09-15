import React, { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import {
  getSupplementsList,
  SectionNameSupplements,
} from "../../../../../store/slice/supplementsSlice";
import cl from "../../../../../assets/styles/pages/mainProduct/supplements.module.sass";
import SupplementsItem from "./SupplementsItem";
import Loader from "../../../../ui/loader/Loader";

interface ISectionNameSupplements {
  endpoint: "pizza" | "pasta" | "soup" | "salad";
}

const SupplementsList: FC<ISectionNameSupplements> = ({ endpoint }) => {
  const dispatch = useAppDispatch();
  const { list, error, loading } = useAppSelector((state) => state.supplements);

  useEffect(() => {
    dispatch(getSupplementsList(endpoint));
  }, [endpoint]);

  return error ? (
    <h1>{error}</h1>
  ) : loading ? (
    <div className={cl.loader_container}>
      <Loader></Loader>
    </div>
  ) : (
    <div className={cl.supplements_container}>
      {list.map((sup) => (
        <SupplementsItem {...sup} key={sup.id}></SupplementsItem>
      ))}
    </div>
  );
};

export default SupplementsList;
