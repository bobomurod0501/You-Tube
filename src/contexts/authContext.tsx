import { createContext, useContext } from "react";

// Context Type
interface AuthContextType {
   isAuth: boolean;
   setIsAuth: (auth: boolean) => void;
}

// Context yaratish
const authContext = createContext<AuthContextType>({
   isAuth: true,
   setIsAuth: () => {
      //dfd
   },
});

authContext.displayName = "authContext";

const AuthContextConsumer = authContext.Consumer;

// Custom Hook
function useAuthContext() {
   return useContext(authContext);
}

// Eksportlar
export { AuthContextConsumer as AuthConsumer, authContext, useAuthContext };