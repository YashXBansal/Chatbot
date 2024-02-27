// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-blue-400 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
