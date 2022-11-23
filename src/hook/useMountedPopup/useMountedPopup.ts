import { useState, useEffect } from 'react';

const useMountedPopup = (isOpened : boolean) => {

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened && !isMounted) {
          setIsMounted(true);
        } else if (!isOpened && isMounted) {
          setTimeout(() => {
            setIsMounted(false);
          }, 500);
        }
      }, [isOpened, isMounted]);

      return isMounted
}

export default useMountedPopup