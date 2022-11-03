import { useState, useEffect } from 'react';

// interface IuseModalMountedPromotion {
//     isOpened: boolean
// }

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isOpened]);

      return isMounted
}

export default useMountedPopup