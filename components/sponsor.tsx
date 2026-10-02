'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type Sponsor = {
  id: string;
  name: string;
  src: string;
  url?:string
};

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Jamboree",
    src: "/sponsors/jamboree-logo.png"
  },
  {
    "id": "2",
    "name": "Erudite",
    "src": "/sponsors/erudite-logo.jpg",
  },
  {
    "id": "3",
    "name": "Tough Tongue",
    "src": "/sponsors/tough_tongue.jpeg",
  },
  {
    "id": "4",
    "name": "Edwise",
    "src": "/sponsors/edwise-logo.png",
  }
];

export default function Sponsors() {
  // triple duplicate to create a seamless infinite loop
  const duplicated = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section aria-labelledby="sponsors-heading" className={`py-8 w-full`}>
      <div className="w-full mx-auto px-6">
        <h2 id="sponsors-heading" className="text-center text-3xl sm:text-4xl md:text-6xl font-syne font-semibold mb-6">
          Meet Our Sponsors
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="w-full flex justify-between items-center whitespace-nowrap gap-x-20"
            initial={{ x: "0%" }}
            animate={{ x: ["-0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {duplicated.map((s, idx) => (
              <a
                key={`${s.id}-${idx}`}
                href={s.url ?? "#"}
                target="_blank"
                className="flex-shrink-0 flex items-center justify-center px-8 py-6"
                aria-label={s.name}
              >
                <Image
                  src={s.src}
                  height={200} width={200}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-16 min-h-[128px] min-w-[64px] sm:h-28 md:h-32 object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
