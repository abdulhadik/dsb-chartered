import React,{useEffect} from 'react';
import ifrsImage from '../images/learningHub/1.png';

export default function LearningHubIFRS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}">
      <img src={ifrsImage} alt="IFRS" className="max-w-full max-h-full" />
    </div>
  );
}
