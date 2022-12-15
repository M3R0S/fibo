import { useEffect, useMemo, useState } from "react";

import { TPizzaDough } from "store/slice/constants/types";
import { IDoughAcordance } from "../constants/types";

export const useActiveDoughInfo = () => {
    const [dough, setDough] = useState<string>("");
    const [activeDough, setActiveDough] = useState<TPizzaDough>("classic");

    const doughAcordance = useMemo(
        (): IDoughAcordance => ({
            classic: "классическое",
            slim: "тонкое",
        }),
        []
    );

    useEffect(() => {
        setDough(doughAcordance[activeDough]);
    }, [activeDough, doughAcordance]);

    return { dough, setActiveDough, activeDough };
};
