import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl" aria-label="Home">BrandName</Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/signin" className="py-2 px-3 text-gray-800 hover:bg-gray-200 rounded-md" aria-label="Sign In">Sign In</Link>
              <Link to="/signup" className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md" aria-label="Sign Up">Sign Up</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md focus:outline-none" aria-label="Toggle Menu">
                {isOpen ? <AiOutlineClose size="1.5em" /> : <AiOutlineMenu size="1.5em" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Menu as="div" className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/signin" className={`${active ? 'bg-gray-200' : ''} block px-3 py-2 rounded-md text-base font-medium`} aria-label="Sign In Mobile">
                    Sign In
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/signup" className={`${active ? 'bg-gray-200' : ''} block px-3 py-2 rounded-md text-base font-medium`} aria-label="Sign Up Mobile">
                    Sign Up
                  </Link>
                )}
              </Menu.Item>
            </Menu>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
