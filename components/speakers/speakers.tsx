import React from "react";
import Card from "./card";

interface Speaker {
  image: string;
  name: string;
  url: string;
  designation?: string;
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      image: "/speakers/agniv2026.png",
      name: "Agniv Ghosh",
      url: "https://www.linkedin.com/in/agnivghosh157/",
      designation: "IIM Bangalore'27 | JU CSE'23 ",
    },
    {
      image: "/speakers/avirup2026.jpg",
      name: "Avirup Nandi",
      url: "https://www.linkedin.com/in/avirup-nandi-2266a8224/",
      designation: "Technical Product Engineer at Channelplay",
    },
    {
      image: "/speakers/urwah2026.png",
      name: "Urwah Jawaid",
      url: "https://www.linkedin.com/in/urwah-jawaid/",
      designation: "Communications | Writer & Editor | Engineer",
    },
  ];

  return (
    <div id="speakers" className="min-h-screen pt-10">
      <h1 className="w-full text-center text-6xl font-bold mt-3 font-syne">
        Speakers
      </h1>

      <div className="flex justify-center items-center w-full min-h-[50vh] p-4 box-border mt-12">
        <div className="grid gap-4 w-full xl:w-4/5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {speakers.map((speaker, idx) => (
            <Card
              key={idx}
              image={speaker.image}
              name={speaker.name}
              url={speaker.url}
              designation={speaker.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
