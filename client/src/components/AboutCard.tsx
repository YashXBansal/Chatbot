// AboutCard.tsx
import React from 'react';

interface AboutCardProps {
  children: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ children }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      {children}
    </div>
  );
};

export default AboutCard;
