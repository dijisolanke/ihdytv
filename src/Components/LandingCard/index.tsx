"use client";

// ParentComponent.tsx
import React from "react";
import styled from "styled-components";

interface ChildProps {
  text: string;
  backgroundImage: string;
}

interface ParentComponentProps {
  childrenData: ChildProps[];
}

// Styled Parent Container
const ParentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;
`;

// Styled Child Component
const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
`;

// Styled Square for Background Image
const ImageSquare = styled.div<{ backgroundImage: string }>`
  width: 11vw;
  height: 17vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border: solid black 3px;
  border-radius: 8px;
`;

// Styled Span for Text
const TextSpan = styled.span`
  margin-top: 3px;
  font-size: 14px;
  color: #333;
`;

const Child: React.FC<ChildProps> = ({ text, backgroundImage }) => (
  <ChildContainer>
    <ImageSquare backgroundImage={backgroundImage} />
    <TextSpan>{text}</TextSpan>
  </ChildContainer>
);

const ParentComponent: React.FC<ParentComponentProps> = ({ childrenData }) => (
  <ParentContainer>
    {childrenData.map((child, index) => (
      <Child
        key={index}
        text={child.text}
        backgroundImage={child.backgroundImage}
      />
    ))}
  </ParentContainer>
);

export default ParentComponent;
