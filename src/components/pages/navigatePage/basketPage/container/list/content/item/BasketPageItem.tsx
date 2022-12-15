import { FC, memo } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./basketPageitem.module.scss";
import { useDeleteBasketItem } from "./logic";
import { IBasketItem } from "store/slice/constants/types";
import { TIMEOUT_ANIMATION_DELETE_BASKET_ITEM } from "./constants/const";

import { BasketPageItemControl, BasketPageItemInfo } from "./content";

export const BasketPageItem: FC<IBasketItem> = memo((props) => {
    const { id, title, img, quantity, info, price, dough, size, weight, typeProduct } = props;
    const { deleteTarget, onDeleteBasketElement, onEntered } = useDeleteBasketItem({ id });

    const transitionClassNames : CSSTransitionClassNames = {
        enterActive: cl.delete_enter_active,
    };

    return (
        <CSSTransition
            in={deleteTarget}
            timeout={TIMEOUT_ANIMATION_DELETE_BASKET_ITEM}
            classNames={transitionClassNames}
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
});
