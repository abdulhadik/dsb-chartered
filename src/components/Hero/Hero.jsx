// src/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/Dsb.mp4');

  const updateMedia = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true); // Show the image for mobile devices
    } else {
      setIsMobile(false); // Show the video for larger devices
      setVideoSrc(window.innerWidth < 800 ? '/Dsb-tab.mp4' : '/Dsb.mp4');
    }
  };

  useEffect(() => {
    updateMedia();
    const handleResize = () => updateMedia();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero">
      {isMobile ? (
        <img
          src="/WELCOME TO DSB CHARTERED ACCOUNTANTS (3).jpg"
          alt="Welcome to DSB Chartered Accountants"
          className="hero-image"
        />
      ) : (
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline // Ensure compatibility with iOS Safari
          className="hero-video"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Hero;
