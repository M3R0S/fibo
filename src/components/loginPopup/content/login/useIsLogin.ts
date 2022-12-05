import { FormEvent, useCallback, useEffect, useState } from "react";
import { useLazyGetUsersQuery, usePostUserMutation } from "store/slice/login/loginApi";
import { IUseIsLogin } from "./type";
import { v4 as uuid } from "uuid";
import cl from "./loginPopupForm.module.sass";
import { useAppDispatch } from "hook/useStore/useStore";
import { setIsAuthorized } from "store/slice/login/userSlice";

const useIsLogin = ({
  email,
  password,
  setEmailValidation,
  setEmailClassName,
  setPasswordClassName,
  setPasswordValidation,
  onClose,
}: IUseIsLogin) => {
  const dispatch = useAppDispatch();

  // Выбор страницы: регистрация или авторизация
  const [isLogin, setIsLogin] = useState<boolean>(true);

  // Блокировка обновлений до отправки формы
  const [isBlockedUpdate, setIsBlockedUpdate] = useState<boolean>(false);

  // Пост запрос на регистрацию пользователя
  const [createPost, { isLoading, isSuccess: isSuccessPost }] = usePostUserMutation();

  // GET запрос на получение пользователя по email
  const [trigger, { data: users = [], isFetching, isError, isSuccess }] = useLazyGetUsersQuery();

  // Выбор страницы: регистрация или авторизация. сброс полей валидации
  function onsetIsAuthorized() {
    setIsLogin(!isLogin);
    setEmailValidation(null);
    setEmailClassName(cl.email);
    setPasswordValidation(null);
    setPasswordClassName(cl.password);
  }

  // Обработка отпрвки формы
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    trigger({ email });
    setIsBlockedUpdate(false);
  }

  // Такой email уже есть в базе
  const registrationWarning = useCallback(() => {
    setEmailValidation("Такой email уже используется");
    setEmailClassName([cl.email, cl.email_warning].join(" "));
    setIsBlockedUpdate(true);
  }, [setEmailClassName, setEmailValidation]);

  // email уникальный => регистрация
  const registrationSuccess = useCallback(async () => {
    await createPost({ id: uuid(), email, password });
  }, [createPost, email, password]);

  // email не существует
  const authorizationLoginWarning = useCallback(() => {
    setEmailValidation("Такой email адресс не зарегистрирован");
    setEmailClassName([cl.email, cl.email_warning].join(" "));
    setIsBlockedUpdate(true);
  }, [setEmailClassName, setEmailValidation]);

  // Проверки на корректность пароля
  const authorizationLoginSuccess = useCallback(() => {
    if (users[0].password !== password) {
      setPasswordValidation("Неверный пароль");
      setPasswordClassName([cl.password, cl.password_warning].join(" "));
    }
    if (users[0].password === password) {
      dispatch(setIsAuthorized(true));
      onClose();
    }
  }, [dispatch, onClose, password, setPasswordClassName, setPasswordValidation, users]);

  // Проверки на наличие email в базе
  const validation = useCallback(() => {
    // Если email отсутствует, то проверка на какой мы сейчас странице
    console.log(users);
    if (!isFetching && isSuccess && users.length === 0 && !isBlockedUpdate) {
      if (isLogin) {
        authorizationLoginWarning();
      } else {
        registrationSuccess();
      }
    }
    // Если email есть, то проверка на какой мы сейчас странице
    if (!isFetching && isSuccess && users.length > 0 && !isBlockedUpdate) {
      if (isLogin) {
        authorizationLoginSuccess();
      } else {
        registrationWarning();
      }
    }
  }, [
    authorizationLoginSuccess,
    authorizationLoginWarning,
    isBlockedUpdate,
    isFetching,
    isLogin,
    isSuccess,
    registrationSuccess,
    registrationWarning,
    users,
  ]);

  useEffect(() => {
    validation();
  }, [validation]);

  useEffect(() => {
    if (isSuccessPost) {
      dispatch(setIsAuthorized(true));
      onClose();
    }
  }, [dispatch, isSuccessPost, onClose]);

  return { isLogin, onsetIsAuthorized, onSubmit, isFetching, isLoading, isError, isBlockedUpdate };
};

export default useIsLogin;
