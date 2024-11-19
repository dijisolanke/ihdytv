import React, { useState, useEffect, useRef } from "react";
import { VideoGalleryProps, OverlayProps } from "./types";
import {
  GalleryContainer,
  VideoItem,
  Overlay,
  VideoItemWrapper,
  VideoTitle,
} from "./style";

function VideoWithOverlay({ videoUrl, thumbnail, title }: OverlayProps) {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // Overlay visible by default
  const [isPaused, setPaused] = useState(true); // Video is initially paused
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

  const handleMouseEnter = () => {
    setOverlayVisible(false); // Hide overlay when mouse enters the video frame
  };

  const handleMouseLeave = () => {
    if (videoRef.current && videoRef.current.paused) {
      setOverlayVisible(true); // Show overlay when mouse leaves and video is paused
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      // If the video is paused, hide the overlay and play the video
      setOverlayVisible(false);
      videoRef.current.play();
      setPaused(false); // Mark video as playing
    }
  };

  return (
    <VideoItemWrapper>
      <VideoItem
        onMouseEnter={handleMouseEnter} // Hide overlay on mouse enter
        onMouseLeave={handleMouseLeave} // Show overlay if video is paused on mouse leave
        onClick={handleVideoClick} // Play video and hide overlay on click
      >
        <Overlay
          style={{ backgroundImage: `url(${thumbnail})` }}
          isVisible={isOverlayVisible}
        />
        <video ref={videoRef} controls data-testid="video-element">
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
  thumbnailImages,
  titles = [],
}: VideoGalleryProps) {
  return (
    <GalleryContainer>
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
