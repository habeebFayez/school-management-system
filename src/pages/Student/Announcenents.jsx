import React from 'react'

export const Announcenents  = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar 
        currentPage={'Home'} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 bg-gray-100">
        <div className="sticky top-0 z-50">
          <TopNavbar onMenuClick={() => setIsSidebarOpen(true)}/>
        </div>

        <main className="bg-gray-100 p-5">
          <h3 className="text-black font-semibold text-xl mb-4">Announcenents</h3>
          <div className='container flex-1 w-full h-full'> 
            {/* Main content goes here Dont change container ... */}

          </div>
        </main>
      </div>
    </div>
  )
}
