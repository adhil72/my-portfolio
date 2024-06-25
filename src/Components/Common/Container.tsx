import React from "react";

export default function Container(props:React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`container px-10 ${props.className}`}></div>
}