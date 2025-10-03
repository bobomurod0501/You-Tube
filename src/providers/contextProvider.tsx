import { useState, type ReactNode } from "react"
import { MyContext } from "../contexts/ThemeContext"
export const ContextProvider = ({ children }: { children: ReactNode }) => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [mode, setMode] = useState<"light" | "dark">("light")
   return (
      <MyContext.Provider value={{ mode, setMode }}>
         {children}
      </MyContext.Provider >
   )
}
