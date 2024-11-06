"use client";
import React, { useState, useEffect } from "react";
import { LandingWrapper, OverlayStyle } from "./pageStyle";
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

// Style for the loading circle
const circleStyle: React.CSSProperties = {
  position: "absolute",
  top: "44vh",
  right: "45.6vw",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "conic-gradient(#e6dada 0%, #ddd 0%)", // Initial state
  transition: "background 0.1s ease", // Smooth transition
};

// Style for the text
const textStyle: React.CSSProperties = {
  position: "absolute",
  top: "50vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.5rem",
  color: "black",
  zIndex: 1,
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

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

  return !isLoaded ? (
    <LandingWrapper image={backgroundImg}>
      <LandingCard childrenData={childrenData} />
    </LandingWrapper>
  ) : (
    <OverlayStyle>
      <div style={{ position: "relative" }}>
        <div
          style={{
            ...circleStyle,
            background: `conic-gradient(#2f2c2c9b ${progress}%, #ddd ${progress}%)`,
          }}
        ></div>
        <span style={textStyle}>IHDY</span>
      </div>
    </OverlayStyle>
  );
}
