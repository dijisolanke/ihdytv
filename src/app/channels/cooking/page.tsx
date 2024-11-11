
"use client";

import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import VideoGallery from "@/Components/VideoGallery";
import LoadingScreen from "@/Components/LoadingScreen";

const vidz: string[] = [
  "/muta.mp4",
  "../../../../../READY/8minsOfFlow.mp4",
  "../../../../../READY/muta.mp4",
  "../../../../../READY/mutaHard.mp4",
  "../../../../../READY/mutaHard.mp4",
];

export default function page2() {
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
  return isLoaded ? (
    <Root>
      <h1> Cooking </h1>
      <VideoGallery videos={vidz} />
    </Root>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
