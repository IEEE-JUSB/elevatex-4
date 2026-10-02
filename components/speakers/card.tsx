import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  url: string;
  designation?: string;
}

const Card: React.FC<CardProps> = ({ image, name, url, designation }) => (
  <div className="rounded-2xl w-full aspect-square max-w-xs md:max-w-sm lg:max-w-md relative">
    <Image
      width={500}
      height={500}
      src={image}
      alt={name}
      className="w-full h-auto rounded-2xl mb-3 mx-auto absolute aspect-square object-cover"
    />
    <Link
      href={url}
      target="_blank"
      className="text-white text-lg lg:text-xl drop-shadow-2xl bg-black/10 hover:bg-black/30 transition-colors duration-300 w-full text-center py-3 font-syne font-bold absolute bottom-0 left-1/2 -translate-x-1/2"
    >
      {name}<br/>
      <span className="text-base font-normal">
        {designation}
      </span>
    </Link>
  </div>
);

export default Card;