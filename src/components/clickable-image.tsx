"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageModal from "./image-modal";
import { FaExpand } from "react-icons/fa";

interface ClickableImageProps extends Omit<ImageProps, 'onClick'> {
  title?: string;
  containerClassName?: string;
}

export default function ClickableImage({ 
  src, 
  alt, 
  title,
  containerClassName = "",
  className = "",
  ...imageProps 
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImageUrl = (src: ImageProps['src']): string => {
    if (typeof src === 'string') return src;
    const imgSrc = src as { src?: string; default?: string };
    return imgSrc.src || imgSrc.default || '';
  };

  return (
    <>
      <div
        className={`relative w-full h-full cursor-pointer ${containerClassName}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          className={`object-contain ${className}`}
          {...imageProps}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <FaExpand className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={getImageUrl(src)}
          title={title || alt}
        />
      )}
    </>
  );
} 