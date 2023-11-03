import {useId, useRef, useState} from "react";
import {clsx} from "clsx";
import {Controller} from "react-hook-form";
import useSWR from "swr";

export default function UiCheckbox({
                                       name,
                                       control,
                                       className,
                                       error,
                                       label,
                                       inputProps,
                                   }) {
    const id = useId();
    const [is, setIs] = useState(false)
    return (
        <div className={clsx(className, "relative flex gap-4 w-fit bg-dark items-center")}>
            {label && (
                <label htmlFor={id} className={clsx(`block text-gray text-sm`)}>
                    {label}
                </label>
            )}
            <Controller
                control={control}
                name={name}
                render={({field}) => (
                    <div className={'flex items-center pl-4'}>
                        <input
                            {...field}
                            type={'checkbox'}
                            id={id}
                            className={clsx(
                                inputProps?.className,
                                "absolute right-0 opacity-0 w-5 h-5 z-10"
                            )}
                        />
                        <button type={'button'}
                                className={'absolute right-0 w-5 h-5 text-sm font-bold bg-dark border border-white rounded text-white'}>{field.value ? '✓':''}</button>

                    </div>

                )
                }
            />
            {error && <div className="text-rose-600 text-sm">{error}</div>}
        </div>
    );
}
