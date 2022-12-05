import Error from "components/ui/assets/error/Error";
import Loader from "components/ui/assets/loader/Loader";
import { useAppSelector } from "hook/useStore/useStore";
import { FC } from "react";
import cl from "./loginPopupForm.module.sass";
import { ILoginPopupForm } from "./type";
import useIsLogin from "./useIsLogin";
import useValidationEmail from "./useValidationEmail";
import useValidationPassword from "./useValidationPassword";

const LoginPopupForm: FC<ILoginPopupForm> = ({ onClose }) => {
  const {
    emailClassName,
    emailValidation,
    emailValue,
    onBlurEmail,
    onChangeEmail,
    onFocusEmail,
    setEmailValidation,
    setEmailClassName,
  } = useValidationEmail();

  const {
    onBlurPassword,
    onChangePassword,
    onFocusPassword,
    passwordClassName,
    passwordValidation,
    passwordValue,
    setPasswordClassName,
    setPasswordValidation,
  } = useValidationPassword();

  const { isLogin, onsetIsAuthorized, onSubmit, isError, isFetching, isLoading, isBlockedUpdate } =
    useIsLogin({
      email: emailValue,
      password: passwordValue,
      setEmailValidation,
      setEmailClassName,
      setPasswordClassName,
      setPasswordValidation,
      onClose,
    });

  const { isAuthorized } = useAppSelector((state) => state.user);

  if (isFetching || isLoading || (!isFetching && !isLoading && !isAuthorized && isBlockedUpdate)) {
    return <Loader className={cl.loader} />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <form action="" onSubmit={onSubmit} className={cl.form}>
      <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
      <input
        type="email"
        className={emailClassName}
        value={emailValue}
        onChange={onChangeEmail}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
        placeholder="Ваш email"
        name="email"
      />
      <div className={cl.validation_info}>
        <b>{emailValidation}</b>
      </div>
      <input
        type="password"
        className={passwordClassName}
        value={passwordValue}
        onChange={onChangePassword}
        onFocus={onFocusPassword}
        onBlur={onBlurPassword}
        placeholder="Ваш пароль"
        name="password"
      />
      <div className={cl.validation_info}>
        <b>{passwordValidation}</b>
      </div>
      <button type="submit" className={cl.login}>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
      <p>
        {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
        <span onClick={onsetIsAuthorized}>{isLogin ? "Зарегистрироваться" : "Войти"}</span>
      </p>
    </form>
  );
};

export default LoginPopupForm;
