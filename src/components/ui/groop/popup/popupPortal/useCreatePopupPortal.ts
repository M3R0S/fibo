import { useEffect, useState } from "react";

import cl from "./popupPortal.module.scss";

export const useCreatePopupPortal = () => {
    const createElement = () => document.createElement("div")

    const [container] = useState<HTMLElement>(createElement);

    useEffect(() => {
        document.body.appendChild(container);
        container.classList.add(cl.container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    return { container };
};
