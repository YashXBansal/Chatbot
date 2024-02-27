import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:text-gray-300">Anonymous</a>
          </div>
          <div className="flex justify-center mb-4 md:mb-0">
            <a href="https://twitter.com/Yash261204" className="mx-2 hover:text-gray-300" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="1.5em" />
            </a>
            <a href="github.com/YashXBansal" className="mx-2 hover:text-gray-300" aria-label="Github" target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://www.linkedin.com/in/yash-bansal-768402273/" className="mx-2 hover:text-gray-300" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size="1.5em" />
            </a>
            <a href="https://www.instagram.com/__.yashbansal_/" className="mx-2 hover:text-gray-300" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
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
          <p className="mb-4 md:mb-0 text-gray-500">© 2024 Anonymous. All rights reserved.</p>
          <div className="flex">
            <a  className="text-gray-500 mx-2 hover:text-gray-300" rel="noopener noreferrer">FAQ</a>
            <a className="text-gray-500 mx-2 hover:text-gray-300" rel="noopener noreferrer">Help</a>
            <a  className="text-gray-500 mx-2 hover:text-gray-300" rel="noopener noreferrer">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
