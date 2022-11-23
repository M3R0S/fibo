import { useAppDispatch } from "hook/useStore/useStore";
import { useState } from "react";
import { postBasketItem } from "store/slice/basketPage/basketPageSlice";
import { IUseButtonAddBasket } from "./types";

const useButtonAddBasket = ({id, img, info, onClose, price, title, type, weight, dough, size}: IUseButtonAddBasket) => {
  const dispatch = useAppDispatch();
  const [productAdd, setProductAdd] = useState<boolean>(false);

  function onSetProductAdd() {
    setProductAdd(true);
    setTimeout(() => setProductAdd(false), 3000);
  }

  function setPostBasketItem() {
    dispatch(
      postBasketItem({
        id: type + id + price + size + dough + weight,
        typeProduct: type,
        idProduct: id,
        title,
        info,
        img,
        dough,
        size,
        weight,
        price,
        quantity: 1,
      })
    );
    onSetProductAdd();
    onClose();
  }

  return {productAdd, setPostBasketItem};
};

export default useButtonAddBasket;
