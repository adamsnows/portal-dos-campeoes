import { toast } from "react-toastify";

export const showToast = (
    type, 
    message, 
    {
        position = "top-right",
        autoClose = 2000,
        hideProgressBar = false,
        closeOnClick = true,
        pauseOnHover = true,
        draggable = true,
        progress = undefined,
        toastId = 1, 
    } = {}
) => {
    toast[type](message, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        toastId,
    });
}