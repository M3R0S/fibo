import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

import cl from "../loginPopupForm.module.scss";

export const useValidationEmail = () => {
    const [emailFocus, setEmailFocus] = useState<boolean | null>(null);
    const [emailValue, setEmailValue] = useState<string>("");
    const [emailValidation, setEmailValidation] = useState<string | null>(null);
    const [emailClassName, setEmailClassName] = useState<string>(cl.email);

    const regValidEmail = useMemo(
        () =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        []
    );

    const changeVisualization = useCallback(() => {
        if (emailValue.length === 0 || regValidEmail.test(emailValue)) {
            if (emailFocus) {
                setEmailClassName([cl.email, cl.email_focus].join(" "));
            }
            if (emailFocus === false) {
                setEmailClassName(cl.email);
            }
            setEmailValidation(null);
        }

        if (emailValue.length > 0 && !regValidEmail.test(emailValue)) {
            setEmailClassName([cl.email, cl.email_warning].join(" "));
            setEmailValidation("Некорректный email");
        }
    }, [emailFocus, emailValue, regValidEmail]);

    useEffect(() => {
        changeVisualization();
    }, [changeVisualization]);

    function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmailValue(e.target.value);
    }

    function onFocusEmail() {
        setEmailFocus(true);
    }

    function onBlurEmail() {
        setEmailFocus(false);
    }

    return {
        emailValue,
        emailValidation,
        emailClassName,
        onChangeEmail,
        onFocusEmail,
        onBlurEmail,
        setEmailValidation,
        setEmailClassName,
    };
};
