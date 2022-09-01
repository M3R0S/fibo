import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hook/storeHook/useStore'
import { getSupplementsList, SectionNameSupplements } from '../../../../../store/slice/supplementsSlice'
import cl from '../../../../../assets/styles/pages/mainProduct/supplements.module.sass'
import SupplementsItem from './SupplementsItem';

interface ISectionNameSupplements {
  endpoint: "pizza" | "pasta" | "soup" | "salad";
}

const Supplements: FC<ISectionNameSupplements> = ({endpoint}) => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.supplements);

  useEffect(() => {
    dispatch(getSupplementsList(endpoint));
  }, [endpoint]);

  return (
    <div className={cl.supplements_container}>
      {list.map((sup) => (
        <SupplementsItem {...sup} key={sup.id}></SupplementsItem>
      ))}
    </div>
  );
};

export default Supplements