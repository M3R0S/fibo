import { FormEvent, useEffect, useState } from "react";
import { useLazyGetUsersQuery, usePostUserMutation } from "store/slice/login/loginApi";
import { IUseIsLogin } from "./type";
import { v4 as uuid } from "uuid";
import cl from "./loginPopupForm.module.sass";
import { useAppDispatch, useAppSelector } from "hook/useStore/useStore";
import { setIsLogin } from "store/slice/login/userSlice";
import { useNavigate } from "react-router-dom";

const useIsLogin = ({ email, password, setEmailValidation, setEmailClassName }: IUseIsLogin) => {
  const dispatch = useAppDispatch();
  const naviagte = useNavigate();

  const { isLogin } = useAppSelector((state) => state.user);

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

export default useIsLogin;
