import { useAppDispatch, useAppSelector } from './../storeHook/useStore';
import { debounce } from './../../helpers/debounce';
import React, { useCallback } from 'react';
import { setScreenWidth } from '../../store/slice/navbarSlice';

export const useScreenSize = () => {
    const dispatch = useAppDispatch()
    const {screenWidth} = useAppSelector(state => state.navbar)

}