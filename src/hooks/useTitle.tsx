import { useEffect } from "react";
import { useLocation } from "react-router";

const useTitle = () => {
   const location = useLocation();

   useEffect(() => {
      document.title =location.pathname?.split("/")[2] ?? "You tube";
   }, [location]);
};

export default useTitle;