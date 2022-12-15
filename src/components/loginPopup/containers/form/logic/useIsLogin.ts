import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import cl from "../loginPopupForm.module.scss";
import { IUseIsLogin } from "../constants/type";

import { useAppDispatch, useAppSelector } from "store";
import { setIsLogin, useLazyGetUsersQuery, usePostUserMutation } from "store/slice";

export const useIsLogin = ({
    email,
    password,
    setEmailValidation,
    setEmailClassName,
}: IUseIsLogin) => {
    const dispatch = useAppDispatch();
    const naviagte = useNavigate();

    const isLogin = useAppSelector((state) => state.login.isLogin);

    const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

    const [createPost] = usePostUserMutation();

    const [trigger, { data: users = [], isFetching, isError, isSuccess }] = useLazyGetUsersQuery();

    function onSetIsLogin() {
        dispatch(setIsLogin(!isLogin));
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        setIsValidEmail(null);
        trigger({ email });
    }

    useEffect(() => {
        if (!isFetching && isSuccess && users.length > 0 && isValidEmail === null) {
            if (isLogin) {
                naviagte(-1);
                dispatch(setIsLogin(false));
            }
            if (!isLogin) {
                setEmailValidation("Такой email уже используется");
                setEmailClassName([cl.email, cl.email_warning].join(" "));
                setIsValidEmail(false);
            }
        }
        if (!isFetching && isSuccess && users.length === 0 && isValidEmail === null) {
            if (isLogin) {
                setEmailValidation("Неверный email");
                setEmailClassName([cl.email, cl.email_warning].join(" "));
            }
            if (!isLogin) {
                createPost({ id: uuid(), email, password });
                naviagte(-1);
                dispatch(setIsLogin(false));
            }
        }
        if (isError) {
            setEmailValidation("Произошла ошибка");
            setEmailClassName([cl.email, cl.email_warning].join(" "));
            setIsValidEmail(false);
        }
    }, [
        users,
        isValidEmail,
        setEmailValidation,
        setEmailClassName,
        createPost,
        email,
        password,
        isFetching,
        isSuccess,
        isError,
        naviagte,
        dispatch,
        isLogin,
    ]);

    return { isLogin, onSetIsLogin, onSubmit };
};
