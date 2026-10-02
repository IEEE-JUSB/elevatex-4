'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { CarouselPlugin } from './Carousel';

type NavItem = string;

const HeroSection: FC = () => {
  const navItems: NavItem[] = ['Home', 'About', 'Contact', 'Speakers', 'Schedule'];
  const [activeDot, setActiveDot] = useState(0);
  const handleNavClick = (item: NavItem): void => {
    console.log(`Navigating to ${item}`);
  };

  const handleDotClick = (index: number): void => {
    setActiveDot(index);
  };

  return (
    <div id='home' className="min-h-screen bg-gradient-to-bl from-blue-300 via-white to-gray-300 font-sans antialiased text-gray-800 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-70 right-0 top-0"
        style={{
          background: 'radial-gradient(circle at 75% 50%, #CBC3E3, transparent 10%), radial-gradient(circle at 15% 70%, #CBC3E3, transparent 80%)',
          filter: 'blur(150px)',
        }}
      ></div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center py-6 md:py-8">
          <Link href={"/"} className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            ElevateX <span className="text-blue-600">4.0</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-lg font-medium font-syne">
            {navItems.map((item: NavItem) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-sky-600 transition duration-150 ease-in-out py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </a>
            ))}
          </nav>
          <Link href={"/register"}
            className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-sky-600 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50 text-base md:text-lg"
          >
            Register Now!
          </Link>
        </header>
        <main className="mt-16 md:mt-24 lg:mt-32 pb-20 grid lg:grid-cols-2 gap:10 lg:gap-140 items-center font-syne">
          <div className="flex flex-col items-left text-center lg:items-start lg:text-left"> 
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              Witness the Future of Innovation
            </p>
            <div className="wow animate__animated animate__fadeInLeft">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900">
                <div className="lg:text-left text-center"><span className="text-blue-600">ElevateX 4.0</span></div>
                <div className="lg:text-left text-center">Beyond</div>
                <div className="lg:text-left text-center">Boundaries</div>
              </h1>
            </div>
            <div className='flex gap-8 justify-center text-center'>
              <Link href={"/register"}
                className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 text-lg md:text-xl"
              >
                Register Now!
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end mt-16 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-[30px] shadow-2xl transition-all duration-500 ease-in-out transform hover:shadow-sky-300/50 overflow-hidden relative">
              {/* <Image
                src="/elevatex-logo-black.png"
                alt="Business collaboration handshake"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-2xl shadow-sm"
              /> */}
              <CarouselPlugin />
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-b-[30px] pt-12 -mt-6">
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Content Card</p>
                <div className="flex items-center space-x-2">
                </div>
              </div> */}
            </div>
            {/* <div className="flex space-x-3 mt-8">
              {[0, 1, 2].map((index: number) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeDot === index ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
