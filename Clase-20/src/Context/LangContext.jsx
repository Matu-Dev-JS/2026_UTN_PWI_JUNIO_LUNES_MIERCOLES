import { createContext, useState } from "react";
export const LangContext = createContext()
export function LangContextProvider ({children}){
    const [lang, setLang] = useState ("en")
    const providerValues = {
        langSelected: lang, 
    }
    return (
        <LangContext.Provider value={providerValues}>
            {children}
        </LangContext.Provider>
    )
}