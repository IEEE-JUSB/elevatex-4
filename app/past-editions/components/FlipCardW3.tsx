"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { ReactNode } from "react";
import "./FlipCardW3.css";

interface FlipCardW3Props {
  image: string;
  front: ReactNode;
  back: ReactNode;
  imageAlt?: string;
  width?: number;
  height?: number;
}

export default function FlipCardW3({
  image,
  front,
  back,
  imageAlt = "",
  width = 300,
  height = 300,
}: FlipCardW3Props) {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFlipped((current) => !current);
    }
  };

  return (
    <div
      className={`flip-card-w3${flipped ? " is-flipped" : ""} hover:scale-105 transition duration-200 ease-in-out 
      w-[clamp(400px,250px,200px)] h-[clamp(500px,4rem,200px)]
      `}
      //style={{ width, height }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${imageAlt || "Image"} flip card`}
      onClick={() => setFlipped((current) => !current)}
      onKeyDown={handleKeyDown}
    >
      <div className="flip-card-w3-inner">
        <div className="flip-card-w3-front">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes={`${width}px`}
            className="flip-card-w3-image"
          />
          <div className="flip-card-w3-front-content">{front}</div>
        </div>
        <div className="flip-card-w3-back">{back}</div>
      </div>
    </div>
  );
}
