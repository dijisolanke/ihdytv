"use client";
import { getMusic } from "../../../../sanity/sanity.utils";
import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import VideoGallery from "@/Components/VideoGallery";
import LoadingScreen from "@/Components/LoadingScreen";
import { Music } from "../types";

export default function Music() {
  const [musicData, setMusicData] = useState<Music[]>([]);

  //fetch the music videos
  useEffect(() => {
    async function fetchMusic() {
      const musicData: Music[] = await getMusic();
      setMusicData(musicData || []);
    }
    fetchMusic();
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
      <h1> Music </h1>
      <VideoGallery
        videos={musicData.map((item) => item.videoFile.asset.url)}
        thumbnailImages={musicData.map((item) => item.coverImage.asset.url)} // Array of thumbnail URLs
        titles={musicData.map((item) => item.title)}
      />
    </Root>
  ) : (
    <LoadingScreen progress={progress} />
  );
}
