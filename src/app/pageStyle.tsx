import styled from "styled-components";

interface LandingProps {
  image: string;
}

// Wrapper for the main landing page content
export const LandingWrapper = styled.div<LandingProps>`
  margin-top: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw; /* Make it responsive to the viewport width */
  height: 60vh;
  padding: 2rem;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
