import { useState, MouseEvent } from "react";

import { IUseAddInBasket } from "../constants/types";

import { useAppDispatch } from "store";
import { postBasketItem } from "store/slice";
import { IBasketItem } from "store/slice/constants/types";

export const useAddInBasket = (props: IUseAddInBasket) => {
    const { id, img, info, onClose, price, title, type, weight, dough, size } = props;

    const dispatch = useAppDispatch();
    const [isProductAdd, setIsProductAdd] = useState<boolean>(false);

    function onSetIsProductAdd() {
        setIsProductAdd(true);
        setTimeout(() => setIsProductAdd(false), 3000);
    }

    const postItem: IBasketItem = {
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
    };

    function setPostBasketItem(e: MouseEvent) {
        e.stopPropagation();
        !isProductAdd && dispatch(postBasketItem(postItem));
        onSetIsProductAdd();
        onClose && onClose();
    }

    return { isProductAdd, setPostBasketItem };
};
