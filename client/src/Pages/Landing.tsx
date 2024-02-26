import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-16 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-center md:text-4xl">Welcome to BrandName</h1>
          <p className="mt-4 text-gray-600 text-center">Discover our amazing chatbot to guide you through our services.</p>
          <Link to="/chat" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Get Started</Link>
        </div>
      </header>

      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Features</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <div className="text-center px-6 py-4">
                <h3 className="text-md text-gray-700 font-bold">Feature One</h3>
                <p className="text-gray-600 mt-2">Description of feature one.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <div className="text-center px-6 py-4">
                <h3 className="text-md text-gray-700 font-bold">Feature Two</h3>
                <p className="text-gray-600 mt-2">Description of feature two.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <div className="text-center px-6 py-4">
                <h3 className="text-md text-gray-700 font-bold">Feature Three</h3>
                <p className="text-gray-600 mt-2">Description of feature three.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
