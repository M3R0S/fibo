import { FC, memo } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "./basketPageitem.module.scss";
import { IBasketItem } from "store";
import BasketPageItemInfo from "./itemInfo/BasketPageItemInfo";
import BasketPageItemControl from "./itemControl/BasketPageItemControl";
import useBasketPageItem from "./useBasketPageItem";

const BasketPageItem: FC<IBasketItem> = ({
    id,
    title,
    img,
    quantity,
    info,
    price,
    dough,
    size,
    weight,
    typeProduct,
}) => {
    const { deleteTarget, onDeleteBasketElement, onEntered } = useBasketPageItem({ id });

    return (
        <CSSTransition
            in={deleteTarget}
            timeout={500}
            classNames={{
                enterActive: cl.delete_enter_active,
            }}
            exit={false}
            onEntered={onEntered}
        >
            <article className={cl.item}>
                <BasketPageItemInfo
                    dough={dough}
                    info={info}
                    img={img}
                    size={size}
                    title={title}
                    typeProduct={typeProduct}
                    weight={weight}
                />
                <BasketPageItemControl
                    id={id}
                    price={price}
                    quantity={quantity}
                    onDeleteBasketElement={onDeleteBasketElement}
                />
            </article>
        </CSSTransition>
    );
};

export default memo(BasketPageItem);
