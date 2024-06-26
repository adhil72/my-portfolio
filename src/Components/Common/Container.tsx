import React from "react";

export default function Container(props:React.HTMLProps<HTMLDivElement>) {
    return <center>
        <div {...props} className={`w-full px-10 lg:px-0 lg:w-3/4 text-start ${props.className}`}></div>
    </center>
}