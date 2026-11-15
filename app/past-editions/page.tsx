"use client";
import Navig from "./components/Navig";
import PastSpeakers from "./components/PastSpeakers2";

export default function PastEditions() {
  return (
    <div className="flex flex-col w-screen items-center bg-[#faf9fc]  px-0">
      <Navig />
      <PastSpeakers />
    </div>
  );
}
