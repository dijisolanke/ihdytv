// LoadingOverlay.js

import React, { useState, useEffect } from "react";
import { OverlayStyle, LoadingText, LoadingCircle } from "./style";

interface LoadingOverlayProps {
  progress: number; // Explicitly type progress as a number
}

// Inline style for text with opacity transition
const textStyle: React.CSSProperties = {
  position: "absolute",
  top: "50vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.5rem",
  color: "black",
  zIndex: 1,
  opacity: 0,
  transition: "opacity 1.5s ease",
};

// LoadingOverlay component
const LoadingScreen = ({ progress }: LoadingOverlayProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect
  }, []);

  return (
    <OverlayStyle>
      <div style={{ position: "relative" }}>
        <LoadingCircle progress={progress} />
        <LoadingText style={{ opacity: fadeIn ? 1 : 0 }}>IHDY</LoadingText>
      </div>
    </OverlayStyle>
  );
};

export default LoadingScreen;
