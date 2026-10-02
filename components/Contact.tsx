import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center text-center py-16 px-6 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-3 font-syne">Contact Us</h1>
      <p className="text-gray-600 mb-10 text-sm md:text-base max-w-md">
        Feel free to contact us anytime regarding any query.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 w-full max-w-5xl">
        <div className="flex flex-col items-center md:items-center">
          <MapPin className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="font-semibold text-gray-500 mb-1 text-sm">ADDRESS</h3>
          <p className="text-gray-800 text-sm md:text-base max-w-[220px]">
            188, Raja SC Mullick Road, Kolkata 700032
          </p>
        </div>

        <div className="hidden md:block h-20 w-px bg-gray-200"></div>

        <div className="flex flex-col items-center md:items-center">
          <Phone className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="font-semibold text-gray-500 mb-1 text-sm">PHONE NUMBER</h3>
          <p className="text-gray-800 text-sm md:text-base">(+91) 72789 72359</p>
        </div>

        <div className="hidden md:block h-20 w-px bg-gray-200"></div>

        <div className="flex flex-col items-center md:items-center">
          <Mail className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="font-semibold text-gray-500 mb-1 text-sm">EMAIL</h3>
          <p className="text-gray-800 text-sm md:text-base">
            jaduniv.ieee@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
