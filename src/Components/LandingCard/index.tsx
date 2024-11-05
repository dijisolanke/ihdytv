"use client";

// ParentComponent.tsx
import React from "react";

import {
  ParentContainer,
  ChildContainer,
  ImageSquare,
  TextSpan,
} from "./style";

interface ChildProps {
  text: string;
  backgroundImage: string;
}

interface ParentComponentProps {
  childrenData: ChildProps[];
}

// Styled Parent Container

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
