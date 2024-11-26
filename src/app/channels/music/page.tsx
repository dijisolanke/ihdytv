"use client";
import { getMusic } from "../../../../sanity/sanity.utils";
import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import VideoGallery from "@/Components/VideoGallery";
import LoadingScreen from "@/Components/LoadingScreen";
import { MusicType } from "../types";

export default function Music() {
  const [musicData, setMusicData] = useState<MusicType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    async function fetchMusic() {
      try {
        // Start a smooth progress animation
        progressInterval = setInterval(() => {
          setProgress((prev) => Math.min(prev + 1, 95)); // Increment by 1 until 95%
        }, 1000); // Update every 100ms

        const data: MusicType[] = await getMusic();
        setMusicData(data || []);

        // Once data is fetched, complete the progress
        setProgress(100);
      } catch (error) {
        console.error("Error fetching music data:", error);
      } finally {
        clearInterval(progressInterval);
        setIsLoading(false);
      }
    }

    fetchMusic();

    // Cleanup interval on component unmount
    return () => clearInterval(progressInterval);
  }, []);

  return isLoading ? (
    <LoadingScreen progress={progress} />
  ) : (
    <Root>
      <h1> Music </h1>
      <VideoGallery
        videos={musicData.map((item) => item.videoFile.asset.url)}
        thumbnailImages={musicData.map((item) => item.coverImage.asset.url)}
        titles={musicData.map((item) => item.title)}
      />
    </Root>
  );
}
