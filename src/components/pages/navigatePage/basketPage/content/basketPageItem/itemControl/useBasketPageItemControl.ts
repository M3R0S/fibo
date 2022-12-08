import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "store";
import {
    decrementQuantityItem,
    incrementQuantityItem,
    setQuantityItem,
} from "store/slice/basketPage/basketPageSlice";
import { TBasketPageItemControl } from "./types";

const useBasketPageItemControl = ({ id, quantity }: TBasketPageItemControl) => {
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
            dispatch(setQuantityItem({ quantity: numberQuantity, id }));
        } else {
            dispatch(setQuantityItem({ quantity: 1, id }));
        }
    }, [dispatch, id, localQuantity]);

    function increment() {
        if (quantity < 100) {
            dispatch(incrementQuantityItem(id));
        }
    }

    function decrement() {
        if (quantity > 1) {
            dispatch(decrementQuantityItem(id));
        }
    }

    return { increment, decrement, onChange, inputRef, onClickSelect };
};

export default useBasketPageItemControl;
