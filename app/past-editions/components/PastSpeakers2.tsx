import { Button } from "@/components/ui/button";
import FlipCardW3 from "./FlipCardW3";

const speakers = [
  {
    name: "Raman Trivedi",
    image: "/speakers/raman.jpg",
    designation: "City Head at Jamboree Education India",
    session: "In The Horizon: The Postgrad Fork",
    url: "https://www.linkedin.com/in/raman-trivedi-530a871a5/",
  },
  {
    name: "Soumyadeep Pal",
    image: "/speakers/soumyadeep.jpeg",
    designation: "CAT 99.9 percentile, IIM Calcutta",
    session: "Decoding CAT: the Top 0.1% Paradox Unmasked",
    url: "https://www.linkedin.com/in/realspal/",
  },
  {
    name: "Sayandeep Sarkar",
    image: "/speakers/sayandeep.jpeg",
    designation: "Software Engineer at ICICI Bank",
    session: "CareerOS: Building Resume_Placement.exe",
    url: "https://www.linkedin.com/in/sayandeep-sarkar-530688201/",
  },
  {
    name: "Rahul Halder",
    image: "/speakers/rahul.jpeg",
    designation: "Associate Consultant at PwC",
    session: "The Big Data Equation: Thinking Beyond Spreadsheets",
    url: "https://www.linkedin.com/in/rahul-halder-95a7ab147/",
  },
  {
    name: "Nandini Bagga",
    image: "/speakers/nandini.JPG",
    designation: "Software Engineer in Tokyo",
    session: "Sakura Opportunities: Scholarships and SDEs in Japan",
    url: "https://www.linkedin.com/in/nandini-bagga-0803/",
  },
  {
    name: "Saptarshi Pani",
    image: "/speakers/pani_da.jpg",
    designation: "Chief Data and Research Scientist at Alchemyst AI",
    session: "AI/ML: Mind over Model",
    url: "https://www.linkedin.com/in/panisap/",
  },
  {
    name: "Ansh Sarkar",
    image: "/speakers/ansh.jpg",
    designation: "C4GT mentor and mentee",
    session: "Let's Git Going: Sneak Peek Into Open Source",
    url: "https://www.linkedin.com/in/ansh-sarkar/",
  },
  {
    name: "Punit Chawla",
    image: "/speakers/punit.jpg",
    designation: "Founder of Designwings UX/UI School",
    session: "Decode UI/UX",
    url: "https://youtube.com/@punitchawla?si=FbP6lm6Ke5LgnR3c",
  },
];

export default function PastSpeakers() {
  return (
    <section className="min-h-screen w-full bg-[#faf9fc] px-5 pb-20 pt-16 text-[#191433] sm:px-8 sm:pt-20">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4">
        <header className="border-b border-[#ded9e9] pb-8 sm:pb-10">
          <p className="mb-3 font-syne text-lg font-bold uppercase tracking-[0.18em] text-[#817b8e]">
            ElevateX <span className="text-indigo-700">3.0</span> archive
          </p>
          <h1 className="font-syne text-4xl font-bold sm:text-6xl">
            Past Speakers
          </h1>
          <p className="mt-4 max-w-xl leading-6 text-[#625e70] text-lg">
            Meet the people and ideas that have shaped the{" "}
            <span className="font-semibold text-purple-700">ElevateX</span>{" "}
            stage.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 pt-10 sm:pt-12">
          {speakers.map((speaker, index) => (
            <FlipCardW3
              key={speaker.name}
              image={speaker.image}
              imageAlt={speaker.name}
              width={300}
              height={400}
              front={
                <div className="relative flex h-full w-full flex-col justify-between p-6 text-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/20" />
                  <p className="relative font-syne text-xs font-bold uppercase tracking-[0.16em] text-white/95">
                    Speaker / {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="relative">
                    <h2 className="font-syne text-2xl font-bold leading-tight">
                      {speaker.name}
                    </h2>
                    <p className="mt-2 text-sm leading-5 text-white/85">
                      {speaker.designation}
                    </p>
                  </div>
                </div>
              }
              back={
                <div className="flex h-full flex-col justify-between p-6 text-left">
                  <div>
                    <p className="font-syne text-xs font-bold uppercase tracking-[0.16em] text-[#bca9f5]">
                      ElevateX 3.0 / {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 font-syne text-2xl font-bold leading-tight">
                      {speaker.name}
                    </h2>
                    <p className="mt-3 text-md leading-6 text-white/75">
                      {speaker.designation}
                    </p>
                  </div>
                  <div className="border-l-2 border-[#bca9f5] pl-4 mt-auto mb-10">
                    <p className="font-syne text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                      Session
                    </p>
                    <p className="mt-2 text-base font-semibold leading-6">
                      {speaker.session}
                    </p>
                  </div>
                  <Button
                    className="font-syne cursor-pointer hover:bg-violet-900"
                    onClick={() =>
                      window.open(speaker.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    Visit social media
                  </Button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
