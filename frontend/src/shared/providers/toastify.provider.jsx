'use client'
import { ToastContainer } from "react-toastify";

const ToastifyProvider = ({children}) => {
    return (
        <>
            {children}
            <ToastContainer/>
        </>
    );
};

export default ToastifyProvider;
