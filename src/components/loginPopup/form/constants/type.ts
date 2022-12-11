import { Dispatch, SetStateAction } from "react";

export interface IUseIsLogin {
  email: string;
  password: string;
  setEmailValidation: Dispatch<SetStateAction<string | null>>;
  setEmailClassName: Dispatch<SetStateAction<string>>;
}
