import { useEffect, useState } from "react";
import { useAppSelector } from "hook/useStore/useStore";
import { scroller } from "react-scroll";

const useSetLinkActiveInMount = () => {
  const { linkActive } = useAppSelector((state) => state.navbar);
  const [active] = useState(linkActive);

  useEffect(() => {
    active &&
      scroller.scrollTo(active, {
        offset: -80,
      });
  }, [active]);
};

export default useSetLinkActiveInMount;
