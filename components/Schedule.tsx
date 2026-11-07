import React from "react";

const seminars = [
  {
    title: "Inside the IIM Playbook",
    speaker: "by Agniv Ghosh × Erudite",
    date: "14/11/2026",
    timing: "6:00pm to 7:00pm",
  },
  {
    title: "Policy Beyond Borders",
    speaker: "by Urwah Jawaid",
    date: "18/11/2026",
    timing: "6:00pm to 7:00pm",
  },
  {
    title: "Algorithms behind Intelligence",
    speaker: "by Avirup Nandi",
    date: "20/11/2026",
    timing: "7:00pm to 8:00pm",
  },
  {
    title: "India's Space Odyssey",
    speaker: "",
    date: "22/11/2026",
    timing: "6:00pm to 7:00pm",
  },
];

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="min-h-[50vh] bg-white text-gray-800 px-8 py-12 mt-6"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-syne font-bold">
          ElevateX 4.0 - <span className="text-[#7A62C6]">Schedule</span>
        </h1>
      </div>

      {/* Seminar Grid */}
      <div className="grid grid-cols-1 gap-10 max-w-6xl xl:max-w-4xl mx-auto font-syne">
        {seminars.map((seminar, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full border-b border-gray-200 pb-6 gap-x-4"
          >
            {/* Speaker Detail Row */}
            <div className="flex flex-col items-center gap-4 mb-3 font-sans">
              <div>
                <p className="text-purple-600 text-sm sm:text-lg font-syne font-medium">
                  {seminar.date}
                </p>
                <p className="text-sm sm:text-xl font-semibold text-gray-800">
                  {seminar.timing}
                </p>
              </div>
            </div>

            {/* Seminar Info */}
            <div className="flex flex-col text-right">
              <h3 className="font-bold text-lg sm:text-3xl mb-1">
                {seminar.title}
              </h3>
              <p className="sm:text-lg font-bold text-gray-600">
                {seminar.speaker}
              </p>
            </div>
            {/* <Image
              src={seminar.img}
              alt={seminar.title}
              width={80}
              height={80}
              className="rounded-full object-cover aspect-square"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
