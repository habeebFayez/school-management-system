import React, { useRef, useEffect,useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from '../shared/Sidebar';
import TopNavbar from '../shared/TopNavbar';
import { useLocation } from "react-router-dom";

const Layout = ({ children ,currentPage, search=true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

console.log("done :", location.pathname);    
  }, [location.pathname]);
  return (
    <div className="flex min-h-screen">
      
      <Sidebar 
        currentPage={currentPage} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 bg-gray-100 ">
        <div className="sticky top-0 z-10">
          <TopNavbar search={search} onMenuClick={() => setIsSidebarOpen(true)}/>
        </div>

        <main 
              ref={mainRef}
              className="bg-gray-100 p-3 w-full h-full overflow-auto"
              >
          {/* <h3 className="text-black font-semibold text-xl mb-4">{currentPage}</h3> */}
             {/* <div className='container flex-1 w-full h-full'>  */}
            {/* Main content goes here Dont change container ... */}
            {children}

            {/* </div> */}
        </main>
      </div>
    </div>
  );
};

export default Layout; 