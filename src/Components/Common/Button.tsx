import React, {HTMLAttributes} from "react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "contained" | "outlined" | "text";
}

export default function Button({className, variant = "contained", ...props}: ButtonProps) {
    const solidButton = `bg-tint text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-opacity-90 ${className}`;
    const outlinedButton = `border border-tint text-tint px-5 py-3 rounded-xl cursor-pointer hover:bg-opacity-10 hover:bg-tint ${className}`;
    const textButton = `text-tint px-5 py-3 cursor-pointer hover:text-opacity-80 ${className}`;
    return <div {...props} className={`${variant === "contained" ? solidButton : variant === "outlined" ? outlinedButton : textButton} font-bold uppercase selection:-order-none`}></div>
}