import { FC } from "react";
import cl from "./basketPagePromoCode.module.scss";
import usePromoCodeActive from "./usePromoCodeActive";

const BasketPagePromoCode: FC = () => {
    const {
        promoCodePlaceholder,
        promoCodeValue,
        inputClassName,
        onChange,
        onFocus,
        onBlur,
        enterPromoCode,
        enterClassName,
        validationClassName,
        validationInfo,
    } = usePromoCodeActive();

    return (
        <div className={cl.promo_code_container}>
            <div className={cl.promo_code_info}>
                <input
                    type="text"
                    placeholder={promoCodePlaceholder}
                    value={promoCodeValue}
                    className={inputClassName}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <button onClick={enterPromoCode} className={enterClassName}>
                    Применить
                </button>
            </div>
            <b className={validationClassName}>{validationInfo}</b>
        </div>
    );
};

export default BasketPagePromoCode;
