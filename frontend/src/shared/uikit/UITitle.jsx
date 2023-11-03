import React from 'react';
import {clsx} from "clsx";

const UiTitle = ({children, className, ...rest}) => {
    return (
        <h2 className={clsx('font-bold text-white text-lg', className)} {...rest}>
            {children}
        </h2>
    );
};

export default UiTitle;
