import React from "react";
import Image from "next/image";
import Link from "next/link";
import ieeeLogo from "./ieee.svg";

import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
} from "react-icons/fa6";

function ElevatexFooter() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white w-full p-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around md:text-lg space-y-10 md:space-y-0 font-syne">
        
        <div className="w-auto mb-10 md:mb-0">
          <div className="text-center mb-4">
            <Image src={ieeeLogo} alt="IEEE JUSB Logo" width={320} height={120} className="mx-auto" />
          </div>
          <p className="w-80 text-justify leading-relaxed">
            The Jadavpur University IEEE Student Branch, founded in 2010, belongs to the Kolkata section.
            We are a group of enthusiastic students promoting innovative ideas both within and outside the campus.
          </p>
        </div>

        
        <div className="w-auto hidden md:block">
          <h2 className="font-bold mb-3 text-xl text-white">Useful Links</h2>
          <div className="space-y-2 font-medium">
            <Link href="/" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> Home</Link>
            <Link href="/#about" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> About</Link>
            <Link href="/#contact" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> Contact</Link>
            <Link href="/#speakers" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> Speakers</Link>
            <Link href="/#schedule" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> Schedule</Link>
            <Link href="/dashboard" className="flex items-center gap-x-2 hover:text-blue-300 transition-colors duration-150"><span>&gt;</span> Register</Link>
          </div>
        </div>

        <div className="w-auto md:px-6">
          <h2 className="font-bold mb-3 text-xl text-white">Contact Us</h2>
          <div className="flex items-start gap-2 mb-2 font-medium">
            <FaMapLocationDot className="mt-1" />
            <span>
              Jadavpur University, 188 Raja S.C. Mallick Rd, <br />
              Kolkata-700032, India
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope />
            <a href="mailto:jaduniv.ieee@gmail.com" className="hover:underline transition">
              jaduniv.ieee@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <FaPhone />
            <span>+91 72789 72359</span>
          </div>

          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/_ieeeju/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/ieeejusb" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline transition">
              <FaFacebook />
            </a>
            <a href="https://x.com/IeeeJadavpur" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:underline transition">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/ieee-ju/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:underline transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-blue-900">
        <p className="text-white p-3 text-center font-syne border-t border-t-white/70 w-full sm:w-4/5">
          Made with &#10084; by IEEE JUSB
        </p>
      </div>
    </>
  );
}

export default ElevatexFooter;
