import {useId} from "react";
import {clsx} from "clsx";

export default function UiTextField({
                                        className,
                                        error,
                                        label,
                                        labelClassName,labelColor,
                                        inputProps,
                                    }) {
    const id = useId();
    return (
        <div className={clsx(className, "flex flex-col gap-0.5 w-fit")}>
            {label && (
                <label htmlFor={id} className={clsx([labelClassName, `block text-${labelColor} text-sm`,])}>
                    {label}
                </label>
            )}
            <input
                {...inputProps}
                id={id}
                className={clsx(
                    inputProps?.className,
                    "rounded-md border border-white bg-dark pl-2 py-0.5 outline-none focus:border-2 text-white text-sm",
                )}
            />
            {error && <div className="text-rose-600 text-sm">{error}</div>}
        </div>
    );
}
