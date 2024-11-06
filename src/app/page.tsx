"use client";
import React, { useState, useEffect } from "react";
import { LandingWrapper } from "./pageStyle";
import LandingCard from "@/Components/LandingCard";
import LoadingScreen from "@/Components/LoadingScreen";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 5, 100)); // Increase progress by 5% each time
    }, 100); // Update every 100ms

    if (progress === 100) {
      setIsLoaded(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const childrenData = [
    {
      text: "Cooking",
      backgroundImage: cookingUrl,
      url: "./channels/cooking",
    },
    { text: "Music", backgroundImage: musicUrl, url: "www.google.com" },
    { text: "Stories", backgroundImage: sleepUrl, url: "www.google.com" },
    { text: "Random", backgroundImage: randomUrl, url: "www.google.com" },
  ];

  return isLoaded ? (
    <LandingWrapper image={backgroundImg}>
      <LandingCard childrenData={childrenData} />
    </LandingWrapper>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
