"use client";
import { Card, CardBody } from "@material-tailwind/react";
function MusicCard() {
  return (
    <Card className="bg-transparent">
      <CardBody>
        <img
          className="rounded-t-lg w-full"
          src="https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg"
          alt=""
        />
        <div className="z-10 bg-blue-gray-800 text-center rounded-b-lg">
          <h1 className="text-lg font-bold text-white">Rihanna</h1>
          <p className="text-white">Album</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default MusicCard;
