"use client";
import { IconButton, Slider } from "@material-tailwind/react";
import { FaPlay, FaAudible } from "react-icons/fa";

function Player() {
  return (
    <>
      <div className="fixed bottom-0 w-full bg-indigo-900 flex items-center justify-around p-10 py-5 h-12">
        <IconButton>
          <FaPlay />
        </IconButton>
        <div className="w-1/2">
          <Slider defaultValue={20} />
        </div>
        <IconButton>
          <FaAudible />
        </IconButton>
      </div>
    </>
  );
}

export default Player;
