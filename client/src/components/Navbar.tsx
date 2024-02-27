import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (backdropRef.current && !backdropRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Attach click event listener to handle closing the menu when clicked outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-gray-900 shadow-lg backdrop-blur-lg">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold md:text-3xl" aria-label="Home">Anonymous</Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin" className="text-gray-300 hover:text-white" aria-label="Sign In">Sign In</Link>
              <Link to="/signup" className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md" aria-label="Sign Up">Sign Up</Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle Menu">
                {isOpen ? <AiOutlineClose size="1.5em" /> : <AiOutlineMenu size="1.5em" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div ref={backdropRef} className="fixed inset-0 z-40 bg-black opacity-50" onClick={toggleMenu}></div>
        )}
        {isOpen && (
          <div className="md:hidden">
            <Menu as="div" className="px-4 pt-2 pb-4 space-y-2">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/signin" className={`${active ? 'bg-gray-800' : ''} block px-4 py-2 rounded-md text-base font-medium text-white`} aria-label="Sign In Mobile">
                    Sign In
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/signup" className={`${active ? 'bg-gray-800' : ''} block px-4 py-2 rounded-md text-base font-medium text-white`} aria-label="Sign Up Mobile">
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
