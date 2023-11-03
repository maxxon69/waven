import {useId} from "react";
import {clsx} from "clsx";

export default function UiSelect({
                                     labelColor = 'white',
                                     labelClassName,
                                     className,
                                     error,
                                     label,
                                     selectProps: inputProps,
                                     options,
                                 }) {
    const id = useId();
    return (
        <div className={clsx(className, "flex flex-col relative")}>
            {label && (
                <label htmlFor={id} className={clsx([labelClassName, 'block text-sm', `text-${labelColor}`])}>
                    {label}
                </label>
            )}
            <select
                {...inputProps}
                id={id}
                className={clsx(
                    "appearance-none rounded-md border border-white bg-dark pl-2 py-0.5 outline-none focus:border-2 text-white text-sm w-full",
                    inputProps?.className,
                )}
            >
                {options?.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span
                className={clsx(`content-[""] inline-block h-0 absolute rotate-45 w-0 p-[3px] border-white border-r-2 border-b-2 right-[8px] `, label ? 'top-[27px]' : 'top-[7px]')}></span>

            {error && <div className="text-rose-400 text-sm">{error}</div>}
        </div>
    );
}
