import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch } from './../storeHook/useStore';
import { setScreenWidth } from '../../store/slice/navbarSlice';
import { debounce } from 'lodash'

const useScreenSize = () => {
    const dispatch = useAppDispatch()

    const debounceResize = useMemo(() => 
        debounce(() => {
            dispatch(setScreenWidth(window.innerWidth));
            }, 200), 
        [dispatch])

    const resize = useCallback(debounceResize, [debounceResize]);
    
      useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
      }, [dispatch, resize]);
}

export default useScreenSize