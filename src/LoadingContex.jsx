import { createContext, useContext, useState } from "react";
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'



const LoadingContext = createContext()

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const value = { loading, setLoading };
    return (
        <>

            <LoadingContext.Provider value={value}>
                {children}
            </LoadingContext.Provider>
        </>

    )
}

export function useLoading() {
    const context = useContext(LoadingContext);
    return context
}