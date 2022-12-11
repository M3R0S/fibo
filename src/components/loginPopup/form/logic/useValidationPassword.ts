import { ChangeEvent, useCallback, useEffect, useState } from "react";

import cl from "./loginPopupForm.module.scss";

export const useValidationPassword = () => {
    const [passwordFocus, setPasswordFocus] = useState<boolean | null>(null);
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [passwordValidation, setPasswordValidation] = useState<string | null>(null);
    const [passwordClassName, setPasswordClassName] = useState<string>(cl.password);

    const changeVisualization = useCallback(() => {
        if (passwordValue.length === 0 || passwordValue.length >= 6) {
            if (passwordFocus) {
                setPasswordClassName([cl.password, cl.password_focus].join(" "));
            }
            if (passwordFocus === false) {
                setPasswordClassName(cl.password);
            }
            setPasswordValidation(null);
        }

        if (passwordValue.length !== 0 && passwordValue.length < 6) {
            setPasswordClassName([cl.password, cl.password_warning].join(" "));
            setPasswordValidation("Пароль не может содержать меньше 6 символов");
        }
    }, [passwordFocus, passwordValue]);

    useEffect(() => {
        changeVisualization();
    }, [changeVisualization]);

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPasswordValue(e.target.value);
    }

    function onFocusPassword() {
        setPasswordFocus(true);
    }

    function onBlurPassword() {
        setPasswordFocus(false);
    }

    return {
        passwordClassName,
        passwordValue,
        onChangePassword,
        passwordValidation,
        onFocusPassword,
        onBlurPassword,
    };
};
