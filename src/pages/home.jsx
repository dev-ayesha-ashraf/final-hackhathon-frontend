import React, { useState, useEffect } from "react";
import home from '../images/social.jpg';

export function Home() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setShowAnimation(true);
  }, []);

  return (
    <>
<div className={`relative h-screen flex bg-gradient-to-r from-indigo-800 to-purple-800 overflow-hidden ${showAnimation ? 'animate-fadeIn' : ''}`}>
  {/* Image on the left */}
  <div className="hidden md:flex md:w-1/2">
    <img
      className="object-cover w-10/12 h-4/6 mt-[70px] ml-[40px] rounded-full"
      src={home}
      alt="Left Image"
    />
  </div>

  {/* Content on the right */}
  <div className="flex-1 flex flex-col justify-center items-center text-white text-center p-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">WELCOME TO SHARE SHOOT!</h1>
    <h2 className="text-3xl md:text-5xl mb-6">Post your projects or see others' projects...</h2>
    <p className="max-w-md mx-auto text-base md:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae modi doloribus laudantium?
    </p>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
</div>

    </>

  );
}
