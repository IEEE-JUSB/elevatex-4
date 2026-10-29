'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
//import { CarouselPlugin } from './Carousel';
import GhostFibers from './GhostFibers';
import RotatingText from './RotatingText';
import Carousel from './Carousel';
import MaskedHeading from './MaskedHeading';
import { LiquidButton } from './liquidButton';
import TextGradient from './waveText21Dev';
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
  const items = [
    { image: '/speakers/ansh.jpg', alt: 'Speaker portrait' },
    { image: '/speakers/chirag.jpeg', alt: 'Speaker portrait' },
    { image: '/speakers/nandini.JPG', alt: 'Speaker portrait' },
    { image: '/speakers/pani_da.jpg', alt: 'Speaker portrait' },
    { image: '/speakers/punit.jpg', alt: 'Speaker portrait' },
    { image: '/speakers/rahul.jpeg', alt: 'Speaker portrait' },
    { image: '/speakers/raman.jpg', alt: 'Speaker portrait' },
    { image: '/speakers/sayandeep.jpeg', alt: 'Speaker portrait' },
    { image: '/speakers/soumyadeep.jpeg', alt: 'Speaker portrait' }
  ];

  return (
    <div id='home' className="min-h-screen bg-gradient-to-bl from-[#B496E6] via-[#6236A8] to-[#1B1842] font-sans antialiased text-gray-800 overflow-hidden
    
    
    ">
      <div
        className="absolute inset-0 z-0 opacity-70 right-0 top-0"
        style={{
          background: 'radial-gradient(circle at 75% 50%, #0B0A14, transparent 10%), radial-gradient(circle at 15% 70%, #0B0A14, transparent 80%)',
          filter: 'blur(150px)',
        }}
      ></div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center py-6 md:py-8">

          
          {/* <Link href={"/"} className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-purple-500">
            ElevateX <span className="text-white">4.0</span>
          </Link> */}
          <Link href={"/"}> <span className="text-white ext-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight">
            Elevate
          </span>
          
          <TextGradient
        as="h1"
        // colors={["#ffffff", "#B496E6", "#7A62C6", "#6236A8", "#ffffff"]}
        colors={
          [
  "#FFFFFF", // Bright highlight / white at the top of the letters
  "#FFFFFF", // Muted metallic lavender-silver midtone
  "#8E4CE380", // Vibrant mid-violet / purple sheen
  "#4411C6", // Deep electric blue-purple base
  "#FFFFFF", // Dark near-black background / deep shadow tone
]
        }
        duration={15}
        className="text-3xl md:text-4xl lg:text-6xl tracking-tight"
      >
        X
      </TextGradient> <span className="text-purple-200 ext-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight">&nbsp;4.0</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-lg font-medium font-syne">
            {navItems.map((item: NavItem) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className="text-gray-200 hover:text-[#191433] transition duration-150 ease-in-out py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#191433] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </a>
            ))}
          </nav>
          {/* <Link href={"/register"}
            className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-sky-600 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50 text-base md:text-lg"
          >
            Register Now!
          </Link> */}
          <Link href={"/register"}>
          <LiquidButton >
            Register Now!
          </LiquidButton>
          </Link>
        </header>
        <main className="mt-16 md:mt-24 lg:mt-32 pb-20 grid lg:grid-cols-2 gap:10 lg:gap-140 items-center font-syne">
          <div className="flex flex-col items-left text-center lg:items-start lg:text-left"> 
            <p className="text-xl md:text-2xl font-medium text-[#c6afff] mb-4">
              Witness the Future of Innovation
            </p>





            <div className="wow animate__animated animate__fadeInLeft">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#8A6AD0]">
                <div className="lg:text-left text-center"><span className="text-white">ElevateX 4.0</span></div>





                <div className="lg:text-left text-center">Beyond</div>
                <div className="lg:text-left text-center w-full flex justify-center items-center mt-5">
<RotatingText
  texts={['Innovation', 'Creativity', 'Boundaries', 'Ordinary']}
  effect="drop"
  direction="up"
  highlight
  highlightColor="#a855f7"
  staggerFrom="last"
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  rotationInterval={1950}
  splitBy="characters"
  blur={0}
  auto
  loop
  pauseOnHover={false}
/>
</div>

              </h1>
            </div>
            <div className='flex gap-8 justify-center text-center'>
              <Link href={"/register"}
                className="mt-10 px-8 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 text-lg md:text-xl"
              >
                Register Now!
              </Link>
            </div>
          </div>
          
            {/** space for caroules ig, imported from reactbits */}
            <div style={{ height: '600px', position: 'relative' }} className='flex gap-8 justify-center
            items-center
            mt-20 lg:mt-0 md:mt-0 sm:mt-10
            '>
  <Carousel
    items={items}
    baseWidth={460}
    aspectRatio={0.72}
    effect="fade"
    indicator="none"
    frame={false}
    arrows={false}
    loop
    autoplay
    autoplayDelay={2000}
    pauseOnHover={false}
    theme="dark"
    peek={0}
    gap={6}
    radius={18}
    draggable
    round={false}
/>
</div>
          
        </main>
      </div>
    </div>
  );
};



export default HeroSection;
