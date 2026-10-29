"use client";
import { signOut } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getEvents,
  registerForEvent,
  type EventType,
} from "@/lib/eventRegistration";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import TextGradient from "@/components/waveText21Dev";

const handleSignOut = () => {
  signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/login");
      },
    },
  });
};

interface UserType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role: string;
  year: string;
  department: string;
  college: string;
  phone: string;
}

const navItems: string[] = [
    "About",
    "Contact",
    "Speakers",
    "Schedule",
  ];

function ClientCode({ user }: { user: UserType }) {
  //   const { data, isPending } = useSession();
  const [registeredEvents, setRegisteredEvents] = useState<EventType[]>([
    // {
    //   id: "sample-registered-1",
    //   name: "Product Design Workshop",
    //   eventDate: "Fri Oct 30 2026",
    //   registrationsOpen: true,
    //   registered: true,
    //   eventUrl: "https://example.com/product-design-workshop",
    // },
    // {
    //   id: "sample-registered-2",
    //   name: "Building with Generative AI",
    //   eventDate: "Sun Nov 01 2026",
    //   registrationsOpen: true,
    //   registered: true,
    //   eventUrl: null,
    // },
  ]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([
    // {
    //   id: "sample-upcoming-1",
    //   name: "Career Planning for Engineers",
    //   eventDate: "Mon Nov 02 2026",
    //   registrationsOpen: true,
    //   registered: false,
    //   eventUrl: null,
    // },
    // {
    //   id: "sample-upcoming-2",
    //   name: "Open Source: Getting Started",
    //   eventDate: "Sun Nov 08 2026",
    //   registrationsOpen: true,
    //   registered: false,
    //   eventUrl: null,
    // },
    // {
    //   id: "sample-upcoming-3",
    //   name: "Machine Learning in Practice",
    //   eventDate: "Sun Nov 15 2026",
    //   registrationsOpen: false,
    //   registered: false,
    //   eventUrl: null,
    // },
  ]);
  //deletelater sample events
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [registering, setRegistering] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = (eventId: string, userId: string) => {
    setRegistering(true);
    registerForEvent(eventId, userId)
      .then((res: boolean) => {
        if (res) {
          toast.success("Registered successfully!");
          const newEvent = upcomingEvents?.find((e) => e.id === eventId);
          if (newEvent) {
            setRegisteredEvents((prev) => {
              if (prev) return [...prev, newEvent];
              else return [newEvent];
            });
            setUpcomingEvents((prev) => prev?.filter((e) => e.id !== eventId));
          }
        } else {
          toast.error("Error while registering");
        }
      })
      .finally(() => setRegistering(false));
  };

  useEffect(() => {
    // if (isPending) return;
    // if (!data || !data.session) {
    //   router.push("/login?from=dashboard");
    //   return;
    // }

    getEvents(user.id).then((res) => {
      setRegisteredEvents(res.filter((e: EventType) => e.registered));
      setUpcomingEvents(res.filter((e: EventType) => !e.registered));
      setEventsLoading(false);
    });
  }, [user, router]);

  //   if (isPending || !data || !data.session)
  //     return (
  //       <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-400 grid place-items-center w-full">
  //         <h1 className="text-4xl font-bold font-syne">Loading...</h1>
  //       </div>
  //     );

  const openEventsCount =
    upcomingEvents?.filter((e) => e.registrationsOpen).length ?? 0;

  return (
    <div className="relative font-syne min-h-screen bg-gradient-to-br from-[#B496E6]/50 to-[#8A6AD0] flex flex-col items-center px-4 sm:px-8 lg:px-12 py-8 gap-y-0 text-slate-900">
      {/* Top Navbar */}
      <header className="w-full max-w-6xl
       border-b border-blue-900/15
       px-0 pb-6 flex flex-wrap items-center justify-between gap-4">
        {/* <Link
          href={"/"}
          className="cursor-pointer hover:scale-105 transition duration-300 flex items-center"
        >
          <Image
            height={140}
            width={140}
            src="/elevatex-logo.png"
            alt="ElevateX Logo"
            className="h-10 w-auto object-contain"
          />
        </Link> */}
        <Link href={"/"} className="font-sans">
            {" "}
            <span className="text-[#100E26] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Elevate
            </span>
            <TextGradient
              as="h1"
              // colors={["#ffffff", "#B496E6", "#7A62C6", "#6236A8", "#ffffff"]}
              colors={[
                "#4411C6", // Bright highlight / white at the top of the letters
                "#ffffff", // Muted metallic lavender-silver midtone
                "#4411C6", // Deep electric blue-purple base
                "#8E4CE3", // Vibrant mid-violet / purple sheen
                "#000000", // Dark near-black background / deep shadow tone
              ]}
              duration={15}
              className="text-3xl md:text-4xl lg:text-5xl font-stretch-110% tracking-tight scale-[150%]"
            >
              X
            </TextGradient>{" "}
            <span className="text-[#7A62C6] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              &nbsp;&nbsp;4.0
            </span>
          </Link>

        <nav className="lg:flex md:flex flex-wrap items-center gap-3 sm:gap-6 hidden">
          {/* <Link
            href={"/#schedule"}
            className="text-sm sm:text-base font-medium text-blue-900 hover:text-blue-700 underline underline-offset-4 transition-colors"
          >
            Schedule
          </Link>
          <Link
            href={"/#speakers"}
            className="text-sm sm:text-base font-medium text-blue-900 hover:text-blue-700 underline underline-offset-4 transition-colors"
          >
            Speakers
          </Link>
          <button
            className="text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 active:scale-95 px-4 py-2 rounded-xl cursor-pointer shadow-sm transition-all duration-200 flex items-center gap-2"
            onClick={() => handleSignOut()}
          >
            <svg
               xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button> */}
          {navItems.map((item: string) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                // onClick={() => handleNavClick(item)}
                className="text-[#4411C6] font-bold hover:text-[#191433] transition duration-150 ease-in-out py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#191433] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </a>
            ))}
            <button
            className="text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 active:scale-95 px-4 py-2 rounded-xl cursor-pointer shadow-sm transition-all duration-200 flex items-center gap-2"
            onClick={() => handleSignOut()}
          >
            <svg
               xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </nav>
      </header>

      {/* Hero Welcome Banner */}
      <section className="w-full max-w-6xl
       border-b border-gray-900/15
       h-full
       py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h1>
          <h2 className="font-medium text-lg sm:text-2xl text-blue-950">
            Welcome, <span className="font-bold text-blue-800">{user.name}</span>!
          </h2>
          <p className="text-sm sm:text-base text-slate-800 pt-1">
            Check out our{" "}
            <Link
              href={"/#schedule"}
              className="font-semibold text-blue-800 hover:text-blue-600 underline underline-offset-4 transition-colors"
            >
              Schedule
            </Link>{" "}
            and{" "}
            <Link
              href={"/#speakers"}
              className="font-semibold text-blue-800 hover:text-blue-600 underline underline-offset-4 transition-colors"
            >
              Speakers
            </Link>{" "}
            to learn more!
          </p>
        </div>

        {/* Summary Stat Pills */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full md:w-auto">
          <div className="flex-1 sm:flex-initial bg-white/45 border border-white/60 rounded-xl px-5 py-4 min-w-[140px] shadow-sm">
            <p className="text-xs uppercase tracking-wider text-blue-900/80 font-semibold">
              Registered
            </p>
            <p className="text-3xl font-bold text-blue-800 mt-1">
              {registeredEvents ? registeredEvents.length : 0}
            </p>
          </div>
          <div className="flex-1 sm:flex-initial bg-purple-400/30 border border-purple-300/60 rounded-xl px-5 py-4 min-w-[140px] shadow-sm">
            <p className="text-xs uppercase tracking-wider text-blue-900/80 font-semibold">
              Open to Join
            </p>
            <p className="text-3xl font-bold text-blue-900 mt-1">
              {openEventsCount}
            </p>
          </div>
        </div>
      </section>

      {/* Events Two-Column Section */}
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Registered Events Card */}
        <div className="flex flex-col justify-between 
        border-gray-500/20
        sm:py-8 py-6 w-full gap-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-0">
              <div className="flex items-center gap-3">
                
                <h3 className="text-2xl font-bold text-blue-800">
                  Registered Events
                </h3>
              </div>
              <span className="bg-blue-800/15 text-blue-900 text-sm font-bold px-3 py-1 rounded-full">
                {registeredEvents ? registeredEvents.length : 0}
              </span>
            </div>

            {registeredEvents && registeredEvents.length > 0 ? (
              <div className="flex flex-col gap-y-3.5">
                {registeredEvents.map((e) => (
                  <div
                    key={e.id}
                    className="w-full bg-white/45 hover:bg-white/60 transition-all duration-200 border border-white/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="space-y-1">
                      {e.eventUrl ? (
                        <Link
                          href={e.eventUrl}
                          className="font-semibold text-blue-900 hover:text-blue-700 underline underline-offset-2 inline-flex items-center gap-1.5"
                        >
                          <span>{e.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <p className="font-semibold text-slate-900">{e.name}</p>
                      )}
                      <div className="flex items-center gap-1.5 text-sm text-blue-900/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{e.eventDate}</span>
                      </div>
                    </div>


                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-blue-900/25 bg-white/20 rounded-xl p-8 text-center text-blue-950/80 font-medium">
                {eventsLoading ? "Loading..." : "No registered events."}
              </div>
            )}

              <div className="w-full text-center px-3">
              Before each event, the event link will be sent to your registered
              email!
            </div>
          </div>


        </div>

        {/* Upcoming Events Card */}
        <div className="flex flex-col justify-between 
        border-gray-500/20
        sm:py-8 py-6 w-full gap-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between  pb-0">
              <div className="flex items-center gap-3">
                
                <h3 className="text-2xl font-bold text-blue-800">
                  Upcoming Events
                </h3>
              </div>
              <span className="bg-purple-500/20 text-blue-900 text-sm font-bold px-3 py-1 rounded-full">
                {upcomingEvents ? upcomingEvents.length : 0}
              </span>
            </div>

            {upcomingEvents && upcomingEvents.length > 0 ? (
              <div className="flex flex-col gap-y-3.5">
                {upcomingEvents.map((e) => (
                  <div
                    key={e.id}
                    className="w-full bg-white/45 hover:bg-white/60 transition-all duration-200 border border-white/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">{e.name}</p>
                      <div className="flex items-center gap-1.5 text-sm text-blue-900/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{e.eventDate}</span>
                      </div>
                    </div>

                    <button
                      className={`sm:w-auto w-full py-2 px-5 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                        e.registrationsOpen
                          ? "bg-purple-400 hover:bg-blue-500 text-slate-950 hover:text-white cursor-pointer shadow-sm active:scale-95"
                          : "bg-white/40 text-slate-600 border border-slate-400/30 cursor-not-allowed"
                      }`}
                      onClick={() => handleRegister(e.id, user.id)}
                      disabled={registering || e.registrationsOpen === false}
                    >
                      {e.registrationsOpen ? "Register" : "Registration Closed"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-blue-900/25 bg-white/20 rounded-xl p-8 text-center text-blue-950/80 font-medium">
                {eventsLoading
                  ? "Loading..."
                  : "No upcoming events to register."}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientCode;