import styled from "styled-components";

// Styled component for the gallery container with Flexbox
const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Adds some space between video items
  justify-content: center; // Centers items horizontally
  padding: 16px;
`;

// Styled component for each video item
const VideoItem = styled.div`
  flex: 1 1 calc(33.33% - 16px); // Ensures three items per row
  max-width: calc(33.33% - 16px); // Max width of each video item
  display: flex;
  justify-content: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px; // Optional: adds rounded corners to videos
  }
`;

export { GalleryContainer, VideoItem };
