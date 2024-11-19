import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoGallery from "..";

// Mock the styled components
jest.mock("../style", () => ({
  GalleryContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="gallery-container">{children}</div>
  ),
  VideoItemWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="video-item-wrapper">{children}</div>
  ),
  VideoItem: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="video-item" {...props}>
      {children}
    </div>
  ),
  Overlay: ({
    isVisible,
    ...props
  }: { isVisible: boolean } & React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="overlay" data-visible={isVisible} {...props} />
  ),
  VideoTitle: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="video-title">{children}</div>
  ),
}));

describe("VideoGallery", () => {
  const mockVideos = ["video1.mp4", "video2.mp4"];
  const mockThumbnails = ["thumb1.jpg", "thumb2.jpg"];
  const mockTitles = ["Video 1", "Video 2"];

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("renders the correct number of videos", () => {
    // Arrange
    const props = {
      videos: mockVideos,
      thumbnailImages: mockThumbnails,
      titles: mockTitles,
    };

    // Act
    render(<VideoGallery {...props} />);

    // Assert
    expect(screen.getAllByTestId("video-item-wrapper")).toHaveLength(2);
  });

  test("renders default titles when not provided", () => {
    // Arrange
    const props = { videos: mockVideos, thumbnailImages: mockThumbnails };

    // Act
    render(<VideoGallery {...props} />);

    // Assert
    expect(screen.getByText("Video 1")).toBeInTheDocument();
    expect(screen.getByText("Video 2")).toBeInTheDocument();
  });

  test("overlay is initially visible", () => {
    // Arrange
    const props = { videos: mockVideos, thumbnailImages: mockThumbnails };

    // Act
    render(<VideoGallery {...props} />);

    // Assert
    const overlays = screen.getAllByTestId("overlay");
    overlays.forEach((overlay) => {
      expect(overlay).toHaveAttribute("data-visible", "true");
    });
  });

  test("overlay hides on mouse enter and shows on mouse leave when paused", () => {
    // Arrange
    const props = {
      videos: [mockVideos[0]],
      thumbnailImages: [mockThumbnails[0]],
    };
    render(<VideoGallery {...props} />);
    const videoItem = screen.getByTestId("video-item");
    const overlay = screen.getByTestId("overlay");

    // Act & Assert
    fireEvent.mouseEnter(videoItem);
    expect(overlay).toHaveAttribute("data-visible", "false");

    fireEvent.mouseLeave(videoItem);
    expect(overlay).toHaveAttribute("data-visible", "true");
  });

  test("overlay hides and video plays on click", () => {
    // Arrange
    const props = {
      videos: [mockVideos[0]],
      thumbnailImages: [mockThumbnails[0]],
    };
    render(<VideoGallery {...props} />);
    const videoItem = screen.getByTestId("video-item");
    const overlay = screen.getByTestId("overlay");
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    video.play = jest.fn();

    // Act
    fireEvent.click(videoItem);

    // Assert
    expect(overlay).toHaveAttribute("data-visible", "false");
    expect(video.play).toHaveBeenCalled();
  });

  test("overlay shows after 5 seconds if video is paused", () => {
    // Arrange
    const props = {
      videos: [mockVideos[0]],
      thumbnailImages: [mockThumbnails[0]],
    };
    render(<VideoGallery {...props} />);
    const videoItem = screen.getByTestId("video-item");
    const overlay = screen.getByTestId("overlay");
    const video = screen.getByRole("video");
    Object.defineProperty(video, "paused", { value: true });

    // Act
    fireEvent.mouseEnter(videoItem);
    expect(overlay).toHaveAttribute("data-visible", "false");

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Assert
    expect(overlay).toHaveAttribute("data-visible", "true");
  });
});
