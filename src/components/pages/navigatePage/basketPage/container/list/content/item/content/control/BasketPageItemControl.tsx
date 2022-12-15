import { FC } from "react";
import CountUp from "react-countup";

import cl from "./basketPageItemControl.module.scss";
import { useChangeItemQuantity } from "./logic";
import { IBasketPageItemControl } from "./constants/types";

export const BasketPageItemControl: FC<IBasketPageItemControl> = ({
    id,
    quantity,
    price,
    onDeleteBasketElement,
}) => {
    const { decrement, increment, onChange, inputRef, onClickSelect } = useChangeItemQuantity({
        id,
        quantity,
    });

    return (
        <div className={cl.control}>
            <CountUp
                className={cl.price}
                separator=" "
                preserveValue={true}
                end={Number(price) * quantity}
                duration={0.5}
                suffix={" ₽"}
            />
            <div className={cl.quantity}>
                <button onClick={decrement}>-</button>
                <input
                    type="text"
                    value={quantity}
                    onChange={onChange}
                    ref={inputRef}
                    onClick={onClickSelect}
                />
                <button onClick={increment}>+</button>
            </div>
            <button onClick={onDeleteBasketElement} className={cl.delete} />
        </div>
    );
};
