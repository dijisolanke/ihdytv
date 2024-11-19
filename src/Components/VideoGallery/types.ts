export interface VideoGalleryProps {
    videos: string[];
    thumbnailImages: string[];
    titles?: string[];
}
  
export interface OverlayProps {
    videoUrl: string;
    thumbnail: string;
    title: string;
}