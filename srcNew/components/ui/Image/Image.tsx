import { FC } from "react";

import cl from "./Image.module.scss";
import { ImageProps } from ".";
import { classNames } from "utils";

export const Image: FC<ImageProps> = (props) => {
    const { src, alt, className } = props;

    return (
        <img
            {...props}
            src={src}
            alt={alt}
            className={classNames(cl.image_root, className)}
        />
    );
};
