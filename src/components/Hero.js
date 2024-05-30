import React from 'react';
import heroBackground from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center md:h-screen h-96"
      style={{ backgroundImage: `url(${heroBackground})` }}
      aria-label="Sticky Inches Hero Section"
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Sticky Inches</h1>
        <p className="text-lg md:text-2xl mb-6">Unique stickers for every occasion</p>
        <a
          href="#products"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
