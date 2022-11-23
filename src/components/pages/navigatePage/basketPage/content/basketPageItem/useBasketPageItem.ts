import { useState } from "react";
import { useAppDispatch } from "hook/useStore/useStore";
import { deleteBasketItem } from "store/slice/basketPage/basketPageSlice";

interface IUseBasketPageItem {
  id: string;
}

const useBasketPageItem = ({ id }: IUseBasketPageItem) => {
  const dispatch = useAppDispatch();

  const [deleteTarget, setDeleteTarget] = useState<boolean>(false);

  function onDeleteBasketElement() {
    setDeleteTarget(!deleteTarget);
  }

  function onEntered() {
    dispatch(deleteBasketItem(id));
  }

  return { deleteTarget, onDeleteBasketElement, onEntered };
};

export default useBasketPageItem;
