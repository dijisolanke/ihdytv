import React from "react";
import { GalleryContainer, VideoItem } from "./style";

interface VideoGalleryProps {
  videos: string[]; // Array of video URLs
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <GalleryContainer>
      {videos.map((videoUrl, index) => (
        <VideoItem key={index}>
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoItem>
      ))}
    </GalleryContainer>
  );
}
