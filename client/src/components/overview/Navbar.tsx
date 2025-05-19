"use client";
import React, { useState, useEffect, useRef } from 'react';


const Navbar: React.FC = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileDropdownItemClick = (action: string) => {
    setIsProfileDropdownOpen(false);
    switch (action) {
      case 'profile':
        console.log('Navigate to Profile');
        break;
      case 'account':
        console.log('Navigate to Account');
        break;
      case 'logout':
        console.log('Perform Logout');
        break;
    }
  };

  const notifications = [
    { id: 1, message: 'New project assigned to you' },
    { id: 2, message: 'Server downtime alert' },
    { id: 3, message: 'Code review completed' },
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-10 flex items-center justify-between px-6 py-4 lg:pl-0 border-l border-r border-white">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-blue-500">CloudCode</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative" ref={notificationDropdownRef}>
          <button
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          {isNotificationDropdownOpen && (
            <div className="absolute right-0 top-10 w-64 bg-black border border-gray-900 rounded-md shadow-md z-20">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-2 text-white hover:bg-gray-900 transition-colors duration-200 border-b border-gray-900 last:border-b-0"
                  >
                    {notification.message}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-white">No new notifications</div>
              )}
            </div>
          )}
        </div>

        <div className="relative" ref={profileDropdownRef}>
          <div
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium cursor-pointer"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            Sk
          </div>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-12 w-48 bg-black border border-gray-900 rounded-md shadow-md z-20">
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900 transition-colors duration-200"
                onClick={() => handleProfileDropdownItemClick('profile')}
                >
              
                Profile

              </button>
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900 transition-colors duration-200"
                onClick={() => handleProfileDropdownItemClick('account')}
              >
                Account
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900 transition-colors duration-200"
                onClick={() => handleProfileDropdownItemClick('logout')}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;