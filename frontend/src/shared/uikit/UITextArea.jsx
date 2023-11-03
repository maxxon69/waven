import {useId} from "react";
import {clsx} from "clsx";

export default function UiTextArea({
                                        className,
                                        error,
                                        label,
                                        inputProps,
                                    }) {
    const id = useId();
    return (
        <div className={clsx(className, "flex flex-col gap-1 w-fit")}>
            {label && (
                <label htmlFor={id} className="block">
                    {label}
                </label>
            )}
            <textarea
                rows={4}
                cols={16}
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
