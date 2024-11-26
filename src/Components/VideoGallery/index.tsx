import React, { useState, useEffect, useRef } from "react";
import {
  GalleryContainer,
  VideoItem,
  Overlay,
  VideoItemWrapper,
  VideoTitle,
} from "./style";

interface VideoGalleryProps {
  videos: string[];
  thumbnailImages: string[]; // Optional property
  titles: string[];
  column?: boolean;
}

interface OverlayProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

function VideoWithOverlay({ videoUrl, thumbnail, title }: OverlayProps) {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // Overlay visible by default
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Set up the interval to check every 5 seconds if the video is paused
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.paused) {
        setOverlayVisible(true); // Show overlay if video is paused
      }
    }, 5000); // Check every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <VideoItemWrapper>
      <VideoItem>
        <Overlay
          style={{ backgroundImage: `url(${thumbnail})` }}
          isVisible={!isOverlayVisible}
        />
        <video ref={videoRef} controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoItem>
      <VideoTitle>{title}</VideoTitle>
    </VideoItemWrapper>
  );
}

export default function VideoGallery({
  videos,
  thumbnailImages = [], // Default to an empty array
  titles = [],
  column,
}: VideoGalleryProps) {
  return (
    <GalleryContainer isColumn={column}>
      {videos.map((videoUrl, index) => (
        <VideoWithOverlay
          key={index}
          videoUrl={videoUrl}
          thumbnail={thumbnailImages[index]}
          title={titles[index] || `Video ${index + 1}`}
        />
      ))}
    </GalleryContainer>
  );
}
