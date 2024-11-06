import styled, { keyframes } from "styled-components";

// Keyframe animation for fading in the text
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Style for the overlay (full screen and centered)
export const OverlayStyle = styled.div`
  position: "fixed";
  top: 0;
  left: 0;
  width: "100%";
  height: "100%";
  background-color: "white";
  display: "flex";
  justify-content: "center";
  align-items: "center";
  font-size: "2rem";
  color: "black";
  z-index: 9999;
`;

// Loading circle with dynamic background based on progress
export const LoadingCircle = styled.div<{ progress: number }>`
  position: absolute;
  top: 43.6vh;
  right: 46.2%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ progress }) =>
    `conic-gradient(#9c9999 ${progress}%, #ddd ${progress}%)`};
  transition: background 0.1s ease;
`;

// Style for the text that fades in
export const LoadingText = styled.span`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: black;
  z-index: 1;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease forwards;
`;
