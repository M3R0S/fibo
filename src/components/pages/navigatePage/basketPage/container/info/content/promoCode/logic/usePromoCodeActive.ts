import { ChangeEvent, useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import cl from "../basketPagePromoCode.module.scss";

import { changeBasketPromoCodeRatio } from "store/slice";
import { useAppDispatch } from "store";

export const usePromoCodeActive = () => {
    const dispatch = useAppDispatch();

    const [promoCodeActive, setPromoCodeActive] = useState<boolean | null>(null);
    const [promoCodeFocus, setPromoCodeFocus] = useState<boolean | null>(null);

    const [promoCodeValue, setPromoCodeValue] = useState<string>("");
    const [promoCodePlaceholder, setPromoCodePlaceholder] = useState<string>("Введите промокод");
    const [validationInfo, setValidationInfo] = useState<string | null>(null);
    const [inputClassName, setInputClassName] = useState<string>(cl.promo_check);
    const [enterClassName, setEnterClassName] = useState<string>(cl.promo_enter);
    const [validationClassName, setValidationClassName] = useState<string>(cl.promo_code_result);

    const changeVisualization = useCallback(() => {
        if (promoCodeActive) {
            setInputClassName(classNames(cl.promo_check, cl.promo_check_disabled));
            setEnterClassName(classNames(cl.promo_enter, cl.promo_enter_disabled));
            setValidationClassName(classNames(cl.promo_code_result, cl.promo_code_result_success));
            setPromoCodePlaceholder("Промокод введён");
            setValidationInfo("Промокод успешно применён!");
            return;
        }

        if (promoCodeActive === false) {
            setInputClassName(classNames(cl.promo_check, cl.promo_check_warning));
            setEnterClassName(classNames(cl.promo_enter, cl.promo_enter_warning));
            setValidationInfo("Неверный промокод!");
            setValidationClassName(classNames(cl.promo_code_result, cl.promo_code_result_fail));
            return;
        }

        if (promoCodeFocus) {
            setInputClassName(classNames(cl.promo_check, cl.promo_check_focus));
            setEnterClassName(classNames(cl.promo_enter, cl.promo_enter_focus));
            if (promoCodeValue.length < 4) {
                setValidationInfo("Промокод не может содержать меньше 4 символов");
                setValidationClassName(classNames(cl.promo_code_result, cl.promo_code_result_fail));
            }
            if (promoCodeValue.length >= 4 || promoCodeValue.length === 0) {
                setValidationClassName(cl.promo_code_result);
            }
            return;
        }

        if (promoCodeFocus === false) {
            if (promoCodeValue.length >= 4 || promoCodeValue.length === 0) {
                setInputClassName(cl.promo_check);
                setEnterClassName(cl.promo_enter);
                return;
            }
            if (promoCodeValue.length < 4) {
                setInputClassName(classNames(cl.promo_check, cl.promo_check_warning));
                setEnterClassName(classNames(cl.promo_enter, cl.promo_enter_warning));
                return;
            }
        }
    }, [promoCodeValue, promoCodeActive, promoCodeFocus]);

    useEffect(() => {
        changeVisualization();
    }, [changeVisualization]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setPromoCodeValue(e.target.value);
    }

    function onFocus() {
        setPromoCodeFocus(true);
        setPromoCodeActive(null);
    }

    function onBlur() {
        setPromoCodeFocus(false);
    }

    const enterPromoCode = useCallback(() => {
        switch (promoCodeValue) {
            case "киса":
                dispatch(changeBasketPromoCodeRatio(0.9));
                setPromoCodeActive(true);
                setPromoCodeValue("");
                break;
            case "котёнок":
                dispatch(changeBasketPromoCodeRatio(0.5));
                setPromoCodeActive(true);
                setPromoCodeValue("");
                break;
            default:
                setPromoCodeActive(false);
                setPromoCodeValue("");
        }
    }, [dispatch, promoCodeValue]);

    const eventEnter = useCallback(
        (e: KeyboardEvent) => {
            if (e.code === "Enter") {
                enterPromoCode();
            }
        },
        [enterPromoCode]
    );

    useEffect(() => {
        if (promoCodeFocus) {
            document.addEventListener("keydown", eventEnter);
        } else {
            document.removeEventListener("keydown", eventEnter);
        }
        return () => {
            document.removeEventListener("keydown", eventEnter);
        };
    }, [eventEnter, promoCodeFocus]);

    return {
        promoCodeValue,
        promoCodePlaceholder,
        enterPromoCode,
        onFocus,
        onBlur,
        onChange,
        inputClassName,
        enterClassName,
        validationInfo,
        validationClassName,
    };
};
