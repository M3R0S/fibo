import React, { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../hook/storeHook/useStore";

import cl from "../../../../../assets/styles/pages/mainProduct/supplements.module.sass";
import SupplementsItem from "./SupplementsItem";
import Loader from "../../../../../../ui/assets/loader/Loader";
import { getSupplementsList } from "../../../../../../../store/slice/supplementsSlice";

interface ISectionNameSupplements {
  endpoint: "pizza" | "pasta" | "soup" | "salad";
}

const SupplementsList: FC<ISectionNameSupplements> = ({ endpoint }) => {
  const dispatch = useAppDispatch();
  const { list, error, loading } = useAppSelector((state) => state.supplements);

  useEffect(() => {
    dispatch(getSupplementsList(endpoint));
  }, [dispatch, endpoint]);

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
