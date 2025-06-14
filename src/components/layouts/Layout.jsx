import React, { useRef, useEffect, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from '../shared/Sidebar';
import TopNavbar from '../shared/TopNavbar';
import { useLocation } from "react-router-dom";
import Documentation from '../shared/Documentation';
import { Book } from 'lucide-react';

const Layout = ({ children, currentPage, search = true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false);
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

      <div className="flex-1 bg-gray-100">
        <div className="sticky top-0 z-10">
          <TopNavbar search={search} onMenuClick={() => setIsSidebarOpen(true)}/>
        </div>

        {/* Documentation Button */}
        <button
          onClick={() => setIsDocumentationOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label="Open Documentation"
        >
          <Book size={24} />
        </button>

        <main 
          ref={mainRef}
          className="flex flex-col bg-gray-100 p-2 w-full h-fit overflow-y-auto"
        >
          {/* <h3 className="text-black font-semibold text-xl mb-4">{currentPage}</h3> */}
             {/* <div className='container flex-1 w-full h-full'>  */}
            {/* Main content goes here Dont change container ... */}
            {children}

            {/* </div> */}
        </main>

        {/* Documentation Modal */}
        <Documentation 
          isOpen={isDocumentationOpen} 
          onClose={() => setIsDocumentationOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Layout; 