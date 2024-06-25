import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Sidebar */}
      <div className={`w-64 md:w-1/5 bg-gray-800 text-white ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-hidden'>
        {/* Header */}
        <div className='bg-gray-700 h-20 flex items-center justify-between px-4 md:px-6'>
          <button
            className='text-white md:hidden'
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
          <h1 className='text-center text-white text-3xl font-black'>Dashboard</h1>
          <div className='hidden md:block'></div>
        </div>

        {/* Content Area */}
        <div className='flex-1 overflow-y-auto px-4 md:px-6 py-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
