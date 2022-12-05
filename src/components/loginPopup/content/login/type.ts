import { Dispatch, SetStateAction } from "react";

export interface ILoginPopupForm {
  onClose: () => void
}

export interface IUseIsLogin {
  email: string;
  password: string;
  setEmailValidation: Dispatch<SetStateAction<string | null>>;
  setEmailClassName: Dispatch<SetStateAction<string>>;
  setPasswordValidation: Dispatch<SetStateAction<string | null>>;
  setPasswordClassName: Dispatch<SetStateAction<string>>;
  onClose: () => void
}
