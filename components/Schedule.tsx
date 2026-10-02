import React from "react";

const seminars = [
  { title: "In The Horizon: The Postgrad Fork", img: "/speaker.png", speaker:"Raman Trivedi", date: "29/10/2026", timing: "7:00pm to 8:00pm" },
  { title: "Decoding CAT: the Top 0.1% Paradox Unmasked", img: "/speaker.png", speaker:"Soumyadeep Pal", date: "1/11/2026", timing: "7:00pm to 8:00pm" },
  { title: "CareerOS: Building Resume_Placement.exe", img: "/speaker.png", speaker:"Sayandeep Sarkar", date: "2/11/2026", timing: "7:30pm to 8:30pm" },
  { title: "The Big Data Equation: Thinking Beyond Spreadsheets", img: "/speaker.png", speaker:"Rahul Halder", date: "8/11/2026", timing: "7:00pm to 8:00pm" },
  { title: "Sakura Opportunities: Scholarships and SDEs in Japan", img: "/speaker.png", speaker:"Nandini Bagga", date: "9/11/2026", timing: "7:00pm to 8:00pm" },
  { title: "AI/Ml:  Mind over Model - A Deep-Learning-Dive into AI and ML", img: "/speaker.png", speaker:"Saptarshi Pani", date: "15/11/2026", timing: "7:00pm to 8:00pm" },
  { title: "Let's Git Going: Sneak Peek Into Open Source", img: "/speaker.png", speaker:"Ansh Sarkar", date: "16/11/2026", timing: "7:00pm to 8:00pm" },
  { title: "Decode UI/UX", img: "/speaker.png", speaker:"Punit Chawla", date: "22/11/2026", timing: "7:00pm to 8:00pm" },
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
          ElevateX 4.0 - <span className="text-blue-600">Schedule</span>
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
                <p className="text-blue-600 text-sm sm:text-lg font-syne font-medium">
                  {seminar.date}
                </p>
                <p className="text-sm sm:text-xl font-semibold text-gray-800">
                  {seminar.timing}
                </p>
              </div>
            </div>

            {/* Seminar Info */}
            <div className="flex flex-col text-right">
              <h3 className="font-bold text-lg sm:text-3xl mb-1">{seminar.title}</h3>
              <p className="sm:text-lg font-bold text-gray-600">by {seminar.speaker}</p>
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
