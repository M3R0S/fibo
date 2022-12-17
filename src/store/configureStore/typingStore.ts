import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { ROOT_REDUCER } from "./rootReducer";

import { store } from "./store";

type RootState = ReturnType<typeof ROOT_REDUCER>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
