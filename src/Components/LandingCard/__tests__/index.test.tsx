// ParentComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParentComponent from "..";
import { ParentComponentProps } from "../types";

// Mocking next/link for test environment

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
});

describe("ParentComponent", () => {
  it("renders an empty ParentContainer when no childrenData is provided", () => {
    // Arrange
    const props: ParentComponentProps = { childrenData: [] };

    // Act
    render(<ParentComponent {...props} />);

    // Assert
    const parentContainer = screen.getByTestId("parent-container");
    expect(parentContainer).toBeInTheDocument();
    expect(parentContainer).toBeEmptyDOMElement();
  });

  it("renders multiple Child components based on childrenData", () => {
    // Arrange
    const props: ParentComponentProps = {
      childrenData: [
        { text: "Child 1", backgroundImage: "image1.jpg", url: "/child1" },
        { text: "Child 2", backgroundImage: "image2.jpg", url: "/child2" },
      ],
    };

    // Act
    render(<ParentComponent {...props} />);

    // Assert
    const children = screen.getAllByTestId("child-container");
    expect(children).toHaveLength(2);
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("renders a Child component with correct text and background image", () => {
    // Arrange
    const props: ParentComponentProps = {
      childrenData: [
        { text: "Child Text", backgroundImage: "test-image.jpg", url: "/test" },
      ],
    };

    // Act
    render(<ParentComponent {...props} />);

    // Assert
    const child = screen.getByTestId("child-container");
    expect(child).toBeInTheDocument();
    const textSpan = screen.getByText("Child Text");
    expect(textSpan).toBeInTheDocument();
    const imageSquare = screen.getByTestId("image-square");
    expect(imageSquare).toHaveStyle("background-image: url(test-image.jpg)");
  });

  it("navigates correctly when a Child component is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const props: ParentComponentProps = {
      childrenData: [
        {
          text: "Clickable Child",
          backgroundImage: "click-image.jpg",
          url: "/clickable",
        },
      ],
    };

    // Act
    render(<ParentComponent {...props} />);
    const link = screen.getByRole("link", { name: "Clickable Child" }); // Use semantic role

    // Assert
    expect(link).toHaveAttribute("href", "/clickable");
    await user.click(link); // Ensure the click doesn't throw or fail
  });
});
