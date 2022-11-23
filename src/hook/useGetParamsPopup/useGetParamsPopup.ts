import { IPopupQueryParams } from "store/slice/global/globalTypes";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetParamsPopup = (): IPopupQueryParams => {
  const { id, type } = useParams();
  const [params, setParams] = useState<IPopupQueryParams>({
    popupId: null,
    popupType: null,
  });

  useEffect(() => {
    if (id) {
      setParams({ popupId: id, popupType: type });
    }
  }, [id, type]);

  return params;
};

export default useGetParamsPopup;
