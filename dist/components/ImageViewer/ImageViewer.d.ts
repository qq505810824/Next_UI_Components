import React from 'react';
interface ImageViewerProps {
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
declare const ImageViewer: React.ForwardRefExoticComponent<ImageViewerProps & React.RefAttributes<HTMLDivElement>>;
export default ImageViewer;
export type { ImageViewerProps };
//# sourceMappingURL=ImageViewer.d.ts.map