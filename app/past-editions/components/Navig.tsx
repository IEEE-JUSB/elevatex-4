import Link from "next/link"
import { useState } from "react";
type NavItem = string;
import { LiquidButton } from "@/components/liquidButton";

export default function Navig() {
    const navItems: NavItem[] = [
      "Home",
      "About",
      "Contact",
      "Speakers",
      "Schedule",
    ];
    const [activeDot, setActiveDot] = useState(0);
    const handleNavClick = (item: NavItem): void => {
      console.log(`Navigating to ${item}`);
    };
    return (
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center py-6 md:py-8">
          {/* <Link href={"/"} className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-purple-500">
            ElevateX <span className="text-white">4.0</span>
          </Link> */}
          <Link href={"/"}>
            {" "}
            <span
              className="text-black text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
            "
            >
              ElevateX
            </span>
            {/* <TextGradient
              as="h1"
              // colors={["#ffffff", "#B496E6", "#7A62C6", "#6236A8", "#ffffff"]}
              colors={[
                "#FFFFFF", // Bright highlight / white at the top of the letters
                "#FFFFFF", // Muted metallic lavender-silver midtone
                "#8E4CE380", // Vibrant mid-violet / purple sheen
                "#4411C6", // Deep electric blue-purple base
                "#FFFFFF", // Dark near-black background / deep shadow tone
              ]}
              duration={15}
              className="text-2xl md:text-3xl lg:text-5xl font-syne tracking-tight scale-[150%] "
            >
              X
            </TextGradient>{" "} */}
            <span className="text-purple-800 text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight">
              &nbsp;&nbsp;4.0
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-lg font-medium font-syne">
            {navItems.map((item: NavItem) => (
              <a
                key={item}
                href={`${process.env.BETTER_AUTH_URL}#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className="text-black hover:text-blue-700 transition duration-150 ease-in-out py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#191433] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
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
            <LiquidButton>Register Now!</LiquidButton>
          </Link>
        </header>
      </div>
    )
}