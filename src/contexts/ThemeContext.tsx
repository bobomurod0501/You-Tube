import { createContext, useContext } from "react";

 const MyContext = createContext<{
   mode: "light" | "dark",
   setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>
 } | null>({
    mode: "light",
    setMode: () => { },
 });

function useThemeContext() {
   const context = useContext(MyContext);
   if (!context) {
      throw new Error("useThemeContext must be used within a MyContext.Provider");
   }
   return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MyContext, useThemeContext };