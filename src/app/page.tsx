"use client";
import React, { useState, useEffect } from "react";
import { LandingWrapper } from "./pageStyle";
import LandingCard from "@/Components/LandingCard";
import LoadingScreen from "@/Components/LoadingScreen";

import cookingImg from "@/../public/Cooking.png";
import musicImg from "@/../public/Music.png";
import sleepImg from "@/../public/Sleep.png";
import randomImg from "@/../public/Random.png";
import tvImage from "../../public/tvWallPaper.png";

const backgroundImg = tvImage.src;

const cookingUrl = cookingImg.src;
const musicUrl = musicImg.src;
const sleepUrl = sleepImg.src;
const randomUrl = randomImg.src;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkReadyState = () => {
      switch (document.readyState) {
        case "loading":
          setProgress(25);
          break;
        case "interactive":
          setProgress(75);
          break;
        case "complete":
          setProgress(100);
          setIsLoaded(true);
          break;
      }
    };

    // Initial check
    checkReadyState();

    // Add event listener for readystatechange
    document.addEventListener("readystatechange", checkReadyState);

    // Cleanup
    return () => {
      document.removeEventListener("readystatechange", checkReadyState);
    };
  }, []);

  const childrenData = [
    {
      text: "Cooking",
      backgroundImage: cookingUrl,
      url: "./channels/cooking",
    },

    { text: "Music", backgroundImage: musicUrl, url: "./channels/music" },
    { text: "Stories", backgroundImage: sleepUrl, url: "./channels/stories" },
    { text: "Random", backgroundImage: randomUrl, url: "./channels/random" },
  ];

  return isLoaded ? (
    <LandingWrapper image={backgroundImg}>
      <LandingCard childrenData={childrenData} />
    </LandingWrapper>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
