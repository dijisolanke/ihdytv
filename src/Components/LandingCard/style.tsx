import styled from "styled-components";

const ParentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  max-width: 852px;
  a {
    text-decoration: none;
  }
`;

// Styled Square for Background Image
const ImageSquare = styled.div<{ $backgroundimage: string }>`
  width: 11vw;
  height: 17vh;
  background-image: url(${(props) => props.$backgroundimage});
  background-size: cover;
  background-position: center;
  border: solid black 1px;
  border-radius: 8px;
  transition: border-width 0.1s ease-in-out;

  @media (max-width: 1298px) {
    width: 14vw;
    height: 19vh;
  }
  @media (max-width: 1060px) {
    width: 18vw;
    height: 18vh;
  }
  @media (max-width: 700px) {
    width: 19vw;
    height: 12vh;
  }
  @media (max-width: 340px) {
    width: 15vw;
    height: 8vh;
  }

  /* mobile landscape mode */
  @media (min-width: 1609px) and (max-height: 716px) {
    width: 8vw;
    height: 15vh;
  }
  @media (min-width: 209px) and (max-height: 750px) {
    width: 8vw;
    height: 15vh;
  }
  &:hover {
    border-width: 6px;
    cursor: pointer;
  }
`;

// Styled Child Component/parent of imageSquare above
const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  &:hover ${ImageSquare} {
    border-width: 3px;
    cursor: pointer;
  }
`;

// Styled Span for Text
const TextSpan = styled.span`
  margin-top: 3px;
  font-size: 14px;
  color: #333;
  &:hover {
    cursor: pointer;
  }
`;

export { ParentContainer, ChildContainer, ImageSquare, TextSpan };
