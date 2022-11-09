import { TPopupQueryParams } from './../../store/types/globalStoreSliceType';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";

const useGetParamsPopup = () : TPopupQueryParams => {
    const location = useLocation();
    const { id, type } = useParams()
    const [params, setParams] = useState<TPopupQueryParams>({popupId: null, popupType: null});

    useEffect(() => {
      if (id) {
        setParams({popupId: id, popupType: type})
      }
      }, [id, type]);

      return params
}

export default useGetParamsPopup