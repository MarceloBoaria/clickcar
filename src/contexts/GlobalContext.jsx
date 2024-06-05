import { createContext } from "react";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({children}) => {
    return (
        <UsuariosContext.Provider value={{}}>
            {children}
        </UsuariosContext.Provider>
    )
}