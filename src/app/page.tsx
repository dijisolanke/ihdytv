"use client";
import Root from "./pageStyle";
import LandingCard from "@/Components/LandingCard";

import cooking from "@/../public/Cooking.png";
import music from "@/../public/Music.png";
import sleep from "@/../public/Sleep.png";
import randomImg from "@/../public/Random.png";
import image from "../../public/tvWallPaper.png";

const backgroundImg = image.src;

const cookingUrl = cooking.src;
const musicUrl = music.src;
const sleepUrl = sleep.src;
const randomUrl = randomImg.src;

export default function Home() {
  const childrenData = [
    { text: "Cooking", backgroundImage: cookingUrl },
    { text: "Music", backgroundImage: musicUrl },
    { text: "Stories", backgroundImage: sleepUrl },
    { text: "Random", backgroundImage: randomUrl },
  ];

  return (
    <Root image={backgroundImg}>
      <LandingCard childrenData={childrenData} />
    </Root>
  );
}
