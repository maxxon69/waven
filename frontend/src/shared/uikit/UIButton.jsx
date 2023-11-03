import {clsx} from "clsx";

const UIButton = ({children, active=true,className, p='py-1 px-3', ...extra}) => {
    const defaultclassName = clsx(`cursor-pointer ${p} font-bold border-white bg-dark rounded border-2 text-white`, !active && 'opacity-20')

    return (
        <button className={clsx([defaultclassName, className])} {...extra} >
            {children}
        </button>
    );
};

export default UIButton;
