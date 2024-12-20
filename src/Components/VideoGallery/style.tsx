import styled from "styled-components";

// Define a type for the overlay prop
interface OverlayProps {
  isVisible: boolean;
}

interface GalleryProps {
  isColumn?: boolean;
}

const VideoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 calc(33.33% - 16px);
  max-width: calc(33.33% - 16px);

  @media (max-width: 900px) {
    max-width: 80%;
  }
`;
// Styled component for the gallery container with Flexbox
const GalleryContainer = styled.div<GalleryProps>`
  display: flex;
  flex-direction: ${(props) => props.isColumn && "column"};
  flex-wrap: wrap;
  gap: 22px; // Adds some space between video items
  justify-content: center; // Centers items horizontally
  padding: 21px;
  align-items: ${(props) => (props.isColumn ? "center" : "unset")};
`;

// Styled component for each video item
const VideoItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;

  @media (max-width: 900px) {
    aspect-ratio: 9 / 11;
  }

  video {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    /* object-fit: cover; */

    @media (max-width: 900px) {
      width: 60vw;
    }
  }
`;

// New component for the title
const VideoTitle = styled.p`
  margin-top: 4px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

// Styled component for the overlay image with typed props
const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px; // Match the video's rounded corners

  cursor: pointer;
  transition: opacity 0.3s ease; // Optional: fade-out effect

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) =>
    props.isVisible ? "auto" : "none"}; // Disable interaction when hidden
`;

export { GalleryContainer, VideoItem, Overlay, VideoItemWrapper, VideoTitle };
