import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";


const useUpdateLocationStatePopup = () => {
    const location = useLocation();
    const { id, type } = useParams()
    const [endpoints, setEndpoints] = useState(location.state);

    useEffect(() => {
      if (id && type) setEndpoints({popupId: id, popupType: type})
      else if (id) setEndpoints({popupId: id})
      }, [id, type]);

      return endpoints
}

export default useUpdateLocationStatePopup