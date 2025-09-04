export interface ImageViewerProps {
    images: string[];
    currentIndex?: number;
    onIndexChange?: (index: number) => void;
    title?: string;
    className?: string;
    showNavigation?: boolean;
    showZoomControls?: boolean;
    showFullscreen?: boolean;
    minHeight?: string;
    maxHeight?: string;
    height?: string;
    matchParentHeight?: boolean;
}
export default function ImageViewer({ images, currentIndex, onIndexChange, title, className, showNavigation, showZoomControls, showFullscreen, minHeight, maxHeight, height, matchParentHeight }: ImageViewerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ImageViewer.d.ts.map