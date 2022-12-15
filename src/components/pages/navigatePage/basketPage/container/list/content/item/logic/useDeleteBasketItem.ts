import { useState } from "react";

import { IUseDeleteBasketItem } from "../constants/types";

import { useAppDispatch } from "store";
import { deleteBasketItem } from "store/slice";


export const useDeleteBasketItem = ({ id }: IUseDeleteBasketItem) => {
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
