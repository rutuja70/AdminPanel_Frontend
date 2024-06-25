import React, { useState } from "react";
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  const [showSubmissions, setShowSubmissions] = useState(false);

  const toggleSubmissions = () => {
    setShowSubmissions(!showSubmissions);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="p-4 text-xl font-bold">Admin Panel</div>
      <div className="flex-1">
        <ul className="py-4">
          <NavLink to="/Dashboard" className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</NavLink>
          <li className="relative">
            <div
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={toggleSubmissions}
            >
              Form Submissions
            </div>
            {showSubmissions && (
              <ul className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded shadow-lg">
                <NavLink to="/JobForm"className="px-4 py-2 hover:bg-gray-600 cursor-pointer block">
                  Job Application
                </NavLink>
                <NavLink  to="LoanForm" className="px-4 py-2 hover:bg-gray-600 cursor-pointer block">
                  Loan Application
                </NavLink>
                <NavLink to="/DepositeForm" className="px-4 py-2 hover:bg-gray-600 cursor-pointer block">
                 Deposite Application
                </NavLink>
                <NavLink to="/ContactForm" className="px-4 py-2 hover:bg-gray-600 cursor-pointer block">
                  Contact Form
                </NavLink>
              </ul>
            )}
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;