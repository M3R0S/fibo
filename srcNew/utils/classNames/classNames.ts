import { ClassNames } from ".";

export const classNames: ClassNames = (...classArray) => {
    return classArray.filter((className) => className !== undefined).join(" ");
};
