"use client";

// ParentComponent.tsx
import React from "react";
import Link from "next/link";
import { ChildProps, ParentComponentProps } from "./types";
import {
  ParentContainer,
  ChildContainer,
  ImageSquare,
  TextSpan,
} from "./style";

// Styled Parent Container

const Child: React.FC<ChildProps> = ({ text, backgroundImage, url }) => (
  <Link href={url} passHref>
    <ChildContainer data-testid="child-container">
      <ImageSquare
        data-testid="image-square"
        $backgroundimage={backgroundImage}
      />
      <TextSpan>{text}</TextSpan>
    </ChildContainer>
  </Link>
);

const ParentComponent: React.FC<ParentComponentProps> = ({ childrenData }) => (
  <ParentContainer data-testid="parent-container">
    {childrenData.map((child, index) => (
      <Child
        key={index}
        text={child.text}
        backgroundImage={child.backgroundImage}
        url={child.url}
      />
    ))}
  </ParentContainer>
);

export default ParentComponent;
