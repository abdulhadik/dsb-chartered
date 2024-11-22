import React,{useEffect} from 'react';
import ifrsImage from '../images/learningHub/2.png'; // Adjust the path to your image file

export default function LearningHubCorporateTax() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}">
      <img src={ifrsImage} alt="IFRS" className="max-w-full max-h-full" />
    </div>
  );
}
