"use client";

import {AppContext, AppContextType} from "./AppContext";
import React, {useEffect, useMemo} from "react";
import AppBar from "@/Components/Feature/AppBar/AppBar";
import Footer from "@/Components/Feature/Footer/Footer";

export default function AppLayout(props: React.HTMLAttributes<HTMLBodyElement>) {

    const ContextData: AppContextType = useMemo(() => {
        return {}
    }, [])

    useEffect(() => {
        require("../src/Configs/FirebaseConfig")
    }, []);

    return <>
        <AppContext.Provider value={ContextData}>
            <body {...props} className={"bg-primary text-primary"}>
            <AppBar/>
            {props.children}
            </body>
            <Footer/>
        </AppContext.Provider>
    </>
}