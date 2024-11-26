"use client";
import { getCooking as getCookingData } from "../../../../sanity/sanity.utils";
import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import VideoGallery from "@/Components/VideoGallery";
import LoadingScreen from "@/Components/LoadingScreen";
import { CookingType } from "../types";

export default function Cooking() {
  const [cookingData, setCookingData] = useState<CookingType[]>([]);

  //fetch the music videos
  useEffect(() => {
    async function fetchCooking() {
      const cookingData = await getCookingData();
      setCookingData(cookingData);
    }
    fetchCooking();
  }, []);

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

  return isLoaded ? (
    <Root>
      <h1> Cooking </h1>
      <VideoGallery
        videos={cookingData.map((item) => item.videoFile.asset.url)}
        thumbnailImages={cookingData.map((item) => item.coverImage.asset.url)} // Array of thumbnail URLs
        titles={cookingData.map((item) => item.title)}
        column
      />
    </Root>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
