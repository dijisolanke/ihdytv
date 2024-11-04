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
    { text: "First Item", backgroundImage: cookingUrl },
    { text: "Second Item", backgroundImage: musicUrl },
    { text: "Third Item", backgroundImage: sleepUrl },
    { text: "fourth Item", backgroundImage: randomUrl },
  ];

  return (
    <Root image={backgroundImg}>
      <LandingCard childrenData={childrenData} />
    </Root>
  );
}
