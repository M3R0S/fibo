export interface LoginSlice {
    isLogin: boolean;
    isAuthorized: boolean
}

export interface UserSlice {
    user: User;
}

export interface User {
    id: string | null;
    email: string | null;
    password: string | null;
}

export interface LoginUserQuery {
    email: string;
}