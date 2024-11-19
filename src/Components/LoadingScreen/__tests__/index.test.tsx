import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import LoadingScreen from ".."; // Adjust the path based on your file structure

jest.mock("../style", () => ({
  OverlayStyle: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="overlay-style">{children}</div>
  ),
  LoadingText: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="loading-text" {...props} />
  ),
  LoadingCircle: ({ progress }: { progress: number }) => (
    <div data-testid="loading-circle" data-progress={progress} />
  ),
}));

describe("LoadingScreen", () => {
  it("renders the overlay container and its child components", () => {
    // Arrange
    const progress = 50;

    // Act
    render(<LoadingScreen progress={progress} />);

    // Assert
    expect(screen.getByTestId("overlay-style")).toBeInTheDocument();
    expect(screen.getByTestId("loading-circle")).toBeInTheDocument();
    expect(screen.getByTestId("loading-circle")).toHaveAttribute(
      "data-progress",
      progress.toString()
    );
    expect(screen.getByTestId("loading-text")).toBeInTheDocument();
  });

  it("matches the snapshot for consistent UI", () => {
    // Arrange
    const progress = 90;

    // Act
    const { asFragment } = render(<LoadingScreen progress={progress} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
