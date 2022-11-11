import { TPopupQueryParams } from '../../store/globalTypes/globalStoreSliceType';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const useGetParamsPopup = () : TPopupQueryParams => {
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