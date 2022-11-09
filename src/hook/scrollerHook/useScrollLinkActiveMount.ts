import { useEffect, useState } from 'react';
import { useAppSelector } from './../storeHook/useStore';
import { scroller } from "react-scroll";

const useScrollLinkActiveMount = () => {
    const { linkActive } = useAppSelector((state) => state.navbar);
    const [active] = useState(linkActive)

    useEffect(() => {
        active &&
          scroller.scrollTo(active, {
            offset: -95,
          });
      }, [active]);
}

export default useScrollLinkActiveMount