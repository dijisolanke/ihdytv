"use client";
import { getCooking as getCookingData } from "../../../../sanity/sanity.utils";
import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import VideoGallery from "@/Components/VideoGallery";
import LoadingScreen from "@/Components/LoadingScreen";
import { CookingType } from "../types";

export default function Cooking() {
  // const [music, setMusic] = useState(null);
  const [cookingData, setCookingData] = useState<CookingType[]>([]);

  //fetch the music videos
  useEffect(() => {
    async function fetchCooking() {
      const cookingData = await getCookingData();
      setCookingData(cookingData);
      console.log("fjaymoney", cookingData);
    }
    fetchCooking();
  }, []);

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
      <VideoGallery
        videos={cookingData.map((item) => item.videoFile.asset.url)}
        thumbnailImages={cookingData.map((item) => item.coverImage.asset.url)} // Array of thumbnail URLs
        titles={cookingData.map((item) => item.title)}
      />
    </Root>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
