import { useState, useEffect } from 'react';

interface IuseModalMountedPromotion {
    isOpened: boolean
}

const useModalMountedPromotion = ({isOpened} : IuseModalMountedPromotion) => {

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened && !mounted) {
          setMounted(true);
        } else if (!isOpened && mounted) {
          setTimeout(() => {
            setMounted(false);
          }, 500);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isOpened]);

      return { mounted }
}

export default useModalMountedPromotion