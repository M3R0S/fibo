import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "store";
import {
    decrementQuantityBasketItem,
    incrementQuantityBasketItem,
    setQuantityBasketItem,
} from "store/slice";
import { IUseChangeItemQuantity } from "../constants/types";

export const useChangeItemQuantity = ({ id, quantity }: IUseChangeItemQuantity) => {
    const dispatch = useAppDispatch();
    const [localQuantity, setLocalQuantity] = useState<string>(quantity.toString());
    const inputRef = useRef<HTMLInputElement | null>(null);

    function onClickSelect() {
        inputRef.current?.select();
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setLocalQuantity(e.target.value);
    }

    useEffect(() => {
        const numberQuantity = Number(localQuantity);
        if (numberQuantity < 100 && numberQuantity > 1 && isFinite(numberQuantity)) {
            dispatch(setQuantityBasketItem({ quantity: numberQuantity, id }));
        } else {
            dispatch(setQuantityBasketItem({ quantity: 1, id }));
        }
    }, [dispatch, id, localQuantity]);

    function increment() {
        if (quantity < 100) {
            dispatch(incrementQuantityBasketItem(id));
        }
    }

    function decrement() {
        if (quantity > 1) {
            dispatch(decrementQuantityBasketItem(id));
        }
    }

    return { increment, decrement, onChange, inputRef, onClickSelect };
};
