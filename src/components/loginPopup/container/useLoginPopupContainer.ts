import { useState } from "react";

const useLoginPopupContainer = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return {isLogin};
};

export default useLoginPopupContainer;
