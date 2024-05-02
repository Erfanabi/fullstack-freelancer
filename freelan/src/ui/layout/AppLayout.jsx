import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { useOpenSidebar } from "../../context/OpenSidebarContext";

function AppLayout({ children }) {
  const { Opensidebar, openSidebarToggle } = useOpenSidebar();

  return (
    <div className="main">
      <div className={`sidebar ${openSidebarToggle ? "inline z-20" : ""}`}>
        {/* <AppSidebar Opensidebar={Opensidebar} /> */}
        {children}
      </div>
      <div className="header">
        <div className="max-w-screen-lg mx-auto h-full">
          <AppHeader Opensidebar={Opensidebar} />
        </div>
      </div>
      <div className="outlet">
        <div className="max-w-screen-lg mx-auto flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

// max-w-screen-md
