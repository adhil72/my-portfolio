import React from "react";

export default function Page({className,...props}:React.HTMLAttributes<HTMLDivElement>){
    return <div {...props} className={`w-full h-screen ${className} bg-primary`}></div>
}