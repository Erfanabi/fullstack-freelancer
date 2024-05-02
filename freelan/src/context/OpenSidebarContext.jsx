import { createContext, useContext, useState } from "react";

export const OpenSidebarContext = createContext();

export default function OpenSidebarProvider({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const Opensidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <OpenSidebarContext.Provider value={{ Opensidebar, openSidebarToggle }}>
      {children}
    </OpenSidebarContext.Provider>
  );
}

export const useOpenSidebar = () => {
  return useContext(OpenSidebarContext);
};
