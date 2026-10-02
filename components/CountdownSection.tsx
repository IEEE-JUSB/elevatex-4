"use client";

import React, { useState, useEffect } from 'react';

// Define the target date for the countdown
const TARGET_DATE = new Date('November 29, 2026 00:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +TARGET_DATE - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export default function CountdownSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => String(value).padStart(2, '0');

  const timeLabels = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'];
  const timeValues = hasMounted
    ? [
        formatTime(timeLeft.days),
        formatTime(timeLeft.hours),
        formatTime(timeLeft.minutes),
        formatTime(timeLeft.seconds),
      ]
    : ['00', '00', '00', '00'];

  const timerComponents: React.ReactElement[] = timeValues.map((value, index) => (
    <div key={timeLabels[index]} className="flex flex-col items-center">
      <div className="w-16 md:w-20 lg:w-24 flex justify-center">
        <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-none font-mono">
          {value}
        </span>
      </div>
      <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-wider mt-1">
        {timeLabels[index]}
      </span>
    </div>
  ));

  const targetDateString = 'NOVEMBER 29, 2026';

  return (
    <section className="bg-white py-8 md:py-10 border-t-2 border-b-2 border-dashed border-gray-700 font-manrope">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16 lg:gap-24">
        
        {/* Left Section: Date */}
        <div className="flex flex-col items-center md:items-start md:flex-1">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            {targetDateString}
          </span>
          {/* Faded mirror text */}
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 opacity-20 -mt-1 transform scale-y-[-1] tracking-wide">
            {targetDateString}
          </span>
        </div>

        {/* Middle Section: Countdown Timer */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-4 md:flex-1">
          {timerComponents.map((component, index) => (
            <React.Fragment key={index}>
              {component}
              {index < timerComponents.length - 1 && (
                <div className="w-4 md:w-6 lg:w-8 flex justify-center">
                  <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-none">
                    :
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right Section: Location */}
        <div className="flex flex-col items-center md:flex-1">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            JADAVPUR
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            UNIVERSITY
          </span>
        </div>

      </div>
    </section>
  );
}