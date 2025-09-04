'use client';

import React, { useCallback, useState } from 'react';

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
    height?: string; // 新增：固定高度支持
    matchParentHeight?: boolean; // 新增：是否匹配父容器高度
}

const ImageViewer = React.forwardRef<HTMLDivElement, ImageViewerProps>((
    {
        images,
        currentIndex = 0,
        onIndexChange,
        title,
        className = '',
        showNavigation = true,
        showZoomControls = true,
        showFullscreen = true,
        minHeight = '300px',
        maxHeight = '70vh',
        height,
        matchParentHeight = false
    }, ref) => {
    const [localIndex, setLocalIndex] = useState(currentIndex);
    const [scale, setScale] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const imageIndex = onIndexChange ? currentIndex : localIndex;

    const handleIndexChange = useCallback(
        (newIndex: number) => {
            const clampedIndex = Math.max(0, Math.min(newIndex, images.length - 1));
            if (onIndexChange) {
                onIndexChange(clampedIndex);
            } else {
                setLocalIndex(clampedIndex);
            }
            setScale(1); // 切换图片时重置缩放
        },
        [images.length, onIndexChange]
    );

    const handlePrevImage = () => {
        if (imageIndex > 0) {
            handleIndexChange(imageIndex - 1);
        }
    };

    const handleNextImage = () => {
        if (imageIndex < images.length - 1) {
            handleIndexChange(imageIndex + 1);
        }
    };

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.2, 3));
    };

    const handleZoomOut = () => {
        setScale((prev) => Math.max(prev - 0.2, 0.5));
    };

    const handleResetZoom = () => {
        setScale(1);
    };

    const openModal = () => {
        if (showFullscreen && images[imageIndex]) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!images || images.length === 0) {
        return (
            <div
                className={`bg-white rounded-lg shadow p-3 sm:p-4 ${matchParentHeight ? 'flex flex-col h-full' : ''
                    } ${className}`}
                style={height ? { height } : undefined}
            >
                <div
                    className={`relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center ${matchParentHeight ? 'flex-1' : ''
                        }`}
                    style={matchParentHeight ? {} : { minHeight }}
                >
                    <div className="text-center text-gray-500">
                        <svg
                            className="w-12 h-12 mx-auto mb-3 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="text-sm">No images to display</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div
                className={`bg-white rounded-lg shadow p-3 sm:p-4 ${matchParentHeight ? 'flex flex-col h-full' : ''
                    } ${className}`}
                style={height ? { height } : undefined}
            >
                {title && <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>}

                {/* 图片容器 */}
                <div
                    className={`relative bg-gray-50 rounded-lg overflow-hidden ${matchParentHeight ? 'flex-1' : 'mb-3'
                        }`}
                    style={matchParentHeight ? {} : { minHeight }}
                >
                    <div className="flex items-center justify-center h-full p-2">
                        <img
                            src={images[imageIndex]}
                            alt={`Image ${imageIndex + 1}`}
                            className={`max-w-full object-contain rounded-lg shadow-md border transition-transform duration-200 ${showFullscreen ? 'cursor-pointer' : ''
                                }`}
                            style={{
                                transform: `scale(${scale})`,
                                maxHeight: maxHeight === '70vh' ? '70vh' : 'var(--max-height, 70vh)'
                            }}
                            onClick={openModal}
                        />
                    </div>

                    {/* 缩放控制按钮 */}
                    {showZoomControls && (
                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                            <button
                                onClick={handleZoomIn}
                                className="w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md transition-colors"
                                title="Zoom In"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleZoomOut}
                                className="w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md transition-colors"
                                title="Zoom Out"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18 12H6"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleResetZoom}
                                className="w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md transition-colors"
                                title="Reset Zoom"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* 导航控制栏 */}
                {showNavigation && images.length > 1 && (
                    <div
                        className={`flex items-center justify-between ${matchParentHeight ? 'mt-3 flex-shrink-0' : ''
                            }`}
                    >
                        <button
                            onClick={handlePrevImage}
                            disabled={imageIndex === 0}
                            className="flex items-center gap-1 px-3 py-2 text-sm border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="hidden sm:inline">Previous</span>
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium">
                                Page {imageIndex + 1} / {images.length}
                            </span>
                            {showZoomControls && (
                                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                    {Math.round(scale * 100)}%
                                </span>
                            )}
                        </div>

                        <button
                            onClick={handleNextImage}
                            disabled={imageIndex === images.length - 1}
                            className="flex items-center gap-1 px-3 py-2 text-sm border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="hidden sm:inline">Next</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* 全屏查看模态框 */}
            {isModalOpen && showFullscreen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
                    <div className="relative max-w-full max-h-full">
                        {/* 关闭按钮 */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white border-2 border-gray-300 hover:border-gray-400 shadow-lg rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                            title="Close"
                        >
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* 全屏图片 */}
                        <img
                            src={images[imageIndex]}
                            alt="Full screen view"
                            className="max-w-full max-h-full object-contain"
                            onClick={closeModal}
                        />

                        {/* 底部信息 */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm border border-gray-600">
                            Page {imageIndex + 1} / {images.length}
                            {title && ` - ${title}`}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
})

ImageViewer.displayName = 'ImageViewer';

export default ImageViewer;
export type { ImageViewerProps };
