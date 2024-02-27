// Landing.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import aiBackgroundImage from '../assets/ai2.jpg';
import chatbotimage from '../assets/chatbot.jpg'
import Card from '../components/Card';
import AboutCard from '../components/AboutCard';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200" style={{ backgroundImage: `url(${aiBackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <header className="bg-cover bg-center" style={{ paddingTop: '4rem' }}>
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto px-6 py-16 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Welcome to Anonymous</h1>
            <p className="text-lg md:text-xl text-gray-200 text-center mb-8">Discover our amazing chatbot to guide you through our services.</p>
            <Link to="/chat" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">Get Started</Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-12">Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card title="Natural Language Understanding" description="Understands user queries and responds accurately." />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card title="Multi-channel Support" description="Accessible via web, mobile, and various messaging platforms." />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card title="Customizable Responses" description="Tailored responses based on user interactions and preferences." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-12">About</h2>
        <div className="flex justify-center items-center">
          <div className="max-w-4xl w-full">
          <img src={chatbotimage} alt="Chatbot" className="rounded-lg py-2 shadow-md w-full h-auto" />

            <AboutCard>
              <div className="px-6 py-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">About Anonymous</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Anonymous is an intelligent chatbot designed to assist users in navigating through various services and providing helpful information. With natural language understanding capabilities, Anonymous can comprehend user queries accurately and offer tailored responses to meet individual needs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Our chatbot is accessible across multiple channels, including web, mobile, and various messaging platforms, ensuring seamless communication and support wherever you are. Anonymous adapts to user interactions and preferences, delivering customizable responses to enhance user experience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Feel free to explore and interact with our chatbot to discover the range of services and assistance it can offer.
                </p>
              </div>
            </AboutCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
