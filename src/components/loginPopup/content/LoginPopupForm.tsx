import { FC, FormEvent } from "react";
import cl from "./loginPopupForm.module.sass";
import useIsLogin from "./useIsLogin";
import useValidationEmail from "./useValidationEmail";
import useValidationPassword from "./useValidationPassword";

const LoginPopupForm: FC = () => {
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
  } = useValidationPassword();

  const { isLogin, onSetIsLogin, onSubmit } = useIsLogin({
    email: emailValue,
    password: passwordValue,
    setEmailValidation,
    setEmailClassName,
  });

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
        <span onClick={onSetIsLogin}>{isLogin ? "Зарегистрироваться" : "Войти"}</span>
      </p>
    </form>
  );
};

export default LoginPopupForm;
