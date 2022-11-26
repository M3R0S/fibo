export interface IUser {
  id: string | null;
  email: string | null;
  password: string | null;
}

export interface ILoginUserQuery {
  email: string;
}

export interface IUserSlice {
  isLogin: boolean;
  user: IUser;
}
