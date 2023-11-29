import { createContext, useState } from "react";

export const OpenMenuContext = createContext();

export const OpenMenuStore = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <OpenMenuContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </OpenMenuContext.Provider>
    )
}