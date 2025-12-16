import { createContext, useContext, useState } from "react";
const LoadingContext = createContext({
    loading: false,
    setLoading: null

})

export function CreateContext({ children }) {
    const [loading, setLoading] = useState(false);
    const value = { loading, setLoading };
    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading() {

}