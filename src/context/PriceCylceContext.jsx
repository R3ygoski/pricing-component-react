import { createContext, useState } from "react";

export const PriceCycleContext = createContext()

export const PriceCycleProvider = ({ children }) => {
    const [priceCycle, setPriceCycle] = useState(false)

    return (
        <PriceCycleContext.Provider value={{ priceCycle, setPriceCycle }}>
            {children}
        </PriceCycleContext.Provider>
    )
}