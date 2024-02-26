import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:text-gray-300">BrandName</a>
          </div>
          <div className="flex justify-center mb-6 md:mb-0">
            <a href="#" className="mx-2 hover:text-gray-300" aria-label="Twitter">
              <FaTwitter size="1.5em" />
            </a>
            <a href="#" className="mx-2 hover:text-gray-300" aria-label="Facebook">
              <FaFacebook size="1.5em" />
            </a>
            <a href="#" className="mx-2 hover:text-gray-300" aria-label="Linkedin">
              <FaLinkedinIn size="1.5em" />
            </a>
            <a href="#" className="mx-2 hover:text-gray-300" aria-label="Instagram">
              <FaInstagram size="1.5em" />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="#" className="mx-2 hover:text-gray-300">About Us</a>
            <a href="#" className="mx-2 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-6 md:mb-0 text-gray-500">© 2024 BrandName. All rights reserved.</p>
          <div className="flex mb-6 md:mb-0">
            <a href="#" className="text-gray-500 mx-2 hover:text-gray-300">FAQ</a>
            <a href="#" className="text-gray-500 mx-2 hover:text-gray-300">Help</a>
            <a href="#" className="text-gray-500 mx-2 hover:text-gray-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
