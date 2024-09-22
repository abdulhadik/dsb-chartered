import React from 'react';
import ifrsImage from '../images/learningHub/6.png'; // Adjust the path to your image file

export default function LearningHubTransferPricing() {
  return (
    <div className="flex items-center justify-center h-screen style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}">
      <img src={ifrsImage} alt="IFRS" className="max-w-full max-h-full" />
    </div>
  );
}